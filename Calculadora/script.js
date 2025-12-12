
let display = document.getElementById("display")
let hist = document.getElementById("history")
let current = ""
let last = ""

function update() {
    display.textContent = current || "0"
}

document.querySelectorAll(".num").forEach(b => {
    b.onclick = () => {
        current += b.textContent
        update()
    }
})

document.querySelectorAll(".op").forEach(b => {
    b.onclick = () => {
        if (!current && last) current = last
        if (current && !/[+\-*/]$/.test(current)) {
            current += b.textContent
            update()
        }
    }
})

document.getElementById("dot").onclick = () => {
    let p = current.split(/[\+\-\*\/]/).pop()
    if (!p.includes(".")) {
        current += "."
        update()
    }
}

document.getElementById("clear").onclick = () => {
    current = ""
    update()
}

document.getElementById("eq").onclick = () => {
    if (!current) return
    try {
        let r = eval(current)
        let item = document.createElement("div")
        item.textContent = current + " = " + r
        item.onclick = () => {
            current = r.toString()
            update()
        }
        hist.prepend(item)
        last = r
        current = r.toString()
        update()
    } catch(e) {}
}