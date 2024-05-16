const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index'); 

const setupAndStartServer = async()=>{

    const app=express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
    });

}

setupAndStartServer();