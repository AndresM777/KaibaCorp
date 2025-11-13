// ========================================
// SISTEMA DE CARRITO COMPLETO
// ========================================

// Array de productos (vehículos) - UNIFICADO
const listaProductos = [
    {
        id: 1,
        titulo: "Deportivo Furia X90",
        imagen: "img/3porsche.jpg",
        precio: 150000,
        descripcion: "Potencia extrema y diseño aerodinámico. 0-100 km/h en 3.2s. Disponible en rojo y negro.",
        enlace: "Detalle.html?id=1",
        galeria: ["img/3porsche.jpg"]
    },
    {
        id: 2,
        titulo: "SUV Aventura GT",
        imagen: "img/3mazda.jpg",
        precio: 75000,
        descripcion: "Lujo y capacidad para toda la familia. Tracción 4x4, asientos de cuero y tecnología avanzada.",
        enlace: "Detalle.html?id=2",
        galeria: ["img/3mazda.jpg"]
    },
    {
        id: 3,
        titulo: "Clásico Leyenda 68",
        imagen: "img/2toyota.jpg",
        precio: 90000,
        descripcion: "Un ícono restaurado a la perfección. Motor V8, pintura original y piezas de colección.",
        enlace: "Detalle.html?id=3",
        galeria: ["img/2toyota.jpg"]
    },
    {
        id: 4,
        titulo: "EcoDrive E7",
        imagen: "img/1mazda.jpeg",
        precio: 65000,
        descripcion: "Auto 100% eléctrico con autonomía de 500 km. Carga rápida y diseño futurista.",
        enlace: "Detalle.html?id=4",
        galeria: ["img/1mazda.jpeg"]
    },
    {
        id: 5,
        titulo: "Pickup Titan X",
        imagen: "img/2toyota.jpg",
        precio: 82000,
        descripcion: "Potente y resistente. Ideal para trabajo pesado y aventuras extremas con estilo premium.",
        enlace: "Detalle.html?id=5",
        galeria: ["img/2toyota.jpg"]
    }
];

// ========================================
// FUNCIONES DE CARRITO
// ========================================

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

// Actualizar contador del carrito
function actualizarContadorCarrito() {
    const carrito = obtenerCarrito();
    const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = total;
        badge.style.display = total > 0 ? 'flex' : 'none';
    }
}

// Agregar producto al carrito
function agregarAlCarrito(idProducto) {
    console.log('Agregando producto ID:', idProducto);

    const producto = listaProductos.find(p => p.id === idProducto);

    if (!producto) {
        alert('Producto no encontrado');
        return;
    }

    let carrito = obtenerCarrito();
    const indiceExistente = carrito.findIndex(item => item.id === idProducto);

    if (indiceExistente !== -1) {
        carrito[indiceExistente].cantidad += 1;
    } else {
        carrito.push({
            id: producto.id,
            titulo: producto.titulo,
            imagen: producto.imagen,
            precio: producto.precio,
            cantidad: 1
        });
    }

    guardarCarrito(carrito);
    mostrarMensaje('✅ Producto añadido al carrito');
}

// Mostrar mensaje temporal
function mostrarMensaje(mensaje) {
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
        font-weight: 600;
    `;

    document.body.appendChild(div);

    setTimeout(() => {
        div.style.opacity = '0';
        div.style.transition = 'opacity 0.3s';
        setTimeout(() => div.remove(), 300);
    }, 2000);
}

// ========================================
// FUNCIONES PARA MOSTRAR PRODUCTOS
// ========================================

function formatearPrecio(precio) {
    return `$${precio.toLocaleString('en-US')} USD`;
}

function cargarProductos() {
    const contenedor = document.getElementById('productos');
    if (!contenedor) return;

    let htmlProductos = '';

    for(let i = 0; i < listaProductos.length; i++) {
        const producto = listaProductos[i];

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
                           style="width: 100%; text-align: center;">
                           Ver más detalles
                        </a>
                    </div>
                </div>
            </article>
        `;
    }

    contenedor.innerHTML = htmlProductos;
}

// ========================================
// FUNCIONES PÁGINA CARRITO
// ========================================

