class Controller {
    constructor(view) {
        this.view = view;
        this.isPressed = null;
        this.currentRange = 25;
        this.currentColor = null;
    }

    init = () => {
        this.view.init();

        this.ctx = this.view.canvas.getContext('2d');
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

        this.ctx.beginPath();
    }

    draw = event => {
        if (this.isPressed) {
            this.ctx.lineWidth = Number(this.currentRange);
            this.ctx.lineCap = 'round';
            this.ctx.strokeStyle = this.currentColor;

            this.ctx.lineTo(event.layerX, event.layerY);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(event.layerX, event.layerY);
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