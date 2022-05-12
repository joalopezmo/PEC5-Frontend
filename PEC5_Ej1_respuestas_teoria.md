- login UOC: joalopezmo@uoc.edu
- Nombres y apellidos: Jorge Alejandro Lopez Montoya
- Repositorio GIT https://github.com/joalopezmo/PEC5-Frontend.git

**Respuestas teoricas**

***¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?***

-Los formularios dirigidos por template utilizan FormsModule, los reactivos utilizan ReactiveFormsModule

-Los formularios dirigidos por template son asincronos, mientras que los formularios reactivos son sincronos.

-La interaccion en los formularios dirigidos por template se produce en el template, mientras que en los formularios reactivo, esta interaccion se realiza en el componente mismo.

***¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?***

La directiva ngModel crea un instancia de la clase FormControl de un modelo y une esta instancia a un elemento de control de formulario.

ngModelChange es una salida de la directiva ngModel que se dispara cuando el modelo cambia. Este evento no se puede utilizar sin la directiva ngModel

**ngModel**
<select [(ngModel)]="data" (ngModelChange)="dataChanged($event)" name="data">
      <option *ngFor="let currentData of allData" [ngValue]="currentData">
          {{data.name}}
      </option>
  </select>

**ngModelChange**
dataChanged(newObj) {
    // here comes the object as parameter
}

***¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?***

El estado nos permite mirar el control de formulario, si el usuario a interactuado, visitado o cambiado, y si este esta valido o no. El principal uso es precisamente la verificacion de la validacion del formulario ampliando las validaciones propias de HTML.
                    state       true                false
estado de control -visitado --> ng-touched --------  ng-untouched
                  -cambiado --> ng-dirty   --------  ng-pristine
                  -valido   --> ng-valid   --------  ng-invalid

La directiva ngModel cambia y agraga clases CSS al elemento segun el estado en que se encuentre.

***¿Qué ventajas aportan los FormGroup en la composición de formularios?***

Los FormGroup permiten realizar un seguimiento al valor y validez de un grupo de instancias del FormControl. Si uno de los controles de un grupo no es valido, entonces todo el grupo deja de serlo.