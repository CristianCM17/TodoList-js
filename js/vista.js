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
   * Funcion parapasarle el titulo y descripcion al modelo
   * @param {*} title
   * @param {*} description
   */

  addTodo(title, description) {
    this.model.addTodo(title, description);
  }
}
