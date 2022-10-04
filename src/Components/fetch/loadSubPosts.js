
// This code 'works' but puts the post titles in the console.
/* export async function loadSubPosts(sub) {
    const response = await fetch(`https://www.reddit.com/r${sub}.json`);
    const subreddit = await response.json();
    const children = subreddit.data.children;
    let text = ''
    for (const child in children) {
        text += `<br> <p>${children[child].data.title}</p>`
        console.log(text)
    }
    return text;
} */

export async function loadSubPosts(sub) {
    const response = await fetch(`https://www.reddit.com/r${sub}.json`);
    const subreddit = await response.json();
    const children = subreddit.data.children;
    return children;
}




