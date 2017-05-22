const geonamesPostalCodes = require('geonames-postalcodes');

module.exports.postalCodeLookup = function(req, res) {
  postalCode = req.query.postalCode;
  if (!postalCode) {
    res.status(404).json({});
    return;
  }
  let result = geonamesPostalCodes.postalCodeExactLookup(postalCode);
  res.status(200).json(result);
}

module.exports.postalCodeSearch = function(req, res) {
  postalCode = req.query.postalCode;
  if (!postalCode) {
    res.status(404).json({});
    return;
  }
  let result = geonamesPostalCodes.postalCodeSearch(postalCode+'*');
  res.status(200).json(result);
}

module.exports.placeNameSearch = function(req, res) {
  placeName = req.query.placeName;
  if (!placeName) {
    res.status(404).json({});
    return;
  }
  let result = geonamesPostalCodes.placeNameSearch(placeName+'*');
  res.status(200).json(result);
}
