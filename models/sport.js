module.exports = function(sequelize, Datatypes) {
    var Sport = sequelize.define("Sport" , {
        sport: {
            type: Datatypes.STRING,
            allowNull: true,
        },
        chatID: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        park: {
            type: Datatypes.STRING,
            allowNull: true
        }
    });

    return Sport;
}