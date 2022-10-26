"use strict";

const Comment = require("./Comment");
const Profile = require("./Profile");

Comment.belongsTo(Profile, { foreignKey: "profile_id" });
Profile.hasMany(Comment, { foreignKey: "profile_id", onDelete: "CASCADE" });

module.exports = {Comment, Profile};