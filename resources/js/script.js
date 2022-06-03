let i = 0;
let content = ['Software Developer.','Student.', 'Traveler.'];
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
		}, 1000);
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
    document.getElementById("head").style.backgroundColor = "rgb(255, 255, 255, 0.99)";
    document.getElementById("head").style.height = "60px";
    document.getElementById("nav").style.marginTop = "10px";
    var elem = document.getElementsByTagName("li");
    for (let i = 0; i < elem.length; i++) {
        elem[i].style.color="#000";
    }
  } else {
    document.getElementById("head").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("head").style.height = "100px";
    document.getElementById("nav").style.marginTop = "25px";
    var elem = document.getElementsByTagName("li");
    for (let i = 0; i < elem.length; i++) {
        elem[i].style.color="#fff";
    }
  }
}
