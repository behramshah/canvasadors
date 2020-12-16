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

    startPosition = (x, y) => {
        this.isPressed = true;

        this.draw(x, y);
    }

    endPosition = () => {
        this.isPressed = false;

        this.view.ctx.beginPath();
    }

    draw = (x, y) => {
        if (this.isPressed) {
            this.view.ctx.lineWidth = Number(this.view.currentRange);
            this.view.ctx.lineCap = 'round';
            this.view.ctx.strokeStyle = this.view.currentColor;

            this.view.ctx.lineTo(x, y);
            this.view.ctx.stroke();
            this.view.ctx.beginPath();
            this.view.ctx.moveTo(x, y);
        }
    }
}

export default Controller;