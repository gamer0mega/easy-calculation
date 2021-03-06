A Simple NodeJS Calculation Package, Can be used in Projects such as Discord Bots.
__________

Features:
1. User-Friendly Mode
2. No Vulnerabilities
3. Easy to Use
4. Fast
_________

How To Use?

Example Usage:
```js
console.log(require('easy-calculation').calculate('2+2')); // 4
console.log(require('easy-calculation').calculate('pi')); // 3.141592653589793
console.log(require('easy-calculation').calculate('qwerty')); // NaN
console.log(require('easy-calculation').calculate('(2+2)>(4+4)')); // false
console.log(require('easy-calculation').calculate('(2+2)<(4+4)')); // true
console.log(require('easy-calculation').calculate('Infinity')); // Infinity
console.log(require('easy-calculation').calculate('')); // null
console.log(require('easy-calculation').calculate('random')); // 0.7804080476762894
console.log(require('easy-calculation').calculate('round(pi)')); // 3
console.log(require('easy-calculation').calculate('trunc(pi)')); // 3
console.log(require('easy-calculation').calculate('sqrt(pi)')); // 1.7724538509055159
console.log(require('easy-calculation').calculate('floor(random * floor(50))')); // 39
console.log(require('easy-calculation').calculate('cbrt(pi)')); // 1.4645918875615231
```
___

User-Friendly Mode:
```js
console.log(require('easy-calculation').calculate('2+2', true)); // 4
console.log(require('easy-calculation').calculate('pi', true)); // 3.141592653589793
console.log(require('easy-calculation').calculate('qwerty', true)); // Invalid Calculation
console.log(require('easy-calculation').calculate('(2+2)>(4+4)', true)); // False
console.log(require('easy-calculation').calculate('(2+2)<(4+4)', true)); // True
console.log(require('easy-calculation').calculate('Infinity', true)); // Too Big to Display
console.log(require('easy-calculation').calculate('', true)); // No Calculation Provided
console.log(require('easy-calculation').calculate('random', true)); // 0.7804080476762894
console.log(require('easy-calculation').calculate('round(pi)', true)); // 3
console.log(require('easy-calculation').calculate('trunc(pi)', true)); // 3
console.log(require('easy-calculation').calculate('sqrt(pi)', true)); // 1.7724538509055159
console.log(require('easy-calculation').calculate('floor(random * floor(50))', true)); // 39
console.log(require('easy-calculation').calculate('cbrt(pi)'), true); // 1.4645918875615231
```
User-Friendly Mode is a Boolean argument after the Calculation argument.
___

Example Usage in Discord.js:
```js
const Discord = require('discord.js');
const calculator = require('easy-calculation');
module.exports = {
    name: 'calc',
    execute(message, args) {
        return message.channel.send(new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('Calculator')
            .setDescription(calculator.calculate(args.join(" "), true))
            .setColor(24325));
    }
}
```
___

Example Usage in Eris:
```js
const calculator = require('easy-calculation');
module.exports = {
    name: 'calc',
    execute(message, args) {
        return message.channel.createMessage({embed: {
            author: {
                name: message.author.username + '#' + message.author.discriminator,
                icon_url: message.author.avatarURL
            },
            title: 'Calculator',
            description: calculator.calculate(args.join(" "), true),
            color: 24325
        }});
    }
}
```
___________________

Need More Support? Join our [Discord Server](https://discord.gg/jnzkPmukuv)!

