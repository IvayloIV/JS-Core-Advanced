function notify(message) {
    let notif = document.getElementById('notification');
    notif.textContent = message;
    notif.style.display = 'block';
    setTimeout(hideItem, 2000);

    function hideItem() {
        notif.style.display = 'none';
    }
}