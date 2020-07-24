
updateContent("https://interactive.guim.co.uk/docsdata-test/1n18iegWtXJ9Gidwfh7AJ1TmkLnHuKqQl2Q4KEMda37k.json", "hundred-days-thrasher");


function updateContent(jsonLink, wrapperClass, tabName = 'Sheet1') {

  loadJSON(jsonLink, function (rawData) {
    const data = rawData.sheets[tabName];
    let waitForDay = setInterval(() => {
      const thrasherEl = document.querySelector('.hundred-days-thrasher');
      if (thrasherEl.hasAttribute('data-days')) {
        clearInterval(waitForDay);
        const day = parseInt(thrasherEl.dataset.days);
        fillInFact(thrasherEl, day, data);
      }
    })

  });

}

function fillInFact(thrasherEl, day, data) {
  data.forEach((datum) => {
    if (day == parseInt(datum.day)) {
      const factEl = thrasherEl.querySelector('.hundred-days__copy__fact');
      const factTextEl = factEl.querySelector('p');

      factEl.classList.add('has-fact');
      factTextEl.innerText = datum.fact;
    }
  })
}

function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success)
          success(JSON.parse(xhr.responseText));
      } else {
        if (error)
          error(xhr);
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}
