const apiUrl = 'https://example-api-rest-yy8i.onrender.com/api/lectures'; // Ajusta la URL según tu API

// Función para cargar las conferencias
const loadLectures = async () => {
    try {
        const response = await fetch(apiUrl);
        const { data } = await response.json();
        console.log('Conferencias cargadas:', data);

        const lecturesList = document.getElementById('lectures-list');
        lecturesList.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos

        if (data.length === 0) {
            lecturesList.innerHTML = '<p>No hay conferencias disponibles.</p>';
        } else {
            const ul = document.createElement('ul');
            data.forEach(lecture => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>${lecture.title}</strong><br>
                    ${lecture.description}
                `;
                ul.appendChild(li);
            });
            lecturesList.appendChild(ul);
        }
    } catch (error) {
        console.error('Error al cargar las conferencias:', error);
    }
};

// Función para agregar una nueva conferencia
const addLecture = async (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const newLecture = { title, description };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newLecture)
        });

        if (response.ok) {
            console.log('Conferencia agregada');
            document.getElementById('title').value = '';
            document.getElementById('description').value = '';
            loadLectures(); // Volver a cargar las conferencias
        } else {
            console.error('Error al agregar la conferencia');
        }
    } catch (error) {
        console.error('Error al agregar la conferencia:', error);
    }
};

// Función para buscar conferencia por ID
const searchLectureById = async (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    const searchId = document.getElementById('search-id').value;
    const searchResultDiv = document.getElementById('search-result');
    searchResultDiv.innerHTML = ''; // Limpiar el resultado anterior

    try {
        const response = await fetch(`${apiUrl}/${searchId}`);
        const { data } = await response.json();

        if (response.ok) {
            const lecture = data;
            const lectureInfo = `
                <h3>Conferencia encontrada:</h3>
                <p><strong>Título:</strong> ${lecture.title}</p>
                <p><strong>Descripción:</strong> ${lecture.description}</p>
            `;
            searchResultDiv.innerHTML = lectureInfo;
        } else {
            searchResultDiv.innerHTML = `<p>No se encontró la conferencia con ID ${searchId}.</p>`;
        }
    } catch (error) {
        console.error('Error al buscar la conferencia:', error);
        searchResultDiv.innerHTML = '<p>Hubo un error al realizar la búsqueda.</p>';
    }
};

// Inicialización
document.getElementById('lecture-form').addEventListener('submit', addLecture);
document.getElementById('search-form').addEventListener('submit', searchLectureById);

// Load lectures after 5 seconds
window.onload = function () {
    setTimeout(loadLectures, 700);
};
