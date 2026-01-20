import * as ToastPrimitive from "@kobalte/core/toast";
import { showToast } from "~/components/ui/toast";
import { config } from "~/config/config";
import store from "~/lib/store";

function setAnalyticsConsent(consent: boolean) {
	store.setItem("analytics", consent);
}

export async function showAnalyticsPrompt(): Promise<boolean> {
	const value = await store.getItem("analytics");
	return value === null;
}

export async function getAnalytics(): Promise<boolean> {
	const consent = await store.getItem("analytics");
	return consent === true;
}

function loadRybbitScript() {
	const existingScript = document.querySelector(
		`script[data-site-id="${config.analytics.id}"]`,
	);
	if (existingScript) return;

	const script = document.createElement("script");
	script.src = config.analytics.script;
	script.setAttribute("data-site-id", config.analytics.id);
	script.async = true;
	script.defer = true;
	document.head.appendChild(script);
}

export function clearAnalyticsConsent() {
	store.removeItem("analytics");
}

if (typeof window !== "undefined" && import.meta.env.DEV) {
	// biome-ignore lint/suspicious/noExplicitAny: ignore
	(window as any).clearAnalyticsConsent = clearAnalyticsConsent;
}

export async function showAnalyticsToast() {
	const shouldShow = await showAnalyticsPrompt();
	if (!shouldShow) return;

	const toastId = showToast({
		title: "Analytics",
		icon: "/svgs/analytics.svg",
		description: (
			<div class="flex flex-col gap-2">
				<p class="text-sm">Help improve the site by allowing analytics?</p>
				<div class="flex gap-2">
					<button
						type="button"
						class="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded transition-all text-xs"
						onClick={() => {
							setAnalyticsConsent(true);
							loadRybbitScript();
							ToastPrimitive.toaster.dismiss(toastId);
						}}
					>
						Accept
					</button>
					<button
						type="button"
						class="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded transition-all text-xs"
						onClick={() => {
							setAnalyticsConsent(false);
							ToastPrimitive.toaster.dismiss(toastId);
						}}
					>
						Decline
					</button>
				</div>
			</div>
		),
		variant: "glass",
		duration: 30000,
	});
}
