// import express
const express = require("express");
//import all dependencies
const helmet = require("helmet");
const CORS = require("cors");

//create a server
const server = express();
//teach server to read json
server.use(express.json());
//other stuff
server.use(helmet());
server.use(CORS());
//bring in the router
const characterRouter = require("../characters/charactersRouter");
