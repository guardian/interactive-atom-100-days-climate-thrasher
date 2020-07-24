// data capture for ophan
function trackLoad() {
  window.guardian.ophan.record({
    component: 'thrasher : 100-days : full : load',
    value: 1
  });
}

startThrasher();

function startThrasher() {
  setupDays();
  setupAnimation();
}


function setupAnimation() {
  const counterEl = document.querySelector('.hundred-days .counter');
  const position = parseInt(counterEl.dataset.position);
  const target = parseInt(counterEl.dataset.target);

  animationFrame(position, target);

}

function animationFrame(pos, target) {
  // move one step closer to target

  const timeBetweenFrames = 100;

  if (pos > target) {



    let change = 1;

    const digits = document.querySelectorAll('.counter .digit');
    const newPos = pos - change;

    const newPosArr = generatePositionArray(newPos);

    digits.forEach((digitEl, i) => {
      const currentNum = parseInt(digitEl.dataset.position);
      const newNum = newPosArr[i];
      if (currentNum != newNum) {
        digitEl.dataset.position = newNum;
      }

      // if (pos - target == 1) {
      //   digitEl.classList.add('last-frame');
      // }

    })

    setTimeout(() => {
      animationFrame(newPos, target);
    }, timeBetweenFrames);
  }
}

function generatePositionArray(num) {
  let n = num.toString();
  if (n.length == 1) {
    n = '00' + n;
  } else if (n.length == 2) {
    n = '0' + n;
  }
  const nArray = n.split('');
  return nArray;
}

function setupDays() {
  // setup the countdown by starting `daysLeftNum+animationNum`
  // we'll then go down by `animationNum`

  const daysLeftNum = calculateDaysLeft();

  const thrasherEl = document.querySelector('.hundred-days-thrasher');
  thrasherEl.dataset.days = daysLeftNum;

  let startDayNum;
  if (daysLeftNum > 99) {
    startDayNum = daysLeftNum + 50;
  } else {
    startDayNum = 100;
  }

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

  counterEl.classList.add('set');
}

function calculateDaysLeft() {
  const today = new Date();
  const keyDate = new Date(2020, 10, 4); // Obs: Nov=10 because Jan=0!
  const one_day = 1000 * 60 * 60 * 24;
  let num = Math.ceil((keyDate.getTime() - today.getTime()) / (one_day));

  // if (window.location.hostname == 'localhost' || window.location.hostname == 'preview.gutools.co.uk') {
  if (window.location.hostname == 'localhost') {
    // for preview & debug
    // num = (num > 100) ? (num = num - 10) : (num);

  }

  const word = (num == 1) ? 'day' : 'days';

  // return { num: num, word: word };

  return num;

}
