const { EmbedBuilder } = require('discord.js');

function neutralEmbed(message) {
    return new EmbedBuilder()
        .setColor('Grey')
        .setDescription(message);
}

module.exports = neutralEmbed;
