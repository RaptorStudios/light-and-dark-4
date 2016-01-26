/// <reference path="model/Map.ts" />
/// <reference path="AbstractGrid.ts" />

/**
 * Class for handling gamer maps
 */
class MapEngine {
    
    rows: number;
    columns: number;
    
    private grid: AbstractGrid;
    
    constructor(grid: AbstractGrid){
       this.grid=grid; 
        //TODO remove
        this.rows=40;
        this.columns=30;
    }

    save() {
        //TODO save the map, sending the updated JSON to server
    }

    render(context: CanvasRenderingContext2D, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {

    }

    renderGlobalEffects(context: CanvasRenderingContext2D, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {

    }

    renderUI(context: CanvasRenderingContext2D, renderingConfiguration: RenderConfiguration, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        for (var y = minRow; y <= maxRow; y++) {
            for (var x = minColumn; x <= maxColumn; x++) {

                if (!Utils.isEmpty(renderingConfiguration)) {
                    if (renderingConfiguration.showGrid) {
                        context.strokeStyle = Constant.Color.RED;
                        context.strokeRect(
                            x * this.grid.cellW,
                            y * this.grid.cellH,
                            this.grid.cellW,
                            this.grid.cellH);
                    }
                    if (renderingConfiguration.showEditorGrid) {
                        context.save();
                        context.globalAlpha = 0.4;
                        context.strokeStyle = Constant.Color.GREY;
                        context.strokeRect(
                            x * this.grid.cellW,
                            y * this.grid.cellH,
                            this.grid.cellW,
                            this.grid.cellH);
                        context.restore();
                    }
                    if (renderingConfiguration.showCellNumbers) {
                        context.fillStyle = Constant.Color.RED;
                        context.font = "bold 10px Arial";
                        context.fillText(
                            x + "," + y,
                            x * this.grid.cellW + 1,
                            y * this.grid.cellH + 10);
                    }
                }
            }
        }
    }

    renderGlobalUI(context: CanvasRenderingContext2D, renderingConfiguration: RenderConfiguration) {
        if (!Utils.isEmpty(renderingConfiguration)) {
            if (renderingConfiguration.enableSelection && !Utils.isEmpty(renderingConfiguration.selectPointStart)) {
                var x = renderingConfiguration.selectPointStart.x * this.grid.cellW;
                var y = renderingConfiguration.selectPointStart.y * this.grid.cellH;

                var w;
                var h;
                if (Utils.isEmpty(renderingConfiguration.selectPointEnd)) {
                    h = this.grid.cellH;
                    w = this.grid.cellW;
                } else {
                    var x2 = renderingConfiguration.selectPointEnd.x * this.grid.cellW;
                    var y2 = renderingConfiguration.selectPointEnd.y * this.grid.cellH;
                    if (x > x2) {
                        w = x - x2;
                        x = x2;
                    } else {
                        w = x2 - x;
                    }
                    if (y > y2) {
                        h = y - y2;
                        y = y2;
                    } else {
                        h = y2 - y;
                    }
                    w += this.grid.cellW;
                    h += this.grid.cellH;
                }
                context.save();
                context.strokeStyle = Constant.Color.RED;
                context.lineWidth = 3;
                context.strokeRect(x, y, w, h);
                context.restore();

            }
        }
    }
}