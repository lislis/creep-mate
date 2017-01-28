// based on http://sailorhg.com/glitchy/

var glitchAmount = 10;
var brightnessAmount = 5;

function getRandInt(min, max) {
  return ~~(Math.random() * (max - min) + min);
}

function getRandColorChannel() {
  var r = getRandInt(0, 3);
  if (r == 0){
    return BitmapDataChannel.RED;
  }else if (r  == 1){
    return BitmapDataChannel.GREEN;
  } else {
    return BitmapDataChannel.BLUE;
  }
}

function startGlitching(canvas) {
  var context = canvas.getContext("2d");

  var imageToGlitch = new Image();
	imageToGlitch.src = canvas.toDataURL("image/png");

	var width = imageToGlitch.width;
  var height = imageToGlitch.height;

  inputData = new BitmapData(width, height);
  inputData.draw(imageToGlitch);

  glitchedData = new BitmapData(width, height);
  glitchedData.draw(imageToGlitch);

  var maxOffset = (glitchAmount * glitchAmount / 100 * width);

  //randomly pick some sections of image to offset

  for (i = 0; i < glitchAmount * 2; i++) {
    var startY = Math.random()*height;
    var chunkHeight = getRandInt(1, height/4);
    chunkHeight = Math.min(chunkHeight, startY-height);
    var offset = getRandInt(-maxOffset, maxOffset);

    if (offset < 0) {
      //shift left
      glitchedData.copyPixels(inputData, new Rectangle(-offset, startY, width+offset, chunkHeight), new Point(0, startY));
      //wrap
      glitchedData.copyPixels(inputData, new Rectangle(0, startY, -offset, chunkHeight), new Point(width + offset, startY));
    } else if (offset > 0){
      //shift right
      glitchedData.copyPixels(inputData, new Rectangle(0, startY, width, chunkHeight), Point(width + offset, startY));
      //wrap
      glitchedData.copyPixels(inputData, new Rectangle(width - offset, startY, offset, chunkHeight), new Point(0, startY));
    } else {
      continue;
    }
  }

  //offset a color channel

  var channel = getRandColorChannel();
  glitchedData.copyChannel(inputData, new Rectangle(0, 0, width, height), new Point(getRandInt(-glitchAmount * 2, glitchAmount * 2), getRandInt(-glitchAmount * 2, glitchAmount * 2)), channel, channel);

  //replace the image

  context.putImageData(glitchedData.data, 0, 0);
}
