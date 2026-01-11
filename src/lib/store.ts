import localforage from "localforage";

const store = localforage.createInstance({
	storeName: "preferences",
	name: "home",
	version: 1.0,
});

export default store;
