// src/EmbedBase.js
const successEmbed = require('./templates/successEmbed');
const infoEmbed = require('./templates/infoEmbed');
const warningEmbed = require('./templates/warningEmbed');
const errorEmbed = require('./templates/errorEmbed');
const neutralEmbed = require('./templates/neutralEmbed');
const actionRequiredEmbed = require('./templates/actionRequiredEmbed');
const { createButton } = require('./utils/buttonUtil')

class EmbedBase {
    static create(type, message, options = {}) {
        switch (type.toLowerCase()) {
            case 'success':
                return successEmbed(message);
            case 'info':
                return infoEmbed(message);
            case 'warning':
                return warningEmbed(message);
            case 'error':
                return errorEmbed(message);
            case 'neutral':
                return neutralEmbed(message);
            case 'actionrequired':
                return actionRequiredEmbed(message);
            default:
                throw new Error('Invalid embed type');
        }
    }

    /**
    * Creates an embed with buttons
    * @param {string} type - Type of embed.
    * @param {string} message - The message to display in embed.
    * @param {Array} buttons - Array of button configurations.
    * @returns {Object} - Embed with buttons.
    */
    static createWithButtons(type, message, buttons = []) {
        // First, create the embed based on the type
        const embed = EmbedBase.create(type, message);

        // Create buttons using utility function
        const actionRows = buttons.map(button => createButton(button.label, button.customId, button.style, button.emoji));

        return { embed, components: actionRows };
    }
}



module.exports = EmbedBase;
