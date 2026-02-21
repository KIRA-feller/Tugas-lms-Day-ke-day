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



document.getElementById("projectForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop halaman refresh

    const name = document.getElementById("projectName").value;
    const desc = document.getElementById("description").value;
    const imageInput = document.getElementById("projectImage");

    if (imageInput.files.length === 0) {
        alert("Upload gambar dulu!");
        return;
    }

    const imageFile = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const newCard = `
        <div class="col-md-4 mt-3">
            <div class="card shadow-sm project-card">
                <img src="${event.target.result}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="fw-bold">${name}</h5>
                    <p class="text-secondary small">${desc}</p>
                </div>
            </div>
        </div>
        `;

        document.getElementById("projectList").insertAdjacentHTML("beforeend", newCard);
    };

    reader.readAsDataURL(imageFile);
    document.getElementById("projectForm").reset();
});

