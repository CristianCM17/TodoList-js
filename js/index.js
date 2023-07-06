import Model from './modelo.js';
import View from './vista.js';

document.addEventListener('DOMContentLoaded',function () {

        const model = new Model();
        const view = new View();

        model.setView(view);
        view.setModel(model);

        //por cada cosa que encuentre en el localstorage crea una fila nueva
        view.render();

});