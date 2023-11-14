# Discord.JS Template

Gereken modülleri indir:
```
npm install
pnpm install
yarn
```
Örnek Komut:

```js
const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('helloworld')
		.setDescription('Hello World!'),
	/** @param {import("discord.js").ChatInputCommandInteraction} interaction */
	async chatInput(interaction) {
        interaction.reply('Hello World!');
	},
	/** @param {import("discord.js").Message} message */
	async messageRun(message) {
		message.reply('Hello World!');
	},
};
```
Örnek etkinlik:

```js
const { console } = require('sneaks');

module.exports = {
    category: 'ready',
    /**
     * @param {import("discord.js").Client} client
     */
    async run(client) {
        console.success('Bot başarıyla Discord\'a bağlandı.');
    },
};
```

# Küçük notlar
- `/* @param {...} ... */` ve `/* @type {...} */` satırları da neyin nesi?
  > 🗝️ Bu tür fonksiyon parametre türü (**@param**) ve değişken türü (**@type**) belirten satırlar kod yazmamızı kolaylaştırır ve yazdığımız koddan emin olmamızı sağlar.<br>⚠️ Gereksiz görüyorsanız satırı silebilirsiniz!

# 🪰 Bir hata buldum!

- 🐜 Eğer bir hata bulduysanız ve çözümünü biliyorsanız yeni istek ([pull request](https://github.com/romanizm/discordjs-template/compare)) açabilirsiniz!
- 📱 Bana ulaşmak istiyorsanız [discord](https://discord.com/users/341585045397438464) üzerinden ulaşabilirsiniz!
