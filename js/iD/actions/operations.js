iD.operations = {};

iD.operations.addNode = function(map, node) {
    map.graph.modify(function(graph) {
        var o = {};
        o[node.id] = node;
        return graph.set(o);
    }, 'Added a new unidentified place');
};