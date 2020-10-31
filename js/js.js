let a;
let b = document.getElementById("H1");
let c = document.getElementById("menuA");
let d = document.getElementById("container__icon1");
let direct = document.getElementById("block5__h3");
let div1 = document.getElementById("block4_1");
let div2 = document.getElementById("block4_2");
let div3 = document.getElementById("block5_div");
let div4 = document.getElementById("div_is_one");
window.addEventListener('scroll', function() {

	 a =document.getElementById('scroll');
   if(pageYOffset>=500){
    direct.classList.add("addmarginLeft")
  }
    console.log("a=",pageYOffset);
    if(pageYOffset>=200){
      div1.classList.remove("remmarginLeft");
      div2.classList.remove("remmarginRight");
    }
    if(pageYOffset>=800){
      div3.style.marginRight="0px";
    
    }
    if(pageYOffset>=1600){
      //  div4.style.marginRight="0px";
    }
    console.log(pageYOffset);
  });
 
  function zeroOne(){

		b.classList.add("addmarginTop");

  };
  function zeroTwo(){
    c.classList.add("addmarginLeft")

  };
  function zeroTree(){
    d.classList.add("addmarginRight");
  };
 

setTimeout(zeroOne,2);
setTimeout(zeroTwo,2);
setTimeout(zeroTree,2);