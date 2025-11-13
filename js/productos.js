// Array de productos (vehículos) - AMPLIADO con Marca y Modelo
const listaProductos = [
    // --- Deportivos (Mínimo 5) ---
    {
        id: 1,
        titulo: "Deportivo Furia X90",
        marca: "Porsche",
        modelo: "Deportivo",
        imagen: "img/3porsche.jpg",
        precio: 150000,
        descripcion: "Potencia extrema y diseño aerodinámico. 0-100 km/h en 3.2s. Disponible en rojo y negro.",
        enlace: "detalles-auto1.html"
    },
    {
        id: 6,
        titulo: "Carrera GT-2 RS",
        marca: "Porsche",
        modelo: "Deportivo",
        imagen: "img/porsche-gt2rs.jpg",
        precio: 350000,
        descripcion: "Edición limitada de alto rendimiento. Máxima velocidad en pista.",
        enlace: "detalles-auto6.html"
    },
    {
        id: 7,
        titulo: "Mazda RX-7 R",
        marca: "Mazda",
        modelo: "Deportivo",
        imagen: "img/mazda-rx7.jpg",
        precio: 85000,
        descripcion: "Clásico JDM con motor rotativo, un culto a la velocidad y manejo.",
        enlace: "detalles-auto7.html"
    },
    {
        id: 8,
        titulo: "Toyota Supra MK5",
        marca: "Toyota",
        modelo: "Deportivo",
        imagen: "img/toyota-supra.jpg",
        precio: 95000,
        descripcion: "El regreso de una leyenda. Motor turbo de alto rendimiento y diseño agresivo.",
        enlace: "detalles-auto8.html"
    },
    {
        id: 9,
        titulo: "Ford Mustang GT",
        marca: "Ford",
        modelo: "Deportivo",
        imagen: "img/ford-mustang.jpg",
        precio: 75000,
        descripcion: "El muscle car por excelencia. Potente V8 y sonido inconfundible.",
        enlace: "detalles-auto9.html"
    },

    // --- SUV / Familiares (Mínimo 5) ---
    {
        id: 2,
        titulo: "SUV Aventura GT",
        marca: "Mazda",
        modelo: "SUV",
        imagen: "img/3mazda.jpg",
        precio: 75000,
        descripcion: "Lujo y capacidad para toda la familia. Tracción 4x4, asientos de cuero y tecnología avanzada.",
        enlace: "detalles-auto2.html"
    },
    {
        id: 10,
        titulo: "Toyota RAV4 Trail",
        marca: "Toyota",
        modelo: "SUV",
        imagen: "img/toyota-rav4.jpg",
        precio: 55000,
        descripcion: "Perfecto para la ciudad y el campo. Fiabilidad Toyota garantizada.",
        enlace: "detalles-auto10.html"
    },
    {
        id: 11,
        titulo: "Explorer Platinum",
        marca: "Ford",
        modelo: "SUV",
        imagen: "img/ford-explorer.jpg",
        precio: 85000,
        descripcion: "SUV de gran tamaño con 7 asientos y acabados de lujo.",
        enlace: "detalles-auto11.html"
    },
    {
        id: 12,
        titulo: "CX-5 Signature",
        marca: "Mazda",
        modelo: "SUV",
        imagen: "img/mazda-cx5.jpg",
        precio: 60000,
        descripcion: "Diseño Kodo, manejo deportivo y máxima seguridad.",
        enlace: "detalles-auto12.html"
    },
    {
        id: 13,
        titulo: "Porsche Cayenne",
        marca: "Porsche",
        modelo: "SUV",
        imagen: "img/porsche-cayenne.jpg",
        precio: 120000,
        descripcion: "El SUV que redefine el lujo y el rendimiento deportivo.",
        enlace: "detalles-auto13.html"
    },

    // --- Clásicos (Mínimo 5) ---
    {
        id: 3,
        titulo: "Clásico Leyenda 68",
        marca: "Toyota",
        modelo: "Clásico",
        imagen: "img/2toyota.jpg",
        precio: 90000,
        descripcion: "Un ícono restaurado a la perfección. Motor V8, pintura original y piezas de colección.",
        enlace: "detalles-auto3.html"
    },
    {
        id: 14,
        titulo: "Ford T-Bird '55",
        marca: "Ford",
        modelo: "Clásico",
        imagen: "img/ford-tbird.jpg",
        precio: 110000,
        descripcion: "Convertible americano, estilo y elegancia de los años 50.",
        enlace: "detalles-auto14.html"
    },
    {
        id: 15,
        titulo: "Porsche 356 Speedster",
        marca: "Porsche",
        modelo: "Clásico",
        imagen: "img/porsche-356.jpg",
        precio: 450000,
        descripcion: "El precursor de los deportivos de Porsche. Rarísimo y en perfectas condiciones.",
        enlace: "detalles-auto15.html"
    },
    {
        id: 16,
        titulo: "Mazda Cosmo Sport",
        marca: "Mazda",
        modelo: "Clásico",
        imagen: "img/mazda-cosmo.jpg",
        precio: 150000,
        descripcion: "El primer coche con motor Wankel de Mazda. Una joya para coleccionistas.",
        enlace: "detalles-auto16.html"
    },
    {
        id: 17,
        titulo: "Toyota 2000GT",
        marca: "Toyota",
        modelo: "Clásico",
        imagen: "img/toyota-2000gt.jpg",
        precio: 800000,
        descripcion: "El 'James Bond' japonés. Uno de los autos clásicos más valiosos.",
        enlace: "detalles-auto17.html"
    },

    // --- Eléctricos / Eco (Mínimo 5) ---
    {
        id: 4,
        titulo: "EcoDrive E7",
        marca: "Mazda",
        modelo: "Eléctrico",
        imagen: "img/1mazda.jpeg",
        precio: 65000,
        descripcion: "Auto 100% eléctrico con autonomía de 500 km. Carga rápida y diseño futurista.",
        enlace: "detalles-auto4.html"
    },
    {
        id: 18,
        titulo: "Ford Mustang Mach-E",
        marca: "Ford",
        modelo: "Eléctrico",
        imagen: "img/ford-mache.jpg",
        precio: 78000,
        descripcion: "SUV eléctrico que lleva el espíritu del Mustang a la era EV.",
        enlace: "detalles-auto18.html"
    },
    {
        id: 19,
        titulo: "Toyota bZ4X",
        marca: "Toyota",
        modelo: "Eléctrico",
        imagen: "img/toyota-bz4x.jpg",
        precio: 58000,
        descripcion: "El SUV eléctrico de Toyota. Confiabilidad y eficiencia.",
        enlace: "detalles-auto19.html"
    },
    {
        id: 20,
        titulo: "Porsche Taycan 4S",
        marca: "Porsche",
        modelo: "Eléctrico",
        imagen: "img/porsche-taycan.jpg",
        precio: 145000,
        descripcion: "Deportivo eléctrico con la experiencia de manejo Porsche.",
        enlace: "detalles-auto20.html"
    },
    {
        id: 21,
        titulo: "Mazda MX-30",
        marca: "Mazda",
        modelo: "Eléctrico",
        imagen: "img/mazda-mx30.jpg",
        precio: 52000,
        descripcion: "Crossover compacto eléctrico con diseño interior sostenible.",
        enlace: "detalles-auto21.html"
    },

    // --- Pickup (Mínimo 5) ---
    {
        id: 5,
        titulo: "Pickup Titan X",
        marca: "Toyota",
        modelo: "Pickup",
        imagen: "img/2toyota.jpg", // Reutilizando imagen por simplicidad
        precio: 82000,
        descripcion: "Potente y resistente. Ideal para trabajo pesado y aventuras extremas con estilo premium.",
        enlace: "detalles-auto5.html"
    },
    {
        id: 22,
        titulo: "Ford F-150 Raptor",
        marca: "Ford",
        modelo: "Pickup",
        imagen: "img/ford-raptor.jpg",
        precio: 98000,
        descripcion: "La pickup de alto rendimiento para el off-road extremo.",
        enlace: "detalles-auto22.html"
    },
    {
        id: 23,
        titulo: "Toyota Hilux GR",
        marca: "Toyota",
        modelo: "Pickup",
        imagen: "img/toyota-hilux.jpg",
        precio: 65000,
        descripcion: "Versión deportiva de la pickup más robusta del mundo.",
        enlace: "detalles-auto23.html"
    },
    {
        id: 24,
        titulo: "Rivian R1T",
        marca: "Otro",
        modelo: "Pickup",
        imagen: "img/rivian-r1t.jpg",
        precio: 95000,
        descripcion: "La pickup 100% eléctrica con un enfoque en la aventura.",
        enlace: "detalles-auto24.html"
    },
    {
        id: 25,
        titulo: "Ford Maverick XLT",
        marca: "Ford",
        modelo: "Pickup",
        imagen: "img/ford-maverick.jpg",
        precio: 35000,
        descripcion: "Pickup compacta y eficiente, ideal para la vida urbana.",
        enlace: "detalles-auto25.html"
    }
];
// (Las funciones formatearPrecio, cargarProductos, etc., permanecen igual)
// ...

