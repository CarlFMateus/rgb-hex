const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

module.exports = async ({ github, context, core }) => {
  const number = await context.payload.pull_request.number;
  const files = await github.rest.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: number,
  });

  const regex = /.*(spec|test).(ts|js|tsx)$/;
  const isShow = files.data.some((file) => regex.test(file.filename));
  if (!isShow) {
    core.setFailed("Debe contener al menos una prueba");
  }

  const cadena = files.data.reduce((acc, element) => {
    if (regex.test(element.filename)) {
      acc.push(element.filename);
    }
    return acc;
  }, []);

  try {
    const { stdout, stderr } = await exec(
      `yarn jest ${cadena} --config ./jest.config.js --ci --json --coverage --testLocationInResults --outputFile=report.json`
    );
  
    console.log('stdout:', stdout);
    console.error('stderr:', stderr);
  } catch (error) {
    console.error(error.message)
  }
};
