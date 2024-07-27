<script>
	import Tweet from "./components/tweet.svelte";

    let name = "Mecke_Dev";
    let checkmark = true;
    let golden_checkmark = false;
    let gov_checkmark = false;
    let handle = "@Mecke_Dev";
    let time = "22h";
    let comments = "";
    let retweets = "";
    let likes = "";
    let views = "";
    let bookmarks = "";
    let retweeted = false;
    let bookmarked = false;
    let liked = false;
    let post = "This is my custom Tweet.";
    let src = "https://pbs.twimg.com/profile_images/1075085632001712128/svn7NbOu_400x400.jpg"

</script>

<style>
.form {
    max-width: 600px; /* Adjusted width for the form */
    padding: 20px;
    background-color: #1f2937; /* Darker background for the form */
    color: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
}

.form label {
    display: block;
    font-size: 16px;
    margin-bottom: 8px;
    font-weight: bold;
}

.form input[type="text"],
.form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #333;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
    background-color: #2d3748; /* Darker background for input fields */
    color: #e5e5e5; /* Light text color for inputs */
}

.form textarea {
    resize: vertical;
}

.row1,
.row2 {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.row1 > * {
    flex: 1;
    min-width: 100px;
}

.row2 > * {
    flex: 1;
    min-width: 100px;
}

.row3 {
    margin-bottom: 20px;
}

/* General styles for checkboxes */
.checkbox-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px; /* Space for custom checkbox */
    margin-bottom: 10px; /* Space between checkboxes */
    cursor: pointer;
    font-size: 16px;
    color: #e5e5e5; /* Light text color */
}

/* Hide default checkbox */
.checkbox-wrapper input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    height: 20px; /* Adjust to match custom checkbox size */
    width: 20px;  /* Adjust to match custom checkbox size */
}

/* Custom checkbox styling */
.checkbox-wrapper .custom-checkbox {
    position: absolute;
    left: 0;
    top: 0;
    height: 20px;
    width: 20px;
    background-color: #2d3748; /* Dark background for the checkbox */
    border-radius: 4px;
    border: 1px solid #333; /* Dark border color */
    transition: background-color 0.3s, border-color 0.3s;
    z-index: 1; /* Ensure it’s above the input but below the label text */
}

/* Checkmark inside the checkbox */
.checkbox-wrapper .custom-checkbox:after {
    content: "";
    position: absolute;
    display: none;
}

/* When the checkbox is checked */
.checkbox-wrapper input:checked + .custom-checkbox {
    background-color: #1d9bf0; /* Blue background when checked */
    border-color: #1d9bf0; /* Border color when checked */
}

.checkbox-wrapper input:checked + .custom-checkbox:after {
    display: block;
    left: 7px;
    top: 3px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}

/* Hover effect for checkbox */
.checkbox-wrapper .custom-checkbox:hover {
    background-color: #333; /* Darker background on hover */
    border-color: #555; /* Lighter border color on hover */
}

/* Ensure the label is clickable and not obstructed */
.checkbox-wrapper label {
    margin-left: 10px; /* Space between checkbox and label text */
    z-index: 2; /* Make sure label text is above the custom checkbox */
    cursor: pointer; /* Ensure label text is clickable */
}
</style>

<div class="form">
    <div class="input-avatar">
        <label for="avatar">Avatar-URL</label>
        <input bind:value={src} type="text" id="avatar" placeholder="avatar-url">
    </div>

    <div class="row1">
        <div>
            <label for="name">Username</label>
            <input bind:value={name} type="text" id="name" placeholder="name">
        </div>
        <div>
            <label for="handle">Handle</label>
            <input bind:value={handle} type="text" id="handle" placeholder="handle">
        </div>
        <div>
            <label for="time">Time</label>
            <input bind:value={time} type="text" id="time" placeholder="time">
        </div>
    </div>

    <div class="row2">
        <div>
            <label for="comments">Comments</label>
            <input bind:value={comments} type="text" id="comments" placeholder="comments">
        </div>
        <div>
            <label for="retweets">Retweets</label>
            <input bind:value={retweets} type="text" id="retweets" placeholder="retweets">
        </div>
        <div>
            <label for="likes">Likes</label>
            <input bind:value={likes} type="text" id="likes" placeholder="likes">
        </div>
        <div>
            <label for="views">Views</label>
            <input bind:value={views} type="text" id="views" placeholder="views">
        </div>
        <div>
            <label for="bookmarks">Bookmarks</label>
            <input bind:value={bookmarks} type="text" id="bookmarks" placeholder="bookmarks">
        </div>
    </div>

    <div class="row3">
        <label for="post">Post</label>
        <textarea rows="15" bind:value={post} id="post" placeholder="tweet"></textarea>
    </div>

    <div class="row4">
        <div class="checkbox-container">
            <div class="checkbox-wrapper">
                <input type="checkbox" bind:checked={liked} id="liked" />
                <span class="custom-checkbox"></span>
                <label for="liked">Liked?</label>
            </div>
            
            <div class="checkbox-wrapper">
                <input type="checkbox" bind:checked={bookmarked} id="bookmarked" />
                <span class="custom-checkbox"></span>
                <label for="bookmarked">Bookmarked?</label>
            </div>
            
            <div class="checkbox-wrapper">
                <input type="checkbox" bind:checked={retweeted} id="retweeted" />
                <span class="custom-checkbox"></span>
                <label for="retweeted">Retweeted?</label>
            </div>
            
            <div class="checkbox-wrapper">
                <input type="checkbox" bind:checked={checkmark} id="checkmark" />
                <span class="custom-checkbox"></span>
                <label for="checkmark">Checkmark?</label>
            </div>
            
            <div class="checkbox-wrapper">
                <input type="checkbox" bind:checked={golden_checkmark} id="golden_checkmark" />
                <span class="custom-checkbox"></span>
                <label for="golden_checkmark">Golden Checkmark?</label>
            </div>
            
            <div class="checkbox-wrapper">
                <input type="checkbox" bind:checked={gov_checkmark} id="gov_checkmark" />
                <span class="custom-checkbox"></span>
                <label for="gov_checkmark">Gov Checkmark?</label>
            </div>
        </div>
    </div>
</div>

<!-- look at that mess, maybe we gonna rework this a bit soon-->
<Tweet {name} {handle} {checkmark} {golden_checkmark} {gov_checkmark} {time} {src} {post} {comments} {retweets} {retweeted} {likes} {liked} {views} {bookmarks} {bookmarked} />