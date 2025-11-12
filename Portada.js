$(document).ready(function () {
    // ==== BÚSQUEDA CON MENSAJE FLOTANTE ====
    $("#searchForm").on("submit", function (e) {
        e.preventDefault();
        const valor = $("#searchInput").val().trim();

        // Eliminar mensaje anterior si existe
        $(".mensaje-flotante").remove();

        // Crear mensaje nuevo
        const mensaje = $("<div>")
            .addClass("mensaje-flotante")
            .text(valor === "" ? "Por favor, ingresa un término de búsqueda." : "Buscando: " + valor)
            .addClass(valor === "" ? "error" : "ok");

        $("body").append(mensaje);
        mensaje.fadeIn(300);

        // Desaparece suave
        setTimeout(() => {
            mensaje.fadeOut(600, () => mensaje.remove());
        }, 2500);
    });

    // ==== BOTÓN FLOTANTE “SUBIR” ====
    const botonSubir = '<button id="btnSubir" title="Volver arriba">↑</button>';
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
