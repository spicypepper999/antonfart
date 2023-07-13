var Car = /** @class */ (function () {
    function Car(position, lane, direction, speed, power, size, ruleset) {
        this._position = position;
        this._lane = lane;
        this._direction = direction;
        this._speed = speed;
        this._power = power;
        this._size = size;
        this._ruleset = ruleset;
        this._lane.cars.push(this);
    }
    Object.defineProperty(Car.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "lane", {
        get: function () {
            return this._lane;
        },
        set: function (value) {
            if (this._lane.cars.indexOf(this) != -1 && this._lane != value) {
                this._lane.cars.splice(this._lane.cars.indexOf(this), 1);
            }
            this._lane = value;
            if (this._lane.cars.indexOf(this) == -1)
                this._lane.cars.push(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "power", {
        get: function () {
            return this._power;
        },
        set: function (value) {
            this._power = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "ruleset", {
        get: function () {
            return this._ruleset;
        },
        set: function (value) {
            this._ruleset = value;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.getXYDir = function () {
        var XYDir = this.lane.XYDirFromPosition(this.position);
        if (this._direction == 1) {
            XYDir[1] = XYDir[1] - Math.PI;
        }
        return XYDir;
    };
    Car.prototype.calculateStoppingDistance = function () {
        var distance = 0;
        distance = (Math.pow(this.speed, 2)) / (this.power * 2);
        return distance;
    };
    Car.prototype.calculateStoppingDistanceToCar = function (car) {
        var distance = 0;
        distance = (Math.pow((this.speed - car.speed), 2)) / (this.power * 2);
        return distance;
    };
    Car.prototype.brake = function () {
        if (this.speed > 0) {
            this.speed -= this.power;
        }
        if (this.speed <= 0) {
            this.speed = 0;
        }
    };
    Car.prototype.accelerate = function () {
        if (this.speed < this.lane.speedLimit) {
            this.speed += this.power;
        }
    };
    Car.prototype.isObstacle = function (car) {
        return true;
    };
    Object.defineProperty(Car.prototype, "type", {
        get: function () {
            return "car";
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
export { Car };
