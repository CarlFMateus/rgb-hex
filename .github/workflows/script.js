module.exports = async ({ github, context }) => {
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
  console.log('se logro')
};
