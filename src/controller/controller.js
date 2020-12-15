class Controller {
    constructor (view) {
        this.view = view;
        // this.model = model;
    }
    
    init = () => {
       this.view.init(); 
    }
}

export default Controller;