import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/connectDB";
import cors from "cors";
import http from "http";
import initWebRoutes from "./routes/web";

require('dotenv').config();

let app = express();
let server = http.createServer(app);
app.use(cors({
    origin: '*', // Next.js app origin
    credentials: true                 // allow cookies/auth
}))

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

initWebRoutes(app);

connectDB();

let port = process.env.PORT || 8000;
//port === undefined => port = 8000

server.listen(port, () => {
    //callback
    console.log(`Backend Nodejs is running at port ${port}`);
});