// Función para calcular el costo de envío
function calcularEnvio() {
    var tipoMercancia = document.getElementById("tipo_mercancia").value;
    var ubicacion = document.getElementById("ubicacion").value;
    var largo = parseFloat(document.getElementById("largo").value);
    var ancho = parseFloat(document.getElementById("ancho").value);
    var alto = parseFloat(document.getElementById("alto").value);
    var resultado = document.getElementById("resultado");

    var costo = 0;

    // Extraer la distancia (número) desde la opción seleccionada
    var distanciaMatch = ubicacion.match(/\d+/); // Expresión regular para extraer dígitos
    if (distanciaMatch) {
        var distancia = parseInt(distanciaMatch[0]);
    } else {
        var distancia = 0;
    }

    var pesoReal = 0;

    // Calcular el peso volumétrico
    var pesoVolumetrico = (largo * ancho * alto) / 2272;

    // Aplicar las fórmulas de cálculo según el tipo de mercancía
    if (tipoMercancia === "documentos") {
        costo = 40;
    } else if (tipoMercancia === "paqueteria" || tipoMercancia === "mobiliario" || tipoMercancia === "repuestos" || tipoMercancia === "art_electronicos") {
        pesoReal = parseFloat(prompt("Ingresa el peso real en kilogramos:"));

        var precioPorKg = 2.5;

        if (!isNaN(pesoReal)) {
            costo = (pesoReal * precioPorKg) + distancia; // Sumar la distancia (ubicacion) al costo
        } else {
            costo = (pesoVolumetrico * precioPorKg) + distancia; // Sumar la distancia (ubicacion) al costo
        }
    }

    resultado.innerHTML = "Tipo de Mercancía: " + tipoMercancia + "<br>" +
        "Ubicación: " + ubicacion + "<br>" +
        "Peso Volumétrico: " + pesoVolumetrico.toFixed(2) + " kg<br>" +
        "Peso Real: " + pesoReal + " kg<br>" +
        "Costo Total: Q " + costo.toFixed(2);
}