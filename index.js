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
/*let td = document.querySelectorAll("td");
const couleur = ['#f20505','#12dd15', '#1212de'];
td.forEach((elt,i) =>{
    elt.style.background = "#" + (Math.random()*0xFFFFFF << 0).toString(16); //couleur de maniere aleatoire..
    elt.style.height = "50px";
    elt.style.width = "100px"
});*/
// for( let i=0; i<td.length; i++) {
//     console.log(td[i]);
//     td[i].style.background = couleur[i % couleur.length];
//     td[i].style.width = "150px";
//     td[i].style.height = "50px";
// }

//Question4
//const p = document.querySelectorAll('li');
// p.forEach((elt,i)=>{
//     if(i%2 == 0){
//         elt.remove();
//     }
// })
//Question5
//  let tab=["Pomme","Banane", "Orange"] ;
//  const p= document.createElement('ul');
//  document.body.appendChild(p);
//  tab.forEach((elt)=>{
//     let li= document.createElement('li');
//     li.textContent= elt;
//     p.appendChild(li);
    
//  });
//Exo2
 //question 1
 /*
let selectDiv = document.querySelectorAll('div');
for( let i=0; i<selectDiv.length; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = "Enfant ajoute";
    selectDiv[i].appendChild(paragraph);
}
//question2
let selectUL = document.querySelector('ul');

while(selectUL.firstChild){
    selectUL.removeChild(selectUL.firstChild);
}*/

//question3
let selectSpan = document.querySelector('span');
let mama = selectSpan.parentElement;
while(mama.tagName !== 'HTML'){
    console.log(mama);
    mama = mama.parentElement;   
}




