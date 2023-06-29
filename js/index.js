import Model from './modelo.js';
import View from './vista.js';

document.addEventListener('DOMContentLoaded',function () {

        const model = new Model();
        const view = new View();

        model.setView(view);
        view.setModel(model);

});