import { SapphireClient } from "@sapphire/framework";
import { config } from "dotenv";
import "@sapphire/plugin-logger/register";
import parseEnv from "dotenv-parse-variables";
process.env = parseEnv(config().parsed!) as NodeJS.ProcessEnv;

const client = new SapphireClient({
	intents: ["GUILDS", "GUILD_MEMBERS"]
});

await client.login();
