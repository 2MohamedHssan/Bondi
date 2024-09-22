let lione = document.querySelectorAll("#leveone li a")
let li = document.querySelectorAll("#leve li")
let a = document.querySelectorAll("a")

function prentlink(ele){
    ele.forEach(e => e.onclick= e => e.preventDefault())
}

let handelactive = function (ele) { 
    ele.forEach(e => e.onclick = _ => {
        ele.forEach(e=>e.classList.remove("active"))
        e.classList.add("active")
    })
}


handelactive(li);
handelactive(lione);

// prentlink(a)