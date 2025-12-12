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
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgpP2keZ6HOtd8dchEW8oqwnWV39rpSxfnpA&s",
    startDate: "2025-09-05",
    endDate: "2029-12-31",
    technologies: ["jawa"]   
  }
];
;

// Render kartu
function renderCard() {
  projectList.innerHTML = projects
    .map((project, index) => {
      return `
        <div class="col-md-4">
          <div class="card shadow-sm project-card">
            <img src="${project.imageURL}" class="card-img-top" alt="project">
            <div class="card-body">
              <h5 class="fw-bold">${project.name}</h5>
              <p class="mb-0">
                ${
                  project.description.length > 50
                    ? project.description.substring(0, 50) + "..."
                    : project.description
                }
              </p>

              <p class="text-muted small mt-2">
                <b>Start:</b> ${project.startDate}<br>
                <b>End:</b> ${project.endDate}
              </p>

              <p class="small"><b>Tech:</b> ${project.technologies.join(", ")}</p>

              <button class="btn btn-dark w-100 mb-2" onclick="showDetail(${index})">Detail</button>
              <button class="btn btn-danger w-100" onclick="deleteProject(${index})">Delete</button>
            </div>
          </div>
        </div>`;
    })
    .join("");
}


function showDetail(index) {
  let p = projects[index];

  // Hitung durasi (bulan)
  const start = new Date(p.startDate);
  const end = new Date(p.endDate);
  const diffMonths = Math.ceil((end - start) / (1000 * 60 * 60 * 24 * 30));

  detailView.innerHTML = `
    <div class="container py-5">

      <h2 class="fw-bold text-center mb-5">${p.name}</h2>

      <div class="row">
        <!-- Gambar -->
        <div class="col-md-8">
          <img src="${p.imageURL}" class="img-fluid rounded shadow">
        </div>

        <!-- Info kanan -->
        <div class="col-md-4">

          <h4 class="fw-bold mt-3">Duration</h4>
          <p class="mb-1">
            <i class="bi bi-calendar"></i> 
            ${p.startDate} - ${p.endDate}
          </p>
          <p>
            <i class="bi bi-clock-history"></i> 
            ${diffMonths} month${diffMonths > 1 ? "s" : ""}
          </p>

          <h4 class="fw-bold mt-4">Technologies</h4>

          <div class="d-flex flex-wrap gap-3 mt-2">
            ${p.technologies.includes("React Js") ? `<span><i class="bi bi-lightning-fill"></i> React Js</span>` : ""}
            ${p.technologies.includes("JavaScript") ? `<span><i class="bi bi-filetype-js"></i> JavaScript</span>` : ""}
            ${p.technologies.includes("Node Js") ? `<span><i class="bi bi-cpu"></i> Node Js</span>` : ""}
            ${p.technologies.includes("Socket IO") ? `<span><i class="bi bi-wifi"></i> Socket IO</span>` : ""}
            ${p.technologies.includes("Next Js") ? `<span><i class="bi bi-lightning"></i> Next Js</span>` : ""}
            ${p.technologies.includes("Typescript") ? `<span><i class="bi bi-filetype-tsx"></i> Typescript</span>` : ""}
          </div>

        </div>
      </div>

      <!-- Description panjang -->
      <p class="mt-5" style="text-align: justify;">
        ${p.description}
      </p>

      <div class="mt-4">
        <button class="btn btn-primary w-100 mb-2" onclick="editProject(${index})">Edit</button>
        <button class="btn btn-secondary w-100" onclick="closeDetail()">Kembali</button>
      </div>

    </div>
  `;

  detailView.style.display = "block";
  projectList.style.display = "none";
}


function closeDetail() {
  detailView.style.display = "none";
  projectList.style.display = "flex";
}

// Delete
function deleteProject(index) {
  let yakin = confirm("apakah kamu yakin mau menghapus project ini?");
  if (yakin) {
    alert("yakin nih?");
    projects.splice(index, 1);
    renderCard();
    alert("Project telah dihapus!");
  }
}

// Edit
function editProject(index) {
  let p = projects[index];

  detailView.innerHTML = `
    <div class="card mx-auto shadow-lg p-3" style="width: 500px;">
      <img src="${p.imageURL}" class="card-img-top">
      <div class="card-body text-center">

        <input type="text" id="editName" class="form-control mb-3" value="${p.name}">
        <textarea id="editDesc" class="form-control mb-3">${p.description}</textarea>

        <label class="mt-2 fw-bold">Start Date</label>
        <input type="date" id="editStart" class="form-control mb-3" value="${p.startDate}">

        <label class="fw-bold">End Date</label>
        <input type="date" id="editEnd" class="form-control mb-3" value="${p.endDate}">

        <label class="fw-bold mt-3">Technologies</label>
        <p class="small">${p.technologies.join(", ")}</p>

        <button class="btn btn-success w-100 mt-2" onclick="updateProject(${index})">Simpan</button>
        <button class="btn btn-secondary w-100 mt-2" onclick="showDetail(${index})">Batal</button>
      </div>
    </div>`;
}

function updateProject(index) {
  let newName = document.getElementById("editName").value;
  let newDesc = document.getElementById("editDesc").value;
  let newStart = document.getElementById("editStart").value;
  let newEnd = document.getElementById("editEnd").value;

  projects[index].name = newName;
  projects[index].description = newDesc;
  projects[index].startDate = newStart;
  projects[index].endDate = newEnd;

  renderCard();
  showDetail(index);
}

// Form tambah project
projectForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = projectForm.projectName.value;
  let description = projectForm.description.value;
  let imageFile = projectForm.projectImage.files[0];
  let startDate = projectForm.startDate.value;
  let endDate = projectForm.endDate.value;

  if (!name || !description || !imageFile || !startDate || !endDate) {
    return alert("isi dulu woi datanya!");
  }

  // Ambil technologies
  let technologies = [];
  if (document.getElementById("tech-node").checked) technologies.push("Node Js");
  if (document.getElementById("tech-next").checked) technologies.push("React Js");
  if (document.getElementById("tech-react").checked) technologies.push("Next Js");
  if (document.getElementById("tech-ts").checked) technologies.push("Typescript");

  let imageURL = URL.createObjectURL(imageFile);

  projects.push({
    name,
    description,
    imageURL,
    startDate,
    endDate,
    technologies
  });

  renderCard();
  projectForm.reset();
});

// Render awal
renderCard();
