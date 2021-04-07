function open() {
  var link = "https://www.facebook.com/hashtag/" + document.getElementById("hashtag").value

  chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
    await chrome.tabs.update(tabs[0].id, { url: link }, scroll)
    window.location.replace("step2.html");
  })
}


function scroll() {
  var gifLoading = document.getElementById('scroll');
  gifLoading.className = "disable";
  var gifLoading = document.getElementById('gif');
  gifLoading.className = "enable";
  chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
    await chrome.tabs.sendMessage(tabs[0].id, { scroll: "yody" },async function(reponse){        
      })
  })
}

chrome.runtime.onMessage.addListener(
  async function(request, sender, sendResponse) {
    if (request.complete == "done"){
      window.location.replace("step3.html");

    }
  }
);


function getData(){
  var gifLoading = document.getElementById('data');
  gifLoading.className = "disable";
  var gifLoading = document.getElementById('gif2');
  var done = document.getElementById('done');
  var result = document.getElementById('result');
  gifLoading.className = "enable";
  chrome.tabs.query({active: true, currentWindow: true},async function(tabs){
      await chrome.tabs.sendMessage(tabs[0].id, {getdata: "yody"},async function (response){
           var value = await response.values
          console.log(JSON.stringify({"value": value}))
          const x = await fetch('http://103.110.85.140:1337/', {
              method: 'POST',
              body: JSON.stringify({"value": value}), // string or object
              headers: {
                'Content-Type': 'application/json'
              }
            });
            gifLoading.className = "disable";       
            done.className="enable"
            result.className="enable"
  })
})
}


(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('open').addEventListener(
      'click', open);
  });
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#scroll').addEventListener(
      'click', scroll);
  });
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#data').addEventListener(
      'click', getData);
  });
})();


