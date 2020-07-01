document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('#logo>path').offsetTop;
  
     if (isVisible) {
       document.getElementById('logo').classList.add('animate');
     }
  });