module.exports = function(sequelize, Datatypes) {
    var Message = sequelize.define("Message" , {
        text: {
            type: Datatypes.STRING,
            allowNull: true,
        },
    });

    Message.associate = function(models) {
        Message.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Message.belongsTo(models.Chat, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Message;
}