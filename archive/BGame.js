function Game(frame = new Frame(1)) {
  this.currentRound = 1;
  this.frameCount = 1;
  this.currentFrame = frame;
  this.frameWIP = [];
  this.totalFrames = [];
}
