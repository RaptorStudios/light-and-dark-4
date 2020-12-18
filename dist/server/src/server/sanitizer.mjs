export function sanitizeMap(map) {
    map.blocks = undefined;
    map.dynamicBlocks = undefined;
    map.maxEventId = undefined;
    for (let l of map.layers) {
        if (l.data !== undefined) {
            for (let i = 0; i < l.data.length; i++) {
                let n = l.data[i];
                if (n !== undefined && (isNaN(n) || Array.isArray(n))) {
                    l.data[i] = undefined;
                }
            }
        }
    }
}
