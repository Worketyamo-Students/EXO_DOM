let liste = document.querySelectorAll('li');
// for( let i=0; i<liste.length; i++) {
//     liste[i].style.listStyle = 'none';
//     liste[i].textContent = (i+1)+ liste[i].textContent;
// }
liste.forEach((incr,i)=>{
    incr.style.listStyle = 'none';
    incr.textContent= (i+1) + incr.textContent;
});
