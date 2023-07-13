import { Map } from "./Map.js";
import { Unit } from "./Unit.js";
import { Building } from "./Building.js";
var unitCowboy = new Unit(30, "Cowboy", ["d", "g"], './img/unitcowboy.png');
var unitShip = new Unit(14, "Ship", ["w"], './img/unitship.png');
var city1 = new Building(20, "city", './img/buildingcity.png');
var port1 = new Building(21, "port", './img/buildingport.png');
var map = new Map("d d d d d d d d d d d d d d w w w d d d g w w w m m g g g g g g g g g g", 6, [unitCowboy, unitShip], [city1, port1]);
var selectedUnit = unitShip;
var canvas = document.getElementById('game-canvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.addEventListener("mousedown", mouseDown, false);
var rowPixels = 101;
var columnPixels = 116;
var xoffset = 0;
var yoffset = 0;
canvas.width = columnPixels * (map.size + 1);
canvas.height = rowPixels * (map.getNumberOfRows() + 1);
function mouseDown(event) {
    var x = event.x;
    var y = event.y;
    var row = Math.floor(y / rowPixels);
    var column = Math.floor((x - ((row % 2) * (columnPixels * 0.5))) / columnPixels);
    var position = (row * map.size) + column;
    for (var _i = 0, _a = map.units; _i < _a.length; _i++) {
        var unit = _a[_i];
        if (position == unit.position) {
            selectedUnit = unit;
        }
    }
    if (selectedUnit.getTraversibleTiles(map).indexOf(map.tiles[position]) > -1) {
        selectedUnit.position = position;
    }
}
var imageTileDesert = new Image();
imageTileDesert.src = './img/tiledesert.png';
var imageTileWater = new Image();
imageTileWater.src = './img/tilewater.png';
var imageTileGrassland = new Image();
imageTileGrassland.src = './img/tileplains.png';
var imageTileMountain = new Image();
imageTileMountain.src = './img/tilemountain.png';
function gameLoop() {
    // Clear the canvas
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw ground
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (var _i = 0, _a = map.tiles; _i < _a.length; _i++) {
        var tile = _a[_i];
        var image = new Image();
        if (tile.type == "d") {
            image = imageTileDesert;
        }
        else if (tile.type == "w") {
            image = imageTileWater;
        }
        else if (tile.type == "g") {
            image = imageTileGrassland;
        }
        else if (tile.type == "m") {
            image = imageTileMountain;
        }
        context.drawImage(image, columnPixels * map.getColumnFromPosition(tile.position) + (map.getColumnOffsetFromPosition(tile.position) * (columnPixels / 2)), rowPixels * map.getRowFromPosition(tile.position));
    }
    for (var _b = 0, _c = map.buildings; _b < _c.length; _b++) {
        var building = _c[_b];
        var image = new Image();
        image.src = building.imgsrc;
        context.drawImage(image, columnPixels * map.getColumnFromPosition(building.position) + (map.getColumnOffsetFromPosition(building.position) * (columnPixels / 2)), rowPixels * map.getRowFromPosition(building.position));
    }
    for (var _d = 0, _e = map.units; _d < _e.length; _d++) {
        var unit = _e[_d];
        var image = new Image();
        image.src = unit.imgsrc;
        context.drawImage(image, columnPixels * map.getColumnFromPosition(unit.position) + (map.getColumnOffsetFromPosition(unit.position) * (columnPixels / 2)), rowPixels * map.getRowFromPosition(unit.position));
        context.font = "bold 32px/1 sans-serif ";
        context.fillStyle = "black";
        context.strokeStyle = "white";
        context.lineWidth = 1;
        context.fillText(unit.type, columnPixels * map.getColumnFromPosition(unit.position) + (map.getColumnOffsetFromPosition(unit.position) * (columnPixels / 2)), rowPixels * map.getRowFromPosition(unit.position) + 100);
        context.strokeText(unit.type, columnPixels * map.getColumnFromPosition(unit.position) + (map.getColumnOffsetFromPosition(unit.position) * (columnPixels / 2)), rowPixels * map.getRowFromPosition(unit.position) + 100);
    }
    context.beginPath();
    context.arc(columnPixels * map.getColumnFromPosition(selectedUnit.position) + (map.getColumnOffsetFromPosition(selectedUnit.position) * (columnPixels / 2)) + (columnPixels / 2) + 5, rowPixels * map.getRowFromPosition(selectedUnit.position) + (rowPixels / 2) + 5, 50, 0, 2 * Math.PI);
    context.lineWidth = 5;
    context.strokeStyle = '#ff0000';
    context.stroke();
    for (var _f = 0, _g = selectedUnit.getTraversibleTiles(map); _f < _g.length; _f++) {
        var tile = _g[_f];
        context.beginPath();
        context.fillStyle = "red";
        context.arc(columnPixels * map.getColumnFromPosition(tile.position) + (map.getColumnOffsetFromPosition(tile.position) * (columnPixels / 2)) + (columnPixels / 2), rowPixels * map.getRowFromPosition(tile.position) + (rowPixels / 2), 20, 0, 2 * Math.PI);
        context.fill();
    }
    window.requestAnimationFrame(gameLoop);
}
console.log(map.getRowFromPosition(36));
gameLoop();
