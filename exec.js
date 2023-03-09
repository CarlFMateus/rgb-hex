const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

async function lsExample() {
  const { stdout, stderr } = await exec(
    "yarn jest --config ./jest.config.js __tests__/index.test.ts --ci --json --coverage --testLocationInResults --outputFile=report.json"
  );
  console.log("stdout:", stdout);
  console.error("stderr:", stderr);
}

lsExample();

// const child_process = require('child_process')
// child_process.exec("yarn jest --config ./jest.config.js __tests__/index.test.ts --ci --json --coverage --testLocationInResults --outputFile=report.json", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });
