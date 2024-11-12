const { ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

/**
 * Creates a button
 * @param {string} label - Button text.
 * @param {string} customId - Custom ID to identify the button.
 * @param {string} style - Button style (primary, secondary, success, danger, link).
 * @param {string} emoji - Emoji to add to the button (optional).
 * @returns {ActionRowBuilder} - Returns ActionRow with button.
 */
function createButton(label, customId, style = 'primary', emoji = '') {
    const button = new ButtonBuilder()
        .setLabel(label)
        .setCustomId(customId)
        .setStyle(ButtonStyle[style] || ButtonStyle.Primary);

    if (emoji) {
        button.setEmoji(emoji);
    }

    return new ActionRowBuilder().addComponents(button);
}

module.exports = { createButton };
