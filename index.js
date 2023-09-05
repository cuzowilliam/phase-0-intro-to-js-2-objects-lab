// Write your solution in this file!
const employee = {
    name: "William",
    streetAddress: "620 street",
};

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newAddress = { ...employee};

    newAddress[name] = streetAddress;

    return newAddress;   
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name] = streetAddress;

    return employee;
}

function deleteFromEmployeeByKey(employee, name, streetAddress) {
    const newEmployee = { ...employee };

    newEmployee[name] = streetAddress;

    delete deleteFromEmployeeByKey.name;

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name, streetAddress) {
    const newEmployee = { ...employee };

    newEmployee[name] = streetAddress;

    delete destructivelyDeleteFromEmployeeByKey.name;

    employee[name] = streetAddress;

    return employee;
}
