const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const EventEmitter = require('events');

class ButtonBase extends EventEmitter {
    constructor() {
        super();
        this.button = new ButtonBuilder();
    }

    setEmoji(emoji) {
        this.button.setEmoji(emoji);
        return this;
    }

    setStyle(style) {
        this.button.setStyle(ButtonStyle[style] || ButtonStyle.Primary);
        return this;
    }

    setCustomId(customId) {
        this.button.setCustomId(customId);
        this.customId = customId; // Store the custom ID locally for interaction handling
        return this;
    }

    /**
     * Attach an onClick listener for the button's interaction
     * @param {function} callback - The callback function to handle button click interaction
     * @returns {ButtonBase} - Returns the ButtonBase instance for chaining
     */
    onClick(callback) {
        this.on('click', callback);
        return this;
    }

    /**
     * Build the button and return it inside an action row (for single button).
     * @returns {ActionRowBuilder} - Returns the ActionRowBuilder with the button
     */
    build() {
        return new ActionRowBuilder().addComponents(this.button);
    }

    /**
     * Handle the button interaction. This method is responsible for automatically 
     * listening to interactions and triggering the appropriate event.
     * @param {Interaction} interaction - The interaction object from discord.js
     */
    async handleInteraction(interaction) {
        if (interaction.isButton() && interaction.customId === this.customId) {
            this.emit('click', interaction);
        }
    }

    /**
     * Automatically listen for interactions from the provided client.
     * @param {Client} client - The discord.js client
     */
    static attachListener(client) {
        client.on('interactionCreate', async (interaction) => {
            if (interaction.isButton()) {
                const button = ButtonBase.getButtonByCustomId(interaction.customId);
                if (button) {
                    await button.handleInteraction(interaction);
                }
            }
        });
    }

    /**
     * Store buttons by their customId for interaction lookup.
     * @param {string} customId - The customId of the button
     * @param {ButtonBase} button - The button instance
     */
    static registerButton(customId, button) {
        if (!ButtonBase.buttonRegistry) {
            ButtonBase.buttonRegistry = {};
        }
        ButtonBase.buttonRegistry[customId] = button;
    }

    /**
     * Get a button instance by its customId.
     * @param {string} customId - The customId of the button
     * @returns {ButtonBase|null} - Returns the button instance or null
     */
    static getButtonByCustomId(customId) {
        return ButtonBase.buttonRegistry ? ButtonBase.buttonRegistry[customId] : null;
    }

    /**
     * Build and send multiple buttons in one action row.
     * @param {...ButtonBase} buttons - The ButtonBase instances to be added to the action row
     * @returns {ActionRowBuilder} - Returns an ActionRowBuilder with all buttons
     */
    static build(...buttons) {
        const row = new ActionRowBuilder();
        buttons.forEach(button => row.addComponents(button.button));
        return row;
    }
}

module.exports = ButtonBase;
