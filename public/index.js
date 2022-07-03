//  fetch data from Server 

const content = document.querySelector('.API');
const getDoctors = async () => {
    let url = "https://artea-server-app.herokuapp.com/users";

    const response = await fetch(url);
    const info = await response.json();

    // perform DOM manipulation
    let template = '';
    info[0].map(item => {
        template += `
        <div>
        <h3>${item.basic.first_name}</h3>
        <h3>${item.basic.middle_name}</h3>
        <h3>${item.basic.last_name}</h3>
        <div>
        <p>${item.basic.gender}</p>
        <p>
        ${item.addresses[0].address_1}, 
        ${item.addresses[0].address_2}
        ${item.addresses[0].address_purpose},
        ${item.addresses[0].city},  
        ${item.addresses[0].country_name},
        ${item.addresses[0].state}
        ${item.addresses[0].postal_code}
        ${item.addresses[0].telephone_number}      
        </p>
        </div>
        </div>
        `
    })

    // Adding fetch content to HTML 
    content.innerHTML = template;
}


window.addEventListener("DOMContentLoaded", () => getDoctors());