const icon = document.getElementById("nav-icon");
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const link5 = document.getElementById('link5');
const link6 = document.getElementById('link6');

const toggleClass = () => {
    const navbar = document.getElementById("nav-navigation");
    navbar.classList.toggle("active-nav")
}
icon.addEventListener('click', () => { toggleClass() })
link1.addEventListener('click', () => { toggleClass() })
link2.addEventListener('click', () => { toggleClass() })
link3.addEventListener('click', () => { toggleClass() })
link4.addEventListener('click', () => { toggleClass() })
link5.addEventListener('click', () => { toggleClass() })
link6.addEventListener('click', () => { toggleClass() })