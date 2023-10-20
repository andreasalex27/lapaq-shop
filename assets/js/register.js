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
    const checkbox = document.getElementById('cb-kebijakan');

    // Validasi untuk memastikan semua input telah diisi
    if (!namaDepan || !namaBelakang || !email || !password || !konfirmasiPassword || !noNIK ) {
        alert("Harap isi semua kolom formulir dan centang persetujuan.");
        return;
    }

    // Validasi untuk memastikan konfirmasi password sesuai dengan password
    if (password !== konfirmasiPassword) {
        alert("Konfirmasi password tidak cocok dengan password.");
        return;
    }

    // Validasi untuk no NIK harus mengandung 16 digit angka
    if (!/^\d{16}$/.test(noNIK)) {
        alert("Nomor NIK harus terdiri dari 16 digit angka.");
        return;
    }

    //Validasi untuk memastikan checkbox telah dicentang
    if (!checkbox.checked) {
       alert("Harap centang kotak persetujuan.");
        return;
    }

    // Tampilkan pesan "Berhasil register"
    alert("Berhasil register");

    // Alihkan pengguna ke halaman login
    window.location.href = "index.html";


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
