// Task 1
function clickBtn () {
  alert('yowch! don\'t click me so hard!')
}

document.querySelector('#thanks button').addEventListener('click', clickBtn)

// Task 2

function doubleTheNum (num) {
  num = document.getElementById('compoundInvestment').innerHTML
  var result = (document.getElementById('compoundInvestment').innerHTML = num * 2)
  return result
}

document.querySelector('#double button').addEventListener('click', doubleTheNum)

// Task 3

function changeCircleColor () {
  var circle = document.getElementById('circle-bw')
  if (circle.style.backgroundColor === 'black') {
    return circle.style.backgroundColor = 'white'
  } else {
    return circle.style.backgroundColor = 'black'
  }
}

document.querySelector('#color-circle button').addEventListener('click', changeCircleColor)

// Task 4

function doubleTheCircle () {
  var redCircle = document.querySelector('.circle-red')
  var height = window.getComputedStyle(redCircle, null).getPropertyValue('height')
  var width = window.getComputedStyle(redCircle, null).getPropertyValue('width')
  var heightNum = parseInt(height)
  var widthNum = parseInt(width)
  var doubleWidth = widthNum * 2
  var doubleHeight = heightNum * 2
  if (widthNum < 320) {
    redCircle.style.height = doubleHeight + 'px'
    redCircle.style.width = doubleWidth + 'px'
  } else {
    redCircle.style.height = 40 + 'px'
    redCircle.style.width = 40 + 'px'
  }
}

document.querySelector('#blow-up button').addEventListener('click', doubleTheCircle)

// Task 5

function removeInactive () {
  var liEl = document.querySelectorAll('.exerciseItem li')
  for (var i = 0; i < liEl.length; i++) {
    if (liEl[i].className === 'inactive') {
      liEl[i].remove()
    }
  }
}

document.querySelector('#remove button').addEventListener('click', removeInactive)

// Task 6
function reverseTheBoxes () {
  var boxesNodeList = document.querySelectorAll('.answer-box span')
  var boxesArr = Array.from(boxesNodeList)
  var reversedBoxes = boxesArr.reverse()
  var div = document.querySelector('#reverse-squares .answer-box')
  for (var i = 0; i < reversedBoxes.length; i++) {
    div.appendChild(reversedBoxes[i])
  }
}

document.querySelector('#reverse-squares button').addEventListener('click', reverseTheBoxes)

// Task 7
function reverseTaskItems () {
  var taskNodeList = document.querySelectorAll('#tasks li')
  taskNodeList.forEach(function (str) {
    str.innerHTML = str.innerHTML.split('').reverse().join('')
  })
}

document.querySelector('#pig-latin button').addEventListener('click', reverseTaskItems)

function changingThePhoto () {
  var imgEl = document.querySelector('#city-img')
  var slicedSrc = imgEl.src.slice(0, imgEl.src.length - 1)
  var imgIndex = Math.round(Math.random() * 10)
  console.log(imgIndex)
  imgEl.src = slicedSrc + imgIndex
}

document.querySelector('#cycle-image button').addEventListener('click', changingThePhoto)
