const axios = require('axios');
const Dev = require('../models/Dev');
const stringToArray = require('../utils/stringToArray');
const { findConnections, sendMessage } = require('../webSocket');

const GITHUB_API_URL = 'https://api.github.com/users';

const store = async (req, res) => {
  const { github_username, techs, latitude, longitude } = req.body;
  let dev = await Dev.findOne({ github_username });

  if (!dev) {
    const apiResponse = await axios.get(`${GITHUB_API_URL}/${github_username}`);
    const { name = login, avatar_url, bio } = apiResponse.data;
    const techsArray = stringToArray(techs);

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    };

    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location
    });

    const sendSocketMessageTo = findConnections(
      { latitude, longitude },
      techsArray
    );
    sendMessage(sendSocketMessageTo, 'newDev', dev);

    return res.json(dev);
  } else {
    return res.status(400).json({ error: 'User already exists' });
  }
};

const index = async (req, res) => {
  const devs = await Dev.find();
  return res.json(devs);
};

const update = async (req, res) => {
  const { name, bio, latitude, longitude, techs } = req.body;
  const techsArray = stringToArray(techs);
  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  };
  const id = req.params.id;

  await Dev.findByIdAndUpdate(
    id,
    {
      name,
      bio,
      techs: techsArray,
      location
    },
    {
      new: true
    },
    (err, document) => {
      if (err) res.status(400).json({ error: err });
      return res.json(document);
    }
  );
};

const destroy = async (req, res) => {
  const { id } = req.params;
  await Dev.findByIdAndDelete(id);
  return res.status(200).json({ message: 'Success! User deleted!' });
};

module.exports = { store, index, update, destroy };
