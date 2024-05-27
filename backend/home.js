
// ใช้ Fetch API เพื่อเรียกข้อมูลจากเซิร์ฟเวอร์
fetch('/qall')
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

// Fetch user info to update navbar
fetch('/user-info')
.then(response => response.json())
.then(user => {
    const navItems = document.getElementById('nav-items');
    const authItems = document.getElementById('auth-items');

    if (user.loggedIn) {
        // Add Edit link if logged in
        const editItem = document.createElement('li');
        editItem.classList.add('nav-item');
        editItem.innerHTML = '<a class="nav-link" href="/addProduct">Edit</a>';
        navItems.appendChild(editItem);

        // Add username and logout button
        authItems.innerHTML = `
            <li class="nav-item d-flex align-items-center">
                <span class="navbar-text mr-3">${user.username}</span>

                <form id="myform" method="post" action="/logout"></form>
                <a class="btn btn-outline-light nav-link" onclick="document.getElementById('myform').submit();">Logout</a>
                
            </li>
        `;
    }
});