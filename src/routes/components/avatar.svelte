<script>
    export let src = "";
    export let golden = false;
</script>

<style>
    .default {
        display: inline;
    }

    .default img {
        max-width: 50px;
        border-radius: 50px;
    }

    .golden {
        display: inline;
    }

    .golden img {
        max-width: 50px;
        border-radius: 10px;
    }
</style>

{#if !golden}
    <div class="default">
        <img {src} alt="" />
    </div>
{/if}

{#if golden}
    <div class="golden">
        <img {src} alt="" >
    </div>
{/if}