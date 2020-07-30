import "reflect-metadata";
import {Request, Response} from "express";
import express from "express";
import * as bodyParser from "body-parser";
import {AppRoutes} from "./routes";
import databaseConn from "./databaseConn"


// create express app
const app = express();

// db connection
const prepareServer = async () => {
    await databaseConn();
  
    return app.listen(3000);
  };

// express configure
app.use(bodyParser.json());

// register all application routes
AppRoutes.forEach(route => {
    app[route.method](route.path, (request: Request, response: Response, next: Function) => {
        route.action(request, response)
            .then(() => next)
            .catch(err => next(err));
    });
});

export default async () => await prepareServer();