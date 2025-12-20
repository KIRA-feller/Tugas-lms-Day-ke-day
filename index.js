import express from "express";
import hbs from "hbs";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static(path.join(process.cwd(), "public")));

app.set("view engine", "hbs");
app.set("views", process.cwd());

hbs.registerPartials(path.join(process.cwd(), "design/navbar"));
hbs.registerPartials(path.join(process.cwd(), "design/tech"));
hbs.registerPartials(path.join(process.cwd(), "design/experience"));
hbs.registerPartials(path.join(process.cwd(), "design/project"));
hbs.registerPartials(path.join(process.cwd(), "design/footer"));



app.get("/", home);

app.listen(port, () => {
  console.log(`Server jalan di http://localhost:${port}`);
});

function home(req, res) {
  res.render("index");
}
