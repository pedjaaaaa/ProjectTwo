module.exports = function(sequelize, Datatypes) {
    var Chat = sequelize.define("Chat" , {
        sport: {
            type: Datatypes.STRING,
            allowNull: true,
        },
        users: {
            type: Datatypes.STRING,
            allowNull: false
        }
    });

    Chat.associate = function(models) {
        Chat.belongsTo(models.Sport, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Chat;
}