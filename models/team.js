module.exports = function (sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
      Team: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
  });
    return Team;
  };