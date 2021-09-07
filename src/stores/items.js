import { writable } from "svelte/store";
const storageName = "shoppingList_v1";
export const items = writable(JSON.parse(localStorage.getItem(storageName)) || []);
items.subscribe((items) => {localStorage.setItem(storageName, JSON.stringify(items))})