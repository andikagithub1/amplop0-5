document.getElementById('openButton').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    const isOpen = envelope.classList.contains('open');

    if (isOpen) {
        // Jika amplop sudah terbuka, tutup amplop
        envelope.classList.remove('open');
    } else {
        // Jika amplop belum terbuka, buka amplop
        envelope.classList.add('open');
    }
});