function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', changeResult);
    document.getElementById('gradient').addEventListener('mouseout', removeResult);

    function changeResult(event) {
        let size = Math.trunc((event.offsetX / (event.target.clientWidth - 1)) * 100);
        document.getElementById('result').textContent = `${size}%`;
    }

    function removeResult() {
        document.getElementById('result').textContent = '';
    }
}