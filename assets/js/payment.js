const prosesButton = document.getElementById("prosesButton");
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

prosesButton.addEventListener("click", function () {
  const radioInputs = document.querySelectorAll('input[type="radio"]');
  let isRadioSelected = false;

  radioInputs.forEach((input) => {
    if (input.checked) {
      isRadioSelected = true;
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Pembayaran berhasil..",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        window.location.href = "halaman-lain.html";
      }, 3000);
    }
  });

  if (!isRadioSelected) {
    Swal.fire({
      icon: "error",
      title: "Silahkan pilih metode pembayaran..",
    });
  }
});

fetch(`https://6524d82aea560a22a4ea298b.mockapi.io/product/${productId}`)
  .then((response) => response.json())
  .then((product) => {
    const harga = document.getElementById("harga-item");
    harga.innerHTML = `<p>${product.harga}</p>`;

    const total = document.getElementById("total");
    total.innerHTML = `<p>${product.harga}</p>`;
  })
  .catch((error) => console.error("Error:", error));
