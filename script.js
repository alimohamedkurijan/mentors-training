

let list = document.getElementById("placement")

let seclist = document.getElementById("filterd")

function search(){

// const searchInput = document.getElementById("searchBar");

// const filter = searchInput.value.toLowerCase();


// const listItem = document.querySelectorAll('.list-group')

// listItem.forEach((student) =>{

// let text = student.textContent
// if(text.toLowerCase().includes(filter.toLowerCase())){

//    student.style.display = '';

   

// }else{

// student.style.display = 'none'

// }

// });


const searchInput = document.getElementById("searchBar");
const filter = searchInput.value.toLowerCase();

list.innerHTML = '';

students.forEach(student => {
  if (student.name.toLowerCase().includes(filter)) {
    list.innerHTML += `
    <div class="placement">

    <p class="list-group"><span> <img src="img/user.png" width="20px" alt="user"> ${student.name} </span></p>
    <p class="list-group">  <span> <img src="img/age.png" width="20px" alt="age"> ${student.age} </span> </p>
  
    
    </div>
    `;
  }
});

};


let students =[

{
  name:"Mohammed", age: 12, Fgrade: 88,emo: `😎`, email: " 12aligo34letsgo@gmail.com "
},
{
    name:"Ali", age: 16, Fgrade: 89,emo: `😎`, email: " playstation4mango20@gmail.com "
},
{
    name:"Hassan", age: 14, Fgrade: 34,emo: `😎`, email: " ali.s@joincoded.com "
},
{
    name:"Hussain", age: 13, Fgrade: 55, emo: `😎`, email: " playstation4mangob@gmail.com"
},

{
    name:"Mahmod", age: 15, Fgrade: 77, emo: `😎`, email: " playstation4mangob@gmail.com"
},
{
    name:"Jassim", age: 17, Fgrade: 55, emo: `😎`, email: " playstation4mangob@gmail.com"
},
{
    name:"Sarah", age:  19, Fgrade: 55, emo: `😎`, email: " playstation4mangob@gmail.com"
},
{
    name:"Zainab", age: 20, Fgrade: 55, emo: `😎`, email: " playstation4mangob@gmail.com"
},


];



students.forEach(student => {
    
list.innerHTML += `

<div class="placement">

<p class="list-group"><span> <img src="img/user.png" width="20px" alt="user"> ${student.name} </span></p>
<p class="list-group">  <span> <img src="img/age.png" width="20px" alt="age"> ${student.age} </span> </p>


</div>



`

});





