const Dev = require('../models/Dev');
const stringToArray = require('../utils/stringToArray');

const index = async (req, res) => {
  const { latitude, longitude, techs } = req.query;
  const techsArray = stringToArray(techs);
  const devs = await Dev.find({
    techs: {
      $in: new RegExp(techsArray, 'i')
    },
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [longitude, latitude]
        },
        $maxDistance: 10000
      }
    }
  });

  return res.json({ devs });
};

module.exports = { index };
