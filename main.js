const diccionario = {"grande": ["ancho", "amplio"],
    "feliz": ["contento", "alegre"],
    "triste": ["melancólico", "deprimido"],
    "tener": ["conservar", "sostener"],
    "pequeño": ["diminuto", "minúsculo"],
    "fuerte": ["robusto", "vigoroso"],
    "débil": ["frágil", "endeble"],
    "inteligente": ["sabio", "listo"],
    "valiente": ["audaz", "intrépido"],
    "perezoso": ["vago", "flojo"],
    "amable": ["cortés", "atento"],
    "duro": ["firme", "resistente"],
    "fresco": ["refrescante", "templado"],
    "suave": ["blando", "liso"],
    "rápido": ["veloz", "ágil"]
  };
  
  const buscarPalabra = () => {
    const busqueda = document.getElementById('busqueda').value.toLowerCase();
    const texto = document.getElementById('texto').value;
    const resultado = document.getElementById('result');
    const opciones = document.getElementById('opcionesSinonimos');
    resultado.textContent = texto;
  
    if (diccionario[busqueda]) {
      const opcionesHtml = `
        <p>Sinónimos de <strong>${busqueda}</strong>:</p>
        <select id="sinonimoElegido">
          ${diccionario[busqueda].map(sinonimo => `<option value="${sinonimo}">${sinonimo}</option>`).join('')}
        </select>
        <button onclick="reemplazarPalabra('${busqueda}')">Reemplazar</button>
      `;
      opciones.innerHTML = opcionesHtml;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Palabra no encontrada',
        text: `No se encontraron sinónimos para "${busqueda}".`,
        confirmButtonText: 'Aceptar'
      });
      opciones.innerHTML = '';
    }
  };

  const reemplazarPalabra = palabra => {
    const sinonimoElegido = document.getElementById('sinonimoElegido').value;
    const texto = document.getElementById('texto').value;
    const nuevoTexto = texto.replace(new RegExp(`\\b${palabra}\\b`, 'gi'), sinonimoElegido);
    document.getElementById('result').textContent = nuevoTexto;
  };
  