// Video background

var elem = document.getElementById("videoBgr");//based on Fabrizio's comment declare it outside
setTimeout(function(){
   elem.className = elem.className + "video-fade";
},5000);

var timeoutId;
var $videoBgAspect = $(".video-aspect");
var $videoBgWidth = $(".video-width");
var videoAspect = $videoBgAspect.outerHeight() / $videoBgAspect.outerWidth();

function videobgEnlarge() {
  console.log('resize');
  windowAspect = ($(window).height() / $(window).width());
  if (windowAspect > videoAspect) {
    $videoBgWidth.width((windowAspect / videoAspect) * 100 + '%');
  } else {
    $videoBgWidth.width(100 + "%")
  }
}

$(window).resize(function() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(videobgEnlarge, 100);
});

$(function() {
  videobgEnlarge();
});