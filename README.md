# Discobase

**Discobase** is a powerful and easy-to-use Node.js package that simplifies the process of creating Discord embeds and buttons for your bot. Whether you are building a community bot, a utility bot, or a game bot, Discobase provides pre-made templates for embeds and buttons, making it incredibly easy to send interactive messages to your server.

## Features

- **Pre-Made Embed Templates**: Create beautiful and customizable embeds for success, info, warning, error, and more.
- **Button Interactions**: Easily create buttons with custom emojis, styles, and actions. Handle button clicks directly in your code without complex event handling.
- **Minimal Code**: Focus on your bot’s logic and let Discobase handle the boilerplate embed and button creation.
- **Customizable**: Customize embed content, colors, and buttons to suit your specific needs.

## Installation

To get started, you can install Discobase from npm:

```bash
npm install discobase
```

## Usage
### Create Embeds
Discobase provides a set of predefined embed templates for you to use directly. You can customize each template with a message or other options.

**Example 1: Success Embed**
```js
const { EmbedBase } = require('discobase');

const embed = EmbedBase.create('success', 'Your operation was successful!');
channel.send({ embeds: [embed] });
```

**Example 2: Info Embed**
```js
const { EmbedBase } = require('discobase');

const embed = EmbedBase.create('info', 'This is some information!');
channel.send({ embeds: [embed] });
```

## Available Embed Templates
- Success: A green embed used to show successful actions.
- Info: A blue embed for informational messages.
- Warning: An orange embed for warnings.
- Error: A red embed for error messages.
- Neutral: A default white embed for neutral messages.
- Action Required: A purple embed for actions that require user interaction.


**Example: Warning Embed**
```js
const { EmbedBase } = require('discobase');

const embed = EmbedBase.create('warning', 'This is a warning message!');
channel.send({ embeds: [embed] });
```


## Create Buttons
Discobase makes it simple to create buttons with custom actions. Here's how to create a button and send it along with an interaction handler.

**First make sure to pass `client` to `ButtonBase`. You can do it in your main bot file.**
```js
const { ButtonBase } = require('discobase')
ButtonBase.attachListener(client);
```


**Example 1: Creating a Button**
```js
const { ButtonBase } = require('discobase');
const { ButtonStyle, ActionRowBuilder } = require('discord.js');

const button = new ButtonBase()
    .setEmoji('👍')
    .setStyle(ButtonStyle.Primary)
    .setCustomId('button1'); 

const buttonRow = button.build();
await interaction.reply({ components: [buttonRow] });
```

**Example 2: Handle Button Interaction**

## Button Interaction Handling
You can handle interactions for multiple or single buttons by registering them using `ButtonBase.registerButton()`:
```js

ButtonBase.registerButton('button1', button1);
ButtonBase.registerButton('button2', button2);

button1.onClick(async (interaction) => {
    if (interaction.customId === 'button1') {
        await interaction.reply('You clicked the first button!');
    }
});

button2.onClick(async (btnInteraction) => {
    if (btnInteraction.user.id === interaction.user.id) {
        await btnInteraction.reply('You clicked this button!');
    } else {
        await btnInteraction.reply({ content: "This button isn't for you!", ephemeral: true });
    }
})
```

## Multiple Buttons
You can also send multiple buttons in the same message. Just create as many buttons as you need and use the Buttons.build() method to add them to a row.

**Example: Multiple Buttons**
```js
const button1 = new ButtonBase()
    .setEmoji('👍')
    .setStyle(ButtonStyle.Primary)
    .setCustomId('button1');

const button2 = new ButtonBase()
    .setEmoji('👎')
    .setStyle(ButtonStyle.Secondary)
    .setCustomId('button2');

const buttonRow = ButtonBase.build(button1, button2);

await interaction.reply({ components: [buttonRow] });
```


## Contact
If you have any questions or need support, feel free to reach out to us:
- Discord : https://discord.gg/ethical-programmer-s-1188398653530984539

