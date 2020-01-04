module.exports = function (sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
      Sport: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      Day: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  });
    return Team;
  };