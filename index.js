const password_1 = document.getElementById("password_1") 
const password_2 = document.getElementById("password_2") 


function changeColorValid(){
    password_1.style.cssText = "border: #42b883 3px solid;"
    password_2.style.cssText = "border: #42b883 3px solid;"
}
function changeColorInvalid(){
    password_1.style.cssText = "border: red 3px solid;"
    password_2.style.cssText = "border: red 3px solid;"
}

password_1.addEventListener("input", event =>{
    let firstPass = password_1.value
    console.log(`first password is ${firstPass}`)

    if(password_1.value.length < 7){
        changeColorInvalid()
        password_1.setCustomValidity("Password must be at least 8 characters")
        password_2.setCustomValidity("Password must be at least 8 characters")
    } else if(password_1.value != password_2.value){
        changeColorInvalid()
        password_1.setCustomValidity("Passwords don't match")
        password_2.setCustomValidity("Passwords don't match")
    } else if(password_1.value == password_2.value && password_1.value.length > 7){
        console.log("passwords match")
        changeColorValid()
        password_1.setCustomValidity("")
        password_2.setCustomValidity("")
    } 
})

password_2.addEventListener("input", event =>{
    let secondPass = password_2.value
    console.log(`second password is ${secondPass}`)

    if(password_1.value.length < 7){
        changeColorInvalid()
        password_1.setCustomValidity("Password must be at least 8 characters")
        password_2.setCustomValidity("Password must be at least 8 characters")
    } else if(password_1.value != password_2.value){
        changeColorInvalid()
        password_1.setCustomValidity("Passwords don't match")
        password_2.setCustomValidity("Passwords don't match")
    } else if(password_1.value == password_2.value && password_2.value.length > 7){
        console.log("passwords match")
        changeColorValid()
        password_1.setCustomValidity("")
        password_2.setCustomValidity("")
    } 
})
