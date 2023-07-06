export default class Model {

    /**
     * Todo lo relacionado con los objetos todos
     */
  constructor() {
    this.view = null;
    this.todos = JSON.parse(localStorage.getItem('todos'));


    //si hay todos nullos o undefined agregamos un todo default
    if (!this.todos || this.todos.length < 1) {
        this.todos = [
          {
            id: 0,
            title: 'Learn JS',
            description: 'Watch JS Tutorials',
            completed:false
          }
        ]
    }

    this.currentId=1;
  }

  setView(view) {
    this.view = view;
  }

  /**
   * Almacenamos en el navegador los todos y se convierten a formato Json
   */
  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getTodos() {
    return this.todos;
  }

  /**
   * lo mismo que
   * const index = this.todos.findIndex((todo) => todo.id === id);
   * @param {*} id 
   */
  findTodo(id) {
    return this.todos.findIndex((todo) => todo.id === id);
  }

  /**
   * encontrar el todo por id y marcarle lo diferente a completed
   * @param {*} id 
   */
  toggleCompleted(id) {
    const index = this.findTodo(id)
    const todo= this.todos[index];
    todo.completed = !todo.completed; //si esfalso pasa a verdadero y bi
    console.log(this.todos);
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

  /**
   * Buscar el indice del todo que nos la pasara
   * la vista, para borrarlo del array todos
   * @param {*} id 
   */

  removeTodo(id) {
    const index = this.todos.findIndex((todo) => todo.id === id); //Buscar el id del todo
    //console.log(this.todos[index]);//me imprime el todo que buscamos
    this.todos.splice(index, 1); //me borra el todo apartir del index osea que borra asi mismo

  }
}
