// Escuchar el evento keydown para capturar cuando se presiona una tecla
document.addEventListener('ChannelUp', function(event) {
    // Verificar si la tecla presionada es "6"
    if (event.key === 'ChannelUp') {
        // Abrir el archivo Repretel.html en la misma ventana
        window.location.href = 'Canal 6.html';

        // Si deseas abrirlo en una nueva pestaña, usa:
        // window.open('Repretel.html', '_blank');
    }
});
