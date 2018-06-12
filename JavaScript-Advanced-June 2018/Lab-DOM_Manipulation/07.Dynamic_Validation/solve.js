function validate() {
    let element = document.getElementById('email');
    element.addEventListener('change', changeText);
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    function changeText() {
        let value = element.value;
        if (!pattern.test(value)) {
            element.className = 'error';
        } else {
            element.classList.remove('error');
        }
    }
}