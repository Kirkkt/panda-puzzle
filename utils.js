const OFFSETS = {
  UP: -4,
  DOWN: 4,
  RIGHT: 1,
  LEFT: -1,
}

const KEY_MAP = {
  'h': OFFSETS.LEFT,
  'l': OFFSETS.RIGHT,
  'j': OFFSETS.DOWN,
  'k': OFFSETS.UP,
  'a': OFFSETS.LEFT,
  'd': OFFSETS.RIGHT,
  's': OFFSETS.DOWN,
  'w': OFFSETS.UP,
}

const rowOfPosition = position => Math.floor((position + 3) / 4)

const canMove = (board, offset) => {
  const hole = board.indexOf(0)
  const piece = hole - offset
  if (piece < 0 || piece > 16) {
    return false
  }
  if ((offset === OFFSETS.LEFT || offset === OFFSETS.RIGHT) && rowOfPosition(hole) !== rowOfPosition(piece)) {
    return false
  }
  return true
}

const INITIAL_BOARD = ([...new Array(17)]).map((_,i) => i)

const nextBoard = (board, offset) => {
  if (!canMove(board, offset)) {
    return board
  }
  const hole = board.indexOf(0)
  const piece = hole - offset
  const result = board.slice()
  const temp = result[hole]
  result[hole] = result[piece]
  result[piece] = temp
  return result
}

const omitHole = character => character === 0 ? ' ' : '' + character

const printBoardRow = (board, start) => {
  let line = ''
  let goal = ''
  for (let i = 0; i < 4; i++) {
    line += omitHole(board[start + i]) + '\t'
    goal += start + i + '\t'
  }
  console.log(line + '\t\t=>\t\t\t' + goal)
}

const printBoard = board => {
  console.log('X\tX\tX\t' + omitHole(board[0]) + '\t\t\t=>\t\t\tX\tX\tX')
  for (let line = 0; line < 4; line++) {
    printBoardRow(board, line * 4 + 1)
  }
  console.log('')
}

const victory = board => board.every((value, index) => value === index)

module.exports = {
  KEY_MAP,
  OFFSETS,
  rowOfPosition,
  canMove,
  victory,
  printBoard,
  nextBoard,
  INITIAL_BOARD,
}
