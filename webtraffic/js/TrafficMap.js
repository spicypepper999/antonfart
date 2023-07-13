import { IntersectionRoadNode } from "./IntersectionRoadNode.js";
import { Car } from "./Car.js";
var TrafficMap = /** @class */ (function () {
    function TrafficMap(lanes, intersections, cars, events) {
        this._lanes = lanes;
        this._intersections = intersections;
        this._cars = cars;
        this._events = events;
        this._counter = 0;
    }
    Object.defineProperty(TrafficMap.prototype, "lanes", {
        get: function () {
            return this._lanes;
        },
        set: function (value) {
            this._lanes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrafficMap.prototype, "intersections", {
        get: function () {
            return this._intersections;
        },
        set: function (value) {
            this._intersections = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrafficMap.prototype, "cars", {
        get: function () {
            return this._cars;
        },
        set: function (value) {
            this._cars = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrafficMap.prototype, "events", {
        get: function () {
            return this._events;
        },
        set: function (value) {
            this._events = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrafficMap.prototype, "counter", {
        get: function () {
            return this._counter;
        },
        set: function (value) {
            this._counter = value;
        },
        enumerable: false,
        configurable: true
    });
    TrafficMap.prototype.isObstacle = function (obstacle, car) {
        if (obstacle instanceof Car) {
            return true;
        }
        if (obstacle instanceof IntersectionRoadNode) {
            if (obstacle.ruleset[0] == "stop") {
                if ((car.speed == 0 && obstacle.currentCar == undefined) || obstacle.currentCar == car) {
                    obstacle.currentCar = car;
                    return false;
                }
                else {
                    return true;
                }
            }
            if (obstacle.ruleset[0] == "yield") {
                var yieldLane = obstacle.ruleset[1];
                var yieldDistance = obstacle.ruleset[2];
                if (car.lane == yieldLane) {
                    return false;
                }
                else {
                    if ((this.checkPathForCars(yieldLane, yieldLane.positionOfNode(obstacle)[0], yieldDistance) == undefined && obstacle.currentCar == undefined) || obstacle.currentCar == car) {
                        obstacle.currentCar = car;
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }
            else {
                return false;
            }
        }
        return false;
    };
    TrafficMap.prototype.checkCarPath = function (car, distance) {
        var detected;
        for (var _i = 0, _a = car.lane.cars; _i < _a.length; _i++) {
            var car2 = _a[_i];
            if ((car2 != car)) {
                if (distance > 0 && (car2.position - car.position) <= distance && (car2.position - car.position) >= 0) {
                    detected = car;
                    return detected;
                }
                else if (distance < 0 && (car2.position - car.position) >= distance && (car2.position - car.position) <= 0) {
                    detected = car;
                    return detected;
                }
            }
        }
        for (var _b = 0, _c = car.lane.nodes; _b < _c.length; _b++) {
            var node = _c[_b];
            var closestPosition = Number.MAX_VALUE;
            for (var _d = 0, _e = car.lane.positionOfNode(node); _d < _e.length; _d++) {
                var position = _e[_d];
                if (Math.abs(position - car.position) < Math.abs(closestPosition)) {
                    closestPosition = position - car.position;
                }
            }
            if (distance > 0 && closestPosition <= distance && closestPosition >= 0 && node instanceof IntersectionRoadNode) {
                detected = node;
                return detected;
            }
            else if (distance < 0 && closestPosition >= distance && closestPosition <= 0 && node instanceof IntersectionRoadNode) {
                detected = node;
                return detected;
            }
        }
        if ((car.position + distance) > car.lane.length() && car.lane.laneEnd != null && detected == undefined) {
            detected = this.checkPath(car.lane.laneEnd, 0, (car.position + distance) % car.lane.length());
        }
        if ((car.position + distance) < 0 && car.lane.laneStart != null && detected == undefined) {
            detected = this.checkPath(car.lane.laneStart, car.lane.laneStart.length(), car.position + distance);
        }
        return detected;
    };
    TrafficMap.prototype.checkPath = function (lane, position, distance) {
        var detected;
        for (var _i = 0, _a = lane.cars; _i < _a.length; _i++) {
            var car = _a[_i];
            if (car.lane == lane) {
                if (distance > 0 && (car.position - position) <= distance && (car.position - position) >= 0) {
                    detected = car;
                    return detected;
                }
                else if (distance < 0 && (car.position - position) >= distance && (car.position - position) <= 0) {
                    detected = car;
                    return detected;
                }
            }
        }
        for (var _b = 0, _c = lane.nodes; _b < _c.length; _b++) {
            var node = _c[_b];
            var closestPosition = Number.MAX_VALUE;
            for (var _d = 0, _e = lane.positionOfNode(node); _d < _e.length; _d++) {
                var position_1 = _e[_d];
                if (Math.abs(position_1 - position_1) < Math.abs(closestPosition)) {
                    closestPosition = position_1 - position_1;
                }
            }
            if (distance > 0 && closestPosition <= distance && closestPosition >= 0 && node instanceof IntersectionRoadNode) {
                detected = node;
                return detected;
            }
            else if (distance < 0 && closestPosition >= distance && closestPosition <= 0 && node instanceof IntersectionRoadNode) {
                detected = node;
                return detected;
            }
        }
        if ((position + distance) > lane.length() && lane.laneEnd != null && detected == undefined) {
            detected = this.checkPath(lane.laneEnd, 0, (position + distance) % lane.length());
        }
        if ((position + distance) < 0 && lane.laneStart != null && detected == undefined) {
            detected = this.checkPath(lane.laneStart, lane.laneStart.length(), position + distance);
        }
        return detected;
    };
    TrafficMap.prototype.checkPathForCars = function (lane, position, distance) {
        var detected;
        for (var _i = 0, _a = lane.cars; _i < _a.length; _i++) {
            var car = _a[_i];
            if (car.lane == lane) {
                if (distance > 0 && (car.position - position) <= distance && (car.position - position) >= 0) {
                    detected = car;
                    return detected;
                }
                else if (distance < 0 && (car.position - position) >= distance && (car.position - position) <= 0) {
                    detected = car;
                    return detected;
                }
            }
        }
        if ((position + distance) > lane.length() && lane.laneEnd != null && detected == undefined) {
            detected = this.checkPathForCars(lane.laneEnd, 0, (position + distance) % lane.length());
        }
        if ((position + distance) < 0 && lane.laneStart != null && detected == undefined) {
            detected = this.checkPathForCars(lane.laneStart, lane.laneStart.length(), position + distance);
        }
        return detected;
    };
    TrafficMap.prototype.updatePosition = function (car) {
        for (var i = 0; i < car.ruleset.length; i += 3) {
            var node = car.ruleset[i];
            var nextLane = car.ruleset[i + 1];
            var direction = car.ruleset[i + 2];
            if (this.checkCarPath(car, car.speed * car.direction) == node) {
                car.lane = nextLane;
                car.direction = direction;
                car.position = nextLane.positionOfNode(node)[0];
                //above line might break?
                node.currentCar = undefined;
            }
        }
        car.position += (car.speed * car.direction);
        if (car.position > car.lane.length() && car.lane.laneEnd != null) {
            car.position -= car.lane.laneEnd.length();
        }
    };
    return TrafficMap;
}());
export { TrafficMap };
