var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.period = parseInt(period, 10) || 300;
  this.txt = '';
  this.isDeleting = false;
  this.currentIndex = 0;
  this.tick();
};

TxtType.prototype.tick = function() {
  var fullTxt = this.toRotate[this.currentIndex];
  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    if (this.currentIndex === this.toRotate.length - 1) {
      // Mostrar el botón debajo del último elemento
      var button = document.createElement('button');
      button.className = 'boton';
      button.innerHTML = 'OK';
      button.onclick = function() {
        window.location.href = "./html/1.html";
      };
      this.el.parentNode.appendChild(button);
      return;
    }
    this.isDeleting = true;
    delta = this.period;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.currentIndex++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = JSON.parse(elements[i].getAttribute('data-type'));
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], toRotate, period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
