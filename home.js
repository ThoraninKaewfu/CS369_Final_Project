// ใช้ Fetch API เพื่อเรียกข้อมูลจากเซิร์ฟเวอร์s
fetch('http://localhost:3000')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const productList = document.getElementById('product-list js-prod-list');
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('col-md-4','product-card');

            productCard.innerHTML = `
            <img src="${product.path_picture}" class="card-img-top" alt="${product.prod_name}">
                
                <div class="card-body">
                    <h5 class="card-title">${product.prod_name}</h5>
                    <p class="card-text">Price: $${product.price}</p>
                    <a href="product.html?id=${product.id}" class="btn btn-primary">View Details</a>
                </div>
            `;
            productList.appendChild(productCard);
        });
    })