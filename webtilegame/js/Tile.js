var Tile = /** @class */ (function () {
    function Tile(position, type, modifier) {
        this._position = position;
        this._type = type;
        this._modifier = modifier;
    }
    Object.defineProperty(Tile.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    return Tile;
}());
export { Tile };
