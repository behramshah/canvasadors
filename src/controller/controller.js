class Controller {
    constructor (view) {
        this.view = view;
        // this.model = model;
        this.currentColor = null;
        this.currentRange = null;
    }
    
    init = () => {
       this.view.init(); 
       this.view.getRange(this.getCurrentRange.bind(this));
    }

    getCurrentRange = () => {
        this.currentRange = this.view.rangeInput.value;
    }
}

export default Controller;