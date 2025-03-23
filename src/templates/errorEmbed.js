/**
 * Changes made by Jack on 2025-03-23 11:45:00
 *
 * CHANGELOG:
 * - Added comprehensive JSDoc comments for better IDE support and documentation
 * - Improved function parameter documentation
 * - Added examples of usage
 * - Enhanced error message formatting
 * - Added color constant for better maintainability
 */

const { EmbedBuilder } = require('discord.js');

/**
 * Error color code for consistent styling across error embeds
 * Using hex code instead of named color for more precise control
 */
const ERROR_COLOR = '#FF0000';

/**
 * Creates a standardized Discord error embed with consistent styling.
 *
 * This utility function generates a pre-styled Discord embed meant for
 * displaying error messages to users. The embed uses a red color theme
 * and prefixes the message with an "❌" emoji for visual indication.
 *
 * @param {string} message - The error message to display in the embed
 * @returns {EmbedBuilder} A configured Discord.js EmbedBuilder instance
 *
 * @example
 * // Basic usage
 * const embed = errorEmbed('Invalid command parameters');
 * interaction.reply({ embeds: [embed] });
 *
 * @example
 * // With dynamic content
 * const embed = errorEmbed(`User ${user.tag} not found in database`);
 * message.channel.send({ embeds: [embed] });
 */
function errorEmbed(message) {
    return new EmbedBuilder()
        .setColor(ERROR_COLOR)
        .setDescription(`\`❌\` | ${message}`);
}

module.exports = errorEmbed;
