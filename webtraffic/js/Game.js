import { RoadNode } from "./RoadNode.js";
import { IntersectionRoadNode } from "./IntersectionRoadNode.js";
import { Car } from "./Car.js";
import { Lane } from "./Lane.js";
import { TrafficMap } from "./TrafficMap.js";
//THIS IS WHERE WE INITIALIZE STUFF!!!
//drawing road
var map = -1;
var minDistance = 100;
var trafficMaps;
var running = false;
// if (map == 0) {
//     const intersect1 = new IntersectionRoadNode(300, 500, []);
//     const intersect2 = new IntersectionRoadNode(500, 700, []);
//     const intersect3 = new IntersectionRoadNode(700, 500, []);
//     const intersect4 = new IntersectionRoadNode(500, 300, []);
//     const road1 = new Lane([intersect1, intersect4, intersect3, intersect2, intersect1], 0.75, "yellow");
//     road1.laneEnd = road1;
//     const road2 = new Lane([intersect1, new RoadNode(0, 500)], 0.75, "blue");
//     const road3 = new Lane([intersect2, new RoadNode(500, 1000)], 0.75, "blue");
//     const road4 = new Lane([intersect3, new RoadNode(1000, 500)], 0.75, "blue");
//     const road5 = new Lane([intersect4, new RoadNode(500, 0)], 0.75, "blue");
//     intersect1.ruleset = ["yield", road1, -220];
//     intersect2.ruleset = ["yield", road1, -220];
//     intersect3.ruleset = ["yield", road1, -220];
//     intersect4.ruleset = ["yield", road1, -220];
//     //
//     //i dont like the manually setting yield distance vibe 
//     //
//     const roads = [road1, road2, road3, road4, road5];
//     const intersections = [intersect1, intersect2, intersect3, intersect4];
//     const cars = [];
//     const events = ["source", 500, 300, road2, -1, 0, 0.01, 25, [intersect1, road1, 1, intersect2, road3, 1], "source", 500, 300, road4, -1, 0, 0.01, 25, [intersect3, road1, 1, intersect2, road3, 1], "source", 500, 300, road5, -1, 0, 0.01, 25, [intersect4, road1, 1, intersect2, road3, 1], "collect", road3, 150, 275];
//     const trafficMap1 = new TrafficMap(roads, intersections, cars, events);
//     const intersect5 = new IntersectionRoadNode(1500, 400, ["stop"]);
//     const road6 = new Lane([intersect5, new RoadNode(1200, 400)], 0.75, "blue");
//     const road7 = new Lane([intersect5, new RoadNode(1500, 700)], 0.75, "blue");
//     const road8 = new Lane([intersect5, new RoadNode(1800, 400)], 0.75, "blue");
//     const road9 = new Lane([intersect5, new RoadNode(1500, 100)], 0.75, "blue");
//     const roads2 = [road6, road7, road8, road9];
//     const intersections2 = [intersect5];
//     const cars2 = [];
//     const events2 = ["source", 500, 300, road6, -1, 0, 0.01, 25, [intersect5, road7, 1], "source", 500, 300, road8, -1, 0, 0.01, 25, [intersect5, road7, 1], "source", 500, 300, road9, -1, 0, 0.01, 25, [intersect5, road7, 1], "collect", road7, 150, 275];
//     const trafficMap2 = new TrafficMap(roads2, intersections2, cars2, events2);
//     const trafficMaps = [trafficMap1, trafficMap2];
// }
// if (map == 1) {
//     const intersect1 = new IntersectionRoadNode(500, 100, []);
//     const intersect2 = new IntersectionRoadNode(500, 800, []);
//     const road1 = new Lane([intersect1, new RoadNode(700, 100), new RoadNode(1100, 500), new RoadNode(1300, 700), new RoadNode(1300, 800), intersect2, intersect1], 2, "blue")
//     road1.roadEnd = road1;
//     const road2 = new Lane([intersect2, new RoadNode(200, 800), new RoadNode(200, 100), intersect1], 1, "red");
//     intersect1.ruleset = ["stop"];
//     intersect2.ruleset = ["yield", road1, -600];
//     const car1 = new Car(1005, road1, 1, 0.5, 0.01, 25, [intersect1, road2, -1, intersect2, road1, 1]);
//     const car2 = new Car(1100, road1, 1, 0.5, 0.01, 25, [intersect1, road1, 1]);
//     const car3 = new Car(1250, road1, 1, 0.5, 0.01, 25, [intersect1, road1, 1]);
//     const car4 = new Car(1300, road1, 1, 0.5, 0.01, 25, [intersect1, road1, 1]);
//     const car5 = new Car(1400, road1, 1, 0.5, 0.01, 25, [intersect1, road2, -1, intersect2, road1, 1]);
//     const car6 = new Car(1500, road1, 1, 0.5, 0.01, 25, [intersect1, road2, -1, intersect2, road1, 1]);
//     const car7 = new Car(1600, road1, 1, 0.5, 0.01, 25, [intersect1, road1, 1]);
//     const cars = [car1, car2, car3, car4, car5, car6, car7];
//     const roads = [road1, road2];
//     const intersections = [intersect1, intersect2];
//     const events = [];
//     const trafficMap = new TrafficMap(roads, intersections, cars, events);
//     const trafficMaps = [trafficMap];
// }
// if (map == 2) {
//     //const intersect1 = new IntersectionRoadNode();
//     //const road1 = new Road();
//     const road1 = new Road([new RoadNode(400, 400), new RoadNode(600, 200), new RoadNode(700, 200), new RoadNode(800, 600), new RoadNode(1000, 600), new RoadNode(1000, 800), new RoadNode(600, 800), new RoadNode(400, 600)], 2, 50, 2, "blue");
//     const road2 = new Road([new RoadNode(800, 800), new RoadNode(800, 1100), new RoadNode(1200, 1100)], 2, 50, 2, "red");
//     const cars = [];
//     const roads = road1.lanes.concat(road2.lanes);
//     const intersections = [];
//     const events = [];
//     const trafficMap = new TrafficMap(roads, intersections, cars, events);
//     const trafficMaps = [trafficMap];
// }
// Set up the canvas and context
var canvas = document.getElementById('game-canvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth * .9;
canvas.height = window.innerHeight * .9;
var counter = 0;
var image = new Image();
image.src = './carImage.png';
var shittyCounter = 0;
//this will be removed
// let carCounter1 = 0;
// let carCounter2 = 0;
// Set up the game loop
function gameLoop() {
    // Clear the canvas
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw ground
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (var _i = 0, trafficMaps_1 = trafficMaps; _i < trafficMaps_1.length; _i++) {
        var trafficMap = trafficMaps_1[_i];
        shittyCounter++;
        // Draw roads
        for (var _a = 0, _b = trafficMap.lanes; _a < _b.length; _a++) {
            var road = _b[_a];
            context.beginPath();
            context.moveTo(road.nodes[0].x, road.nodes[0].y);
            for (var _c = 0, _d = road.nodes; _c < _d.length; _c++) {
                var roadNode = _d[_c];
                context.strokeStyle = "lightgray";
                context.lineWidth = 40;
                context.lineTo(roadNode.x, roadNode.y);
                context.stroke();
                context.strokeStyle = road.color;
                context.lineWidth = 5;
                context.lineTo(roadNode.x, roadNode.y);
                context.stroke();
            }
        }
        // Draw intersections
        for (var _e = 0, _f = trafficMap.intersections; _e < _f.length; _e++) {
            var intersection = _f[_e];
            context.beginPath();
            context.fillStyle = "purple";
            if (intersection.ruleset[0] == "stop") {
                context.fillStyle = "darkred";
            }
            if (intersection.ruleset[0] == "yield") {
                context.fillStyle = "yellow";
            }
            context.arc(intersection.x, intersection.y, 30, 0, 2 * Math.PI);
            context.fill();
        }
        for (var i = 0; i < trafficMap.events.length; i += 0) {
            if (trafficMap.events[i] == "source") {
                var timer = trafficMap.events[i + 1];
                var position = trafficMap.events[i + 2];
                var road = trafficMap.events[i + 3];
                var direction = trafficMap.events[i + 4];
                var speed = trafficMap.events[i + 5];
                var power = trafficMap.events[i + 6];
                var size = trafficMap.events[i + 7];
                var ruleset = trafficMap.events[i + 8];
                if (trafficMap.checkPathForCars(road, position, -100) == undefined && counter % timer == 0) {
                    //
                    //ARBITRARY NUMBER ALERT!!!
                    //
                    var newCar = new Car(position, road, direction, speed, power, size, ruleset);
                    trafficMap.cars.push(newCar);
                }
                i += 9;
            }
            else if (trafficMap.events[i] == "collect") {
                var car = trafficMap.checkPathForCars(trafficMap.events[i + 1], trafficMap.events[i + 2], trafficMap.events[i + 3]);
                if (car instanceof Car) {
                    car.lane.cars.splice(car.lane.cars.indexOf(car), 1);
                    trafficMap.cars.splice(trafficMap.cars.indexOf(car), 1);
                    trafficMap.counter++;
                }
                i += 4;
            }
        }
        // Draw cars
        for (var _g = 0, _h = trafficMap.cars; _g < _h.length; _g++) {
            var car = _h[_g];
            var brakingDistance = (car.calculateStoppingDistance() + minDistance);
            var obstacle = trafficMap.checkCarPath(car, brakingDistance * car.direction);
            context.fillStyle = "black";
            if (trafficMap.isObstacle(obstacle, car)) {
                car.brake();
                context.fillStyle = "red";
            }
            else {
                if (car.speed > (car.lane.speedLimit + car.power)) {
                    car.brake();
                    context.fillStyle = "red";
                }
                else {
                    car.accelerate();
                    context.fillStyle = "green";
                }
            }
            trafficMap.updatePosition(car);
            var carXYDir = car.getXYDir();
            context.beginPath();
            context.translate(carXYDir[0].x, carXYDir[0].y);
            context.rotate(carXYDir[1]);
            context.fillRect((car.size / 2) * -1, (car.size / 2) * -1, car.size, car.size);
            context.drawImage(image, ((car.size / 2) * -1) - 10, (car.size / 2) * -1, car.size + 10, car.size);
            context.setTransform(1, 0, 0, 1, 0, 0);
        }
        context.fillStyle = "black";
        context.beginPath();
        context.font = "48px serif";
        // context.fillText(carCounter1, 10, 50);
        // context.fillText(carCounter2, 1200, 50);
        if (map == 0) {
            if (shittyCounter % 2 == 0) {
                context.fillText(trafficMap.counter, 1200, 50);
            }
            else {
                context.fillText(trafficMap.counter, 10, 50);
            }
        }
    }
    // Request the next frame
    window.requestAnimationFrame(gameLoop);
    counter++;
}
// Set up the key listeners
// let keys = {};
// document.addEventListener('keydown', function (event) {
//     keys[event.code] = true;
// });
// document.addEventListener('keyup', function (event) {
//     keys[event.code] = false;
// });
document.addEventListener('keydown', keyDown, false);
function keyDown(event) {
    var key = event.key;
    if (key == '1') {
        map = 0;
        var intersect1_1 = new IntersectionRoadNode(300, 500, []);
        var intersect2_1 = new IntersectionRoadNode(500, 700, []);
        var intersect3_1 = new IntersectionRoadNode(700, 500, []);
        var intersect4_1 = new IntersectionRoadNode(500, 300, []);
        var road1_1 = new Lane([intersect1_1, intersect4_1, intersect3_1, intersect2_1, intersect1_1], 0.75, "yellow");
        road1_1.laneEnd = road1_1;
        var road2_1 = new Lane([intersect1_1, new RoadNode(0, 500)], 0.75, "blue");
        var road3_1 = new Lane([intersect2_1, new RoadNode(500, 1000)], 0.75, "blue");
        var road4_1 = new Lane([intersect3_1, new RoadNode(1000, 500)], 0.75, "blue");
        var road5_1 = new Lane([intersect4_1, new RoadNode(500, 0)], 0.75, "blue");
        intersect1_1.ruleset = ["yield", road1_1, -220];
        intersect2_1.ruleset = ["yield", road1_1, -220];
        intersect3_1.ruleset = ["yield", road1_1, -220];
        intersect4_1.ruleset = ["yield", road1_1, -220];
        //
        //i dont like the manually setting yield distance vibe 
        //
        var roads_1 = [road1_1, road2_1, road3_1, road4_1, road5_1];
        var intersections_1 = [intersect1_1, intersect2_1, intersect3_1, intersect4_1];
        var cars_1 = [];
        var events_1 = ["source", 500, 300, road2_1, -1, 0, 0.01, 25, [intersect1_1, road1_1, 1, intersect2_1, road3_1, 1], "source", 500, 300, road4_1, -1, 0, 0.01, 25, [intersect3_1, road1_1, 1, intersect2_1, road3_1, 1], "source", 500, 300, road5_1, -1, 0, 0.01, 25, [intersect4_1, road1_1, 1, intersect2_1, road3_1, 1], "collect", road3_1, 150, 275];
        var trafficMap1_1 = new TrafficMap(roads_1, intersections_1, cars_1, events_1);
        var intersect5_1 = new IntersectionRoadNode(1500, 400, ["stop"]);
        var road6_1 = new Lane([intersect5_1, new RoadNode(1200, 400)], 0.75, "blue");
        var road7_1 = new Lane([intersect5_1, new RoadNode(1500, 700)], 0.75, "blue");
        var road8_1 = new Lane([intersect5_1, new RoadNode(1800, 400)], 0.75, "blue");
        var road9_1 = new Lane([intersect5_1, new RoadNode(1500, 100)], 0.75, "blue");
        var roads2_1 = [road6_1, road7_1, road8_1, road9_1];
        var intersections2_1 = [intersect5_1];
        var cars2_1 = [];
        var events2_1 = ["source", 500, 300, road6_1, -1, 0, 0.01, 25, [intersect5_1, road7_1, 1], "source", 500, 300, road8_1, -1, 0, 0.01, 25, [intersect5_1, road7_1, 1], "source", 500, 300, road9_1, -1, 0, 0.01, 25, [intersect5_1, road7_1, 1], "collect", road7_1, 150, 275];
        var trafficMap2_1 = new TrafficMap(roads2_1, intersections2_1, cars2_1, events2_1);
        trafficMaps = [trafficMap1_1, trafficMap2_1];
        shittyCounter = 0;
        if (running == false) {
            gameLoop();
            running = true;
        }
    }
    if (key == '2') {
        map = 1;
        var intersect1_2 = new IntersectionRoadNode(500, 100, []);
        var intersect2_2 = new IntersectionRoadNode(500, 800, []);
        var road1_2 = new Lane([intersect1_2, new RoadNode(700, 100), new RoadNode(1100, 500), new RoadNode(1300, 700), new RoadNode(1300, 800), intersect2_2, intersect1_2], 2, "blue");
        road1_2.roadEnd = road1_2;
        var road2_2 = new Lane([intersect2_2, new RoadNode(200, 800), new RoadNode(200, 100), intersect1_2], 1, "red");
        intersect1_2.ruleset = ["stop"];
        intersect2_2.ruleset = ["yield", road1_2, -600];
        var car1 = new Car(1005, road1_2, 1, 0.5, 0.01, 25, [intersect1_2, road2_2, -1, intersect2_2, road1_2, 1]);
        var car2 = new Car(1100, road1_2, 1, 0.5, 0.01, 25, [intersect1_2, road1_2, 1]);
        var car3 = new Car(1250, road1_2, 1, 0.5, 0.01, 25, [intersect1_2, road1_2, 1]);
        var car4 = new Car(1300, road1_2, 1, 0.5, 0.01, 25, [intersect1_2, road1_2, 1]);
        var car5 = new Car(1400, road1_2, 1, 0.5, 0.01, 25, [intersect1_2, road2_2, -1, intersect2_2, road1_2, 1]);
        var car6 = new Car(1500, road1_2, 1, 0.5, 0.01, 25, [intersect1_2, road2_2, -1, intersect2_2, road1_2, 1]);
        var car7 = new Car(1600, road1_2, 1, 0.5, 0.01, 25, [intersect1_2, road1_2, 1]);
        var cars_2 = [car1, car2, car3, car4, car5, car6, car7];
        var roads_2 = [road1_2, road2_2];
        var intersections_2 = [intersect1_2, intersect2_2];
        var events_2 = [];
        var trafficMap = new TrafficMap(roads_2, intersections_2, cars_2, events_2);
        trafficMaps = [trafficMap];
        if (running == false) {
            gameLoop();
            running = true;
        }
    }
}
map = 0;
var intersect1 = new IntersectionRoadNode(300, 500, []);
var intersect2 = new IntersectionRoadNode(500, 700, []);
var intersect3 = new IntersectionRoadNode(700, 500, []);
var intersect4 = new IntersectionRoadNode(500, 300, []);
var road1 = new Lane([intersect1, intersect4, intersect3, intersect2, intersect1], 0.75, "yellow");
road1.laneEnd = road1;
var road2 = new Lane([intersect1, new RoadNode(0, 500)], 0.75, "blue");
var road3 = new Lane([intersect2, new RoadNode(500, 1000)], 0.75, "blue");
var road4 = new Lane([intersect3, new RoadNode(1000, 500)], 0.75, "blue");
var road5 = new Lane([intersect4, new RoadNode(500, 0)], 0.75, "blue");
intersect1.ruleset = ["yield", road1, -220];
intersect2.ruleset = ["yield", road1, -220];
intersect3.ruleset = ["yield", road1, -220];
intersect4.ruleset = ["yield", road1, -220];
//
//i dont like the manually setting yield distance vibe 
//
var roads = [road1, road2, road3, road4, road5];
var intersections = [intersect1, intersect2, intersect3, intersect4];
var cars = [];
var events = ["source", 500, 300, road2, -1, 0, 0.01, 25, [intersect1, road1, 1, intersect2, road3, 1], "source", 500, 300, road4, -1, 0, 0.01, 25, [intersect3, road1, 1, intersect2, road3, 1], "source", 500, 300, road5, -1, 0, 0.01, 25, [intersect4, road1, 1, intersect2, road3, 1], "collect", road3, 150, 275];
var trafficMap1 = new TrafficMap(roads, intersections, cars, events);
var intersect5 = new IntersectionRoadNode(1500, 400, ["stop"]);
var road6 = new Lane([intersect5, new RoadNode(1200, 400)], 0.75, "blue");
var road7 = new Lane([intersect5, new RoadNode(1500, 700)], 0.75, "blue");
var road8 = new Lane([intersect5, new RoadNode(1800, 400)], 0.75, "blue");
var road9 = new Lane([intersect5, new RoadNode(1500, 100)], 0.75, "blue");
var roads2 = [road6, road7, road8, road9];
var intersections2 = [intersect5];
var cars2 = [];
var events2 = ["source", 500, 300, road6, -1, 0, 0.01, 25, [intersect5, road7, 1], "source", 500, 300, road8, -1, 0, 0.01, 25, [intersect5, road7, 1], "source", 500, 300, road9, -1, 0, 0.01, 25, [intersect5, road7, 1], "collect", road7, 150, 275];
var trafficMap2 = new TrafficMap(roads2, intersections2, cars2, events2);
trafficMaps = [trafficMap1, trafficMap2];
shittyCounter = 0;
running = true;
gameLoop();
// Start the game loop 
