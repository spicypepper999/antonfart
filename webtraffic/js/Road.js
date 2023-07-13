import { Lane } from "./Lane.js";
import { RoadNode } from "./RoadNode.js";
var Road = /** @class */ (function () {
    function Road(nodes, lanes, laneWidth, speedLimit, color) {
        this._nodes = nodes;
        this._speedLimit = speedLimit;
        this._color = color;
        this._laneWidth = laneWidth;
        this._lanes = this.generateLanes(nodes, lanes, laneWidth);
    }
    Object.defineProperty(Road.prototype, "nodes", {
        get: function () {
            return this._nodes;
        },
        set: function (value) {
            this._nodes = value;
            this._lanes = this.generateLanes(value, this._lanes.length, this._laneWidth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Road.prototype, "lanes", {
        get: function () {
            return this._lanes;
        },
        set: function (value) {
            this._lanes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Road.prototype, "speedLimit", {
        get: function () {
            return this._speedLimit;
        },
        set: function (value) {
            this._speedLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Road.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Road.prototype, "laneWidth", {
        get: function () {
            return this._laneWidth;
        },
        set: function (value) {
            this._laneWidth = value;
        },
        enumerable: false,
        configurable: true
    });
    Road.prototype.generateLanes = function (nodes, lanes, laneWidth) {
        var newLanes = [];
        for (var i = 0; i < lanes; i++) {
            var offset = (i - (lanes / 2 - 0.5)) * laneWidth;
            var newLane = new Lane([], this._speedLimit, this._color);
            for (var j = 0; j < nodes.length; j++) {
                var prevNode = nodes[j - 1];
                var node = nodes[j];
                var nextNode = nodes[j + 1];
                var bisectorAngle = this.calculateBisectorAngle(prevNode, node, nextNode);
                var angle1 = prevNode == undefined ? 0 : Math.atan2(node.y - prevNode.y, node.x - prevNode.x);
                var angle2 = nextNode == undefined ? 0 : Math.atan2(nextNode.y - node.y, nextNode.x - node.x);
                var angleDiff = angle2 - angle1;
                // Normalize angleDiff to [-PI, PI]
                var normalizedAngleDiff = angleDiff - Math.PI * 2 * Math.floor((angleDiff + Math.PI) / (Math.PI * 2));
                var adjustedOffset = offset;
                if (prevNode !== undefined && nextNode !== undefined) {
                    adjustedOffset = offset / Math.cos(normalizedAngleDiff / 2);
                }
                var dx = (Math.cos(bisectorAngle + Math.PI / 2) * adjustedOffset);
                var dy = (Math.sin(bisectorAngle + Math.PI / 2) * adjustedOffset);
                var newNode = new RoadNode(node.x + dx, node.y + dy);
                newLane.nodes.push(newNode);
            }
            newLanes.push(newLane);
        }
        return newLanes;
    };
    Road.prototype.calculateBisectorAngle = function (prevNode, node, nextNode) {
        if (prevNode == undefined) {
            return Math.atan2(nextNode.y - node.y, nextNode.x - node.x);
        }
        else if (nextNode == undefined) {
            return Math.atan2(node.y - prevNode.y, node.x - prevNode.x);
        }
        else {
            var angle1 = Math.atan2(node.y - prevNode.y, node.x - prevNode.x);
            var angle2 = Math.atan2(nextNode.y - node.y, nextNode.x - node.x);
            var angleDiff = angle2 - angle1;
            // Normalize angleDiff to [-PI, PI]
            var normalizedAngleDiff = angleDiff - Math.PI * 2 * Math.floor((angleDiff + Math.PI) / (Math.PI * 2));
            return angle1 + normalizedAngleDiff / 2;
        }
    };
    return Road;
}());
export { Road };
