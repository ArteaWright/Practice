//  fetch data from Server 

const content = document.querySelector('.API');
const getDoctors = async () => {
    let url = "https://artea-server-app.herokuapp.com/users";

    const response = await fetch(url);
    const info = await response.json();

    let template = '';
    info[0].forEach(item => {
        template += `<div>${JSON.stringify(item.basic.first_name)}</div>`
    })

    // Adding fetch content to HTML 
    content.innerHTML = template;
}


window.addEventListener("DOMContentLoaded", () => getDoctors());