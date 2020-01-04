module.exports = function(sequelize, Datatypes) {
    var Sport = sequelize.define("Sport" , {
        sport: {
            type: Datatypes.STRING,
            allowNull: true,
        }
    });

    Sport.associate = function(models) {
        Sport.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Sport;
}