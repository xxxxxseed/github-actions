const core = require("@actions/core");
const github = require("@actions/github");

try {
  const inputArgs = core.getInput("arguments-to-count");
  console.log(`Arguments = ${inputArgs}!`);
  const argCount = inputArgs.split(/\s+/).length;
  core.setOutput("argcount", argCount);
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
