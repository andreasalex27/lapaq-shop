const prosesButton = document.getElementById("prosesButton");

prosesButton.addEventListener("click", function() {
    console.log("click")
  const radioInputs = document.querySelectorAll('input[type="radio"]');
  let isRadioSelected = false;

  radioInputs.forEach(input => {
    if (input.checked) {
      isRadioSelected = true;
      alert("berhasil ")
    }
  });

  if (!isRadioSelected) {
    alert("Silakan pilih metode pembayaran terlebih dahulu.");
  }
});
