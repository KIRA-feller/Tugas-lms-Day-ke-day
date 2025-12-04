let age = 23;
console.log("halo " + age);

function tai() {
    console.log("umur aku " + age);
}

function taikucing(sepuh) {
    console.log("umur aku sekarang adalah " + sepuh)
}

taikucing(9000)
taikucing(90000)
taikucing(900000)

function mtk(a, b) {
    return a+b
}

let result= mtk(9090129019, 4386438742862528)
console.log(result);

document.getElementById("icikiwir").addEventListener("click", function() {
    window.location.href = "contact.html"; 
});

document.getElementById("home").addEventListener("click", function() {
    window.location.href = "home.html"; 
});

// document.getElementById("proyekkuli").addEventListener("click", function() {
//     window.location.href = "index.html"; 
// });

// document.getElementById("home2").addEventListener("click", function() {
//     window.location.href = "uji.html"; 
// });



const form = document.getElementById("projectForm");
const list = document.getElementById("projectList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("projectName").value;
  const desc = document.getElementById("description").value;
  const imgFile = document.getElementById("projectImage").files[0];

  if (!imgFile) {
    alert("Upload gambar dulu!");
    return;
  }

  const imgURL = URL.createObjectURL(imgFile);

  const card = document.createElement("div");
  card.classList.add("col-md-4");

  card.innerHTML = `
    <div class="card shadow-sm">
      <img src="${imgURL}" class="card-img-top">
      <div class="card-body">
        <h5 class="fw-bold">${name}</h5>
        <p class="text-secondary small">${desc}</p>
        <div class="d-flex justify-content-between">
          <button class="btn btn-dark-round btn-sm text-white">Edit</button>
          <button class="btn btn-danger btn-sm">Delete</button>
        </div>
      </div>
    </div>
  `;

  list.appendChild(card);
  form.reset();
});


