const jsonServer = require('json-server');
const axios = require('axios');
const express = require('express');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

const app = express();

server.use(middlewares);
server.use(router);
server.listen(port);


(function() {

    // Get Third party API
    app.get('/', (req, res) => {

      axios({
        method: "GET", 
        url:"https://npiregistry.cms.hhs.gov/api/?number=&enumeration_type=&taxonomy_description=Obstetrics+%26+Gynecology&first_name=&use_first_name_alias=&last_name=&organization_name=&address_purpose=&city=charlotte&state=nc&postal_code=&country_code=&limit=1&skip=&pretty=on&version=2.1"
      })
      .then(res => {
        var data = res;
        console.log({data});
    })
    .catch(function (error) {
        console.error(error);
    });

    })

  }());