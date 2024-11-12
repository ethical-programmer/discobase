const { EmbedBuilder } = require('discord.js');

function errorEmbed(message) {
    return new EmbedBuilder()
        .setColor('Red')
        .setDescription(`\`❌\` | ${message}`);
}

module.exports = errorEmbed;
