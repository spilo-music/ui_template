<script>
    import { visible } from "./store";

    import Icon from "@iconify/svelte";
</script>

<main>
    {#if visible}
        <div class="flex justify-center items-center w-screen h-screen bg-neutral-950">
            <span class="flex items-center gap-2 text-server tracking-wide text-xl"> <Icon icon="tabler:home" width="24" /> SPILO TAILWIND + BITS UI SVELTE UI TEMPLATE</span>
        </div>
    {/if}
</main>