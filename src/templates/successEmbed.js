const { EmbedBuilder } = require('discord.js');

function successEmbed(message) {
    return new EmbedBuilder()
        .setColor('Green')
        .setDescription(`\`✅\` | ${message}`);
}

module.exports = successEmbed;
