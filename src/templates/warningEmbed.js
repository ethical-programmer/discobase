const { EmbedBuilder } = require('discord.js');

function warningEmbed(message) {
    return new EmbedBuilder()
        .setColor('Yellow')
        .setDescription(`\`⚠️\` | ${message}`);
}

module.exports = warningEmbed;
