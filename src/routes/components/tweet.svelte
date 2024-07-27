<script>

    // importing all the needed components
    import Avatar from './avatar.svelte';
    import Checkmark from './checkmark.svelte';
	import Comments from './comments.svelte';
	import Retweet from './retweet.svelte';
	import Likes from './likes.svelte';
	import Views from './views.svelte';
	import Bookmarks from './bookmarks.svelte';
	import Share from './share.svelte';

    // setting up all default Values for the Tweet
    export let src = "";
    export let name = "Testname";
    export let handle = "";
    export let checkmark = true;
    export let golden_checkmark = false;
    export let gov_checkmark = false;
    export let post = "";
    export let time = "";
    export let views = "";
    export let comments = "";
    export let retweets = "";
    export let retweeted_color = "#00ba7c";
    export let liked_color = "#f91880";
    export let retweeted = false;
    export let liked = false;
    export let likes = "";
    export let bookmarks = "";
    export let bookmarked = false;

    // change color of retweet when you have retweeted
    $: if(retweeted){
        retweeted_color = "#00ba7c"
    } else {
        retweeted_color = "#818181"
    }

    // set retweets to 1 if retweeted but no value was set on the Number of retweets
    $: if(retweeted && retweets == ""){
        retweets = 1
    }

    // set retweets back to None if it was 1 but you removed your own retweet
    $: if(!retweeted && retweets == 1){
        retweets = ''
    }

    // changes the color of the like button if you liked the tweet
    $: if(liked){
        liked_color = "#f91880"
    } else {
        liked_color = "#818181"
    }

    // set likes to None if it was 1 and you have unliked the tweet
    $: if(!liked && likes == 1){
        likes = ''
    }

    // sets the value of likes to 1 if it was None but you liked the tweet
    $: if(liked && likes == ""){
        likes = 1
    }

    // sets views to 1 if it is None, since atleast you have seen it
    $: if(views == ""){
        views = 1
    }

    // sets the bookmarks to None if it was 1 but you unbookmarked it
    $: if(!bookmarked && bookmarks == 1){
        bookmarks = ''
    }

    // sets bookmarks to 1 if it was None but you bookmarked it
    $: if(bookmarked && bookmarks == ""){
        bookmarks = 1
    }

    // creates a custom class for the avatar, used for the color of the checkmark and the shape of the avatar
    let avatar_class = "default_avatar";

    if(golden_checkmark) {
        checkmark = true
        avatar_class = "golden_avatar"
    } else if (gov_checkmark) {
        avatar_class = "gov_avatar"
    }

    // function to convert numbers into the twitter-style 12.4K or 3.5M 
    function formatNumber(input) {

        // Check if the input is a valid number string
        if (!/^\d+$/.test(input)) {
            return '';
        }

        // Convert the string to a number
        const num = parseInt(input, 10);

        // Format the number according to the specified rules
        if (num < 1000) {
            return num.toString(); // Return as is for numbers below 1000
        } else if (num < 1000000) {
            // For numbers between 1000 and 999999, display in "K" format
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        } else {
            // For numbers 1 million and above, display in "M" format
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
    }

</script>

<style>
.post {
    max-width: 800px; /* Adjusted width for the post */
    padding: 20px;
    background-color: #000; /* Dark background for the post */
    color: white; /* Light text color */
    border-radius: 12px; /* Rounded corners for the post */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    position: absolute;
    right: 0;
    top: 20px; /* Add margin to top */
    margin-top: 50px;
    margin-right: 350px;
    overflow-y: auto; /* Enable vertical scrolling if needed */
    overflow-x: hidden; /* Prevent horizontal overflow */
    display: flex;
    flex-direction: column;
    height: auto; /* Adjust height based on content */
}

.head {
    display: flex;
    align-items: flex-start;
}

.username {
    font-size: 16px;
    margin-left: 10px;
    font-weight: bold;
}

.handle {
    color: #6e767d;
    font-size: 16px;
    margin-right: 5px;
    margin-left: 5px;
}

.time {
    color: #6e767d;
    font-size: 14px;
    margin-left: 5px;
}

.tweet {
    margin-left: 60px;
    margin-top: -25px;
    font-size: 16px;
    width: 600px;
    flex: 1;
    line-height: 1.4;
    white-space: pre-wrap; /* Preserve whitespace and wrap text */
    overflow-wrap: break-word; /* Break long words to prevent overflow */
    word-wrap: break-word; /* For compatibility with older browsers */
}

.interactions {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #6e767d;
}

.interactions div {
    display: flex;
    align-items: center;
}

</style>

<div class="post">
    <div class="head">
        <Avatar {src} golden={golden_checkmark} class="avatar"/>

        <div class="username"> 
            {name}
            {#if checkmark}

                {#if golden_checkmark}
                    <Checkmark color="#e9c638" width="24" height="24" />
                {:else if gov_checkmark}
                    <Checkmark color="#829aab" width="24" height="24" />
                {:else}
                    <Checkmark color="#1d9bf0" width="24" height="24" />
                {/if}
                

            {/if}
        </div>

        <div class="handle">{@html handle}</div> · <div class="time">{time}</div>
    </div>

    <div class="tweet">
        {@html post}
    </div>

    <div class="interactions">
        <div class="comments">
            <Comments width="24px" height="24px"/> {formatNumber(comments)}
        </div>

        <div class="retweets">
            <Retweet retweets={formatNumber(retweets)} color={retweeted_color} width="24px" height="24px"/>
        </div>

        <div class="likes">
            <Likes {liked} likes={formatNumber(likes)} color={liked_color} width="24px" height="24px"/>
        </div>

        <div class="views">
            <Views views={formatNumber(views)} width="24px" height="24px"/> {formatNumber(views)}
        </div>

        <div class="bookmarks">
            <Bookmarks {bookmarked} bookmarks={formatNumber(bookmarks)} width="24px" height="24px"/>
        </div>

        <div class="share">
            <Share width="24px" height="24px"/>
        </div>
    </div>
</div>