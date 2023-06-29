export default class Model {

    /**
     * Todo lo relacionado con la creacion de losobjetos todos
     */
  constructor() {
    this.view = null;
    this.todos = [];
    this.currentId=1;
  }

  setView(view) {
    this.view = view;
  }

  getTodos() {
    return this.todos;
  }


  addTodo(title, description) {
  //creamos un nuevo objeto  
    const todo = {
      id: this.currentId++,
      title, //no es necesario darle el valor de titulo porque tiene el mismo nombre
      description, //lo mismo
      completed: false,
    };

    this.todos.push(todo); //agregamos al array de todos
    console.log(this.todos);

    //devolver un clon del objeto a la vista
    //return Object.assign({}, todo);
     return {...todo};
  }
}
