const password_1 = document.getElementById("password_1") 
const password_2 = document.getElementById("password_2") 

password_1.addEventListener("input", event =>{
    let firstPass = password_1.value
    console.log(firstPass)
    if(password_1.value == password_2.value){
        console.log("passwords match")
    }
})

password_2.addEventListener("input", event =>{
    let secondPass = password_2.value
    console.log(secondPass)
    if(password_1.value == password_2.value){
        console.log("passwords match")
    }
})

function passwMatchCheck(){
    password_1.addEventListener("input", event =>{
        let firstPass = password_1.value
    })
    
}