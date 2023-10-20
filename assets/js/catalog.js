// Mendapatkan ID produk dari parameter URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    
    // Tambahkan event listener ke elemen input
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value;
      
      // Arahkan pengguna ke "search.html" dengan parameter pencarian
      window.location.href = `serach.html?serach=${encodeURIComponent(searchTerm)}`;
    });
});

let search = document.getElementById("search")

search.addEventListener("click", () =>{
  window.location.href = 'search.html';
})

// Fungsi untuk mengarahkan ke halaman payment.html dengan ID yang sesuai
function redirectToPaymentPage() {
    window.location.href = `payment.html?id=${productId}`;
}

// Mengambil data produk berdasarkan ID dari API
fetch(`https://6524d82aea560a22a4ea298b.mockapi.io/product/${productId}`)
    .then(response => response.json())
    .then(product => {
        // Menampilkan detail produk di halaman
        const productImage = document.getElementById('img-product');
        productImage.innerHTML = `<img src="${product.img}"/>`;

        const productName = document.getElementById('name-product');
        productName.innerHTML = `<h1>${product.product}</h1>`;

        const productPrice = document.getElementById('price-product');
        productPrice.innerHTML = `<h1>${product.harga}</h1>`;

        //date

        const productDesc = document.getElementById('desc-product');
        productDesc.innerHTML = `<p>${product.deskripsi}</p>`;

        const paymentButton = document.getElementById('btn-checkout');
        paymentButton.innerHTML = `<button class="btn btn-danger" type="button">Checkout</button>`;
        paymentButton.addEventListener('click', redirectToPaymentPage);
    
    })
    .catch(error => console.error('Error:', error));