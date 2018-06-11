function attachGradientEvents() {
    let currentMove = document.getElementById('gradient');
    let result = document.getElementById('result');

    currentMove.addEventListener('mousemove', movedMouse);
    currentMove.addEventListener('mouseout', outedMouse);

    function movedMouse(event) {
        let x = event.offsetX;
        let total = Math.floor(x / this.clientWidth * 100);
        result.textContent = total + "%";
    }

    function outedMouse() {
        result.textContent = "";
    }
}