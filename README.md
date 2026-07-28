# App de Adopción de Animales

Aplicación React que consume datos de dos APIs públicas (**TheCatAPI** y **Dog CEO API**) para mostrar una galería de gatos y perros, y simular el proceso de adopción mediante un modal interactivo.

## Demo

🔗 [Ver proyecto desplegado](https://desire-e.github.io/Adopcion_Animales_React/)

## Características

- Obtiene 5 gatos aleatorios (con raza) desde **TheCatAPI**.
- Obtiene 5 perros aleatorios desde **Dog CEO API**.
- Muestra cada animal en una tarjeta (`AnimalCard`) con imagen, nombre y botón de adoptar.
- Al pulsar "Adoptar", se abre un modal con el mensaje de adopción.
- Muestra un spinner de carga mientras se resuelven las peticiones a las APIs.
- Diseño responsive con Bootstrap.

## Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [TheCatAPI](https://thecatapi.com/) y [Dog CEO API](https://dog.ceo/dog-api/)

## Empezar en local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/TU_USUARIO/TU_REPO.git
   cd TU_REPO
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el proyecto en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Notas

- `getCats(n)` realiza dos peticiones encadenadas: una para obtener imágenes básicas y otra en paralelo (`Promise.all`) para obtener el nombre de la raza de cada gato. Si un gato no tiene raza definida, se muestra el nombre genérico `"Gato"`.
- `getDogs(n)` extrae el nombre de la raza a partir de la URL de la imagen devuelta por la API.

## Autor

Desire-e — [GitHub](https://github.com/TU_USUARIO)

## Licencia

Este proyecto es de uso personal/educativo.