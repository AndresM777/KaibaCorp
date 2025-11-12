const AUTOS = [
    {
        id: 1,
        nombre: "Deportivo Furia X90",
        precio: 150000,
        descripcion_corta: "Potencia extrema y diseño aerodinámico.",
        descripcion_larga: "Coupé deportivo con aceleración inmediata y estabilidad a alta velocidad. Interior simple y cómodo para uso diario.",
        portada: "img/3porsche.jpg",
        destacada: "img/3porsche.jpg",
        colores: [
            { nombre: "Rojo", codigo: "#c0392b" },
            { nombre: "Negro", codigo: "#1f2937" }
        ],
        galeria: ["img/3porsche.jpg"],
        relacionados: [2, 3]
    },
    {
        id: 2,
        nombre: "SUV Aventura GT",
        precio: 75000,
        descripcion_corta: "Lujo y capacidad para toda la familia.",
        descripcion_larga: "SUV amplio con tracción inteligente y asistencias básicas de conducción. Pensado para viajes y ciudad.",
        portada: "img/3mazda.jpg",
        destacada: "img/3mazda.jpg",
        colores: [
            { nombre: "Gris", codigo: "#6b7280" },
            { nombre: "Azul", codigo: "#2563eb" }
        ],
        galeria: ["img/3mazda.jpg"],
        relacionados: [1, 4]
    },
    {
        id: 3,
        nombre: "Clásico Leyenda 68",
        precio: 90000,
        descripcion_corta: "Ícono restaurado con motor V8.",
        descripcion_larga: "Estilo retro con detalles cuidados y manejo sencillo. Ideal para quienes buscan un clásico confiable.",
        portada: "img/2toyota.jpg",
        destacada: "img/2toyota.jpg",
        colores: [
            { nombre: "Naranja", codigo: "#cc4e1a" },
            { nombre: "Blanco", codigo: "#e5e7eb" }
        ],
        galeria: ["img/2toyota.jpg"],
        relacionados: [1, 5]
    },
    {
        id: 4,
        nombre: "EcoDrive E7",
        precio: 65000,
        descripcion_corta: "Eléctrico con autonomía práctica.",
        descripcion_larga: "Conducción silenciosa y recarga rápida. Tecnología simple para uso diario y ahorro de energía.",
        portada: "img/1mazda.jpeg",
        destacada: "img/1mazda.jpeg",
        colores: [
            { nombre: "Azul", codigo: "#1d4ed8" },
            { nombre: "Plata", codigo: "#9ca3af" }
        ],
        galeria: ["img/1mazda.jpeg"],
        relacionados: [2]
    },
    {
        id: 5,
        nombre: "Pickup Titan X",
        precio: 82000,
        descripcion_corta: "Potente y resistente para trabajo.",
        descripcion_larga: "Caja amplia y suspensión firme. Útil para carga, con cabina cómoda y controles sencillos.",
        portada: "img/2toyota.jpg",
        destacada: "img/2toyota.jpg",
        colores: [
            { nombre: "Gris Oscuro", codigo: "#374151" },
            { nombre: "Rojo", codigo: "#b91c1c" }
        ],
        galeria: ["img/2toyota.jpg"],
        relacionados: [3]
    }
];
