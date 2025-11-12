// detalle.js (drop-in)
(function () {
    const IVA = 0.15;

    // 1) Tomar id ?id=...
    const qs = new URLSearchParams(location.search);
    let id = qs.get("id") || localStorage.getItem("ultimo_auto_id");
    if (id) localStorage.setItem("ultimo_auto_id", id);

    // 2) Cargar datos (array u objeto)
    const DB = window.AUTOS || [];
    let auto = null;

    if (Array.isArray(DB)) {
        auto = DB.find(a => String(a.id) === String(id));
    } else {
        auto = DB[id] || DB[String(id)] || null;
    }

    // Si no lo encuentra, mostrar aviso
    if (!auto) {
        document.getElementById("detalle").innerHTML =
            `<div class="container py-5">
         <div class="alert alert-warning">
           No se encontró el vehículo. Revisa que el enlace tenga <code>?id=</code>
           y que el ID exista en <strong>data-autos.js</strong>.
         </div>
       </div>`;
        return;
    }

    // 3) Datos base
    const portada = auto.portada || auto.destacada || "";
    const nombre  = auto.nombre || "Modelo";
    const desc    = auto.descripcion_larga || auto.descripcion_corta || "Sin descripción.";
    const sinIva  = Number(auto.precio) || 0;
    const ivaVal  = sinIva * IVA;
    const total   = sinIva + ivaVal;

    // 4) Pintar Hero y título
    $("#heroImg").attr("src", portada);
    $("#carName").text(nombre);

    // 5) Colores (pueden venir como objetos o strings)
    const $box = $("#colorBox").empty();
    (auto.colores || []).forEach((c, i) => {
        const hex = typeof c === "string" ? c : (c.codigo || "#ccc");
        const $b = $(`<button type="button" class="swatch border-0" aria-label="color ${i+1}"></button>`);
        $b.css("background", hex)
            .on("mouseenter", () => $("#featureImg").css("filter","saturate(120%)"))
            .on("mouseleave", () => $("#featureImg").css("filter",""))
            .on("click",      () => $b.addClass("ring").siblings().removeClass("ring"));
        $box.append($b);
    });

    // 6) Descripción y precios
    $("#featureImg").attr("src", portada);
    $("#carDesc").text(desc);
    const fmt = n => n.toLocaleString('en-US',{maximumFractionDigits:2}) + " USD";
    $("#priceSinIva").text(fmt(sinIva));
    $("#priceIva").text(fmt(ivaVal));
    $("#priceTotal").text(fmt(total));
    $("#ivaPct").text(Math.round(IVA*100) + "%");

    // 7) Galería
    const $g = $("#gallery").empty();
    const fotos = auto.galeria && auto.galeria.length ? auto.galeria : [portada];
    fotos.forEach(src => {
        $g.append(`
      <div class="col-6 col-md-4 col-lg-3">
        <div class="gallery-item hoverable ratio ratio-4x3">
          <img src="${src}" alt="Foto" />
        </div>
      </div>
    `);
    });

    // 8) Hover suave
    $(document).on("mouseenter", "img, .gallery-item, .swatch", function(){
        $(this).addClass("shadow-sm");
    }).on("mouseleave", "img, .gallery-item, .swatch", function(){
        $(this).removeClass("shadow-sm");
    });

    // 9) Agregar al carrito
    $("#btnAgregar").on("click", function(){
        const item = { id: Number(auto.id), titulo: nombre, imagen: portada, precio: sinIva, cantidad: 1 };
        const carrito = JSON.parse(localStorage.getItem("carrito")||"[]");
        const i = carrito.findIndex(x=>x.id===item.id);
        if(i>-1) carrito[i].cantidad += 1; else carrito.push(item);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        $(this).prop("disabled", true).text("Añadido ✓");
        setTimeout(()=>$(this).prop("disabled", false).text("Agregar al carrito"), 900);
        const total = carrito.reduce((s,x)=>s+x.cantidad,0);
        $("#badgeCarrito").text(total);
    });

    // 10) Contador carrito al entrar
    const c = JSON.parse(localStorage.getItem("carrito")||"[]").reduce((s,x)=>s+x.cantidad,0);
    $("#badgeCarrito").text(c);
})();
