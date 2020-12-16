class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.newDraw = null;
        this.isPressed = null;
    }

    init = () => {
        this.view.init();

        this.isPressed = false;
        
        this.view.getColor();
        this.view.getRange();
        this.view.listenerDraw(this.setToDb.bind(this));
        this.view.listenerEndPosition(this.endPosition.bind(this));
        this.view.listenerOutCanvas(this.endPosition.bind(this));
        this.view.listenerStartPosition(this.startPosition.bind(this));
    }
    
    startPosition = (x, y) => {
        this.isPressed = true;
        this.newDraw = {
            color: this.view.currentColor,
            width: this.view.currentRange,
            coordinates: [],
        }
        this.setToDb(x, y);
    }
    
    endPosition = () => {
        if(this.isPressed) {
            this.model.addToDb(this.newDraw);
            this.model.drawFromDb(this.view.ctx);
            
        }
        this.isPressed = false;

    }
    
    setToDb = (x, y ) => {
        if (this.isPressed) {   
            this.newDraw.coordinates.push({x: x, y: y});          
        }
    }  
}

export default Controller;