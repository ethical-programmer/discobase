const { EmbedBuilder } = require('discord.js');

function infoEmbed(message) {
    return new EmbedBuilder()
        .setColor('Blue')
        .setDescription(`\`ℹ\` | ${message}`);
}

module.exports = infoEmbed;
