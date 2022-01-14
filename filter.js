var original = null;
var canvas = document.getElementById("canvas");
var palate = [];

//uploads file to canvas//
function upload() {
  var image = document.getElementById("file");
  original = new SimpleImage(image);
  original.drawTo(canvas);
}

//clears canvas and leaves empty//
function clearCan() {
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}

//clears and re-uploads the original file (no filters)//
function reset() {
  clearCan();
  upload();
}

//applies red filter and draws to canvas//
function doRed() {
    if (original == null) {
      alert("no file selected");
    }
    var redCopy = original;
    for (var pixel of redCopy.values()) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      pixel.setRed(255);
      pixel.setBlue(avg);
      pixel.setGreen(avg);
    }
    clearCan();
    redCopy.drawTo(canvas);
}

//finds average rgb value of pixels and applies greyscale filter//
function doGrey() {
  if (original == null) {
    alert("no file selected");
  }
  var greyCopy = original;
  for (var pixel of greyCopy.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setBlue(avg);
    pixel.setGreen(avg);
  }
  clearCan();
  greyCopy.drawTo(canvas);
}

//if arguements to define stripes of the rainbow filter and change the pixel color appropriately//
function makeRainbow() {
    if (original == null) {
      alert("no file selected");
    }
    if (original !== null) {
        alert("This might take a minute");
    }
    var rainCopy = original;
    for (var pixel of rainCopy.values()) {
      var y = pixel.getY();
      var h = original.getHeight();
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      //red//
      if (y < h / 7) {
        if (avg < 128) {
          pixel.setRed(2 * avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
        }
        if (avg >= 128) {
          pixel.setRed(255);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(2 * avg - 255);
        }
      }
      //orange//
      if (y >= h / 7 && y < 2 * (h / 7)) {
        if (avg < 128) {
          pixel.setRed(2 * avg);
          pixel.setGreen(0.8 * avg);
          pixel.setBlue(0);
        }
        if (avg >= 128) {
          pixel.setRed(255);
          pixel.setGreen(1.2 * avg - 51);
          pixel.setBlue(2 * avg - 255);
        }
      }
      //yellow//
      if (y >= 2 * (h / 7) && y < 3 * (h / 7)) {
        if (avg < 128) {
          pixel.setRed(2 * avg);
          pixel.setGreen(2 * avg);
          pixel.setBlue(0);
        }
        if (avg >= 128) {
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue(2 * avg - 255);
        }
      }
      //green//
      if (y >= 3 * (h / 7) && y < 4 * (h / 7)) {
        if (avg < 128) {
          pixel.setRed(0);
          pixel.setGreen(2 * avg);
          pixel.setBlue(0);
        }
        if (avg >= 128) {
          pixel.setRed(2 * avg - 255);
          pixel.setGreen(255);
          pixel.setBlue(2 * avg - 255);
        }
      }
      //blue//
      if (y >= 4 * (h / 7) && y < 5 * (h / 7)) {
        if (avg < 128) {
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2 * avg);
        }
        if (avg >= 128) {
          pixel.setRed(2 * avg - 255);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(255);
        }
      }
      //indigo//
      if (y >= 5 * (h / 7) && y < 6 * (h / 7)) {
        if (avg < 128) {
          pixel.setRed(0.8 * avg);
          pixel.setGreen(0);
          pixel.setBlue(2 * avg);
        }
        if (avg >= 128) {
          pixel.setRed(1.2 * avg - 51);
          pixel.setGreen(2 * avg - 255);
          pixel.setBlue(255);
        }
      }
      //violet//
      if (y >= 6 * (h / 7) && y < h) {
        if (avg < 128) {
          pixel.setRed(1.6 * avg);
          pixel.setGreen(0);
          pixel.setBlue(1.6 * avg);
        }
        if (avg >= 128) {
          pixel.setRed(0.4 * avg + 153);
          pixel.setGreen(2 * avg - 151);
          pixel.setBlue(0.4 * avg + 153);
        }
      }
      clearCan();
      rainCopy.drawTo(canvas);
    }
  }


