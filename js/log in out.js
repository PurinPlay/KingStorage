/*form*/
let login_input = document.getElementById("login")
let passwd_input = document.getElementById("password")

function loginChecker(lg){
    if(lg.length<3 || lg.length>25){
        login_input.style = "border-color: red"
        return false
    }
    login_input.style = "border-color: black"
    return true
}
function passwordChecker(pswd){
    if(pswd.length<8 || pswd.length>25){
        passwd_input.style = "border-color: red"
        return false
    }
    passwd_input.style = "border-color: black"
    return true
}
function inputChecker(lg, pswd){
    let temp1 = loginChecker(lg)
    let temp2 = passwordChecker(pswd)
    return temp1 && temp2
}
login_input.addEventListener("change",()=>{
    loginChecker(login_input.value)
})
passwd_input.addEventListener("change", ()=>{
    passwordChecker(passwd_input.value)
})

/*login and logout*/
function login(login, passwd){
    localStorage.setItem("login", login)
    localStorage.setItem("passwd", passwd)
    localStorage.setItem("login_date", new Date())
}
function logout(){
    localStorage.clear()
}
document.querySelector("form").addEventListener("submit", ()=>{
    let lg = login_input.value
    let pswd = passwd_input.value
    if(inputChecker(lg, pswd)){
        login(login_input.value, passwd_input.value)
        window.location.href = "index.html"
    }
})
document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("login")!=null){
        logout()
    }
})