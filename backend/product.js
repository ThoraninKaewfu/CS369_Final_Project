document.addEventListener('DOMContentLoaded', function() 
{
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    //fetch data from backend
    fetch(`/product/${productId}`)

    //after fetch and receive respond -> export to JSON file
    .then(response => 
    {
        if (!response.ok) 
            {
                throw new Error('Network response was not ok');
            }
            return response.json();
    })
    .then(data => 
    {
        console.log(data[0]);

        const productDetails = document.getElementById('product-details');
        productDetails.innerHTML = `
            <div class="col-md-12">
                    <div class="card mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-5">
                                <img src="${data[0].path_picture}" class="card-img" alt="${data[0].prod_name}">
                            </div>
                                
                            <div class="col-md-7">
                                <div class="card-body">
                                <p class="card-text">${data[0].details}</p>
                                <p class="card-text">Category: ${data[0].type}</p>
                                <p class="card-text">Price: $${data[0].price}</p>
                                <h5 class="card-title">${data[0].prod_name}</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    })
    .catch(error => console.error('Error fetching product:', error));
    
});

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
