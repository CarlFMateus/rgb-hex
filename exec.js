const { exec } = require("child_process");

exec("jest --config ./jest.config.js __tests__/index.test.ts --ci --json --coverage --testLocationInResults --outputFile=report.json", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});