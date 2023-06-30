import AddTodo from "../components/add-todo.js";

export default class view {
  /**
   * Controlaremos la tabla
   */
  constructor() {
    this.model = null;
    this.table = document.getElementById("table");
    this.addTodoForm = new AddTodo(); //instancia de la clase add-todo
    

    //usamos la funcion onclick que espera una funcion con dos parametros
    //y se los asignamos al addtodo
    this.addTodoForm.onclick((title,descripcion) => this.addTodo(title,descripcion))
  }

  /**
   * Pasamos el objeto modelos para trabajar con sus metodos
   * @param  model
   */
  setModel(model) {
    this.model = model;
  }

  /**
   * Funcion parapasarle el titulo y descripcion al addtodo del modelo el cual crea
   * objetos con esa inforamcion
   * @param {*} title
   * @param {*} description
   */

  addTodo(title, description) {
   const todoModelo= this.model.addTodo(title, description);
   this.addrow(todoModelo); //recie la funcion que agrega la fila pasandole un objeto todo

  }

  /**
   * funcion para recibir el objeto del modelo y cree la fila
   * @param {*} todoModelo 
   */

  addrow(todoModelo){
    const row = table.insertRow(); //insertamos una nueva fila
        //agregamos al html el contenido 
        row.setAttribute('id', todoModelo.id) //le damos un atributo a cada fila que es un id que estara aumentando
        row.innerHTML = `  
        <td>${todoModelo.title}</td>
        <td>${todoModelo.descripcion}</td>
        <td class="text-center">
                <input type="checkbox">
              </td>
              <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
        </td>
        `;

        const removeBtn = document.createElement('button'); //creamos un boton
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1');//le damos el css
        removeBtn.innerHTML = '<i class="fa fa-trash"><i>'; //le damos el logo del boton
        removeBtn.onclick = function () { //con el click llamamos a la funcion removeTodo y le 
            removeTOdo(row.getAttribute('id')) //recuperamos el id de la fila en la que estamos

        }
        row.children[3].appendChild(removeBtn); //el espacio 4 donde ponemos los botones
        //le agregaremos elboton removebtn

  }
}
