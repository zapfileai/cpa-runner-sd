const southDakotaCities = [
  "Aberdeen", "Alcester", "Armour", "Belle Fourche", "Beresford",
  "Black Hawk", "Box Elder", "Brandon", "Brookings", "Burbank",
  "Burke", "Castlewood", "Chamberlain", "Clark", "Conde",
  "Custer", "Deadwood", "Dell Rapids", "Egan", "Elk Point",
  "Elkton", "Ellsworth", "Emery", "Flandreau", "Fort Pierre",
  "Freeman", "Harrisburg", "Hermosa", "Hot Springs", "Huron",
  "Ipswich", "Jefferson", "Lake Andes", "Lake Preston", "Lead",
  "Lemmon", "Madison", "Marion", "Menno", "Milbank",
  "Miller", "Mitchell", "Mobridge", "North Sioux City", "Nunda",
  "Onida", "Parker", "Parkston", "Pierre", "Pine Ridge",
  "Platte", "Rapid City", "Sioux Falls", "Sisseton", "Spearfish",
  "Sturgis", "Tea", "Valley Springs", "Vermillion", "Volga",
  "Wagner", "Wall", "Watertown", "Wessington", "Winner",
  "Wolsey", "Yankton",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < southDakotaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(southDakotaCities[i]);
}

module.exports = { batches };
