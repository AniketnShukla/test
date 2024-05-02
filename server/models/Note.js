const {DataTypes, Sequelize} = require("sequelize");
const sequelize = require("../config/dbConfig");

const Note = sequelize.define(
    "Note",
    {
        note_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        note_content: {
            type: DataTypes.TEXT,
        },
        timestamp: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'notes',
        timestamps: false
    });

module.exports = Note;