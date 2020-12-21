/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const pickedEntries = Object.entries(obj)
    .filter(([key]) => fields.some(field => field === key));

  return Object.fromEntries(pickedEntries);
};
