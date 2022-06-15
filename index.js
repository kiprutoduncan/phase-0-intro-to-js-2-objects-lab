// Write your solution in this file!
const employee = {}
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromEmployeeByKey(driver, key) {
  const NEW_OBJ =  Object.assign({}, driver);
  delete NEW_OBJ[key];
  return NEW_OBJ;
}

function destructivelyDeleteFromEmployeeByKey(driver, key) {
Object.assign({}, driver);
delete driver[key];
return driver;
}