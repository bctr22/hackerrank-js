let btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    let value = parseInt(this.dataset.value) + 1;
    this.dataset.value = value;
    this.innerHTML = value;
});

