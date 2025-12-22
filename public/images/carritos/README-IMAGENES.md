# Rutas de Imágenes para Servicios

## Estructura de Carpetas

Cada servicio tiene su propia carpeta dentro de `public/images/servicios/`:

```
public/images/servicios/
├── carritos/
├── juegosmecanicos/
├── inflables/
├── salon/
├── stand/
├── fotovideo/
└── produccion/
```

## Estructura de Nombres

Para cada servicio, las imágenes deben seguir este patrón de nombres dentro de su carpeta:
- **{nombre-carpeta}1.{ext}** → Imagen principal (usada en la tarjeta del servicio)
- **{nombre-carpeta}2.{ext}** → Primera imagen de la galería
- **{nombre-carpeta}3.{ext}** → Segunda imagen de la galería
- ... y así sucesivamente

## Servicios Disponibles

### 1. Carritos (`carritos`)
- **Carpeta:** `carritos/`
- **Imagen principal:** `carritos/carritos1.jpeg` ✅ (Ya configurada)
- **Galería:** `carritos/carritos2.jpeg`, `carritos/carritos3.jpeg`, etc.

### 2. Juegos Mecánicos (`juegos-mecanicos`)
- **Carpeta:** `juegosmecanicos/`
- **Imagen principal:** `juegosmecanicos/juegosmecanicos1.jpg` (opcional)
- **Galería:** `juegosmecanicos/juegosmecanicos2.jpg`, `juegosmecanicos/juegosmecanicos3.jpg`, etc.

### 3. Juegos Inflables (`juegos-inflables`)
- **Carpeta:** `inflables/`
- **Imagen principal:** `inflables/inflables1.jpg` (opcional)
- **Galería:** `inflables/inflables2.jpg`, `inflables/inflables3.jpg`, etc.

### 4. Juegos de Salón (`juegos-de-salon`)
- **Carpeta:** `salon/`
- **Imagen principal:** `salon/salon1.jpg` (opcional)
- **Galería:** `salon/salon2.jpg`, `salon/salon3.jpg`, etc.

### 5. Juegos Stand (`juegos-stand`)
- **Carpeta:** `stand/`
- **Imagen principal:** `stand/stand1.jpg` (opcional)
- **Galería:** `stand/stand2.jpg`, `stand/stand3.jpg`, etc.

### 6. Shows (`shows`)
- **Carpeta:** `produccion/`
- **Imagen principal:** `produccion/produccion1.jpg` (opcional)
- **Galería:** `produccion/produccion2.jpg`, `produccion/produccion3.jpg`, etc.

### 7. Recuerdos: Foto/Video (`recuerdos-foto-video`)
- **Carpeta:** `fotovideo/`
- **Imagen principal:** `fotovideo/fotovideo1.jpg` (opcional)
- **Galería:** `fotovideo/fotovideo2.jpg`, `fotovideo/fotovideo3.jpg`, etc.

## Formato de Archivos

- **Extensiones soportadas:** `.jpg`, `.jpeg`, `.png`, `.webp`
- **Ubicación:** Cada servicio tiene su carpeta en `public/images/servicios/{nombre-carpeta}/`
- **Nombres:** Usar el nombre de la carpeta seguido del número (ej: `stand/stand2.jpg`)

## Funcionalidad

- **Imagen principal:** Se muestra en la tarjeta del servicio en la página principal
- **Galería:** Se muestra automáticamente en la página de detalle del servicio
- **Modal:** Al hacer clic en cualquier imagen de la galería, se abre en tamaño completo con navegación

## Notas Importantes

- Las imágenes que no existan se ocultarán automáticamente
- No hay límite en el número de imágenes por servicio (hasta 50)
- El sistema detecta automáticamente las imágenes disponibles
- Las imágenes se cargan de forma diferida (lazy loading) para mejor rendimiento