// Función para formatear precio
function formatearPrecio(precio) {
    return `$${precio.toLocaleString('en-US')} USD`;
}

// Función para generar las tarjetas dinámicamente
function cargarProductos() {
    const contenedor = document.getElementById('productos');

    // Variable para almacenar el HTML
    let htmlProductos = '';

    // Recorrer el array de productos
    for(let i = 0; i < listaProductos.length; i++) {
        const producto = listaProductos[i];

        // Crear el HTML de cada tarjeta usando las clases de styles.css
        htmlProductos += `
            <article class="vehicle-card">
                <img src="${producto.imagen}" 
                     alt="${producto.titulo}" 
                     class="vehicle-card__img">
                <div class="vehicle-card__body">
                    <h3 class="vehicle-card__title">${producto.titulo}</h3>
                    <p class="vehicle-card__price">${formatearPrecio(producto.precio)}</p>
                    <p style="margin-bottom: 14px; color: #5b6b7a; font-size: 14px;">${producto.descripcion}</p>
                    <div class="vehicle-card__actions" style="display: flex; gap: 8px; flex-direction: column;">
                        <button class="btn-add-cart" onclick="agregarAlCarrito(${producto.id})">
                            <span style="font-size: 18px;">+</span> Añadir al carrito
                        </button>
                        <a href="${producto.enlace}" 
                           class="btn btn--accent"
                           style="width: 100%; text-align: center;"
                           onclick="verDetalles(${producto.id}); return true;">
                           Ver más detalles
                        </a>
                    </div>
                </div>
            </article>
        `;
    }

    // Insertar todo el HTML en el contenedor
    contenedor.innerHTML = htmlProductos;
}

