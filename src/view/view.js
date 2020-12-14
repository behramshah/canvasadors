class View {
    constructor () {
        this.root = null;
        this.mainContainer = null; 
    }

    init = () => {
        this.root = document.getElementById("root");
        this.mainContainer = this.createDiv({className: "root__main-container", id: "main-container"});

        this.root.append(this.mainContainer);
    }

    createDiv = (props) => {
        const div = document.createElement("div");

        props.id && (div.id = props.id);
        props.className && (div.className = props.className);

        return div;
    }

    
}

export default View;