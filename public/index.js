
(function() {

  // Get Third party API
  axios({
    method: "GET", 
    url:"https://artea-server-app.herokuapp.com/users"
  })
  .then(res => {
    console.log(res);
})
.then(() => {

  // POST Third party info to JSON-server
  axios({
    method:"POST", 
    url:"https://artea-server-app.herokuapp.com/users", 
    data:{
      "id": 6,
      "first_name": "Artea Wright"
    }, 
    headers: {
      "Content-Type":"application/json"
    }
  })
})
.catch(function (error) {
	console.error(error);
});
}());