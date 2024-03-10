import { Command } from "@/discord/base";
import { createRow } from "@magicyan/discord";
import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  ButtonBuilder,
  ButtonStyle,
} from "discord.js";
import Discord from "discord.js";

new Command({
  name: "desafio",
  description: "challenge",
  dmPermission,
  defaultMemberPermissions: ["Administrator"],
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: "descrição",
      type: ApplicationCommandOptionType.String,
      description: "Descrição do desafio",
      required: true,
    },
  ],

  async run(interaction, action) {
    try {
      const row = createRow(
        new ButtonBuilder({
          customId: `message/user/${interaction.user.id}`,
          label: "Enviar Desafio",
          style: ButtonStyle.Primary,
        })
      );

      const description = interaction.options.getString("descrição");
      let embed = new Discord.EmbedBuilder()
        .setTitle("🎯 Desafio do Mês")
        .setDescription(description);

      await interaction.reply({ embeds: [embed], components: [row] });
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "Ocorreu um erro ao processar o desafio.",
      });
    }
  },
});
