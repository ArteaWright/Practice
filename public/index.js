//  fetch data from Server 

const content = document.querySelector('.API');
const getDoctors = async () => {
    let url = "https://artea-server-app.herokuapp.com/users";

    const response = await fetch(url);
    const info = await response.json();

    // perform DOM manipulation
    let template = '';
    info[0].map(item => {
        template += `<div>
        <h3>${item.basic.first_name}</h3>
        <h3>${item.basic.middle_name}</h3>
        <h3>${item.basic.last_name}</h3>
        <div>
        <p>${item.basic.gender}</p>
        <p>${item.basic.addresses}</p>
        </div>
        </div>
        `
    })

    // Adding fetch content to HTML 
    content.innerHTML = template;
}


window.addEventListener("DOMContentLoaded", () => getDoctors());