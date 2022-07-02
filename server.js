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
      url:"https://npiregistry.cms.hhs.gov/api/?number=&enumeration_type=&taxonomy_description=Obstetrics+%26+Gynecology&first_name=&use_first_name_alias=&last_name=&organization_name=&address_purpose=&city=charlotte&state=nc&postal_code=&country_code=&limit=1&skip=&pretty=on&version=2.1"
    })
    .then(res => {
      return data = res;
      
  }).then((data) => {

    //  POST Third party info to JSON-server
    axios({
      method:"POST", 
      url:"https://artea-server-app.herokuapp.com/users", 
      data:{data}, 
      headers: {
        "Content-Type":"application/json"
      }
    })
  })
  .catch(function (error) {
      console.error(error);
  });
  }());