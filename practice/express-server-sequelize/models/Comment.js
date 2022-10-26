"use strict";

const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {};

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        profile_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "profile",
                key: "id",
                unique: false,

            }
        },
        content: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false,
        },
        createdOn: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: "comment",
    }
)

module.exports = Comment;