module.exports = function (sequelize, DataTypes) {
    var Day = sequelize.define("Day", {
        day: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Day.associate = function(models) {
        Day.belongsTo(models.Sport, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Day;
}