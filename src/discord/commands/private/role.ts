import { Command } from "@/discord/base";
import { ApplicationCommandType } from "discord.js";
import Discord from "discord.js";

new Command({
  name: "role",
  description: "Roles server",
  dmPermission,
  defaultMemberPermissions: ["Administrator"],
  type: ApplicationCommandType.ChatInput,
  async run(interaction) {
    const { guild, member } = interaction;

    const roleManager = guild.roles;

    const devRole = await roleManager.fetch("id").catch(() => {});
    const gamerRole = await roleManager.fetch("id").catch(() => {});
    const challengeRole = await roleManager.fetch("id").catch(() => {});
    const releasedRole = await roleManager.fetch("id").catch(() => {});

    let embed = new Discord.EmbedBuilder()
      .setTitle("Escolha suas área de interesse")
      .setDescription(
        "Para escolher uma área de interesse, reaja à essa mensagem com os emojis que desejar. Cada uma das áreas possui um emoji, representados abaixo:"
      );

    embed.addFields([
      { name: "DEV", value: "💻", inline: true },
      { name: "Gamer", value: "🎮", inline: true },
      { name: "Liberado", value: "✅", inline: true },
      { name: "Desafios", value: "🎯", inline: true },
    ]);

    interaction.reply({ embeds: [embed] });
  },
});

//   msg.member.send({ embed }).then(async (embed) => {
//     try {
//       await embed.react("💻");
//       await embed.react("💣");
//       await embed.react("🔫");
//       await embed.react("6️⃣");
//       await embed.react("✈️");
//       const collector = embed.createReactionCollector(
//         (reaction, user) =>
//           ["💻", "💣", "🔫", "6️⃣", "✈️"].includes(reaction.emoji.name) &&
//           !user.bot,
//         {
//           time: 1000,
//         }
//       );
//       collector.on("collect", (reaction, user) => {
//         let role;
//         switch (reaction.emoji.name) {
//           case "💻":
//             role = msg.guild.roles.cache.find((r) => r.name === "dev");
//             if (role) msg.member.roles.add(role);
//             else console.error("Cargo não encontrado");
//             break;
//           case "💣":
//             role = msg.guild.roles.cache.find((r) => r.name === "CS:GO");
//             if (role) msg.member.roles.add(role);
//             else console.error("Cargo não encontrado");
//             break;
//           case "🔫":
//             role = msg.guild.roles.cache.find((r) => r.name === "VALORANT");
//             if (role) msg.member.roles.add(role);
//             else console.error("Cargo não encontrado");
//             break;
//           case "6️⃣":
//             role = msg.guild.roles.cache.find((r) => r.name === "R6");
//             if (role) msg.member.roles.add(role);
//             else console.error("Cargo não encontrado");
//             break;
//           case "✈️":
//             role = msg.guild.roles.cache.find((r) => r.name === "COD:WZ");
//             if (role) msg.member.roles.add(role);
//             else console.error("Cargo não encontrado");
//             break;
//         }
//       });
//     } catch (e) {
//       console.error(e);
//     }
//   });
// } else {
//   if (!msg.member.hasPermission("MANAGE_ROLES"))
//     return msg.reply("Desculpa, você não pode executar essa ação");
//   const [mention, roleArg] = args;
//   const member = msg.mentions.members.first();
//   if (!member)
//     return msg.reply("você precisa mencionar a quem deseja dar o cargo.");
//   if (!roleArg) return msg.reply("você precisa escolher um cargo");
//   const role = msg.guild.roles.cache.find((r) => r.name === roleArg);
//   if (!role) return msg.reply(`não encontrei o cargo \`${roleArg}\``);
//   member.roles.add(role);
// }
