class Controller {
    constructor(view) {
        this.view = view;
        this.isPressed = null;
    }

    init = () => {
        this.view.init();

        this.isPressed = false;

        this.view.getColor();
        this.view.getRange();
        this.view.listenerDraw(this.draw.bind(this));
        this.view.listenerEndPosition(this.endPosition.bind(this));
        this.view.listenerOutCanvas(this.endPosition.bind(this));
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
        if (this.isPressed) {
            this.view.ctx.lineWidth = Number(this.view.currentRange);
            this.view.ctx.lineCap = 'round';
            this.view.ctx.strokeStyle = this.view.currentColor;

            this.view.ctx.lineTo(event.layerX, event.layerY);
            this.view.ctx.stroke();
            this.view.ctx.beginPath();
            this.view.ctx.moveTo(event.layerX, event.layerY);
        }
    }
}

export default Controller;