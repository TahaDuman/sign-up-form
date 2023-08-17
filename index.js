const password_1 = document.getElementById("password_1") 
const password_2 = document.getElementById("password_2") 

password_1.addEventListener("input", event =>{
    let firstPass = password_1.value
    console.log(`first password is ${firstPass}`)
    if(password_1.value == password_2.value){
        console.log("passwords match")
    }
})

password_2.addEventListener("input", event =>{
    let secondPass = password_2.value
    console.log(`second password is ${secondPass}`)

    // border color changes depending on if password matches
    function changeColorValid(){
        password_1.style.cssText = "border: #42b883 3px solid;"
        password_2.style.cssText = "border: #42b883 3px solid;"
    }
    function changeColorInvalid(){
        password_1.style.cssText = "border: red 3px solid;"
        password_2.style.cssText = "border: red 3px solid;"
    }


    if(password_1.value == password_2.value){
        console.log("passwords match")
        changeColorValid()
        password_1.setCustomValidity("")
        password_2.setCustomValidity("")
    } else if(password_1.value != password_2){
        changeColorInvalid()
        password_1.setCustomValidity("Passwords don't match")
        password_2.setCustomValidity("Passwords don't match")
    } 
})
