import { writable } from "svelte/store";

export let visible = writable(true);

window.addEventListener("message", function (event) {
  let data = event.data;

  if (data.visible !== undefined) {
    visible.set(data.visible);
  }
});