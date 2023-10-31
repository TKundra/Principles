// Interface defining actions for a vehicle
interface Vehicle {
    start(): void;
    stop(): void;
    accelerate(): void;
    brake(): void;
    honk(): void;
}

// Class implementing the Vehicle interface
class Car implements Vehicle {
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

// Class implementing the Vehicle interface
class Bicycle implements Vehicle {
    start(): void {
        console.log('Bicycle started');
    }

    stop(): void {
        console.log('Bicycle stopped');
    }

    accelerate(): void {
        console.log('Bicycle accelerated');
    }

    brake(): void {
        console.log('Bicycle braked');
    }

    // This method is not applicable for a Bicycle
    honk(): void {
        throw new Error('Bicycle cannot honk');
    }
}

// Usage
const car = new Car();
car.start();
car.accelerate();
car.honk();

const bicycle = new Bicycle();
bicycle.start();
bicycle.accelerate();
bicycle.honk(); // Error thrown
