//  fetch data from Server 
const getDoctors = async () => {
    let url = "https://artea-server-app.herokuapp.com/users";

    const response = await fetch(url);
    const info = await response.json();

    console.log(info);
}


window.addEventListener("DOMContentLoaded", () => getDoctors());