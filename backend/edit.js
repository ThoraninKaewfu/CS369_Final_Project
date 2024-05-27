// Fetch user info to update navbar
fetch('/user-info')
.then(response => response.json())
.then(user => {

    const authItems = document.getElementById('auth-items');

    if (user.loggedIn) {

        // Add username and logout button <form id="notin" action="/logout" method="post">
        authItems.innerHTML = `
            <li class="nav-item d-flex align-items-center">
                <span class="navbar-text mr-3">${user.username}</span>
                                
                <form id="myform" method="post" action="/logout"></form>
                <a class="btn btn-outline-light nav-link" onclick="document.getElementById('myform').submit();">Logout</a>
                
            </li>
        `;
    }
});