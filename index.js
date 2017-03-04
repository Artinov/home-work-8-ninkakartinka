function setText(selector, text) {


	var x = document.querySelector(selector);
	x.innerHTML = text;
}


function setTextAll(selector, text) {
	
	var y = document.querySelectorAll(selector);
	y.forEach(function(elem){
		elem.innerHTML = text;
	})

}


setText("p", "wasn't that hard, yeah ?");
setTextAll("div .block a", "or was it ?");