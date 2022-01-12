const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("starterPrice");
const proPrice = document.getElementById("proPrice");

toggler.addEventListener("change", ()=>{
        if(toggler.checked){
            starterPrice.innerHTML = '$200 <Span> /year </span>';
            proPrice.innerHTML = '$1000 <Span> /year </span>';
        }else{
            starterPrice.innerHTML = '$19 <Span> /month </span>';
            proPrice.innerHTML = '$99 <Span> /month </span>';
        }
})