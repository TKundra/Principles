class Employee {
    private name: string;
    private department: string;
    private salary: number;
    private subordinates: Employee[];

    constructor(name: string, department: string, salary: number) {
        this.name = name;
        this.department = department;
        this.salary = salary;
        this.subordinates = [];
    }

    public add(employee: Employee): void {
        this.subordinates.push(employee);
    }

    public remove(employee: Employee): void {
        const index = this.subordinates.indexOf(employee);
        if (index < 0) return;
        this.subordinates.splice(index, 1);
    }

    public getSubordinates(): Employee[] {
        return this.subordinates;
    }

    public toString(): string {
        return (`Employee: [ Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary} ]`);
    }
}

export default Employee;