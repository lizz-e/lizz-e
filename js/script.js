// close the hamburger menu once a menu-item is selected

// Close Menu function
document.querySelectorAll(".menu-items li a").forEach(function(closeMenu) {
    closeMenu.addEventListener('click', function(closeMenu) {
        document.getElementById("checkbox").checked = false;
    })
})