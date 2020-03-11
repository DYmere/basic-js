const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (arguments.length != 1) { return false };
  if (typeof(sampleActivity) != "string") { return false };
  if (/^[0-9\.]+$/.test(sampleActivity) == false || sampleActivity <= 0 || sampleActivity > 15) { return false };
  return Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/(0.693/HALF_LIFE_PERIOD));
};
