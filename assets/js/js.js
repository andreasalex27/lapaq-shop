const form = document.getElementById("form-daftar");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        // Mengambil nilai dari input form
        const namaDepan = document.getElementById("nama-depan").value;
        const namaBelakang = document.getElementById("nama-belakang").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const konfirmasiPassword = document.getElementById("con-password").value;
        const noNIK = document.getElementById("no-nik").value;

        // Menampilkan nilai dengan console.log
        console.log("Nama Depan: " + namaDepan);
        console.log("Nama Belakang: " + namaBelakang);
        console.log("Email: " + email);
        console.log("Password: " + password);
        console.log("Konfirmasi Password: " + konfirmasiPassword);
        console.log("No NIK: " + noNIK);
    });