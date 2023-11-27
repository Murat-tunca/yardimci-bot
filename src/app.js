const { Client, GatewayIntentBits } = require("discord.js");

const clinet = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("yardimci bot hazir");
});

clinet.login(
  "MTE2MTk2NjQ4Mjk3NzIxMDQyOQ.GVi9aW.SO4ExvEDIsciui85eDPVjTZQAtPcivgloyakic"
);
