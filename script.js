// script.js

// Hide loader and show content when page is fully loaded
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');
  loader.style.display = 'none';
  content.style.display = 'block';
});











const targets = document.querySelectorAll(".timeline ol li");
const threshold = 0.5;
const ANIMATED_CLASS = "in-view";

function callback(entries, observer) {
  entries.forEach((entry) => {
    const elem = entry.target;
    if (entry.intersectionRatio >= threshold) {
      elem.classList.add(ANIMATED_CLASS);
      observer.unobserve(elem);
    } else {
      elem.classList.remove(ANIMATED_CLASS);
    }
  });
}

const observer = new IntersectionObserver(callback, { threshold });
for (const target of targets) {
  observer.observe(target);
}

(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();



//background of timeline
document.addEventListener("DOMContentLoaded", function() {
  const svg = document.getElementById('pipes-background');
  const numLines = 30; // Number of lines (pipes)

  for (let i = 0; i < numLines; i++) {
      const x1 = Math.random() * 100;
      const y1 = Math.random() * 100;
      const x2 = Math.random() * 100;
      const y2 = Math.random() * 100;

      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", x1);
      line.setAttribute("y1", y1);
      line.setAttribute("x2", x2);
      line.setAttribute("y2", y2);

      svg.appendChild(line);
  }
});


var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};




    document.addEventListener("DOMContentLoaded", function() {
        const readMoreBtn = document.querySelector(".read-more");
        const moreContent = document.querySelector(".more-content");

        readMoreBtn.addEventListener("click", function() {
            if (moreContent.style.display === "none" || moreContent.style.display === "") {
                moreContent.style.display = "block";
                readMoreBtn.textContent = "Read Less";
            } else {
                moreContent.style.display = "none";
                readMoreBtn.textContent = "Read More";
            }
        });
    });










    $(document).ready(function(){

      var $sm = 480;
      var $md = 768;
   
      function resizeThis() {
         $imgH = $('.middle img').width();
         if ($(window).width() >= $sm) {
            $('.left,.right,.section').css('height', $imgH);
         } else {
            $('.left,.right,.section').css('height', 'auto');
         }
      }
   
      resizeThis();
   
      $(window).resize(function(){
         resizeThis();
      });
   
      $(window).scroll(function() {
         $('.section').each(function(){
            var $elementPos = $(this).offset().top;
            var $scrollPos = $(window).scrollTop();
   
            var $sectionH = $(this).height();
            var $h = $(window).height();
            var $sectionVert = (($h/2)-($sectionH/4));
   
   
            if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
               $(this).addClass('animate');
            } else {
               $(this).removeClass('animate');
            }
         });
      });
   
      $('.btn-primary').click(function(){
         alert('I lied');
      });
   });
   
   $(function() {
     $('a[href*="#"]:not([href="#"])').click(function() {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html, body').animate({
             scrollTop: target.offset().top
           }, 1000);
           return false;
         }
       }
     });
   });