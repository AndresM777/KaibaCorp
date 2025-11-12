// Array de productos (vehículos)
const listaProductos = [
    {
        id: 1,
        titulo: "Deportivo Furia X90",
        imagen: "img/3porsche.jpg",
        precio: 150000,
        descripcion: "Potencia extrema y diseño aerodinámico. 0-100 km/h en 3.2s. Disponible en rojo y negro.",
        enlace: "detalles-auto1.html"
    },
    {
        id: 2,
        titulo: "SUV Aventura GT",
        imagen: "img/3mazda.jpg",
        precio: 75000,
        descripcion: "Lujo y capacidad para toda la familia. Tracción 4x4, asientos de cuero y tecnología avanzada.",
        enlace: "detalles-auto2.html"
    },
    {
        id: 3,
        titulo: "Clásico Leyenda 68",
        imagen: "img/2toyota.jpg",
        precio: 90000,
        descripcion: "Un ícono restaurado a la perfección. Motor V8, pintura original y piezas de colección.",
        enlace: "detalles-auto3.html"
    },
    {
        id: 4,
        titulo: "EcoDrive E7",
        imagen: "img/1mazda.jpeg",
        precio: 65000,
        descripcion: "Auto 100% eléctrico con autonomía de 500 km. Carga rápida y diseño futurista.",
        enlace: "detalles-auto4.html"
    },
    {
        id: 5,
        titulo: "Pickup Titan X",
        imagen: "img/2toyota.jpg",
        precio: 82000,
        descripcion: "Potente y resistente. Ideal para trabajo pesado y aventuras extremas con estilo premium.",
        enlace: "detalles-auto5.html"
    }
];

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