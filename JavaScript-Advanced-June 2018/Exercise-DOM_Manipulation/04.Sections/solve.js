function create(sentences) {
    for (let sentence of sentences) {
       let div = document.createElement('div');
       let p = document.createElement('p');
       p.textContent = sentence;
       p.style.display = 'none';
       div.appendChild(p);
       div.addEventListener('click', showElement);
       document.getElementById('content').appendChild(div);
    }

    function showElement() {
        let element = this.getElementsByTagName('p')[0];
        if (element.style.display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
}