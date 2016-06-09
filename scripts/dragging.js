function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  viewBeingDragged = event.target;
  event.dataTransfer.setData('text', viewBeingDragged.src);
}

function drop(event) {
  event.preventDefault();
  swapImages(event.target, viewBeingDragged);
  console.log('SOURCE: ' + event.target.src);
}

function swapImages(source, destination) {
  var sourceImage = source.src;
  var destinationImage = destination.src;
  if(sourceImage.indexOf('.htm') > -1) {
    sourceImage = '';
  }else if(destinationImage.indexOf('.htm') > -1) {
    destinationImage = '';
  }

  source.src = destinationImage;
  destination.src = sourceImage;
}

function checkPuzzle() {
  var spaces = document.getElementsByName('puzzle');
  for (var i = 0; i < spaces.length; i++) {
    console.log(spaces[i].src);
    if (spaces[i].src.indexOf('cat' + (i + 1)) == -1) {
      alert('Not quite right. Keep trying!')
      return;
    }
  }
  
  alert('HUZZAH YOU SOLVED THE PUZZLE!')
}