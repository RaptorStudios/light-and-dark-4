/// <reference path="../../core/model/Commons.ts" />
/// <reference path="../../core/util/Utils.ts" />
/// <reference path="../../core/util/Constant.ts" />
/// <reference path="../../core/util/Errors.ts" />
/// <reference path="../../core/manager/MapManager.ts" />

namespace Tester {

    export function testPathfinding(width: number, height: number, actorI: number, actorJ: number, targetI: number,targetJ: number): ICell[] {  
        // Initialize map
        let map: IMap = {
            id: 0,
            tile: "Test",
            name: "Test",
            width: width,
            height: height,
            layers: [{
                type:"tilelayer",
            }],
            nextobjectid: 0,
            blocks:[]
        };
        for(let j=0; j<height; j++) {
            for(let i=0; i<width; i++) {
                map.blocks[i + j*width] = BlockDirection.NONE;
            }
        }
        // Initialize actor and target
        let actor: IActor = {
            id:0,
            name:"actor",  
            i:actorI,
            j:actorJ
        };
        let target: ICell = {
            i:targetI,
            j:targetJ
        };
        // Set pathfinding algorithm
        let pathfinder: MapManager.PathfinderEnum = MapManager.PathfinderEnum.BASIC;
        let alg: string = $("#alg").val();
        if(alg === "D* Lite") {
            pathfinder = MapManager.PathfinderEnum.D_STAR_LITE;
        }
        // Find path
        let path: ICell[] = [];
        let direction: DirectionEnum;
        let guard = 0;
        while (direction !== DirectionEnum.NONE) {
            direction = MapManager.pathFinder(map, actor, target, pathfinder);
            if(direction !== DirectionEnum.NONE) {
                actor = <IActor> Utils.moveToDirection(actor, direction);
                path.push({
                    i:actor.i,
                    j:actor.j   
                });
            }
            // Check guard to avoid infite loop
            guard++;
            if(guard > width * height) {
                console.error("Pathfinder has failed :(");
                break;    
            }
        }
        return path;
    };
}