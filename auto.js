function setProxy(){
  var config = {
    mode: "pac_script",
    pacScript: {
      data: "function FindProxyForURL(url, host) {\n" +
            "  if (host == 'youtube.com')\n" +
            "   return '189.52.165.134:1080';\n" +
            "  return 'DIRECT';\n" +
            "}"
    }
  };
  chrome.proxy.settings.set({value: config, scope: 'regular'}, function(){});
  alert(chrome.pacScript.url)
}

function refresh_clear(){
  window.close("https://www.youtube.com/watch?v=u4iDL3c0T1c");
  window.open("https://www.youtube.com/watch?v=u4iDL3c0T1c", '_blank');
  chrome.history.deleteUrl({ url: "https://www.youtube.com/watch?v=u4iDL3c0T1c"});
}

//setTimeout(refresh_clear, 15000)
var config = {
  mode: "pac_script",
  pacScript: {
    data: "function FindProxyForURL(url, host) {\n" +
          "  if (host == 'youtube.com')\n" +
          "   return '189.52.165.134:1080';\n" +
          "  return 'DIRECT';\n" +
          "}"
  }
};
chrome.proxy.settings.set({value: config, scope: 'regular'}, function(){});
alert(chrome.pacScript.url)