const models = require('./models'); 

function test(dict) {
    console.log(dict.unixEpoch + " " + dict.convertedTime + " " + dict.steeringAngle + " " + dict.batteryTemperature + " " + dict.batteryVoltage + " " + dict.motorSpeed
    + " " + dict.gear + " " + dict.padding + " " + dict.lat + " " + dict.long + " " + dict.xAccelerator + " " + dict.yAccelerator + " " + dict.zAccelerator
    + " " + dict.zGyro + " " + dict.yGyro + " " + dict.zGyro + " " + dict.flSuspension + " " +dict.frSuspension + " " +dict.rlSuspension + " " + dict.rrSuspension
    + " " + dict.flSpeed + " " + dict.frSpeed + " " + dict.rlSpeed + " " + dict.rrSpeed)
}

function store(data) {
    createAccelerometer(data);
    createGyroscope(data);
    createLocation(data);
    createMotorspeed(data);
    // createPadding(data);
    createWaterTemperature(data);
    createSpeed(data);
    createSteering(data);
    createSuspension(data);
    createTemperature(data);
    createVoltage(data);
    // createGear(data);
}

// create. 
function createAccelerometer(data) {
    return models.Accelerometer.create({
        time: data.convertedTime,
        x: data.xAccelerometer,
        y: data.yAccelerometer, 
        z: data.zAccelerometer,
    });
};

function createGyroscope(data) {
    return models.Gyroscope.create({
        time: data.convertedTime, 
        x: data.xGyro,
        y: data.yGyro,
        z: data.zGyro, 
    });
};

function createLocation(data) {
    return models.Location.create({
        time: data.convertedTime, 
        lat: data.latitude,
        long: data.longitude,
    });
};

function createMotorspeed(data) {
    return models.MotorSpeed.create({
        time: data.convertedTime, 
        value: data.motorSpeed,
    });
}; 

function createWaterTemperature(data) {
    return models.WaterTemperature.create({
        time: data.convertedTime, 
        value: data.waterTemperature, 
    });
};
// function createPadding(data) {
//     return models.Padding.create({
//         time: data.convertedTime, 
//         value: data.padding, 
//     });
// };

function createSpeed(data) {
    return models.Speed.create({
        time: data.convertedTime, 
        fl: data.flSpeed, 
        fr: data.frSpeed,
        rl: data.rlSpeed,
        rr: data.rrSpeed, 
    });
}; 

function createSteering(data) {
    return models.Steering.create({
        time: data.convertedTime, 
        value: data.steeringAngle, 
    });
};

function createSuspension(data) {
    return models.Suspension.create({ 
        time: data.convertedTime, 
        fl: data.flSuspension,
        fr: data.frSuspension,
        rl: data.rlSuspension, 
        rr: data.rrSuspension, 
    });
};

function createTemperature(data) {
    return models.Temperature.create({
        time: data.convertedTime,
        value: data.batteryTemperature,
    });
};

function createVoltage(data) {
    return models.Voltage.create({
        time: data.convertedTime, 
        value: data.batteryVoltage,
    });
}; 

// function createGear(data) {
//     return models.Gear.create({
//         time: data.time,
//         value: data.gear, 
//     })
// }

module.exports = {
    createAccelerometer,
    createGyroscope,
    createLocation,
    // createPadding,
    createMotorspeed,
    createSpeed,
    createSteering,
    createSuspension,
    createTemperature,
    createVoltage,
    store,
    test,
};