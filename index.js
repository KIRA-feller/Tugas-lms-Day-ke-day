import express from 'express'
const app = express()
const port = 3000

app.set("view engine", "hbs");
app.set("views", "src/views");

app.use("/assets", express.static("src/views/assets"));

// href versi express
app.get("/home/:id", cHome)


app.get("/", home);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

  let data = [
    {
      id:1,
      title:"ini home"
    },
    {
      id:2,
      title:"my project"
    },
    {
      id:3,
      title:"contact me"
    },
    {
      id:4,
      title:"contact me"
    },
    {
      id:5,
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
