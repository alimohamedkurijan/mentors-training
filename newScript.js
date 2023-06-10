



let seclist = document.getElementById("filterd")

function search(){



const searchInput = document.getElementById("searchBar");
const filter = searchInput.value.toLowerCase();

seclist.innerHTML = '';

students.forEach(student => {
  if (student.name.toLowerCase().includes(filter)) {
    seclist.innerHTML += `
    <div id="filterd">

    <p class="list-group"><span> <img src="img/user.png" width="20px" alt="user"> ${student.name} </span></p>
    <p class="list-group">  <span> ${student.emo} </span> </p>
    <p class="list-group">  <span> <img src="img/test.png" width="20px" alt="age"> ${student.Fgrade} </span> </p>

    <p class="list-group">    <a href="mailto:${student.email} "> <img src="img/email.png" width="20px" alt="age"> </a> </p>
    <p class="list-group">  <span> <img src="img/snack.png" width="20px" alt="age"> ${student.snack} </span> </p>

    </div>
    `;
  }
  
});
};




let students =[

{
  name:"Mohammed", age: 12, Fgrade: 88,emo: `😎`, email: " 12aligo34letsgo@gmail.com ", snack: "pizaa"
},
{
    name:"Ali", age: 16, Fgrade: 89,emo: `😎`, email: " playstation4mango20@gmail.com ", snack: "pizaa"
},
{
    name:"Hassan", age: 14, Fgrade: 34,emo: `😎`, email: " ali.s@joincoded.com ", snack: "pizaa"
},
{
    name:"Hussain", age: 13, Fgrade: 55, emo: `😎`, email: " playstation4mangob@gmail.com", snack: "pizaa"
},

{
    name:"Mahmod", age: 15, Fgrade: 77, emo: `😎`, email: " playstation4mangob@gmail.com", snack: "pizaa"
},
{
    name:"Jassim", age: 17, Fgrade: 55, emo: `😎`, email: " playstation4mangob@gmail.com", snack: "pizaa"
},
{
    name:"Sarah", age:  19, Fgrade: 55, emo: `😎`, email: " playstation4mangob@gmail.com", snack: "pizaa"
},
{
    name:"Zainab", age: 20, Fgrade: 55, emo: `😎`, email: " playstation4mangob@gmail.com" , snack: "pizaa"
},


];



students.forEach(student => {
    
seclist.innerHTML += `

<div id="filterd">

<p class="list-group"><span> <img src="img/user.png" width="20px" alt="user"> ${student.name} </span></p>
    <p class="list-group">  <span> ${student.emo} </span> </p>
    <p class="list-group">  <span> <img src="img/test.png" width="20px" alt="age"> ${student.Fgrade} </span> </p>

    <p class="list-group">    <a href="mailto:${student.email} "> <img src="img/email.png" width="20px" alt="age"> </a> </p>
    <p class="list-group">  <span> <img src="img/snack.png" width="20px" alt="age"> ${student.snack} </span> </p>

</div>
`;

});


students.forEach(student => {
    
    seclist.innerHTML += `
    
    <div id="filterd">
    
    <p class="list-group"><span> <img src="img/user.png" width="20px" alt="user"> ${student.name} </span></p>
    <p class="list-group">  <span> <img src="img/age.png" width="20px" alt="age"> ${student.age} </span> </p>
    <p class="list-group">  <span> <img src="img/age.png" width="20px" alt="age"> ${student.Fgrade} </span> </p>
    
    
    </div>
    
    
    
    `
    
    });


    