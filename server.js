const jsonServer = require('json-server');
const axios = require('axios');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);


(function() {

    // Get Third party API
    axios({
      method: "GET", 
      url:"https://artea-server-app.herokuapp.com/users"
    })
    .then(res => {
      var data = res;
      console.log({data});
  })
  // .then(() => {
  
  //   // POST Third party info to JSON-server
  //   axios({
  //     method:"POST", 
  //     url:"https://artea-server-app.herokuapp.com/users", 
  //     data:{
  //       "id": 2,
  //       "first_name": "Artea Wright"
  //     }, 
  //     headers: {
  //       "Content-Type":"application/json"
  //     }
  //   })
  // })
  .catch(function (error) {
      console.error(error);
  });
  }());

  export {data}