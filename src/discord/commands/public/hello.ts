import { Command } from "@/discord/base";
import { ApplicationCommandType } from "discord.js";

new Command({
  name: "hello",
  description: "Hello, world!",
  dmPermission,
  type: ApplicationCommandType.ChatInput,
  async run(interaction) {
    interaction.reply({ content: "Hello, world!" });
  },
});
