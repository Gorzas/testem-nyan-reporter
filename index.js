var KarmaNyanCat = require('karma-nyan-reporter')['reporter:nyan'][1];

function NyanCat(out) {
  this.out = out || process.stdout;

  this.total = 0;
  this.pass = 0;
  this.skipped = 0;
  this.failed = 0;

  this.reporter = new KarmaNyanCat('', 'formatError', {});

  this.reporter.onRunStart();
}

NyanCat.prototype = {
  report: function (prefix, data) {
    // increment counters
    this.total++;

    if (data.passed) {
      this.pass++;
    } else {
      this.failed++;
    }

    this.reporter.onSpecComplete(
      {
        lastResult: {
          total: this.total,
          success: this.pass,
          failed: this.failed,
          skipped: this.skipped
        }
      },
      {
        success: data.passed,
        suite: []
      }
    );
  },

  finish: function () {
    this.reporter.onRunComplete();
  }
};