// Función para ver detalles (opcional)
function verDetalles(idProducto) {
    const producto = listaProductos.find(p => p.id === idProducto);
    console.log('Ver detalles de:', producto);
    // Aquí puedes agregar más lógica
}

// Función para buscar producto por ID
function obtenerProductoPorId(id) {
    return listaProductos.find(producto => producto.id === id);
}

// Función para filtrar por precio
function filtrarPorPrecio(precioMin, precioMax) {
    return listaProductos.filter(producto =>
        producto.precio >= precioMin && producto.precio <= precioMax
    );
}

// Cargar productos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, iniciando carga de productos...');
    const contenedor = document.getElementById('productos');

    if (contenedor) {
        cargarProductos();
        console.log('Productos cargados exitosamente:', listaProductos.length);
    } else {
        console.error('ERROR: No se encontró el contenedor #productos');
    }
});

// Función para agregar al carrito (disponible globalmente)
function agregarAlCarrito(idProducto) {
    console.log('Intentando agregar producto:', idProducto);

    // Buscar el producto en el array
    const producto = listaProductos.find(p => p.id === idProducto);

    if (!producto) {
        alert('Producto no encontrado');
        return;
    }

    // Obtener carrito actual
    let carrito = obtenerCarrito();

    // Verificar si el producto ya existe en el carrito
    const indiceExistente = carrito.findIndex(item => item.id === idProducto);

    if (indiceExistente !== -1) {
        // Si existe, incrementar cantidad
        carrito[indiceExistente].cantidad += 1;
    } else {
        // Si no existe, agregarlo
        carrito.push({
            id: producto.id,
            titulo: producto.titulo,
            imagen: producto.imagen,
            precio: producto.precio,
            cantidad: 1
        });
    }

    // Guardar en localStorage
    guardarCarrito(carrito);

    // Mostrar mensaje de éxito
    mostrarMensaje('✅ Producto añadido al carrito');

    console.log('Carrito actualizado:', carrito);
}

