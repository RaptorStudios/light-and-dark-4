/// <reference path="../core/AbstractScene.ts" />

/**
 * Abstract scene class for managing static rendering
 */
abstract class AbstractStaticScene extends AbstractScene {

    constructor(grid: StaticGrid) {
        super(grid);
        this.renderingConfiguration.showEditorGrid = true;
        this.renderingConfiguration.enableSelection = true;
    }

    protected mainGameLoop_pre() {
        if (!super.mainGameLoop_pre()) {
            return false;
        }

        return true;
    }

    protected mainGameLoop_post(boundariesX: IRange, boundariesY: IRange) {
        super.mainGameLoop_post(boundariesX, boundariesY);
    }

    protected render(map: IMap, context: CanvasRenderingContext2D, minRow: number, maxRow: number, minColumn: number, maxColumn: number) {
        super.render(map, context, minRow, maxRow, minColumn, maxColumn, false);
    }

    toggleEditorGrid(enable?: boolean) {
        if (enable != null) {
            this.renderingConfiguration.showEditorGrid = enable;
        } else {
            this.renderingConfiguration.showEditorGrid = !this.renderingConfiguration.showEditorGrid;
        }
    }

    protected renderPointer() {
        if (this.pointer.i != null && this.pointer.j != null) {
            this.context.save();
            this.context.globalAlpha = 0.4;
            this.context.fillStyle = Constant.Color.YELLOW;
            this.context.fillRect(
                this.pointer.i * this.grid.cellW,
                this.pointer.j * this.grid.cellH,
                this.grid.cellW,
                this.grid.cellH);
            this.context.restore();
        }
    }
    
    select(i: number, j: number) {
        if (i !== null && j !== null) {
            this.renderingConfiguration.selectCellStart = {
                i: i,
                j: j
            };
            this.renderingConfiguration.selectCellEnd = null;
        }
    }

    selectEnd(i: number, j: number) {
        if (i != null && j != null) {
            this.renderingConfiguration.selectCellEnd = {
                i: i,
                j: j
            };
        }
    }

    cleanSelection() {
        this.renderingConfiguration.selectCellStart = null;
        this.renderingConfiguration.selectCellEnd = null;
    }

    /**
     * Return the rectangular area currently selected in the scene.
     * Both the top-left point (x,y) and the bottom-right point
     * (x+w, y+h) are included in the area
     */
    public getSelectionArea(): IRectangle {
        if (Utils.isEmpty(this.renderingConfiguration.selectCellStart)) {
            return null;
        }
        let x1 = this.renderingConfiguration.selectCellStart.i;
        let y1 = this.renderingConfiguration.selectCellStart.j;
   
        let x2;
        let y2;
        if (!Utils.isEmpty(this.renderingConfiguration.selectCellEnd)) {
            x2 = this.renderingConfiguration.selectCellEnd.i;
            y2 = this.renderingConfiguration.selectCellEnd.j;
            if (x1 > x2) {
                let tmp = x1;
                x1 = x2;
                x2 = tmp;
            }
            if (y1 > y2) {
                let tmp = y1;
                y1 = y2;
                y2 = tmp;
            }
        } else {
            x2 = this.renderingConfiguration.selectCellStart.i;
            y2 = this.renderingConfiguration.selectCellStart.j;
        }
                
        return {
            x: x1,
            y: y1,
            w: x2 - x1,
            h: y2 - y1
        };
    }
       
    protected renderDynamicElements(minRow, maxRow, minColumn, maxColumn, i, j, onTop) {
    }
}