// Escuchar el evento keydown para capturar cuando se presiona una tecla
document.addEventListener('keydown', function(event) {
    // Verificar si la tecla presionada es "7"
    if (event.key === 'ChannelUp') {
        // Abrir el archivo Repretel.html en la misma ventana
        window.location.href = 'index.html';

        // Si deseas abrirlo en una nueva pestaña, usa:
        // window.open('Repretel.html', '_blank');
    }
});
