//  fetch data from Server 

const content = document.querySelector('.API');
const getDoctors = async () => {
    let url = "https://artea-server-app.herokuapp.com/users";

    const response = await fetch(url);
    const info = await response;

    let template = '';
    info.forEach(item => {
        template += `<div>${item.basic}</div>`
    })

    // Adding fetch content to HTML 
    content.innerHTML = template;
}


window.addEventListener("DOMContentLoaded", () => getDoctors());