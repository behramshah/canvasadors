class View {
    constructor() {
        this.root = null;
        this.canvas = null;
        this.mainContainer = null;
    };

    init = () => {
        this.root = document.getElementById("root");
        this.mainContainer = this.createDiv({ className: "root__main-container", id: "main-container" });
        this.canvas = this.createCanvas({ className: 'main-container__canvas', id: 'canvas', height: '400', width: '800' });
        this.rangeInput = this.createInput({type: 'range', className: 'main-container__range', id: 'range', min: '1', max: '75', step: '1'});
        this.colorInput = this.createInput({type: 'color', className: 'main-container__color', id: 'color'});
        this.toolBar = this.createDiv({className: 'main-container__tool-bar', id: 'tool-bar'});

        this.toolBar.append(this.rangeInput);
        this.toolBar.append(this.colorInput);
        this.mainContainer.append(this.canvas);
        this.mainContainer.append(this.toolBar);
        this.root.append(this.mainContainer);
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
        props.step && (input.step = props.step)

        return input;
    }

    getRange = (cb) => {
        this.rangeInput.addEventListener('change', () => {     
            cb();
        });
    }
}

export default View;