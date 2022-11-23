let start = document.getElementById("buttonGame")
let p = document.getElementById("gameH1")
let y = document.getElementById("input").value

let i = 3
start.addEventListener("click" , function () {
    let g = Math.floor(Math.random() * 10)
   
    if (g == y) {
        p.innerText = "Դուք հաղթեցիք այոոոոոոոոոոոոոոոոոոոոոոոոո:)"
        start.style.display = "none"
        document.getElementById("resultH1").style.display = "none"
    }else if(g != y){
        i = i - 1
        if (i <= 0) {
            document.getElementById("resultH1").innerText = "Դուք պարտվեցիք։("
            document.getElementById("input").style.display = "none";
            start.style.display = "none"
            p.style.display = "none"
        }else{
            document.getElementById("resultH1").innerText = `ձեզ մնաց ${i} փորձ`
        } 
    }
})

