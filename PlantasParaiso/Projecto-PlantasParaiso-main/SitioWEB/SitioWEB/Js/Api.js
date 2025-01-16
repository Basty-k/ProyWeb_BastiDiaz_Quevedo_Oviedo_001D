// URL de la API REST
const apiUrl = 'GET https://perenual.com/api/pest-disease-list?key=[sk-afZP678905ff50ccc8248]'; // Reemplaza con la URL de tu API

// Contenedor donde se mostrarán los datos
const dataContainer = document.getElementById('data-container');

// Función para obtener datos de la API
async function fetchData() {
  try {
    // Realizar solicitud a la API
    const response = await fetch(apiUrl);

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // Convertir los datos a JSON
    const data = await response.json();

    // Mostrar los datos en el DOM
    displayData(data);
  } catch (error) {
    console.error('Hubo un problema al obtener los datos:', error);
    dataContainer.innerHTML = `<p>Error al obtener los datos: ${error.message}</p>`;
  }
}

// Función para mostrar los datos en la página
function displayData(data) {
  // Iterar sobre los datos y construir HTML dinámico
  const html = data.map(item => `
    <div class="data-item">
      <h2>${item.nombre}</h2>
      <p>${item.descripcion}</p>
    </div>
  `).join('');
  dataContainer.innerHTML = html;
}

// Llamar a la función para obtener datos al cargar la página
fetchData();
