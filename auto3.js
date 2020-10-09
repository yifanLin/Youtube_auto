var config = {
    mode: "fixed_servers",
    rules: {
      singleProxy: {
        scheme: "http",
        host: "189.52.165.134",
        port:1080
      },
      bypassList: ["foobar.com"]
    }
  };
  chrome.proxy.settings.set(
      {value: config, scope: 'regular'},
      function() {});