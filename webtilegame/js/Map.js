import { Tile } from "./Tile.js";
var Map = /** @class */ (function () {
    function Map(tilesString, size, units, buildings) {
        this._tiles = this.createTilesFromString(tilesString);
        this._size = size;
        this._units = units;
        this._buildings = buildings;
    }
    Map.prototype.createTilesFromString = function (tilesString) {
        var tiles = [];
        for (var i = 0; i < tilesString.length / 2; i++) {
            var newTile = new Tile(i, tilesString.charAt(i * 2), "");
            tiles.push(newTile);
        }
        return tiles;
    };
    Object.defineProperty(Map.prototype, "tiles", {
        get: function () {
            return this._tiles;
        },
        set: function (value) {
            this._tiles = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Map.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Map.prototype, "units", {
        get: function () {
            return this._units;
        },
        set: function (value) {
            this._units = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Map.prototype, "buildings", {
        get: function () {
            return this._buildings;
        },
        set: function (value) {
            this._buildings = value;
        },
        enumerable: false,
        configurable: true
    });
    //0-5 clockwise starting with zero being left
    Map.prototype.getPositionFromDirection = function (position, direction) {
        var newPosition = -1;
        var offset = this.getColumnOffsetFromPosition(position);
        if (direction == 0 && (this.getRowFromPosition(position)) == (this.getRowFromPosition(position - 1))) {
            newPosition = position - 1;
        }
        else if (direction == 1 && (offset != 0 || this.getColumnFromPosition(position) > 0)) {
            newPosition = position - this._size - 1 + offset;
        }
        else if (direction == 2 && (offset == 0 || this.getColumnFromPosition(position) != (this.size - 1))) {
            newPosition = position - this._size + offset;
        }
        else if (direction == 3 && (this.getRowFromPosition(position)) == (this.getRowFromPosition(position + 1))) {
            newPosition = position + 1;
        }
        else if (direction == 4 && (offset == 0 || this.getColumnFromPosition(position) != (this.size - 1))) {
            newPosition = position + this._size + offset;
        }
        else if (direction == 5 && (offset != 0 || this.getColumnFromPosition(position) > 0)) {
            newPosition = position + this._size - 1 + offset;
        }
        else {
            newPosition = -1;
        }
        if (newPosition < 0 || newPosition >= this._tiles.length) {
            newPosition = -1;
        }
        return newPosition;
    };
    Map.prototype.getTileFromDirection = function (position, direction) {
        var newPosition = this.getPositionFromDirection(position, direction);
        if (newPosition != -1) {
            return this._tiles[newPosition];
        }
        else {
            return null;
        }
    };
    Map.prototype.getRowFromPosition = function (position) {
        if (position < 0 || position >= this._tiles.length) {
            return -1;
        }
        else {
            return Math.floor(position / this._size);
        }
    };
    Map.prototype.getColumnFromPosition = function (position) {
        if (position < 0 || position >= this._tiles.length) {
            return -1;
        }
        else {
            return position % this._size;
        }
    };
    Map.prototype.getColumnOffsetFromPosition = function (position) {
        if (this.getRowFromPosition(position) % 2 === 0) {
            return 0;
        }
        else {
            return 1;
        }
    };
    Map.prototype.getPositionFromRowColumn = function (row, column) {
        return ((row * this._size) + column);
    };
    Map.prototype.getNumberOfRows = function () {
        return Math.ceil(this._tiles.length / this._size);
    };
    return Map;
}());
export { Map };
