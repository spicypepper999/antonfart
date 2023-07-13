var Building = /** @class */ (function () {
    function Building(position, type, imgsrc) {
        this._position = position;
        this._type = type;
        this._imgsrc = imgsrc;
    }
    Object.defineProperty(Building.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Building.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Building.prototype, "imgsrc", {
        get: function () {
            return this._imgsrc;
        },
        set: function (value) {
            this._imgsrc = value;
        },
        enumerable: false,
        configurable: true
    });
    return Building;
}());
export { Building };
