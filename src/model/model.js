class Model {
    constructor() {
        this.dataBase = [];
    }

    drawFromDb = (ctx) => {
        this.dataBase.forEach(line => {
            ctx.lineWidth = Number(line.width);
            ctx.lineCap = 'round';
            ctx.strokeStyle = line.color;

            line.coordinates.forEach(coor => {
                ctx.lineTo(coor.x, coor.y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(coor.x, coor.y);
                
            });
            ctx.beginPath();
        });
    }
    
    addToDb = (newLine) => {
        this.dataBase.push(newLine);
  
    }
}

export default Model;