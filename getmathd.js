function checkLocale() {

  var l = navigator.language;

  var a = document.getElementById("appstore");

  if(l == "en-US") {
    a.setAttribute("http", "https://itunes.apple.com/us/app/mathd/id1457514747?ls=1&mt=8");
  } else if( l == "zh-CN") {
    a.setAttribute("http", "https://itunes.apple.com/cn/app/mathd/id1457514747?ls=1&mt=8");
  }

} // checkLocale
