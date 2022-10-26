"use strict";

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Profile extends Model {};

Profile.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        required: true,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: "profile",
});

module.exports = Profile;