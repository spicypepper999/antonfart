var Unit = /** @class */ (function () {
    function Unit(position, type, traversible, imgsrc) {
        this._position = position;
        this._type = type;
        this._traversible = traversible;
        this._imgsrc = imgsrc;
        // this._range = 1;
    }
    Object.defineProperty(Unit.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Unit.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Unit.prototype, "traversible", {
        get: function () {
            return this._traversible;
        },
        set: function (value) {
            this._traversible = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Unit.prototype, "imgsrc", {
        get: function () {
            return this._imgsrc;
        },
        set: function (value) {
            this._imgsrc = value;
        },
        enumerable: false,
        configurable: true
    });
    Unit.prototype.isTileTraversible = function (tile) {
        for (var _i = 0, _a = this._traversible; _i < _a.length; _i++) {
            var type = _a[_i];
            if (type == tile.type) {
                return true;
            }
        }
        return false;
    };
    Unit.prototype.getTraversibleTiles = function (map) {
        var tiles = [];
        for (var i = 0; i < 6; i++) {
            var tile = map.getTileFromDirection(this._position, i);
            if (tile != null && this.isTileTraversible(tile)) {
                tiles.push(tile);
            }
        }
        return tiles;
    };
    return Unit;
}());
export { Unit };
