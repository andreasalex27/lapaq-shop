// const form = document.getElementById("form-regis");
//     form.addEventListener("submit", function (event) {
//         event.preventDefault(); 

//         const namaDepan = document.getElementById("nama-depan").value;
//         const namaBelakang = document.getElementById("nama-belakang").value;
//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;
//         const konfirmasiPassword = document.getElementById("con-password").value;
//         const noNIK = document.getElementById("no-nik").value;

//         console.log("Nama Depan: " + namaDepan);
//         console.log("Nama Belakang: " + namaBelakang);
//         console.log("Email: " + email);
//         console.log("Password: " + password);
//         console.log("Konfirmasi Password: " + konfirmasiPassword);
//         console.log("No NIK: " + noNIK);
//     });

const form = document.getElementById("form-regis");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaDepan = document.getElementById("nama-depan").value;
    const namaBelakang = document.getElementById("nama-belakang").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const konfirmasiPassword = document.getElementById("con-password").value;
    const noNIK = document.getElementById("no-nik").value;


    const formData = {
        namaDepan,
        namaBelakang,
        email,
        password,
        konfirmasiPassword,
        noNIK,
    };


    fetch('https://65312a1a4d4c2e3f333c8652.mockapi.io/form-regis/form-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
});
