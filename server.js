const jsonServer = require('json-server');
const axios = require('axios');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);


(async function() {

    // Get Third party API
    await axios({
      method: "GET", 
      url:"https://npiregistry.cms.hhs.gov/api/?number=&enumeration_type=&taxonomy_description=Obstetrics+%26+Gynecology&first_name=&use_first_name_alias=&last_name=&organization_name=&address_purpose=&city=charlotte&state=nc&postal_code=&country_code=&limit=1&skip=&pretty=on&version=2.1"
    })
    .then(res => {
      const info = res.data.results;
      console.log(info);
      return info;
  })
  .then((info) => {

    console.log(info);

    //  POST Third party info to JSON-server
    axios({
      method:"POST", 
      url:"https://artea-server-app.herokuapp.com/users", 
      data:JSON.stringify(info), 
      headers: {
        "Content-Type":"application/json"
      }
    })
  })
  .catch(function (error) {
      console.error(error);
  });
  }());