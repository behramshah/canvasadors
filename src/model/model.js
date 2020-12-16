class Model {
    constructor() {
        this.dataBase = [
            {
                color: 'red',
                width: '25',
                coordinates: [
                    {
                        x: 226,
                        y: 174
                    },
                    {
                        x: 227,
                        y: 175
                    },
                    {
                        x: 228,
                        y: 176
                    }
                ]
            },
            {
                color: 'green',
                width: '1',
                coordinates: [
                    {
                        x: 300,
                        y: 150
                    },
                    {
                        x: 301,
                        y: 151
                    },
                ]
            }

        ]
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
        });
    }
}

export default Model;