let div =document.querySelector("div")
let btn =document.querySelector("button")



btn.addEventListener("click",() =>{
    fetch("http://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) =>{
    console.log(data);
    let user =data.results[0]
    div.innerHTML =
    `<h1>${user.name.first}<h1>
    <h1>${user.email}<h1>
     <h1>${user.gender}<h1>
    <img scr=${user.picture.medium} alt""/>
    `
})

})