# node-postalcodes
Node server for postal code lookup and search

A simple web server around [geonames-postalcodes](https://github.com/chad-g-adams/geonames-postalcodes).

This project does not include any postal code data files. See [geonames-postalcodes](https://github.com/chad-g-adams/geonames-postalcodes) for more information on the data files. Geonames requires credit if you use their data.

# Install

`npm install`

# Configure

Edit config/config.json with the path to your postal codes datafile.
See [geonames-postalcodes](https://github.com/chad-g-adams/geonames-postalcodes) for more information about this file.

# Start

`npm start`

# Usage

## Postal code lookup

http://localhost:10011/api/postalCodeLookup?postalCode=K2K

```
{
  "countryCode": "CA",
  "postalCode": "K2K",
  "placeName": "Kanata (Beaverbrook / South March)",
  "adminName1": "Ontario",
  "adminCode1": "ON",
  "adminName2": "Kanata",
  "adminCode2": "",
  "adminName3": "",
  "adminCode3": "",
  "latitude": "45.3704",
  "longitude": "-75.9198",
  "accuracy": "1"
}
```

## Postal code search

http://localhost:10011/api/postalCodeSearch?postalCode=K2

## Place Name search

http://localhost:10011/api/placeNameSearch?placeName=stit
