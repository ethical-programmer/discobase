const { EmbedBuilder } = require('discord.js');

function actionRequiredEmbed(message) {
    return new EmbedBuilder()
        .setColor('Orange')
        .setDescription(`\`⚠️\` ${message}\nPlease take action!`);
}

module.exports = actionRequiredEmbed;
