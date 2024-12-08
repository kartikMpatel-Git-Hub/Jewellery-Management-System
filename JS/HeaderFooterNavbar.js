
function loadFooter() {
    fetch('footer.html')  // Path to your footer.html file
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerTag').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}
function loadHeader() {
    fetch('header.html')  // Path to your footer.html file
        .then(response => response.text())
        .then(data => {
            document.getElementById('headerTag').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}
function loadNavbar() {
    fetch('navBar.html')  // Path to your footer.html file
        .then(response => response.text())
        .then(data => {
            document.getElementById('navBarTag').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}
// Call the loadFooter function when the page loads
window.onload = loadFooter();
window.onload = loadHeader();
window.onload = loadNavbar();
