import { Command } from "@/discord/base";
import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
} from "discord.js";

new Command({
  name: "ping",
  description: "Ping command bot",
  dmPermission,

  type: ApplicationCommandType.ChatInput,
  async run(interaction) {
    interaction.reply({ content: "Pong!" });
  },
});
