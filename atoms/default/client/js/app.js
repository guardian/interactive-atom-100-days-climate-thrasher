// data capture for ophan
function trackLoad() {
  window.guardian.ophan.record({
    component: 'thrasher : 100-days : full : load',
    value: 1
  });
}

startThrasher();

function startThrasher() {
  const daysLeft = calculateDaysLeft();

  setupDays(daysLeft.num);

  setTimeout(function () {
    setupAnimation();
  }, 2000);
}


function setupAnimation() {
  const counterEl = document.querySelector('.hundred-days .counter');
  const position = parseInt(counterEl.dataset.position);
  const target = parseInt(counterEl.dataset.target);

  animationFrame(position, target);

  counterEl.addEventListener('click', function () {
    console.log('—')
    console.log('—')
    animationFrame(position-1, target);
  })
}

function animationFrame(pos, target) {
  // move one step closer to target

  if (pos > target) {

    const digits = document.querySelectorAll('.counter .digit');
    const newPos = pos - 1;

    const newPosArr = newPos.toString().split('');
    console.log('new', newPosArr);

    digits.forEach((digitEl, i) => {
      const currentNum = parseInt(digitEl.dataset.position);
      const newNum = parseInt(newPosArr[i]);
      console.log(digitEl, currentNum, newNum);
      if (newNum && currentNum != newNum) {
        digitEl.dataset.position = newNum;
      }
    })

    // setTimeout(() => {
    //   console.log('—')
    //   console.log('—')
    //   animationFrame(newPos, target);
    // }, 1600)
  }
}

function setupDays(daysLeftNum, animationNum=50) {
  // setup the countdown by starting `daysLeftNum+animationNum`
  // we'll then go down by `animationNum`

  const startDayNum = daysLeftNum + animationNum;
  

  const counterEl = document.querySelector('.hundred-days .counter');
  counterEl.dataset.position = startDayNum;
  counterEl.dataset.target = daysLeftNum;

  const daysLeftNumArray = daysLeftNum.toString().split('').reverse();
  const startDayNumArray = startDayNum.toString().split('').reverse();



  startDayNumArray.forEach((n, i) => {
    const digitEl = document.querySelector(`.digit-${i}`);
    digitEl.dataset.position = n;
    if (daysLeftNumArray[i]) {
      digitEl.dataset.target = daysLeftNumArray[i];
    } else {
      digitEl.dataset.target = '0';
    }
  })
}

function calculateDaysLeft() {
  const today = new Date();
  const keyDate = new Date(2020, 10, 4); // Obs: Nov=10 because Jan=0!
  const one_day = 1000 * 60 * 60 * 24;
  let num = Math.ceil((keyDate.getTime() - today.getTime()) / (one_day));

  // if (window.location.hostname == 'localhost' || window.location.hostname == 'preview.gutools.co.uk') {
  if (window.location.hostname == 'localhost') {
    // for preview & debug
    num = (num > 100) ? (num = num - 30) : (num);

  }

  const word = (num == 1) ? 'day' : 'days';

  return { num: num, word: word };

}






// const digitChange = 160;
// const digitB = document.querySelector('.digit-b')
// const digitC = document.querySelector('.digit-c')
// console.log('hi');

// setInterval(() => {
//   console.log('c')
//   const digitCPosition = parseInt(digitC.dataset.position);
//   // const increase = Math.floor(Math.random()*3)+1;
//   const decrease = 1;
//   let newNum = digitCPosition - decrease;
//   if (newNum > 9) {
//     newNum = newNum - 10;
//   }

//   digitC.dataset.position = newNum;


// }, digitChange);


// let intB = setInterval(() => {
//   const digitBPosition = parseInt(digitB.dataset.position);
//   if (digitBPosition == 9) {
//     digitB.dataset.position = 0;
//   } else {
//     digitB.dataset.position = digitBPosition - 1;
//   }

//   if (digitB.dataset.position == parseInt(digitB.dataset.target)) {
//     clearInterval(intB);
//   }
// }, 10 * digitChange);

