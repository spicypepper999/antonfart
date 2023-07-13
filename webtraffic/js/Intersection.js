var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { RoadNode } from "./RoadNode.js";
var Intersection = /** @class */ (function (_super) {
    __extends(Intersection, _super);
    function Intersection(x, y, ruleset) {
        var _this = _super.call(this, x, y) || this;
        _this._ruleset = ruleset;
        _this._intersectionRoadNodes = _this.generateIntersectionNodes(ruleset);
        _this._lanes = _this.generateIntersectionLanes(ruleset);
        return _this;
    }
    Object.defineProperty(Intersection.prototype, "ruleset", {
        get: function () {
            return this._ruleset;
        },
        set: function (value) {
            this._ruleset = value;
            this._intersectionRoadNodes = this.generateIntersectionNodes(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Intersection.prototype, "intersectionRoadNodes", {
        get: function () {
            return this._intersectionRoadNodes;
        },
        set: function (value) {
            this._intersectionRoadNodes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Intersection.prototype, "lanes", {
        get: function () {
            return this._lanes;
        },
        set: function (value) {
            this._lanes = value;
        },
        enumerable: false,
        configurable: true
    });
    Intersection.prototype.generateIntersectionNodes = function (ruleset) {
        var newNodes = [];
        return newNodes;
    };
    Intersection.prototype.generateIntersectionLanes = function (ruleset) {
    };
    return Intersection;
}(RoadNode));
export { Intersection };