// Obtener carrito del localStorage
function obtenerCarrito() {
    const carrito = localStorage.getItem('carrito');
    return carrito ? JSON.parse(carrito) : [];
}

// Guardar carrito en localStorage
function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
}

// Actualizar contador del carrito en el header
function actualizarContadorCarrito() {
    const carrito = obtenerCarrito();
    const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = total;
        badge.style.display = total > 0 ? 'flex' : 'none';
    }
}

// Función para mostrar mensajes temporales
function mostrarMensaje(mensaje) {
    // Crear elemento de mensaje
    const div = document.createElement('div');
    div.textContent = mensaje;
    div.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #2f7a2f;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;

    // Agregar animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    if (!document.querySelector('style[data-toast]')) {
        style.setAttribute('data-toast', 'true');
        document.head.appendChild(style);
    }

    document.body.appendChild(div);

    // Remover después de 2 segundos
    setTimeout(() => {
        div.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => div.remove(), 300);
    }, 2000);
}

// Exportar funciones si es necesario
// (útil si quieres usar estos datos en otras páginas)
window.listaProductos = listaProductos;
window.obtenerProductoPorId = obtenerProductoPorId;
window.filtrarPorPrecio = filtrarPorPrecio;
/**
 * Filtra el array de productos por la categoría de modelo (tipo de vehículo).
 * @param {string} modelo El valor del modelo a filtrar (e.g., 'Deportivo', 'SUV').
 * @returns {Array<object>} Un nuevo array con los productos que coinciden con el modelo.
 */
function filtrarPorModelo(modelo) {
    return listaProductos.filter(producto =>
        producto.modelo.toLowerCase() === modelo.toLowerCase()
    );
}

// Ejemplo de uso:
// const deportivos = filtrarPorModelo('Deportivo');
// console.log(deportivos);
/**
 * Filtra el array de productos por la marca del vehículo.
 * @param {string} marca El valor de la marca a filtrar (e.g., 'Porsche', 'Mazda').
 * @returns {Array<object>} Un nuevo array con los productos que coinciden con la marca.
 */
function filtrarPorMarca(marca) {
    return listaProductos.filter(producto =>
        producto.marca.toLowerCase() === marca.toLowerCase()
    );
}

// Ejemplo de uso:
// const autosPorsche = filtrarPorMarca('Porsche');
// console.log(autosPorsche);
// La función original cargarProductos se reutiliza, pero con un array diferente.
function mostrarResultadosFiltrados(productosAmostrar) {
    const contenedor = document.getElementById('productos');
    let htmlProductos = ''; // Similar a cargarProductos

    productosAmostrar.forEach(producto => {
        // ... (Tu plantilla HTML simplificada para el ejemplo)
        htmlProductos += `
            <article class="vehicle-card">
                <h3>${producto.titulo} (${producto.marca})</h3>
                <p>Modelo: ${producto.modelo}</p>
                <p>${formatearPrecio(producto.precio)}</p>
                </article>
        `;
    });

    contenedor.innerHTML = htmlProductos;
}

// Función que el front-end invocaría
function manejarFiltro(tipo, valor) {
    let resultados;
    if (tipo === 'marca') {
        resultados = filtrarPorMarca(valor);
    } else if (tipo === 'modelo') {
        resultados = filtrarPorModelo(valor);
    } else {
        resultados = listaProductos; // Mostrar todos si no hay filtro
    }

    mostrarResultadosFiltrados(resultados);
}