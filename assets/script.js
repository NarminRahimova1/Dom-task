

function myFunction(){
    let name=document.querySelector(".inputName");
    let surname=document.querySelector(".inputSurname");
    let word1=document.querySelector("#word1");
    let word2=document.querySelector("#word2");

    word1.innerHTML="Your Name :" + name.value;
    word2.innerHTML="Your Surname :" + surname.value;
    
}

let resetBtn=document.querySelector(".reset");
let inputs=document.querySelectorAll("input");

resetBtn.addEventListener("click", () =>  {
 inputs.forEach(input => input.value = '');
})
