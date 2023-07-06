import Alert from './alert.js'

export default class AddTodo{

    /**
     * evento del boton para agregar el titulo y descripcion
     */
    constructor(){
        this.btn=document.getElementById("add");
        this.title= document.getElementById("title");
        this.description= document.getElementById("description");

        this.alert= new Alert('alert');
    }

    /**
     * la funcion manda al hacer click al boton el titulo y descripcion
     * se espera una funcion como parametro que sera una funcion 
     * que tendra dos parametros donde se pasaran las dos cosas cons sus valores,
     * lo que lo recibira el addtodo de la vista
     * @param {*} callback 
     */

    onclick(callback) {
        //click del boton 
        this.btn.onclick= () => {
            //si es vacio
        if (this.title.value==='' || this.description.value===''){
            this.alert.show('Title and description are required');
        }else{

            this.alert.hide();
            //si no es vacio se manda como parametros 
            callback(this.title.value,this.description.value);
        }
        };
    }
}