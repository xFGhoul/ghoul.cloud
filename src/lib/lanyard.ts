import { config } from "~/config/config";

interface LanyardOptions {
	userID: string;
	socket: boolean;
	// biome-ignore lint/suspicious/noExplicitAny: TODO: Add type definitions for Lanyard responses
	onPresenceUpdate: (data: any) => void;
}

export async function lanyard(opts: LanyardOptions) {
	if (!opts) throw new Error("Specify an options object");
	if (!opts.userID) throw new Error("Specify a user ID");

	if (opts.socket) {
		if (!opts.onPresenceUpdate)
			throw new Error("Specify onPresenceUpdate callback");

		const supportsWebSocket = "WebSocket" in window || "MozWebSocket" in window;
		if (!supportsWebSocket)
			throw new Error("Browser doesn't support WebSocket connections.");

		const socket = new WebSocket(config.lanyard.WEBSOCKET_URL);

		socket.addEventListener("open", () => {
			socket.send(
				JSON.stringify({
					op: 2,
					d: {
						[config.lanyard.SUBSCRIPTION]: opts.userID,
					},
				}),
			);

			setInterval(() => {
				socket.send(
					JSON.stringify({
						op: 3,
					}),
				);
			}, config.lanyard.HEARTBEAT_PERIOD);
		});

		socket.addEventListener("message", ({ data }) => {
			const { t, d } = JSON.parse(data);
			if (t === "INIT_STATE" || t === "PRESENCE_UPDATE") {
				opts.onPresenceUpdate(d);
			}
		});

		socket.addEventListener("error", (error) => {
			console.error("[Lanyard] WebSocket Error:", error);
		});

		socket.addEventListener("close", (event) => {
			console.log("[Lanyard] WebSocket Closed:", event.code, event.reason);
		});

		return socket;
	} else {
		const url = `${config.lanyard.API_URL}/users/${opts.userID}`;
		const res = await fetch(url);
		const body = await res.json();
		
		if (!body.success)
			throw new Error(body.error?.message || "An invalid error occured");

		return body.data;
	}
}
