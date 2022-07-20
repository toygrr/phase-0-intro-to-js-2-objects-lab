const employee = {
  name: "Tyler",
  streetAddress: "1 Ladybug way",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  return { ...obj, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  {
    obj[key] = value;
  }
  return employee;
}

function deleteFromEmployeeByKey(obj, key) {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}
