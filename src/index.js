import "./style.less"
import Model from "./model/model";
import View from "./view/view";
import Controller from './controller/controller';

function init() {
	const view = new View();
	const model = new Model();
	const controller = new Controller(view, model);

	controller.init();
}

init();