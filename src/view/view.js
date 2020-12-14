class View {
    constructor () {
		this.canvas = null;
	 };
	 
	 init = () => {
		 this.createCanvas();
	 }


	 createElemntCanvas = props => {
			const canvas = document.createElement("canvas");
 
			props.className && (canvas.className = props.className);
			props.id && (canvas.id = props.id);
			props.height&& (canvas.height = props.height);
			props.width&& (canvas.width = props.width);
			
			return canvas;
	 }

	 createCanvas = () => {
		this.canvas = this.createElemntCanvas({className: 'main-container__canvas', id:'canvas', height: '400px', width: '800px' });
	 }	 
}