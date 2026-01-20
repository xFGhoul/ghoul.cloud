import localforage from "localforage";

// Only Configure Instance in Browser Environment
let storeInstance: LocalForage | null = null;

if (typeof window !== "undefined") {
	localforage.config({
		driver: localforage.LOCALSTORAGE,
	});

	storeInstance = localforage.createInstance({
		storeName: "preferences",
		name: "home",
		version: 1.0,
	});
}

const store = {
	async getItem<T>(key: string): Promise<T | null> {
		if (!storeInstance) return null;
		return storeInstance.getItem<T>(key);
	},
	async setItem<T>(key: string, value: T): Promise<T | null> {
		if (!storeInstance) return null;
		return storeInstance.setItem(key, value);
	},
	async removeItem(key: string): Promise<void> {
		if (!storeInstance) return;
		return storeInstance.removeItem(key);
	},
};

export default store;
