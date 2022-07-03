let inp = document.getElementById("inp")
let mybody = document.getElementsByTagName("main")[0];

mybody.style.background= localStorage.getItem("color")
function myfun(){
    mybody.style.background=inp.value
    localStorage.setItem("color",inp.value)
}
inp.addEventListener("input",myfun)