function cargarCarrito() {
    const contenedor = $('#cart-items');
    if (!contenedor.length) return;

    const carrito = obtenerCarrito();

    if (carrito.length === 0) {
        contenedor.html(`
            <div style="text-align: center; padding: 60px 20px;">
                <div style="font-size: 80px; margin-bottom: 20px;">🛒</div>
                <h3 style="color: #5b6b7a;">Tu carrito está vacío</h3>
                <p style="color: #5b6b7a; margin-bottom: 30px;">Agrega algunos vehículos para comenzar</p>
                <a href="../paginas/productos.html" class="btn btn--primary">Ver catálogo</a>
            </div>
        `);
        $('#subtotal, #iva, #total').text('$0.00');
        return;
    }

    let html = '';

    for (let i = 0; i < carrito.length; i++) {
        const item = carrito[i];
        const subtotalItem = item.precio * item.cantidad;

        html += `
            <div class="cart-item">
                <img src="${item.imagen}" alt="${item.titulo}" class="cart-item__img">
                <div class="cart-item__info">
                    <h4>${item.titulo}</h4>
                    <p class="cart-item__price">$${item.precio.toLocaleString('en-US')}</p>
                </div>
                <div class="cart-item__controls">
                    <button class="btn-qty" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                    <input type="number" value="${item.cantidad}" min="1" class="qty-input" 
                           onchange="actualizarCantidadInput(${item.id}, this.value)">
                    <button class="btn-qty" onclick="cambiarCantidad(${item.id}, 1)">+</button>
                </div>
                <div class="cart-item__subtotal">
                    <strong>$${subtotalItem.toLocaleString('en-US')}</strong>
                </div>
                <button class="btn-remove" onclick="eliminarDelCarrito(${item.id})">🗑️</button>
            </div>
        `;
    }

    contenedor.html(html);
    calcularTotales();
}

function cambiarCantidad(idProducto, cambio) {
    let carrito = obtenerCarrito();
    const index = carrito.findIndex(item => item.id === idProducto);

    if (index !== -1) {
        carrito[index].cantidad += cambio;
        if (carrito[index].cantidad < 1) carrito[index].cantidad = 1;
        guardarCarrito(carrito);
        cargarCarrito();
    }
}

function actualizarCantidadInput(idProducto, nuevaCantidad) {
    nuevaCantidad = parseInt(nuevaCantidad);

    if (isNaN(nuevaCantidad) || nuevaCantidad < 1) {
        alert('Cantidad mínima: 1');
        cargarCarrito();
        return;
    }

    let carrito = obtenerCarrito();
    const index = carrito.findIndex(item => item.id === idProducto);

    if (index !== -1) {
        carrito[index].cantidad = nuevaCantidad;
        guardarCarrito(carrito);
        cargarCarrito();
    }
}

function eliminarDelCarrito(idProducto) {
    if (confirm('¿Eliminar este producto?')) {
        let carrito = obtenerCarrito();
        carrito = carrito.filter(item => item.id !== idProducto);
        guardarCarrito(carrito);
        cargarCarrito();
        mostrarMensaje('❌ Producto eliminado');
    }
}

function calcularTotales() {
    const carrito = obtenerCarrito();
    const IVA = 0.15;

    let subtotal = 0;
    for (let i = 0; i < carrito.length; i++) {
        subtotal += carrito[i].precio * carrito[i].cantidad;
    }

    const iva = subtotal * IVA;
    const total = subtotal + iva;

    $('#subtotal').text('$' + subtotal.toLocaleString('en-US', {minimumFractionDigits: 2}));
    $('#iva').text('$' + iva.toLocaleString('en-US', {minimumFractionDigits: 2}));
    $('#total').text('$' + total.toLocaleString('en-US', {minimumFractionDigits: 2}));
}

function vaciarCarrito() {
    if (confirm('¿Vaciar todo el carrito?')) {
        localStorage.removeItem('carrito');
        actualizarContadorCarrito();
        cargarCarrito();
        mostrarMensaje('🗑️ Carrito vaciado');
    }
}

function procesarCompra() {
    const carrito = obtenerCarrito();

    if (carrito.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    const nombre = $('#nombre-cliente').val().trim();
    const email = $('#email-cliente').val().trim();
    const telefono = $('#telefono-cliente').val().trim();

    if (!nombre) {
        alert('Ingrese su nombre');
        $('#nombre-cliente').focus();
        return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Ingrese un email válido');
        $('#email-cliente').focus();
        return;
    }

    if (!telefono) {
        alert('Ingrese su teléfono');
        $('#telefono-cliente').focus();
        return;
    }

    alert(`✅ ¡Compra exitosa!\n\nNombre: ${nombre}\nEmail: ${email}\nTotal: ${$('#total').text()}`);

    localStorage.removeItem('carrito');
    actualizarContadorCarrito();
    window.location.href = 'productos.html';
}

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Sistema de carrito inicializado');
    actualizarContadorCarrito();

    if (document.getElementById('productos')) {
        cargarProductos();
    }
});

$(document).ready(function() {
    if ($('#cart-items').length > 0) {
        cargarCarrito();
    }
});