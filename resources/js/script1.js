window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("head").style.backgroundColor = "rgb(255, 255, 255, 0.95)";
    document.getElementById("head").style.height = "60px";
    document.getElementById("head").style.boxShadow = "0 4px 8px 0 rgba(80,113,105,0.2)";
    document.getElementById("nav").style.marginTop = "10px";
    var elem = document.getElementsByClassName("whi");
    for (let i = 0; i < elem.length; i++) {
        elem[i].style.color="#000";
        elem[i].style.fontWeight="normal";
    }

    function hover(e) {
        if (e.target.style.color !== '#008cba') {
            e.target.style.color = '#008cba';
        }
    }

    function hoverout(e) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            e.target.style.color = '#000';
        }
        else {
            e.target.style.color = '#fff';
        }
    }

    document.getElementById('ho').onmouseover = hover;
    document.getElementById('ho').onmouseout = hoverout;
    document.getElementById('abo').onmouseover = hover;
    document.getElementById('abo').onmouseout = hoverout;
    document.getElementById('project').onmouseover = hover;
    document.getElementById('project').onmouseout = hoverout;
    document.getElementById('contact').onmouseover = hover;
    document.getElementById('contact').onmouseout = hoverout;

  } else {
    document.getElementById("head").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("head").style.height = "80px";
    document.getElementById("head").style.boxShadow = '';
    document.getElementById("nav").style.marginTop = "35px";
    var elem = document.getElementsByClassName("whi");
    for (let i = 0; i < elem.length; i++) {
        elem[i].style.color="#fff";
    }
  }
}