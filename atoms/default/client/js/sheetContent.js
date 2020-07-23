
updateContent("https://interactive.guim.co.uk/docsdata-test/1n18iegWtXJ9Gidwfh7AJ1TmkLnHuKqQl2Q4KEMda37k.json");

// Helper functions
// In a sheet on that link
// will replace anything with data-sheet attribute
// with the right data from the sheet
// where data-sheet='column-name'


function updateContent(sheetURL) {

  loadJSON(sheetURL, function (rawData) {
    const data = rawData.sheets.Sheet1[0];

    document.querySelectorAll('.hundred-days-thrasher [data-sheet]').forEach((el) => {
      if (el && data[el.dataset.sheet]) {
        el.innerText = data[el.dataset.sheet];
      }
    })

  });

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
