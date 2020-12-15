class Controller {
    constructor (view) {
        this.view = view;
        this.currentColor = null;
        this.currentRange = null;
    }
    
    init = () => {
       this.view.init(); 
       this.view.getColor(this.getCurrentColor.bind(this));
    }

    getCurrentColor = () => {
        this.currentColor = this.view.colorInput.value;
        console.log(this.currentColor)
    }
}

export default Controller;