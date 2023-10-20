function displayProductsByCategory(category, containerId) {
  let loading = document.getElementById("loading")
  loading.style.display= "block"
  fetch("https://6524d82aea560a22a4ea298b.mockapi.io/product")
    .then((res) => res.json())
    .then((items) => {
      const containerList = document.getElementById(containerId);

      items.forEach((item) => {
        if (item.kategori === category) {
          const card = document.createElement("div");
          card.className = "card col-md-6 p-0";
          card.style.width = "48%";
          card.innerHTML = `
          <a href="./catalog.html?id=${item.id}">
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
          containerList.appendChild(card);
        }
      });
    }).catch((err)=>{
      throw err
    }).finally(()=>{
      loading.style.display="none"
    })
}

displayProductsByCategory("elektronik", "list-products");
displayProductsByCategory("kecantikan", "list-kecantikan");
displayProductsByCategory("fashion", "list-pakaian");


let search = document.getElementById("search")

search.addEventListener("click", () =>{
  window.location.href = 'search.html';
})