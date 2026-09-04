# 🚀 Guía Paso a Paso: Cómo Subir y Activar tu Presentación en GitHub

¡Felicidades! Tienes listo un repositorio completo de presentación profesional compuesto por:
1. **GitHub Profile README (`README.md`)**: Para lucir en la portada de tu perfil de GitHub.
2. **Portfolio Web (`index.html`, `styles.css`, `script.js`)**: Para tener tu sitio web interactivo publicado gratis en **GitHub Pages**.

---

## 📌 Paso 0: Personaliza tus datos en 2 minutos

Antes de subirlo, abre los archivos y reemplaza los siguientes textos de ejemplo:
- `TU_USUARIO_GITHUB` ➔ Tu nombre de usuario real en GitHub (ej. `ainara-dev`).
- `tu-correo@example.com` ➔ Tu correo de contacto.
- `TU_LINKEDIN` ➔ Tu identificador de perfil de LinkedIn (ej. `ainara-apellido`).

---

## 🌟 Opción 1: Activar el README en tu Perfil de GitHub (El "Secreto" de GitHub)

GitHub tiene una función especial: si creas un repositorio con **el mismo nombre que tu usuario**, el archivo `README.md` se mostrará en la portada de tu perfil (`https://github.com/TU_USUARIO`).

### Pasos:
1. Inicia sesión en [GitHub.com](https://github.com).
2. Arriba a la derecha, haz clic en el botón **`+`** y selecciona **New repository**.
3. En **Repository name**, escribe **exactamente tu nombre de usuario** de GitHub.
   > Verás que aparece una caja verde con un mensaje especial: *"You found a secret! <usuario>/<usuario> is a special repository..."*
4. Asegúrate de que esté marcado como **Public** (Público).
5. Puedes dejar desmarcada la opción de "Add a README file" (ya que subiremos el nuestro).
6. Haz clic en **Create repository**.
7. En la pantalla siguiente, haz clic en **uploading an existing file** (o arrastra el archivo `README.md`).
8. Selecciona tu archivo `README.md`, escribe un mensaje de commit (ej. `Presentación inicial de perfil`) y pulsa **Commit changes**.
9. **¡Listo!** Entra a tu perfil de GitHub (`https://github.com/TU_USUARIO`) y verás tu portada con estadísticas y badges activa.

---

## 🌐 Opción 2: Publicar tu Portfolio Web en GitHub Pages (Gratis)

Puedes alojar tu sitio web interactivo (`index.html`, `styles.css`, `script.js`) directamente en internet sin pagar nada.

### Pasos:
1. En GitHub, haz clic en **`+`** ➔ **New repository**.
2. Dale el nombre que prefieras:
   - Si lo llamas `portfolio`, tu web será: `https://TU_USUARIO.github.io/portfolio/`
   - Si lo llamas `TU_USUARIO.github.io`, tu web será: `https://TU_USUARIO.github.io/`
3. Asegúrate de que sea **Public**.
4. Haz clic en **Create repository**.
5. Sube los archivos arrastrándolos al navegador:
   - `index.html`
   - `styles.css`
   - `script.js`
   - *(Opcional: puedes incluir también `README.md`)*
6. Haz clic en **Commit changes**.
7. Ahora activa GitHub Pages:
   - Ve a la pestaña **Settings** (Configuración) dentro del repositorio.
   - En el menú lateral izquierdo, haz clic en **Pages**.
   - En **Build and deployment** ➔ **Branch**:
     - Selecciona la rama `main` (o `master`).
     - Deja la carpeta en `/ (root)`.
     - Haz clic en **Save** (Guardar).
8. Espera 1 o 2 minutos. Al recargar la página, verás un recuadro verde que dice:
   > *"Your site is live at https://TU_USUARIO.github.io/..."*
9. ¡Tu portafolio ya está online y accesible para todo el mundo!

---

## 💻 Método alternativo: Subir mediante Git desde la terminal

Si en el futuro instalas Git o usas GitHub Desktop:

```bash
cd C:\Users\ainara\.gemini\antigravity\scratch\github-presentation
git init
git add .
git commit -m "Presentación profesional completa: Profile README + Web Portfolio"
git branch -M main
git remote add origin https://github.com/TU_USUARIO_GITHUB/NOMBRE_DEL_REPO.git
git push -u origin main
```

---

## 📁 Ubicación local de los archivos creados

Todos tus archivos están listos en tu ordenador en:
`C:\Users\ainara\.gemini\antigravity\scratch\github-presentation`

- `README.md`: Perfil con diseño dinámico, badges de ROS 2, PyTorch, STM32, estadísticas y proyectos.
- `index.html`: Estructura web del portfolio.
- `styles.css`: Estilos visuales modernos (modo oscuro/claro y adaptado a móviles).
- `script.js`: Interactividad (máquina de escribir, filtros de proyectos, copia de email).

