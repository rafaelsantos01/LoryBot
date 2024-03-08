import { createClient } from "./discord/base";
import { log } from "./settings";
import Discord from "discord.js";

const client = createClient();

client.on("guildMemberAdd", (member) => {
  const welcomeMessage = `
  😊  Olá ${member.user.username}, seja muito bem-vindo(a) à Eagle De Chumbinho!  🎉

  ⭐  Talvez você ainda não saiba muito sobre nós, então deixei aqui uma breve descrição:

  ⏩  Em resumo, o server é um grupo de tecnologia e games inicialmente criado pelo Rafael e que conta com diversos contribuidores atualmente. Utilizamos o Discord como uma comunidade de programação e também para marcar aquela jogatina.

  ⏩  Foi um prazer te conhecer, ${member.user.username}! Iremos dar as boas-vindas a você no chat principal do servidor em breve! Até mais!

  🎮  Divirta-se e aproveite o servidor!  🎮

  ⭐  Bot ainda em desenvolvimento, problemas contate o Rafael.
  `;

  let embed = new Discord.EmbedBuilder()
    .setColor("Green")
    .setTitle(`Bem vindo ${member.user.username}!`)
    .setDescription(welcomeMessage);

  member.send({
    content: `${member.toString()}`,
    embeds: [embed],
  });
});

client.start();

process.on("uncaughtException", log.error);
process.on("unhandledRejection", log.error);
