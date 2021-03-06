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
    var delta = 100 - Math.random() * 50;

    if(this.txt == 'Hi' && !this.isDeleting){
        delta = 1500;
    }

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 200;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    if(document.getElementById("loader") != null)
{
    document.getElementById("loader").addEventListener("click", preload);
    document.getElementById("loader").addEventListener("scroll", preload);
    
    fullpage_api.setAllowScrolling(false);
    setTimeout(
        function() 
        {

            preload();
        },2500);

}
};





function preload(){
    document.getElementById("loader").style.opacity = 0;
    document.getElementById("loader").style.zIndex = 0;
    document.getElementById("preload").style.opacity = 1;
    document.getElementById("section0").style.opacity = 1;

    document.getElementById("fp-nav").style.opacity = 1;
    document.getElementById("fp-nav").style.opacity = 1;

    

    setTimeout(
        function() 
        {
            fullpage_api.setAllowScrolling(true);
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
},1000);

}