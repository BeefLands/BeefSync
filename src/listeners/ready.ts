import { Events, Listener } from "@sapphire/framework";
import type { Client } from "discord.js";

export class ReadyListener extends Listener<typeof Events.ClientReady> {
	public run(client: Client<true>) {
		client.user?.setActivity("servers sync", { type: "WATCHING" });
		this.container.logger.info(`${client.user.tag} is ready!`);
	}
}
