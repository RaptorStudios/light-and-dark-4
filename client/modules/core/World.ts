/**
 * Module to handle game map
 */
module World {

    export class Map {

        rows: number;
        columns: number;

        private layers: MapLayer[];

        constructor() {
            //TODO
            this.rows = 21;
            this.columns = 16;
            this.layers = [];
        }

        render(context: CanvasRenderingContext2D, x: number, y: number, renderingOptions: World.Options) {
            for (var layer in this.layers) {
                layer.render(context, x, y);
            }
            if (renderingOptions != null) {
                if (renderingOptions.showGrid) {
                    context.strokeStyle = Constant.Color.RED;
                    context.strokeRect(x * Display.cellW, y * Display.cellH, Display.cellW, Display.cellH);
                }
                if (renderingOptions.showCellNumbers) {
                    context.fillStyle = Constant.Color.RED;
                    context.font = "bold 10px Arial";
                    context.fillText(x + "," + y, x * Display.cellW + 1, y * Display.cellH + 10);
                }
            }
        }

        getLayers() {
            return this.layers.length;
        }

    };

    class MapLayer {

        render(context: CanvasRenderingContext2D, x: number, y: number) {
            //TODO
        }

    }

    export class Options {
        showGrid: boolean = false;
        showFPS: boolean = false;
        showCellNumbers: boolean = false;

        fps: number = 0;
    }

}