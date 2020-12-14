class View {
    constructor() {
        this.root = null;
        this.canvas = null;
        this.mainContainer = null;
        this.currentColor = null;
        this.currentRange = null;
    };

    init = () => {
        this.root = document.getElementById("root");
        this.mainContainer = this.createDiv({ className: "root__main-container", id: "main-container" });
        this.canvas = this.createElemntCanvas({ className: 'main-container__canvas', id: 'canvas', height: '400px', width: '800px' });

        this.mainContainer.append(this.canvas);
        this.root.append(this.mainContainer);
    }

    createDiv = (props) => {
        const div = document.createElement("div");

        props.id && (div.id = props.id);
        props.className && (div.className = props.className);

        return div;
    }

    createElemntCanvas = props => {
        const canvas = document.createElement("canvas");

        props.className && (canvas.className = props.className);
        props.id && (canvas.id = props.id);
        props.height && (canvas.height = props.height);
        props.width && (canvas.width = props.width);

        return canvas;
    }
    createInput = props => {
        const brushWidth = document.createElement("input");

        props.type && (brushWidth.type = props.type);
        props.className && (brushWidth.className = props.className);
        props.id && (brushWidth.id = props.id);
        props.min && (brushWidth.min = props.min);
        props.max && (brushWidth.max = props.max);
        props.step && (brushWidth.step = props.step)
    }

    createCanvas = () => {
        this.canvas = this.createElemntCanvas({
            className: 'main-container__canvas', id: 'canvas',
            height: '400px', width: '800px'
        });
    }

    createInputColor = () => {
        this.currentColor = this.createInput({
            type: 'color', className: 'main-container__color', id: 'color'
        })
    }

    createInputRange = () => {
        this.currentRange = this.createInput({
            type: 'range', className: 'main-container__range', id: 'range',
            min: '1', max: '75', step: '1'
        })
    }

}
