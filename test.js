const { rowOfPosition } = require('./utils')

const assert = (actual, expected, message) => {
  if (actual !== expected) {
    console.log(message)
    console.log('actual:   ', actual)
    console.log('expected: ', expected)
    process.exit(1)
  }
}

{
  const test = (actual, expected) => assert(actual, expected, 'testing rowOfPosition')
  test(rowOfPosition(0), 0)
  test(rowOfPosition(1), 1)
  test(rowOfPosition(2), 1)
  test(rowOfPosition(3), 1)
  test(rowOfPosition(4), 1)
  test(rowOfPosition(5), 2)
  test(rowOfPosition(6), 2)
  test(rowOfPosition(7), 2)
  test(rowOfPosition(8), 2)
  test(rowOfPosition(9), 3)
  test(rowOfPosition(10), 3)
  test(rowOfPosition(11), 3)
  test(rowOfPosition(12), 3)
  test(rowOfPosition(13), 4)
  test(rowOfPosition(14), 4)
  test(rowOfPosition(15), 4)
  test(rowOfPosition(16), 4)
}
