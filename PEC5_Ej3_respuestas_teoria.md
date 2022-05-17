- login UOC: joalopezmo@uoc.edu
- Nombres y apellidos: Jorge Alejandro Lopez Montoya
- Repositorio GIT https://github.com/joalopezmo/PEC5-Frontend.git

**Respuestas teoricas**

***¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?***

FormControl es una clase que nos permite realizar seguimiento en el valor y el estatus de un form individual. Se utiliza instanciando la clase inicialmente

const control = new FormControl('some value');

FormGroup 

***todos los validadores que incluye Angular para ser utilizados en los formularios reactivos***

-funciones validadoras
    validadoras sincronas: Funciones sincrónicas que toman una instancia de control e inmediatamente devuelven un conjunto de errores de validación o un valor nulo. Se pasan como el segundo argumento cuando cree una instancia de FormControl.

    validadoras asincronas: Funciones asincrónicas que toman una instancia de control y devuelven una Promesa u Observable que luego emite un conjunto de errores de validación o nulo. Se pasan como el tercer argumento cuando cree una instancia de FormControl.

-funciones validadoras incorporadas: Se pueden escribir funciones propias de validación, o puede usar algunos de los validadores integrados de Angular. Los mismos validadores integrados que están disponibles como atributos en formularios basados ​​en plantillas, como required y minlength, están todos disponibles para usar como funciones de la clase Validators.



***¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?***

Los estados en los fomularios reactivos son utilizados de forma muy parecida que en los formularios dirigidos por plantilla. Los estados nos permite mirar el control de formulario, si el usuario a interactuado, visitado o cambiado, y si este esta valido o no. El principal uso es precisamente la verificacion de la validacion del formulario ampliando las validaciones propias de HTML. Lo que cambia con respecto a los formularios dirigidos por plantilla es el método de acceso a estas propiedades

                   state       true                false
estado de control -visitado --> ng-touched --------  ng-untouched
                  -cambiado --> ng-dirty   --------  ng-pristine
                  -valido   --> ng-valid   --------  ng-invalid
