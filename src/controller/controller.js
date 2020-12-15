class Controller {
    constructor (view) {
        this.view = view;
        this.isPressed = null;
        this.currentRange = null;
        this.currentColor = null;
    }
    
    init = () => {
        this.view.init(); 
        this.isPressed = false;
        this.view.listenerDraw(this.draw.bind(this));
        this.view.getRange(this.getCurrentRange.bind(this));
        this.view.getColor(this.getCurrentColor.bind(this));
        this.view.listenerEndPosition(this.endPosition.bind(this));
        this.view.listenerStartPosition(this.startPosition.bind(this));
    }

    startPosition = event => {
        this.isPressed = true;
        this.draw(event);
    }

    endPosition = () => {
        this.isPressed = false;
        this.view.ctx.beginPath();
    }

    draw = event => {
        if(this.isPressed) {
            this.view.ctx.lineWidth = Number(this.currentRange);
            this.view.ctx.lineCap = 'round';
            this.view.ctx.strokeStyle = this.currentColor;
            this.view.ctx.lineTo(event.clientX, event.clientY);
            this.view.ctx.stroke();
            this.view.ctx.beginPath();
            this.view.ctx.moveTo(event.clientX, event.clientY);
        }              
    }

    getCurrentRange = () => {
        this.currentRange = this.view.rangeInput.value;
    }

    getCurrentColor = () => {
        this.currentColor = this.view.colorInput.value;
    }
}

export default Controller;