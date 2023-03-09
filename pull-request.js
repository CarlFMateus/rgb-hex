const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

const validateTest = async ({ github, context, core }) => {
  const number = await context.payload.pull_request.number;
  const files = await github.rest.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: number,
  });

  const regex = /.*(spec|test).(ts|js|tsx)$/;
  const isShow = files.data.some(
    (file) => regex.test(file.filename) && file.status !== "removed"
  );
  if (!isShow) {
    core.setFailed("Debe contener al menos una prueba");
  }
};

const runTest = async ({ github, context, core }) => {
  const number = await context.payload.pull_request.number;
  const files = await github.rest.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: number,
  });

  const regex = /.*(spec|test).(ts|js|tsx)$/;
  const cadena = files.data.reduce((acc, file) => {
    if (regex.test(file.filename) && file.status !== "removed")
      acc.push(file.filename);
    return acc;
  }, []);

  try {
    const { stdout, stderr } = await exec(
      `yarn jest ${cadena.join(
        " "
      )} --config ./jest.config.js --ci --json --coverage --testLocationInResults --outputFile=report.json`
    );

    console.log("stdout:", stdout);
    console.error("stderr:", stderr);
  } catch (error) {
    console.error('error', error);
    throw error.message
  }
};

module.exports = {
  validateTest,
  runTest,
};
