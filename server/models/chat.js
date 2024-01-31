module.exports = (sequelize, Datatypes) => {
    Chat = sequelize.define('Chat', {
        Bot: {
            type: Datatypes.STRING,
            allowNull: false,
        }
    });

    Chat.associate = models => {
        Chat.hasMany(models.Message, {
            onDelete: "cascade"
        });
    };

    return Chat;
}
