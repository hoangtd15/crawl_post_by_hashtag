function  open(){
    var link = "https://www.facebook.com/hashtag/" + document.getElementById("hashtag").value
    var gifLoading= document.getElementById('gif');
    gifLoading.className = "enable";
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.update(tabs[0].id, {url: link});
      window.location.replace("step2.html");
  })
  }
  
  function scroll(){
    chrome.tabs.query({active: true, currentWindow: true},async function(tabs){
        var gifLoading= document.getElementById('gif');
        gifLoading.className = "enable";
        var x = await chrome.tabs.sendMessage(tabs[0].id, {scroll: "yody"})
        console.log(x)
        if(x.values > 100){
         window.location.replace("step3.html");
        }
        
      })
  }
  
  function getData(){
      chrome.tabs.query({active: true, currentWindow: true},async function(tabs){
          await chrome.tabs.sendMessage(tabs[0].id, {getdata: "yody"},async function (response){
  
               var value = await response.values
              console.log(JSON.stringify({"value": value}))
              const x = await fetch('http://localhost:1337/', {
                  method: 'POST',
                  body: JSON.stringify({"value": value}), // string or object
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
                const myJson = await x.json(); //extract JSON from the http r
              
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
  
  
  