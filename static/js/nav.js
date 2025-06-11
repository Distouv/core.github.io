// nav.js

/**
 * Carga un fragmento HTML dentro de un contenedor específico por ID.
 * @param {string} containerId - ID del elemento contenedor en el DOM.
 * @param {string} [fragmentPath='/partials/nav.html'] - Ruta del archivo HTML a incluir.
 */
function loadNavbar(containerId, fragmentPath = 'resources/partials/navbar.html') {
  console.log(`[NAV] Intentando cargar: ${fragmentPath} en #${containerId}`);

  fetch(fragmentPath)
    .then(res => {
      if (!res.ok) {
        console.warn(`[NAV] No se pudo cargar el archivo. Código: ${res.status}`);
        throw new Error(`Archivo no encontrado o inaccesible: ${fragmentPath}`);
      }
      return res.text();
    })
    .then(html => {
      const cont = document.getElementById(containerId);
      if (!cont) {
        console.error(`[NAV] Contenedor con id "${containerId}" no encontrado en el DOM.`);
        return;
      }
      cont.innerHTML = html;
      console.log(`[NAV] Barra de navegación cargada exitosamente en #${containerId}`);
    })
    .catch(err => {
      console.error(`[NAV] Error al cargar la barra de navegación: ${err.message}`);
    });
}
