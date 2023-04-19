import fs from 'fs';
import express from 'express';
import path from 'path';
import userAccountServices from './service';

const soap = require('soap');

const serviceObject = {
  DemoToTeamService: {
    UserAccountServiceSoapPort: {
      CreateUser: userAccountServices.CreateUser,
      getUserByEmail: userAccountServices.getUserByEmail
    }
  }
};

// load the WSDL file
const xml = fs.readFileSync(path.join(__dirname, 'service.wsdl'), 'utf8');
// create express app
const app = express();

// root handler
app.get('/', function (req, res) {
  res.send('Node Soap Example!<br /> SOAP Lunch and Learn');
});

const port = 8080;
// Launch the server and listen on *port*
app.listen(port, function () {
  console.log('Listening on port ' + port);
  const wsdl_path = "/wsdl";
  // create SOAP server that listens on *path*
  soap.listen(app, wsdl_path, serviceObject, xml);
  console.log("Check http://localhost:" + port + wsdl_path + "?wsdl to see if the service is working");
});