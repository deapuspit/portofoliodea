document.querySelectorAll('.project-tile').forEach(item => {
    item.addEventListener('click', event => {
        alert('Anda mengklik ' + item.querySelector('h3').innerText);
    });
});