$(function () {
    $("#btnBuscar").on("click", function () {
        const texto = $("#busqueda").val().trim();
        const $resultado = $("#resultadoBusqueda");
        $resultado.text("Buscando...").fadeIn(120);
        setTimeout(function () {
            if (texto === "") {
                $resultado.text("Por favor, escribe algo para buscar.");
            } else {
                $resultado.text('No se encontró ningún resultado para: "' + texto + '"');
            }
        }, 900);
    });

    function clearErrors() {
        $(".error-msg").text("");
        $("input, select, textarea").removeClass("is-invalid");
    }
    function invalid($el, msg) {
        $el.addClass("is-invalid");
        $el.next(".error-msg").text(msg);
    }

    $("#contactForm").on("submit", function (e) {
        e.preventDefault();
        clearErrors();

        let ok = true;

        if ($("#nombre").val().trim() === "") {
            invalid($("#nombre"), "Por favor, ingresa tu nombre completo.");
            ok = false;
        }

        const correo = $("#correo").val().trim();
        if (correo === "" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo)) {
            invalid($("#correo"), "Ingresa un correo válido.");
            ok = false;
        }

        if ($("#telefono").val().trim() === "") {
            invalid($("#telefono"), "Por favor, ingresa tu número de teléfono.");
            ok = false;
        }

        if ($("#motivo").val() === "") {
            invalid($("#motivo"), "Selecciona un motivo de contacto.");
            ok = false;
        }

        if ($("#mensaje").val().trim() === "") {
            invalid($("#mensaje"), "Por favor, escribe tu mensaje.");
            ok = false;
        }

        if (!ok) return;

        $(".respuesta").hide();
        $(".loading").show().text("⏳ Enviando...");
        setTimeout(function () {
            $(".loading").hide();
            $(".respuesta").css("color", "green").show().text("✅ ¡Mensaje enviado con éxito!");
            $("#contactForm")[0].reset();
        }, 5000);
    });

    $(".time-slot").on("click", function () {
        $(".time-slot").removeClass("selected");
        $(this).addClass("selected");
    });

    $(".book-btn").on("click", function () {
        const selected = $(".time-slot.selected").text();
        if (selected) {
            alert("✅ Has agendado tu prueba de manejo en: " + selected);
        } else {
            alert("⚠️ Por favor selecciona un horario antes de agendar.");
        }
    });
});
