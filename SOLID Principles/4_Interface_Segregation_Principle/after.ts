// Interface defining basic actions for a vehicle
interface BasicVehicle {
    start(): void;
    stop(): void;
}

// Interface defining advanced actions for a vehicle
interface AdvancedVehicle {
    accelerate(): void;
    brake(): void;
    honk(): void;
}

// Class implementing the BasicVehicle interface
class Car implements BasicVehicle, AdvancedVehicle {
    start(): void {
        console.log('Car started');
    }

    stop(): void {
        console.log('Car stopped');
    }

    accelerate(): void {
        console.log('Car accelerated');
    }

    brake(): void {
        console.log('Car braked');
    }

    honk(): void {
        console.log('Car honked');
    }
}

// Class implementing the BasicVehicle interface
class Bicycle implements BasicVehicle {
    start(): void {
        console.log('Bicycle started');
    }

    stop(): void {
        console.log('Bicycle stopped');
    }
}

// Usage
const car = new Car();
car.start();
car.accelerate();
car.honk();

const bicycle = new Bicycle();
bicycle.start();

/**
 * In the before-ISP example, the Vehicle interface includes methods that are not applicable for all types of vehicles, leading to issues when implementing the interface in the Bicycle class.
 * In the after-ISP example, the Vehicle interface is segregated into BasicVehicle and AdvancedVehicle interfaces, allowing classes to implement only the relevant methods.
 * This adheres to ISP, ensuring that clients are not forced to implement methods that they do not use.
*/