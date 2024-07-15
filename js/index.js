window.onload = function (){
	var elements = document.getElementsByTagName("li");
	var screen = document.querySelectorAll('p')[0];
	var clear = document.getElementsByClassName('clear')[0];
	
	for(var i=0;i<elements.length;i+=1){
    // check equal= btn
		  if(elements[i].innerHTML === '='){
			    elements[i].addEventListener("click", calculate(i));
		  }else{
			   elements[i].addEventListener("click", addtocurrentvalue(i));
		  }
	}
	
	// add number on calculator
	function addtocurrentvalue (i){
		return function(){

      // calc devission operation
			if (elements[i].innerHTML === "÷") {
        screen.innerHTML  +=  "/ " ;
      }
      // calc multiplication operation
      else if(elements[i].innerHTML === "x"){
			  screen.innerHTML += "*";
		  }
      // calc plus || mince operations
      else{
			  screen.innerHTML  += elements[i].innerHTML;
		  }
	  }
  }
 
  // click on clear btn
  clear.onclick = function () {
    screen.innerHTML = '';
  }

  // calculate current values
  function calculate(i) {
    return function () {
        screen.innerHTML = eval(screen.innerHTML);
    };
  }
};