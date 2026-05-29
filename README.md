# Clase2

Proyecto desarrollado en Angular 21 que implementa un formulario reactivo utilizando FormBuilder, validaciones y directivas modernas de Angular.

El formulario incluye los campos:

* Nombre (obligatorio, mínimo 3 caracteres).
* Email (obligatorio, formato válido).
* Mensaje (opcional).

También incorpora validaciones, estilos dinámicos, deshabilitación del botón de envío y reinicio del formulario luego de un envío exitoso.

## Repository

https://github.com/sebuxx2/clase-2

git clone https://github.com/sebuxx2/clase-2.git


## Development server

Para iniciar el servidor de desarrollo ejecutar:

```bash
ng serve
```

Luego abrir el navegador en:

```text
http://localhost:4200/
```

## Install dependencies

Para instalar las dependencias del proyecto ejecutar:

```bash
npm install
```

## Build

Para compilar el proyecto ejecutar:

```bash
ng build
```

Los archivos generados se almacenarán en el directorio `dist/`.

## Console Output Example

Al enviar correctamente el formulario, en la consola del navegador se mostrará una salida similar a:

```javascript
{
  nombre: "Sebastian",
  email: "sebastian@email.com",
  mensaje: "Hola Angular"
}
```

## Author

* Sebastián Edelmar López
* Curso: Angular
* Unidad 2 - Formularios Reactivos

## References

* Angular Documentation: https://angular.dev
* Angular CLI Documentation: https://angular.dev/tools/cli
* Material de la cátedra

