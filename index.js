import express from 'express'
const app = express()
const port = 3000

app.set("view engine", "hbs");
app.set("views", "src/views");


app.get("/home", (req, res) => {
    let nama = "muhamad Hikmat";
    let lahir = "25/09/2005";
    let tinggal = "Kota sukabumi"
  res.render("intro", {nama, lahir, tinggal});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});