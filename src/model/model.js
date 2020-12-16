class Model {
    constructor(controller) {
        this._db = [];
    }

    addToDb = (value) => {
        if (value) {
            this._db.push(value);
        }
        console.log(this._db); 
       
    }
}

export default Model;