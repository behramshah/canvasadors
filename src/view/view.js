class View {
    constructor () {
        this.root = null;
        this.canvas = null;
        this.mainContainer = null; 
    }

    init = () => {
        
        this.root = document.getElementById("root");
        this.mainContainer = this.createDiv({className: "root__main-container", id: "main-container"});
        
        this.createCanvas();

        this.mainContainer.append(this.canvas);
        this.root.append(this.mainContainer);
        
    }
    
    createCanvas = () => {
        this.canvas = this.createElemntCanvas({className: 'main-container__canvas', id:'canvas', height: '400px', width: '800px' });
     }	 

    createDiv = (props) => {
        const div = document.createElement("div");

        props.id && (div.id = props.id);
        props.className && (div.className = props.className);

        return div;
    }
}

export default View;
