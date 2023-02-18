let total = 0 ;

function add(x){
  let val = document.getElementById("price"+x).value ;
  total += parseInt(val) ; 
  document.getElementById("val").innerHTML = total ;
  count(x) ;
}

const count = (cn) => {
  let val = document.getElementById("c"+cn).textContent ;
  let c1 = parseInt(val) ;
  document.getElementById("c"+cn).innerHTML = c1+1 ;
}
