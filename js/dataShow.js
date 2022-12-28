/*============data===============*/
function add(id, title, count, supplier, supply_date, image){
    return[
        id,
        title,
        count,
        supplier,
        supply_date,
        image
    ]
}
let head = add("ID", "Название", "Количество", "Поставщик", "Дата поставки", "Изображение")
let data = []
let suppliers = [
    "x-corp",
    "sus-corp",
    "enterprice",
    "Товары для дома (ТДД)",
    "Еда-вода"
]
let autoupdate = false
var grid = document.getElementById("data-grid")

/*============functions===============*/
function createImage(image_url, title){
    let item_container = document.createElement("div")
    let item_description = document.createElement("div")
    let item_image = document.createElement("div")
    let img = document.createElement("img")

    item_container.className = "item-container"
    item_description.className = "item-description"
    item_image.className = "item-image"

    item_description.innerHTML = title
    img.src= "imgs/"+image_url
    
    item_image.append(img)
    item_container.append(item_image)
    item_container.append(item_description)
    

    return item_container
}
/*outdated*/

function clearElement(container){
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
}
function createCell(data, classNames = []){
    let out = document.createElement("div")
    out.classList.add("data-cell")
    classNames.forEach(element => {
        out.classList.add(element)
    })
    out.append(data)
    return out
}

function insertHeader(data){
    clearElement(grid)
    let len = head.length+1
    grid.style =`grid-template-columns: repeat(${len}, auto)`
    let temp = createCell("№", ["data-head"])
    grid.append(temp)
    data.forEach(item => {
        temp = createCell(item, ["data-head"])
        grid.append(temp)
    });
}
function insertData(data){
    let counter = 1
    data.forEach(item => {
        let temp = createCell(counter, ["data-item"])
        grid.append(temp)
        item.forEach(element => {
            temp = createCell(element, ["data-item"])
            grid.append(temp)
        });
        counter++
    });
    let temp = createCell("", ["data-free"])
    temp.classList.add("data-free")
    grid.append(temp)
}
function formUpdate(){
    insertHeader(head)
    insertData(data)
}

document.querySelector("form").addEventListener("submit", formUpdate)
function formAutoUpdater(){
    if(autoupdate){
        formUpdate()
    }
}
document.getElementById("autoupdate").addEventListener("change", ()=>{
    autoupdate = document.getElementById("autoupdate").checked;
})
var timer = setInterval(formAutoUpdater, 10*1000);
document.getElementById("autoupdate_time").addEventListener("change",()=>{
    let update_time = document.getElementById("autoupdate_time").value
    if(update_time<=0){
        update_time=1
    }
    clearInterval(timer)
    timer = setInterval(formAutoUpdater, update_time*1000)
})

document.addEventListener("DOMContentLoaded",()=>{
    formUpdate()
    calcGridMaxSize()
})
window.addEventListener("resize", ()=>{
    calcGridMaxSize()
})
function calcGridMaxSize(){
    
    var max_width = window.innerWidth-66;
    //var max_height = window.innerHeight;
    grid.style.maxWidth = `${max_width}px`;
}
//data.push(add(7123, "Торт", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))


/*============dostuff===============*/
data.push(add(1792, "Резиновая Утка", 10, suppliers[1], "10/04/2021", createImage("products/1.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
data.push(add(7127, "Часы", 10, suppliers[4], "10/04/2021", createImage("products/2.png", "Изображение")))
