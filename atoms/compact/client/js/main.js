var el = document.createElement('script');
el.src = '<%= atomPath %>/app.js';
document.body.appendChild(el);

if (window.resize) {
  const html = document.querySelector('html')
  const body = document.querySelector('body')

  html.style.overflow = 'hidden'
  html.style.margin = '0px'
  html.style.padding = '0px'

  body.style.overflow = 'hidden'
  body.style.margin = '0px'
  body.style.padding = '0px'
}

if (
  window.frameElement &&
  window.frameElement.classList.contains("interactive-atom-fence")
) {
  var embedhtml = document.querySelector("html");
  var embedbody = document.querySelector("body");
  embedbody.classList.add("ge-liveblog");
  embedhtml.style.overflow = "hidden";
  embedhtml.style.padding = "0";
  embedhtml.style.margin = "0";
  embedbody.style.overflow = "hidden";
  embedbody.style.padding = "0";
  embedbody.style.margin = "0";
  setTimeout(() => {
    window.resize();
  }, 100);
}

setTimeout(() => {
  updateCountdown(3);

}, 5000);
let countdownAnimation;

function updateCountdown(n) {
  const countdownEl = document.querySelector('.hundred-days__headline__line.number');
  countdownEl.dataset.target = n;


  requestAnimationFrame(animateCountdown);

}

function animateCountdown() {
  const countdownEl = document.querySelector('.hundred-days__headline__line.number');
  const currentNum = parseInt(countdownEl.innerText);
  const targetN = countdownEl.dataset.target;
  const delta = currentNum - targetN;

  let nextFrame;
  if (delta > 60) {
    nextFrame = 30;
    console.log('over 40', currentNum, targetN);

  } else if (delta > 30) {
    nextFrame = 60;
    console.log('over 20', currentNum, targetN);

  } else if (delta > 15) {
    nextFrame = 120;
    console.log('over 10', currentNum, targetN);

  } else if (delta > 4) {
    nextFrame = 180;
    console.log('over 5', currentNum, targetN);

  } else if (delta == 4) {
    nextFrame = 240;
    console.log('at 4', currentNum, targetN);

  } else if (delta == 3) {
    nextFrame = 360;
    console.log('at 3', currentNum, targetN);

  } else if (delta == 2) {
    nextFrame = 520;
    console.log('at 2', currentNum, targetN);

  } else {
    nextFrame = 520;
    console.log('last 2', currentNum, targetN);

  }

  if (currentNum > targetN) {
    countdownEl.innerText = currentNum - 1;
    setTimeout(() => {
      animateCountdown();
    }, nextFrame);
  } else {
    // debug-only
    setTimeout(() => {
      countdownEl.innerText = 100;
      animateCountdown();
    }, 10000);
  }
  // countdownAnimation = requestAnimationFrame(updateCountdown);

}
