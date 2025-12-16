import { config } from "~/config/config";

// biome-ignore lint/suspicious/noExplicitAny: TODO: Define Options Interface
export async function lanyard(opts: any) {
	if (!opts) throw new Error("Specify an options object");
	if (!opts.userId) throw new Error("Specify a user ID");

	if (opts.socket) {
		if (!opts.onPresenceUpdate)
			throw new Error("Specify onPresenceUpdate callback");

		const supportsWebSocket = "WebSocket" in window || "MozWebSocket" in window;
		if (!supportsWebSocket)
			throw new Error("Browser doesn't support WebSocket connections.");

		const socket = new WebSocket(config.lanyard.WEBSOCKET_URL);
		const subscription =
			typeof opts.userId === "string" ? "subscribe_to_id" : "subscribe_to_ids";

		socket.addEventListener("open", () => {
			socket.send(
				JSON.stringify({
					op: 2,
					d: {
						[subscription]: opts.userId,
					},
				}),
			);

			setInterval(() => {
				console.log("[Lanyard] Sending heartbeat");
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
		if (typeof opts.userId === "string") {
			const url = `${config.lanyard.API_URL}/users/${opts.userId}`;
			const res = await fetch(url);
			const body = await res.json();

			if (!body.success)
				throw new Error(body.error?.message || "An invalid error occured");

			return body.data;
		} else {
			const val = [];

			for (const userId of opts.userId) {
				const url = `${config.lanyard.API_URL}/users/${userId}`;
				const res = await fetch(url);
				const body = await res.json();

				if (!body.success)
					throw new Error(body.error?.message || "An invalid error occured");

				val.push(body.data);
			}

			return val;
		}
	}
}
