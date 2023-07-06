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
   * cuando recibimos la losta todos la itera para agregar una nueva fila para cada todo
   * sirve para cuando tengamos elmacenado en el localstorage todos se queden ahi y no se borren en terminso de vista
   */
  render() {
    const todos = this.model.getTodos();
    for (const todo of todos) {
      this.addrow(todo);
    }
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

  removeTOdo(id){
    this.model.removeTodo(id);
    document.getElementById(id).remove(id);
  }

  toggleCompleted(id){
    this.model.toggleCompleted(id);
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
        <td>${todoModelo.description}</td>
        <td class="text-center">
                
              </td>
              <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
        </td>
        `;
        //agregamos manuelamente el checked
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todoModelo.completed; //le pasamos el no checado
        checkbox.onclick = () => this.toggleCompleted(todoModelo.id);//le pasamos la funcion para que le cambieel chekced
        row.children[2].appendChild(checkbox);//lo agregamos

        const removeBtn = document.createElement('button'); //creamos un boton
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1');//le damos el css
        removeBtn.innerHTML = '<i class="fa fa-trash"><i>'; //le damos el logo del boton
        removeBtn.onclick =  () => { //con el click llamamos a la funcion removeTodo y le 
            this.removeTOdo(todoModelo.id) //recuperamos el id de la fila en la que estamos

        }
        row.children[3].appendChild(removeBtn); //el espacio 4 donde ponemos los botones
        //le agregaremos elboton removebtn
        

  }
}
