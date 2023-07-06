export default class Alert{
    constructor(alertId){
        this.alert= document.getElementById("alert");
    }

    /**
     * Mostramos el alert 
     * @param {*} message 
     */
    show(message){
        this.alert.classList.remove('d-none');//lo mostramos
        this.alert.innerHTML = message; //lo que va a decir el alert
    }

    hide(){
        this.alert.classList.add('d-none'); //se oculta
    }
}