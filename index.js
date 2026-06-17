// let liste = document.querySelectorAll('li');
// // for( let i=0; i<liste.length; i++) {
// //     liste[i].style.listStyle = 'none';
// //     liste[i].textContent = (i+1)+ liste[i].textContent;
// // }
// liste.forEach((incr,i)=>{
//     incr.style.listStyle = 'none';
//     incr.textContent= (i+1) + incr.textContent;
// });


//Question 2..
// let body = document.body;
// for( let i=0; i<10; i++){
//     let paragrapgh = document.createElement("p");
//     paragrapgh.textContent = "Paragrapgh " + (i+1); 
//     body.appendChild(paragrapgh);
// }

// Question 3...
let td = document.querySelectorAll("td");
const couleur = ['#f20505','#12dd15', '#1212de'];
td.forEach((elt,i) =>{
    elt.style.background = "#" + (Math.random()*0xFFFFFF << 0).toString(16); //couleur de maniere aleatoire..
    elt.style.height = "50px";
    elt.style.width = "100px"
});
// for( let i=0; i<td.length; i++) {
//     console.log(td[i]);
//     td[i].style.background = couleur[i % couleur.length];
//     td[i].style.width = "150px";
//     td[i].style.height = "50px";
// }
