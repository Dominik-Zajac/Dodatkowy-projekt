const dropdownBtn = document.querySelector('.dropdown-toggle');
const menuContent = document.getElementById('dropdown-content');
dropdownBtn.addEventListener('click', function(){
    menuContent.classList.toggle('unvisible-menu'); 
});