import "./style.less"

import View from "./view/view";
import Controller from './controller/controller';

function init() {
	const view = new View();
	const controller = new Controller(view);

	controller.init();
}

init();