import express from 'express'
const app = express()
const port = 3000

import { Pool } from 'pg'
 
const db = new Pool({
  user: 'postgres',
  password: '123456',
  host: 'localhost',
  port: 5432,
  database: 'data_anomali_fb',
  max: 20
})

app.set("view engine", "hbs");
app.set("views", "src/views");

app.use("/assets", express.static("src/views/assets"));
app.use(express.static("js"))
app.use(express.urlencoded({extended: false}))


// href versi express
app.get("/home/:id", cHome)

// form
app.get("/project", projecT)
app.post("/project", PProject)


app.get("/", home);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

  let data = [
    {
      id:1,
      title:"home"
    },
    {
      id:2,
      title:"contact me"
    },
    {
      id:3,
      title:"download cv"
    }
  ];

function home (req, res) {
  res.render("intro", {data});
};

function cHome(req, res) {
  let {id} = req.params;

  let result = data.find(element => element.id == id);
  console.log(result);
  

  res.render("parameters", { result })
}
// batas

async function projecT(req, res) {
  const result = await db.query(
    "SELECT * FROM urutan_anomaliii_ffb ORDER BY id ASC"
  );

  res.render("project", {
    projects: result.rows
  });
}


async function PProject(req, res) {
  const { project_name } = req.body;

  console.log("SUBMIT:", project_name);

  await db.query(
    "INSERT INTO urutan_anomaliii_ffb (name) VALUES ($1)",
    [project_name]
  );

  res.redirect("/project");
}
