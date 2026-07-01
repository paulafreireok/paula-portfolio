PAULA FREIRE — PORTFOLIO V2 COMPLETE

Archivos principales:
- index.html: Home completa y cerrada.
- desafiate-desafianos.html
- sin-filtrar.html
- cultural-identity-bu-andina.html
- desiderata.html
- ucollective.html
- presente.html

Carpetas:
- assets/: imagenes y videos usados por los cases.
- style.css: estilos globales responsive.
- data.js: contenido estructurado de la web.
- admin.html: editor demo/local. Para la presentacion, usar la web publica.

Para publicar en GitHub/Vercel:
1. Descomprimir este ZIP.
2. Subir todos los archivos y la carpeta assets al repo.
3. Commit changes.
4. Vercel actualiza automaticamente el link.

Para cambiar rapido una imagen:
- Reemplazar el archivo dentro de assets/ manteniendo el mismo nombre.

Para cambiar textos/proyectos:
- Editar data.js.

Nota:
La version publica usa el contenido fijo de data.js para evitar que borradores locales oculten imagenes o videos.


LINKS: En el admin podés pegar linkedin.com/in/... o https://...; la Home normaliza automáticamente a https://. Para que los cambios se vean para todos en Vercel, editá data.js y hacé commit, o migrá luego a CMS real.


V3 notes:
- Public pages now read directly from data.js, avoiding old browser editor cache.
- Mobile responsive fixes added for home, case pages, galleries and videos.
- To update links, edit the links object in data.js, commit to GitHub, and Vercel will redeploy.
