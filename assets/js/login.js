const form = document.getElementById("login-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch('https://65312a1a4d4c2e3f333c8652.mockapi.io/form-regis/form-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (response.status === 200) {
            console.log("Login berhasil!");
        } else {
            console.log("Username atau password salah. Coba lagi.");
        }
    });
});

// ini validasinya belum berfungsi