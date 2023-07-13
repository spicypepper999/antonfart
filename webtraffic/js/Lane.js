import { RoadNode } from "./RoadNode.js";
var Lane = /** @class */ (function () {
    function Lane(nodes, speedLimit, color) {
        this._nodes = nodes;
        this._speedLimit = speedLimit;
        this._color = color;
        this._laneEnd = null;
        this._laneStart = null;
        this._cars = [];
    }
    Object.defineProperty(Lane.prototype, "nodes", {
        get: function () {
            return this._nodes;
        },
        set: function (value) {
            this._nodes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lane.prototype, "laneEnd", {
        get: function () {
            return this._laneEnd;
        },
        set: function (value) {
            if (value instanceof Lane) {
                this._laneEnd = value;
                if (value.laneStart == null) {
                    value.laneStart = this;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lane.prototype, "laneStart", {
        get: function () {
            return this._laneStart;
        },
        set: function (value) {
            if (value instanceof Lane) {
                this._laneStart = value;
                if (value.laneEnd == null) {
                    value.laneEnd = this;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lane.prototype, "speedLimit", {
        get: function () {
            return this._speedLimit;
        },
        set: function (value) {
            this._speedLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lane.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lane.prototype, "cars", {
        get: function () {
            return this._cars;
        },
        set: function (value) {
            this._cars = value;
        },
        enumerable: false,
        configurable: true
    });
    Lane.prototype.XYDirFromPosition = function (position) {
        var node = new RoadNode(0, 0);
        var dir = 0;
        if (position < 0) {
            node.setXYNode(this.nodes[0]);
            dir = Math.atan2(this.nodes[1].y - this.nodes[0].y, this.nodes[1].x - this.nodes[0].x);
            return [node, dir];
        }
        if (position > this.length()) {
            if (this.laneEnd != null) {
                var XYDir = this.laneEnd.XYDirFromPosition(position - this.length());
                node.setXYNode(XYDir[0]);
                dir = XYDir[1];
                return [node, dir];
            }
            else {
                node.setXYNode(this.nodes[this.nodes.length - 1]);
                dir = Math.atan2(this.nodes[this.nodes.length - 1].y - this.nodes[this.nodes.length - 2].y, this.nodes[this.nodes.length - 1].x - this.nodes[this.nodes.length - 2].x);
                return [node, dir];
            }
        }
        var distanceLeft = position;
        node.setXYNode(this.nodes[0]);
        dir = Math.atan2(this.nodes[1].y - this.nodes[0].y, this.nodes[1].x - this.nodes[0].x);
        for (var i = 1; i < this.nodes.length && distanceLeft > 0; i++) {
            if (distanceLeft < node.distanceTo(this.nodes[i])) {
                var dx = (Math.cos(node.directionTo(this.nodes[i])) * distanceLeft);
                var dy = (Math.sin(node.directionTo(this.nodes[i])) * distanceLeft);
                dx = node.x - dx;
                dy = node.y - dy;
                node = new RoadNode(dx, dy);
                dir = Math.atan2(this.nodes[i].y - this.nodes[i - 1].y, this.nodes[i].x - this.nodes[i - 1].x);
                return [node, dir];
            }
            distanceLeft -= node.distanceTo(this.nodes[i]);
            node.setXYNode(this.nodes[i]);
            dir = Math.atan2(this.nodes[i].y - this.nodes[i - 1].y, this.nodes[i].x - this.nodes[i - 1].x);
        }
        return [node, dir];
    };
    Lane.prototype.length = function () {
        var length = 0;
        var nodeCompare = this.nodes[0];
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            length += node.distanceTo(nodeCompare);
            nodeCompare = node;
        }
        return length;
    };
    //since i want to support road loops, there could be 2 separate position values for an intersection node
    Lane.prototype.positionOfNode = function (node) {
        var positions = [];
        var position = 0;
        var nodePrevious = this.nodes[0];
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var nodeCompare = _a[_i];
            position += nodePrevious.distanceTo(nodeCompare);
            if (node == nodeCompare) {
                positions.push(position);
            }
            nodePrevious = nodeCompare;
        }
        return positions;
    };
    return Lane;
}());
export { Lane };
