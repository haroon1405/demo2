import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "haroon1405",
  port: 5432,
});


db.connect();

let row_list = [];
let obj = {};
let country_codes_list = [];
let error = {};

db.query("SELECT * FROM visited_countries", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    row_list = res.rows;
  }
  // db.end();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  row_list.forEach((row)=>{
    country_codes_list.push(row.country_code);
  });
  obj = { countries: country_codes_list, total: country_codes_list.length };
  res.render('index.ejs', obj);
});

app.post("/add", async (req,res) => {
  const result_countries = await db.query("SELECT * FROM countries WHERE LOWER(country_name) LIKE $1 || '%'",[req.body.country.toLowerCase()])
  if(result_countries.rows[0]){
    if(country_codes_list.includes(result_countries.rows[0].country_code)){
      obj = { countries: country_codes_list, total: country_codes_list.length, error: "Country has already been added, try again."};
      res.render('index.ejs', obj);
    }
    else{
        await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)",[result_countries.rows[0].country_code]);
        const result_visited = await db.query("SELECT * FROM visited_countries");
        row_list = result_visited.rows;
        country_codes_list = [];
        row_list.forEach((row)=>{
          country_codes_list.push(row.country_code);
        });
        obj = { countries: country_codes_list, total: country_codes_list.length };
        res.render('index.ejs', obj);
        }
    } 
  else{
    obj = { countries: country_codes_list, total: country_codes_list.length, error: "Country name does not exist, try again."};
    res.render('index.ejs', obj);
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
