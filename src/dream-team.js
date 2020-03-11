module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) == false) { return false };
  let teamName=[];
  for (name of members) {
    if (typeof(name) != "string") { continue };
    teamName.push(name.trim().toUpperCase()[0]);
  }
  return teamName.sort().join("");
};
