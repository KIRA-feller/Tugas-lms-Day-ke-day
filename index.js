// // let age = 23
// // console.log("halo " + age);

// // function tai() {
// //     console.log("umur aku " + age);
// // }

// // function taikucing(sepuh) {
// //     console.log("umur aku sekarang adalah " + sepuh)
// // }

// // taikucing(9000)
// // taikucing(90000)
// // taikucing(900000)

// // function mtk(a, b) {
// //     return a+b
// // }

// // let result= mtk(9090129019, 4386438742862528)
// // console.log(result);

// Navigasi
const icikiwir = document.getElementById("icikiwir");
if (icikiwir) icikiwir.addEventListener("click", () => window.location.href = "contact.html");

const homeBtn = document.getElementById("home");
if (homeBtn) homeBtn.addEventListener("click", () => window.location.href = "home.html");

// Element
const projectForm = document.getElementById("projectForm");
const projectList = document.getElementById("projectList");
const detailView = document.getElementById("detailView");

// Array proyek awal
let projects = [
  {
    name: "Kira Yoshikage",
    description: "Fullstack Developers",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgpP2keZ6HOtd8dchEW8oqwnWV39rpSxfnpA&s"
  }
];

// Render kartu proyek
function renderCard() {
  projectList.innerHTML = "";
  projects.forEach((project, index) => {
    let card = `
      <div class="col-md-4">
        <div class="card shadow-sm project-card">
          <img src="${project.imageURL}" class="card-img-top" alt="project">
          <div class="card-body">
            <h5 class="fw-bold">${project.name}</h5>
            <p class="mb-0">${project.description.length > 50 ? project.description.substring(0,50)+"..." : project.description}</p>
            <button class="btn btn-dark w-100 mb-2" onclick="showDetail(${index})">Detail</button>
            <button class="btn btn-danger w-100" onclick="deleteProject(${index})">Delete</button>
          </div>
        </div>
      </div>`;
    projectList.innerHTML += card;
  });
}

// Detail
function showDetail(index) {
  let p = projects[index];
  detailView.innerHTML = `
    <div class="card mx-auto shadow-lg" style="width: 500px;">
      <img src="${p.imageURL}" class="card-img-top">
      <div class="card-body text-center">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <button class="btn btn-secondary w-100 mt-3" onclick="closeDetail()">Kembali</button>
      </div>
    </div>`;
  detailView.style.display = "block";
  projectList.style.display = "none";
}

function closeDetail() {
  detailView.style.display = "none";
  projectList.style.display = "flex";
}

// Delete
function deleteProject(index) {
  projects.splice(index, 1);
  renderCard();
}

// Form tambah proyek
projectForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = projectForm.projectName.value;
  let description = projectForm.description.value;
  let imageFile = projectForm.projectImage.files[0];
  if (!name || !description || !imageFile) return alert("isi dulu woi datanya!");
  let imageURL = URL.createObjectURL(imageFile);
  projects.push({name, description, imageURL});
  renderCard();
  projectForm.reset();
});

// Render awal
renderCard();