const express = require('express');
const geonamesPostalCodes = require('geonames-postalcodes');
const postalCodeApi = require('./api/postalCode');
let conf = require('./config.js');

let postalCodeFile = conf.get('dataFile');
if (!postalCodeFile) {
  console.log("ERROR: No postal code data file specified");
  process.exit(1);
}
geonamesPostalCodes.init(postalCodeFile);

let app = express();
let router = express.Router();
router.get('/postalCodeLookup', postalCodeApi.postalCodeLookup);
router.get('/postalCodeSearch', postalCodeApi.postalCodeSearch);
router.get('/placeNameSearch', postalCodeApi.placeNameSearch);

app.use('/api', router);

let port = conf.get('port');
let ip = conf.get('ip');
app.listen(port, ip, function() {
  console.log('Server started on %s:%d', ip, port);
});
