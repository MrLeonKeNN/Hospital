let a;
let b = document.getElementById("block3");
window.addEventListener('scroll', function() {
	document.getElementById('scroll').innerHTML = pageYOffset + 'px';
	 a =document.getElementById('scroll');
	 
	 console.log(pageYOffset)
  });
  console.log(b)

  function zeroOne(){

		b.classList.add("addmargin");

  }
  //document.addEventListener("DOMContentLoaded",zeroOne);
setTimeout(zeroOne,2);






// onclick.menuToggle = zero();