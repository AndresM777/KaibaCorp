$(function () {
    // ==== BÚSQUEDA CON MENSAJE FLOTANTE ====
    $("#searchForm").on("submit", function (e) {
        e.preventDefault(); // evita refrescar la página
        const valor = $("#searchInput").val().trim();

        // Elimina mensaje anterior
        $(".mensaje-flotante").remove();

        // Crea el nuevo mensaje
        const mensaje = $("<div>")
            .addClass("mensaje-flotante")
            .addClass(valor === "" ? "error" : "ok")
            .text(valor === "" ? "Por favor, ingresa un término de búsqueda." : "Buscando: " + valor);

        $("body").append(mensaje);
        mensaje.fadeIn(300);

        // Desaparece después de 2.5 segundos
        setTimeout(() => {
            mensaje.fadeOut(600, () => mensaje.remove());
        }, 2500);
    });

    // ==== BOTÓN FLOTANTE “SUBIR” ====
    const botonSubir = $('<button id="btnSubir" title="Volver arriba">↑</button>');
    $("body").append(botonSubir);

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 200) {
            $("#btnSubir").fadeIn();
        } else {
            $("#btnSubir").fadeOut();
        }
    });

    $("#btnSubir").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
});
