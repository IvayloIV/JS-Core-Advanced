class Organization {
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;
        this.employees = [];
        this.portions = {
            marketing: budget * 0.4,
            finance: budget * 0.25,
            production: budget * 0.35
        };
    }

    get departmentsBudget() {
        return this.portions;
    }

    add(employeeName, department, salary) {
        if (this.portions[department] < salary) {
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this.portions[department]}.`;
        }

        this.employees.push({ employeeName, department, salary });
        this.portions[department] -= salary;
        return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
    }

    employeeExists(employeeName) {
        let indexEmployee = this.employees.findIndex(a => a.employeeName === employeeName);

        if (indexEmployee === -1) {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }

        return `Mr./Mrs. ${employeeName} is part of the ${this.employees[indexEmployee].department} department.`;
    }

    leaveOrganization(employeeName) {
        let indexEmployee = this.employees.findIndex(a => a.employeeName === employeeName);

        if (indexEmployee === -1) {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }

        let employee = this.employees.splice(indexEmployee, 1)[0];
        this.portions[employee.department] += employee.salary;
        return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
    }

    status() {
        let result = [];
        result.push(`${this.name.toUpperCase()} DEPARTMENTS:`);

        let sortedEmployees = this.employees.sort((a, b) => b['salary'] - a['salary']);
        const marketingEmployees = sortedEmployees.filter(a => a.department === 'marketing');
        const financeEmployees = sortedEmployees.filter(a => a.department === 'finance');
        const productionEmployees = sortedEmployees.filter(a => a.department === 'production');

        result.push(`Marketing | Employees: ${marketingEmployees.length}: ${marketingEmployees.map(a => a['employeeName']).join(', ')} | Remaining Budget: ${this.portions['marketing']}`)
        result.push(`Finance | Employees: ${financeEmployees.length}: ${financeEmployees.map(a => a['employeeName']).join(', ')} | Remaining Budget: ${this.portions['finance']}`)
        result.push(`Production | Employees: ${productionEmployees.length}: ${productionEmployees.map(a => a['employeeName']).join(', ')} | Remaining Budget: ${this.portions['production']}`)

        return result.join('\n').trim();
    }
}

let organization = new Organization('SBTech', 1000);

console.log(organization.add('Peter', 'marketing', 100));
console.log(organization.add('Peter', 'production', 100));
console.log(organization.add('Robert', 'production', 200));
console.log(organization.leaveOrganization('Robert2'));

console.log(organization.status());
