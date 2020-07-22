// data capture for ophan
function trackLoad() {
    window.guardian.ophan.record({
        component: 'thrasher : 100-days : full : load',
        value: 1
    });
}

(function () {

    const daysLeft = daysLeft();
    console.log(`there are ${daysLeft().num} days left`);

    function daysLeft() {
        const today = new Date();
        const keyDate = new Date(2020, 10, 4); // Obs: Nov=10 because Jan=0!
        const one_day = 1000 * 60 * 60 * 24;
        let num = Math.ceil((keyDate.getTime() - today.getTime()) / (one_day));
        num = (num > 100) ? (num = num - 30) : (num) // subtract 30 for now, for debugging
        const word = (num == 1) ? 'day' : 'days';

        return { num: num, word: word };

    }

})();





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

