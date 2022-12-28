/*==========data============*/
let _menu = [
    "Поставка",
    "Отгрузка",
    "Поставщик"
]
let suppliers = [
    "Sus corp",
    "Cakes and Cookies"
]
/*==========data============*/
let menu = loadSelect(_menu);
menu.addEventListener("change", ()=>{
    clearDiv(form)
    form.append(menu)
    switch(menu.value){
        case "0":
            loadSupplies()
            break
        case "1":
            loadShipments()
            break
        case "2":
            loadSuppliers()
            break
        default:
            console.log("access error")
    }
})
function loadSelect(array){
    let out = document.createElement("select")
    for (let index = 0; index < array.length; index++) {
        let option = document.createElement("option")
        option.value = index
        option.innerHTML = array[index]
        out.append(option)
    }
    return out
}
function clearDiv(div){
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
}
document.addEventListener("DOMContentLoaded", ()=>{
    clearDiv(form)
    menu.value = 2
    form.append(menu)
    loadSuppliers()
})

function loadSupplies(){

}
function loadShipments(){

}
function loadSuppliers(){
    let title = document.createElement("h2")
    title.innerHTML = _menu[menu.value]
    let select = loadSelect(suppliers)
    let option = document.createElement("option")
    option.value=-1
    option.innerHTML="--Добавить--"
    select.append(option)
    select.value=-1
    let input = document.createElement("input")
    input.type = "text"
    input.placeholder = "Название поставщика"
    let submit = document.createElement("input")
    submit.type="submit"
    submit.value = "Добавить"
    form.append(title)
    form.append(select)
    form.append(input)
    form.append(submit)
    select.addEventListener("change", ()=>{

        if(select.value==-1){
            submit.value="Добавить"
            input.value=""
        }else{
            submit.value="Обновить"
            input.value=[suppliers[select.value]]
        }
    })
}

let form = document.querySelector("form")
form.addEventListener("submit", ()=>{
    let out = {
        method: "POST",
        data: new FormData(form)
    }
    let result;
})
