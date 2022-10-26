"use strict";

const { Profile } = require("../models");

const profileData = [
  {
    email: "andrew@andrew.com",
    name: "fucker",
  },
  {
    email: "joe@joe.com",
    name: "cool joe",
  },
  {
    email: "bakary@bakary.com",
    name: "nice guy",
  },
  {
    email: "brian@brian.com",
    name: "me",
  },
  {
    email: "briadsfefn@brian.com",
    name: "me again"
  },
];

const seedProfiles = () => Profile.bulkCreate(profileData);

module.exports = seedProfiles;
