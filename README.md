# testem-nyan-reporter
Nyan Cat reporter for Testem

## Installation

`npm install --save-dev testem-nyan-reporter`

## Usage

To use the Testem reporter, set it in your `testem.js` config file:

```
var NyanReporter = require('./testem-nyan-reporter');
module.exports = {
  "framework": "mocha",
  "src_files": [
    "src/*.js",
    "tests/*_tests.js"
  ]
  "reporter": new NyanReporter()
};
```