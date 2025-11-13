// js/detalle.js
$(function () {
    const IVA = 0.15;

    // 1) ID desde la ruta (?id=...)
    const qs = new URLSearchParams(location.search);
    let id = qs.get("id") || localStorage.getItem("ultimo_auto_id");
    if (id) localStorage.setItem("ultimo_auto_id", id);

// 2) Lista de productos - USAR EL MISMO ARRAY QUE sistema-carrito.js
    const listaProductos = [
        {
            id: 1,
            titulo: "Deportivo Furia X90",
            imagen: "img/3porsche.jpg",
            precio: 150000,
            descripcion: "Potencia extrema y diseño aerodinámico. 0-100 km/h en 3.2s. Disponible en rojo y negro.",
            galeria: ["img/3porsche.jpg"]
        },
        {
            id: 2,
            titulo: "SUV Aventura GT",
            imagen: "img/3mazda.jpg",
            precio: 75000,
            descripcion: "Lujo y capacidad para toda la familia. Tracción 4x4, asientos de cuero y tecnología avanzada.",
            galeria: ["img/3mazda.jpg"]
        },
        {
            id: 3,
            titulo: "Clásico Leyenda 68",
            imagen: "img/2toyota.jpg",
            precio: 90000,
            descripcion: "Un ícono restaurado a la perfección. Motor V8, pintura original y piezas de colección.",
            galeria: ["img/2toyota.jpg"]
        },
        {
            id: 4,
            titulo: "EcoDrive E7",
            imagen: "img/1mazda.jpeg",
            precio: 65000,
            descripcion: "Auto 100% eléctrico con autonomía de 500 km. Carga rápida y diseño futurista.",
            galeria: ["img/1mazda.jpeg"]
        },
        {
            id: 5,
            titulo: "Pickup Titan X",
            imagen: "img/2toyota.jpg",
            precio: 82000,
            descripcion: "Potente y resistente. Ideal para trabajo pesado y aventuras extremas con estilo premium.",
            galeria: ["img/2toyota.jpg"]
        }
    ];

    // 3) Buscar el producto por id
    const producto = listaProductos.find(p => String(p.id) === String(id));

    if (!producto) {
        document.getElementById("detalle").innerHTML =
            `<div class="container py-5">
         <div class="alert alert-warning">
           No se encontró el vehículo con id <strong>${id ?? "(sin id)"}</strong>.
           Verifica el enlace <code>?id=</code> y que el ID exista en la lista.
         </div>
       </div>`;
        return;
    }

    // 4) Mapear datos al layout del detalle
    const portada = producto.imagen;
    const nombre  = producto.titulo;
    const desc    = producto.descripcion || "Sin descripción.";
    const sinIva  = Number(producto.precio) || 0;
    const ivaVal  = sinIva * IVA;
    const total   = sinIva + ivaVal;

    // 5) Rellenar portada, título, descripción y precios
    $("#heroImg").attr("src", portada);
    $("#carName").text(nombre);

    // (no hay colores en esta lista) ocúltalos
    $("#s2_colores").hide();

    $("#featureImg").attr("src", portada);
    $("#carDesc").text(desc);

    const fmt = n => n.toLocaleString("en-US", { maximumFractionDigits: 2 }) + " USD";
    $("#priceSinIva").text(fmt(sinIva));
    $("#priceIva").text(fmt(ivaVal));
    $("#priceTotal").text(fmt(total));
    $("#ivaPct").text(Math.round(IVA * 100) + "%");

    // 6) Galería (si no hay, usa portada)
    const fotos = Array.isArray(producto.galeria) && producto.galeria.length
        ? producto.galeria
        : [portada];

    const $g = $("#gallery").empty();
    fotos.forEach(src => {
        $g.append(`
      <div class="col-6 col-md-4 col-lg-3">
        <div class="gallery-item hoverable ratio ratio-4x3">
          <img src="${src}" alt="Foto">
        </div>
      </div>
    `);
    });

    // 7) Hover visual
    $(document).on("mouseenter", "img, .gallery-item, .swatch", function () {
        $(this).addClass("shadow-sm");
    }).on("mouseleave", "img, .gallery-item, .swatch", function () {
        $(this).removeClass("shadow-sm");
    });

    // 8) Agregar al carrito (localStorage)
    $("#btnAgregar").on("click", function () {
        const item = {
            id: Number(producto.id),
            titulo: nombre,
            imagen: portada,
            precio: sinIva,
            cantidad: 1
        };
        const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
        const i = carrito.findIndex(x => x.id === item.id);
        if (i > -1) carrito[i].cantidad += 1; else carrito.push(item);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        $(this).prop("disabled", true).text("Añadido ✓");
        setTimeout(() => $(this).prop("disabled", false).text("Agregar al carrito"), 900);
        const totalItems = carrito.reduce((s, x) => s + x.cantidad, 0);
        $("#badgeCarrito").text(totalItems);
    });

    // 9) Contador del carrito al cargar
    const c = JSON.parse(localStorage.getItem("carrito") || "[]")
        .reduce((s, x) => s + x.cantidad, 0);
    $("#badgeCarrito").text(c);
});
