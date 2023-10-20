document.getElementById("search").addEventListener("input", function () {
  const searchTerm = this.value; // Mengambil nilai input dari pengguna

  // Fungsi untuk mengambil dan menampilkan data dari API sesuai dengan input
  function fetchAndDisplayData(searchTerm) {
    fetch("https://6524d82aea560a22a4ea298b.mockapi.io/product", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .then((items) => {
        const listProduct = document.getElementById("list-products");
        listProduct.innerHTML = ""; // Mengosongkan elemen sebelum menambahkan item baru

        const filteredItems = items.filter((item) =>
          item.product.includes(searchTerm)
        );

        if (filteredItems.length === 0) {
          // Tampilkan pesan jika hasil pencarian tidak ditemukan
          const notFoundMessage = document.createElement("span");
          notFoundMessage.textContent = "Hasil tidak ditemukan";
          notFoundMessage.style.textAlign = "center";
          notFoundMessage.style.color = "red";
          listProduct.appendChild(notFoundMessage);
        } else {
          // Tampilkan item-item yang sesuai dengan hasil pencarian
          filteredItems.forEach((item) => {
            const card = document.createElement("div");
            card.className = "card col-md-6 p-0";
            card.style.width = "48%";
            card.innerHTML = `
            <a href="./catalog.html?id${item.id}">
              <img src="${item.img}" class="card-img-top" alt="..." width="100%"/>
              <div class="card-body">
                <h5 style="font-size: 14px" class="card-title fw-semibold">${item.product}</h5>
                <p class="card-text">${item.harga}</p>
                <div class="d-flex">
                  <div>
                    <img src="assets/img/Union.svg" alt="">
                  </div>
                  <div>
                    <img src="assets/img/Union.svg" alt="">
                  </div>
                  <div>
                    <img src="assets/img/Union.svg" alt="">
                  </div>
                  <div>
                    <img src="assets/img/Union.svg" alt="">
                  </div>
                  <div>
                    <img src="assets/img/Union.svg" alt="">
                  </div>
                </div>
              </div>
              </a>
            `;
            listProduct.appendChild(card);
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Panggil fungsi fetchAndDisplayData dengan nilai input sebagai parameter
  fetchAndDisplayData(searchTerm);
});
