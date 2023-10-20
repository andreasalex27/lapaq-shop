const form = document.getElementById("login-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Harap isi username, password, dan centang kotak persetujuan.");
        return;
    }

    fetch('https://65312a1a4d4c2e3f333c8652.mockapi.io/form-regis/form-data')
        .then(response => response.json())
        .then(data => {
            // Temukan pengguna dengan username dan password yang cocok
            const user = data.find(user => user.email === username && user.password === password);

            if (user) {
                // Jika data cocok, tampilkan pesan "Berhasil login"
                alert("Berhasil login");
                // Alihkan pengguna ke halaman homepage (gantilah "homepage.html" dengan URL yang sesuai)
                window.location.href = "/home.html"; 
            } else {
                alert("Username atau password salah. Coba lagi.");
            }
        })
        .catch(error => {
            console.error("Terjadi kesalahan:", error);
        });
        
//ADD END

});

// ini validasinya belum berfungsi