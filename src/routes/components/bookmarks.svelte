<script>
    export let width = "24px";
    export let height = "24px";
    export let bookmarks = "";
    export let bookmarked = false;
</script>

<style>
    svg {
        vertical-align: middle;
        margin-right: 5px;
    }
    
    .bookmarks {
        display: inline;
    }
</style>

{#if !bookmarked}
    <svg viewBox="0 0 24 24" {width} {height} xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" fill="#818181"></path>
    </svg> 
    <div class="bookmarks" style="color: #818181">
        {bookmarks}
    </div>
{:else}
    <svg viewBox="0 0 24 24" {width} {height} xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z" fill="#1d9bf0"></path>
    </svg> 
    <div class="bookmarks" style="color: #1d9bf0">
        {bookmarks}
    </div>
{/if}
