let active = false;
let scrollerMiddle = document.querySelector('.scroller-middle');

scrollerMiddle.addEventListener('mousedown',function(){
  active = "middle";
  scrollerMiddle.classList.add('scrolling');
});

document.body.addEventListener('mouseup',function(){
  active = false;
  scrollerMiddle.classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  scrollerMiddle.classList.remove('scrolling');
});

document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  let x = e.pageX;
  x -= document.querySelector('.wrapper').getBoundingClientRect().left;
  scrollIt(x);
});

function scrollIt(x){
  let transform = Math.max(0,(Math.min(x,document.querySelector('.wrapper').offsetWidth)));
  if (active==="middle"){
    document.querySelector('.middle').style.width = transform+"px";
    scrollerMiddle.style.left = transform-25+"px";
  }
}

active = "middle";
scrollIt(460);
active = false;

scrollerMiddle.addEventListener('touchstart',function(){
    active = "middle";
    scrollerMiddle.classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
    active = false;
    scrollerMiddle.classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
    active = false;
    scrollerMiddle.classList.remove('scrolling');
});

document.querySelector('.wrapper').addEventListener('touchmove',function(e){
    if (!active) return;
    e.preventDefault();
    let x = e.touches[0].pageX;
    x -= document.querySelector('.wrapper').getBoundingClientRect().left;
    scrollIt(x);
});
