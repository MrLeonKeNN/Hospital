let a;
let b = document.getElementById("H1");
let c = document.getElementById("menuA");
let d = document.getElementById("container__icon1");
let direct = document.getElementById("block5__h3");
let div1 = document.getElementById("block4_1");
let div2 = document.getElementById("block4_2");
let div3 = document.getElementById("block5_div");
let div4 = document.getElementById("div_is_one");
let div5 = document.getElementById("div_is_two");
let div6 = document.getElementById("two_div");
let div7 = document.getElementById("tree_div");
let div8 = document.getElementById("four_div") ;
let div9 = document.getElementById("five_div");
window.addEventListener('scroll', function() {

   a =document.getElementById('scroll');
   if(pageYOffset>=200){
    div1.classList.remove("remmarginLeft");
    div2.classList.remove("remmarginRight");
  }
   if(pageYOffset>=500){
    direct.classList.add("addmarginLeft")
  }
    console.log("a=",pageYOffset);
    
    if(pageYOffset>=800){
       div3.classList.remove("remmarginRight2");
    }
    if(pageYOffset>=2300){
      div6.classList.remove("remmarginLeft");
   
    }
    if(pageYOffset>=3150){
      div8.classList.remove("remmarginLeft3");
      div9.classList.remove("remmarginRight3");
    }
    
   
    console.log(pageYOffset);
  });
 
  function zeroOne(){

		b.classList.remove("remmarginLeft2");

  };
  function zeroTwo(){
    c.classList.remove("remmarginLeft")

  };
  function zeroTree(){
    d.classList.remove("remmarginRight");
  };
 

setTimeout(zeroOne,2);
setTimeout(zeroTwo,2);
setTimeout(zeroTree,2);