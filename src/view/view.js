class View {
    constructor() {
        this.ctx = null;
        this.root = null;
        this.canvas = null;
        this.isPressed = null;
        this.mainContainer = null;
        this.currentColor = null;
        this.currentRange = null;
    };

    init = () => {
        this.root = document.getElementById("root");
        this.mainContainer = this.createDiv({ className: "root__main-container", id: "main-container" });
        this.canvas = this.createCanvas({ className: 'main-container__canvas', id: 'canvas', height: '400', width: '800' });
        this.ctx = this.canvas.getContext('2d');
        this.isPressed = false;
        this.currentRange = this.createInput({type: 'range', className: 'main-container__range', id: 'range', min: '1', max: '75', step: '1'});
        this.currentColor = this.createInput({type: 'color', className: 'main-container__color', id: 'color'});
        this.toolBar = this.createDiv({className: 'main-container__tool-bar', id: 'tool-bar'});

        this.toolBar.append(this.currentRange);
        this.toolBar.append(this.currentColor);
        this.mainContainer.append(this.canvas);
        this.mainContainer.append(this.toolBar);
        this.root.append(this.mainContainer);
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
        if(isPressed) {
            this.ctx.lineWidth = Number(this.currentRange);
            this.ctx.lineCap = 'round';
            this.ctx.strokeStyle = this.currentColor;

            this.ctx.lineTo(event.clientX, event.clientY);
            this.ctx.stroke();
        }
    }

    createDiv = (props) => {
        const div = document.createElement("div");

        props.id && (div.id = props.id);
        props.className && (div.className = props.className);

        return div;
    }

    createCanvas = props => {
        const canvas = document.createElement("canvas");

        props.className && (canvas.className = props.className);
        props.id && (canvas.id = props.id);
        props.height && (canvas.height = props.height);
        props.width && (canvas.width = props.width);

        return canvas;
    }

    createInput = props => {
        const input = document.createElement("input");

        props.type && (input.type = props.type);
        props.className && (input.className = props.className);
        props.id && (input.id = props.id);
        props.min && (input.min = props.min);
        props.max && (input.max = props.max);
        props.step && (input.step = props.step);

        return input;
    }
}

export default View;