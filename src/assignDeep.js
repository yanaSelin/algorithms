module.exports = function assignDeep(obj1 = {}, obj2 = {}) {
  const result = {};
  for (key in obj1) {
    if (obj2[key]) {
      result[key] = typeof obj1[key] === 'object' && typeof obj2[key] === 'object'
        ? assignDeep(obj1[key], obj2[key])
        : obj2[key];
    } else {
      result[key] = obj1[key];
    }
  }

  return { ...obj2, ...result };
};