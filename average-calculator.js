class AverageCalculator {
  constructor() {
    this.MEAN = 0;
    this.MODE = 1;
    this.MEDIAN = 2;
    this.type = null;
    this.avg = 0;
  }

  factory(filename, calc_type) {
    if (calc_type == 2) {
      console.log('Median not yet implemented!');
    }
    switch (calc_type) {
      case 0:
        return new MeanCalculator(filename);
      case 1:
        return new ModeCalculator(filename);
    }
    console.log('Unsupported average type' + calc_type);
  }

  printAverage() {
    console.log(
      'The ' +
        `${this.type instanceof MeanCalculator ? this.type : this.type}` +
        ' is ' +
        this.avg,
    );
  }
}

class MeanCalculator extends AverageCalculator {
  constructor(filename) {
    super(filename);
    this.type = 'Mean';
    this.count = 0;
    this.total = 0;
    this.filename = filename;
    this.readValues();
  }

  readValues() {
    const fs = require('fs');
    // make async later
    let numbers = fs.readFileSync(this.filename, 'utf-8');
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] === '\n') {
        continue;
      }
      this.addValue(numbers[i]);
    }
  }

  addValue(number) {
    number = parseInt(number, '10');
    this.count = this.count + 1;
    this.total += number;
    let average = this.total / this.count;
    this.avg = average;
  }
}

class ModeCalculator extends AverageCalculator {
  constructor(filename) {
    super(filename);
    this.type = 'Mode';
    this.values = [];
    this.readValues(filename);
  }

  printAverage() {
    this.updateAverage();
    // how to make it work?
    console.log('The Mode is', this.avg);
  }

  updateAverage() {
    const scores = {};
    for (var i = 0; i < this.values.length; i++) {
      if (scores[this.values[i]]) {
        scores[this.values[i]] += 1;
      } else {
        scores[this.values[i]] = 1;
      }

      var highest = 0;
      let highest_key = 0;
      for (var score in scores) {
        if (scores[score] > highest) {
          highest = scores[score];
          highest_key = score;
        }
      }
      this.avg = highest_key;
    }
  }

  readValues(filename) {
    const fs = require('fs');
    let numbers = fs.readFileSync(filename, 'utf-8');
    for (var i = 0; i < numbers.length; i++) {
      if (true) {
        numbers[i] != 0 && this.values.push(numbers[i]);
      }
    }
  }
}

module.exports.AverageCalculator = AverageCalculator;
module.exports.MEAN = 0;
module.exports.MODE = 1;
module.exports.MEDIAN = 2;
