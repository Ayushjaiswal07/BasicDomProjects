const colors = document.querySelectorAll(".color");
const body = document.querySelector('body')
console.log(colors)
// console.log(colors[0].id)

colors.forEach( (clr) =>{
    // console.log(clr)
    clr.addEventListener('click',function(e) {
        let id = e.target.id;
        // console.log(id)
        body.style.backgroundColor = id;
    })
})