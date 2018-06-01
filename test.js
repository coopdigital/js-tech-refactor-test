const fs = require('fs');
const AverageCalculator = require('./average-calculator');

describe('tester', () => {
  it('tests stuff', done => {
    for (var i = 1; i < 3; i++) {
      console.log('\n---');
      console.log(`test ${i}`);
      let calculator = new AverageCalculator.AverageCalculator().factory(
        `test${i}.txt`,
        AverageCalculator.MEAN,
      );
      calculator.printAverage();
      calculator = new AverageCalculator.AverageCalculator().factory(
        `test${i}.txt`,
        AverageCalculator.MODE,
      );
      calculator.printAverage();
      console.log('---');
    }
    done();
  });
});
