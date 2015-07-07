function getElapsedTime() {
  var startDate   = new Date('Tue Jan 20 2015 06:30:00 GMT-0400 (Eastern Daylight Time)')
  var currentDate = new Date();
  var diff        = currentDate.getTime() - startDate.getTime();
  var days        = Math.floor(diff / (1000 * 60 * 60 * 24)); diff -= days * (1000 * 60 * 60 * 24);
  var hours       = Math.floor(diff / (1000 * 60 * 60)); diff -= hours * (1000 * 60 * 60);
  var mins        = Math.floor(diff / (1000 * 60)); diff -= mins * (1000 * 60);
  var seconds     = Math.floor(diff / (1000)); diff -= seconds * (1000);
  var elapsedTime = days + ' days, ' + hours + ' hours, ' + mins + ' minutes, and ' + seconds + ' seconds.';
   
  document.getElementById('time').innerHTML = elapsedTime;
}

setInterval(function() {
  getElapsedTime(); 
}, 1000);


function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
  if (!hasClass(ele,cls)) ele.className += ' ' + cls;
}

function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

function toggleClass(ele, cls) {
  if (hasClass(ele, cls)) {
    removeClass(ele, cls);
  } else {
    addClass(ele, cls);
  }
}

var mobileNav = document.getElementById('mobile-nav-btn');
var container = document.getElementById('container');
var body      = document.getElementsByTagName('BODY')[0];

mobileNav.addEventListener('click', function() { 
  toggleClass(body, 'open');
});

container.addEventListener('click', function() {
  removeClass(body, 'open');  
});
