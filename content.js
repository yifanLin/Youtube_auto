setTimeout(function() {
    window.close("https://www.youtube.com/watch?v=u4iDL3c0T1c");
    window.open("https://www.youtube.com/watch?v=u4iDL3c0T1c", '_blank');
    chrome.history.deleteUrl({ url: "https://www.youtube.com/watch?v=u4iDL3c0T1c"})
  }, 65000);


  var rc = 0;
var c = 0
setTimeout(function() {
  setTimeout(function() {
    window.close("https://www.youtube.com/watch?v=u4iDL3c0T1c");
    window.open("https://www.youtube.com/watch?v=u4iDL3c0T1c", '_blank');
    chrome.history.deleteUrl({ url: "https://www.youtube.com/watch?v=u4iDL3c0T1c"})
  },15000);
  setProxy();
  rc = rc + 1;
  alert(rc)
}, 65000);

