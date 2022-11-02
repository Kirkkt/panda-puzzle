const readline = require('readline')
const {
  KEY_MAP,
  OFFSETS,
  INITIAL_BOARD,
  nextBoard,
  victory,
  printBoard,
} = require('./utils')

const randomizeMove = (board, rounds) => {
  if (rounds === 0) {
    return board
  }
  const dice = Math.floor(Math.random() * 4)
  switch (dice) {
    case 0: return randomizeMove(nextBoard(board, OFFSETS.UP), rounds - 1)
    case 1: return randomizeMove(nextBoard(board, OFFSETS.DOWN), rounds - 1)
    case 2: return randomizeMove(nextBoard(board, OFFSETS.LEFT), rounds - 1)
    case 3: return randomizeMove(nextBoard(board, OFFSETS.RIGHT), rounds - 1)
  }
}

let board = randomizeMove(INITIAL_BOARD.slice(), 999)
printBoard(board)

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (charater, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit()
  }
  const offset = KEY_MAP[charater]
  if (offset === undefined) {
    console.log('Please press h,j,k,l or a,s,d,w or <ctrl-c>')
    return
  }
  board = nextBoard(board, offset)
  console.log('\033[2J') // cheap solution to mimic console clear
  printBoard(board)
  if (victory(board)) {
    console.log("Congratulations! You've won!")
    process.exit()
  }
})

