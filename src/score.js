var frames = []

function addScore(firstNumberOfPins, secondNumberOfPins) {
  if (firstNumberOfPins + secondNumberOfPins > 10) {
    console.log('You cannot bowl that many pins.')
  } else if (frames.length >= 10) {
    console.log("You've finished your game already.")
  } else {
    frames.push({
      first: firstNumberOfPins,
      second: secondNumberOfPins
    })
  }
}

function displayGame() {
  var prettyFrames = renderGame()
  var totalScore = calculateScore()
  console.log("Total score: "+totalScore)
  console.log(prettyFrames)
}

function calculateScore() {
  var totalScore = 0
  console.log('top totalScore'+ totalScore)
  frames.forEach(function (frame, i, frames) {
    var previousFrame = frames[i-1]
    console.log('after loop'+ totalScore)
    console.log("this is our initial previous frame: " +previousFrame)
    var frameTotal = frame.first + frame.second
    console.log("this is our initial frame total: " + frameTotal)
    if (previousFrame && (previousFrame.first === 10)) {
      frameTotal *= 2
      totalScore += frameTotal
      console.log("executeisStrikeCondition")
    } else if (previousFrame && previousFrame.first + previousFrame.second === 10) {
        frameTotal += frame.first
        totalScore += frameTotal
      console.log("executeisSpareCondition")
    } else {
      totalScore += frameTotal
  }
})
return totalScore
console.log('last one'+ totalScore)
console.log("just checking")
}

function renderGame(){
  var renderedGame = ""
  frames.forEach(function (frame) {
    if (frame.first === 10) {
      renderedGame += "[X] "
    } else {
      renderedGame += "["+frame.first+"|"+frame.second+"] "
    }
  })
  return renderedGame
}
