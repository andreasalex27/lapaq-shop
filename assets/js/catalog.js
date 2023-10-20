// Mendapatkan ID produk dari parameter URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

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
    
    })
    .catch(error => console.error('Error:', error));