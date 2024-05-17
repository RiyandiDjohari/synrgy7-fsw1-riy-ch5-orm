import express, { Express, Request, Response } from "express";
import knex from "knex";
import { Model } from "objection";
import { Articles, ArticlesModel } from "./model/article.model";
import router from "./routes";

const app: Express = express();
const port = 3000;
const knexInstance = knex({
  client: "postgres",
  connection: {
    database: "db_orm",
    user: "postgres",
    password: "123456",
    host: "127.0.0.1",
    port: 5432,
  },
});

Model.knex(knexInstance);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
