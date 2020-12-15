class View {
    constructor() {
        this.ctx = null;
        this.root = null;
        this.canvas = null;
        this.mainContainer = null;
        this.currentRange = null;
        this.currentColor = null;
    }

    init = () => {
        this.root = document.getElementById('root');
        this.canvas = this.createCanvas({ className: 'main-container__canvas', id: 'canvas', height: '400', width: '800' });
        this.ctx = this.canvas.getContext('2d');
        this.toolBar = this.createDiv({ className: 'main-container__tool-bar', id: 'tool-bar' });
        this.rangeInput = this.createInput({ type: 'range', className: 'main-container__range', id: 'range', min: '1', max: '50', step: '1', value: '25' });
        this.colorInput = this.createInput({ type: 'color', className: 'main-container__color', id: 'color', value: '#000000' });
        this.mainContainer = this.createDiv({ className: 'root__main-container', id: 'main-container' });

        this.toolBar.append(this.rangeInput);
        this.toolBar.append(this.colorInput);
        this.mainContainer.append(this.canvas);
        this.mainContainer.append(this.toolBar);
        this.root.append(this.mainContainer);
    }

    listenerStartPosition = cb => {
        this.canvas.addEventListener('mousedown', event => {
            this.currentColor = this.colorInput.value;
            this.currentRange = this.rangeInput.value;
            cb(event.layerX, event.layerY);
        });
    }

    listenerEndPosition = cb => {
        this.canvas.addEventListener('mouseup', () => {
            cb();
        });
    }

    listenerOutCanvas = cb => {
        this.canvas.addEventListener('mouseout', () => {
            cb();
        });
    }

    listenerDraw = cb => {
        this.canvas.addEventListener('mousemove', event => {
            cb(event.layerX, event.layerY);
        });
    }

    createDiv = props => {
        const div = document.createElement("div");

        props.id && (div.id = props.id);
        props.className && (div.className = props.className);

        return div;
    }

    createCanvas = props => {
        const canvas = document.createElement('canvas');

        props.id && (canvas.id = props.id);
        props.width && (canvas.width = props.width);
        props.height && (canvas.height = props.height);
        props.className && (canvas.className = props.className);

        return canvas;
    }

    createInput = props => {
        const input = document.createElement('input');

        props.id && (input.id = props.id);
        props.min && (input.min = props.min);
        props.max && (input.max = props.max);
        props.step && (input.step = props.step);
        props.type && (input.type = props.type);
        props.value && (input.value = props.value);
        props.className && (input.className = props.className);

        return input;
    }

    getRange = () => {
        this.rangeInput.addEventListener('change', () => {
            this.currentRange = this.rangeInput.value;
        });
    }

    getColor = () => {
        this.colorInput.addEventListener('change', () => {
            this.currentColor = this.colorInput.value;
        });
    }
}

export default View;