let i = 0;
let content = ['Software Developer.','Student.', 'Traveler.', 'Remote Professional.', 'Micronaut.'];
let part = 0;
let interval;
let element = document.getElementById("type");


function type() { 
	// Get substring with 1 characater added
	let text =  content[part].substring(0, i + 1);
	element.innerHTML = text;
	i++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === content[part]) {
		clearInterval(interval);
		setTimeout(function() {
			interval = setInterval(Delete, 100);
		}, 3000);
	}
}

function Delete() {
	// Get substring with 1 characater deleted
	var text =  content[part].substring(0, i - 1);
	element.innerHTML = text;
	i--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(interval);

		// If current sentence was last then display the first one, else move to the next
		if(part == (content.length - 1))
			part = 0;
		else
			part++;
		
		i = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			interval = setInterval(type, 100);
		}, 200);
	}
}

interval = setInterval(type, 100);


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
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



    let top  = window.pageYOffset + window.innerHeight;
    let isVisible = top > document.querySelector('.skills').offsetTop;
    let isVisible1 = top > document.querySelector('.gallery').offsetTop;
    let isVisible2 = top > document.querySelector('#cont').offsetTop;


    if (isVisible) {
        document.getElementById('abo').style.color = '#008CBA';
        document.getElementById('abo').style.fontWeight = 'bold';
        document.getElementById('abo').onmouseover = '';
        document.getElementById('abo').onmouseout = '';
    }

    if (isVisible1) {
        document.getElementById('project').style.color = '#008CBA';
        document.getElementById('project').style.fontWeight = 'bold';
        document.getElementById('project').onmouseover = '';
        document.getElementById('project').onmouseout = '';
        document.getElementById('abo').style.color = '#000';
        document.getElementById('abo').style.fontWeight = 'normal';
        document.getElementById('abo').onmouseover = hover;
        document.getElementById('abo').onmouseout = hoverout;

    }

    if (isVisible2) {
        document.getElementById('contact').style.color = '#008CBA';
        document.getElementById('contact').style.fontWeight = 'bold';
        document.getElementById('contact').onmouseover = '';
        document.getElementById('contact').onmouseout = '';
        document.getElementById('project').style.color = '#000';
        document.getElementById('project').style.fontWeight = 'normal';
        document.getElementById('project').onmouseover = hover;
        document.getElementById('project').onmouseout = hoverout;
    }

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

document.addEventListener('scroll', function (e) {
    let top  = window.pageYOffset + window.innerHeight;
    let isVisible = top > document.querySelector('#ab-cont').offsetTop;
    let isVisible1 = top > document.querySelector('#skill1').offsetTop;
    let isVisible2 = top > document.querySelector('#skill2').offsetTop;
    let isVisible3 = top > document.querySelector('#skill3').offsetTop;
    let isVisible4 = top > document.querySelector('#skill4').offsetTop;
    let isVisible5 = top > document.querySelector('#prof').offsetTop;
    let isVisible6 = top > document.querySelector('#fea').offsetTop;
    let isVisible7 = top > document.querySelector('#fil').offsetTop;
    let isVisible8 = top > document.querySelector('.pro').offsetTop;
    let isVisible9 = top > document.querySelector('#get').offsetTop;
    let isVisible10 = top > document.querySelector('#cont').offsetTop;
    let isVisible11 = top > document.querySelector('.detail').offsetTop;
    let isVisible12 = top > document.querySelector('#copyright').offsetTop;    
    let isVisible13 = top > document.querySelector('.tou').offsetTop;
   

  
    if (isVisible) {
       document.getElementById('ab-cont').classList.add('animate');
    }

    if (isVisible1) {
        document.getElementById('skill1').classList.add('animate');
    }

    if (isVisible2) {
        document.getElementById('skill2').classList.add('animate');
    }

    if (isVisible3) {
        document.getElementById('skill3').classList.add('animate');
    }

    if (isVisible4) {
        document.getElementById('skill4').classList.add('animate');
    }

    if (isVisible5) {
        document.getElementById('prof').classList.add('animate');
    }

    if (isVisible6) {
        document.getElementById('fea').classList.add('animate');
    }

    if (isVisible7) {
        document.getElementById('fil').classList.add('animate');
    }

    if (isVisible8) {
        let elem = document.querySelectorAll('.pro');
        for (let i = 0; i < elem.length; i++) {
            elem[i].classList.add('animate');
        }
    }

    if (isVisible9) {
        document.getElementById('get').classList.add('animate');
    }

    if (isVisible10) {
        document.getElementById('cont').classList.add('animate');
    }

    if (isVisible11) {
        let elem = document.querySelectorAll('.detail');
        for (let i = 0; i < elem.length; i++) {
            elem[i].classList.add('animate');
        }
    }

    if (isVisible12) {
        document.getElementById('copyright').classList.add('animate');
    }

    if (isVisible13) {
        let elem = document.querySelectorAll('.tou');
        for (let i = 0; i < elem.length; i++) {
            elem[i].classList.add('animate');
        }
    }
  });
