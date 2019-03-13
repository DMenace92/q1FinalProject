let ver = localStorage.getItem("img src")
// ver.slice(0,1);
// ver.slice((ver.length-1), 1)
console.log(ver)

let newTag = document.querySelector(".container1")
let newImg = document.createElement('img')
newImg.src = ver
console.log(newImg)
newTag.appendChild(newImg)
