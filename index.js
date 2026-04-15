const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        
        const listItem = document.createElement('li');
        const titleElement = document.createElement('h1');
        titleElement.textContent = post.title;
        const bodyElement = document.createElement('p');
        bodyElement.textContent = post.body;
        
        listItem.appendChild(titleElement);
        listItem.appendChild(bodyElement);
        postList.appendChild(listItem);
    }
}

async function fetchAndDisplayPosts() {
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const posts = await response.json();
        displayPosts(posts);
        
    } catch (error) {
        console.error('Error fetching posts:', error);
        const postList = document.getElementById('post-list');
        postList.innerHTML = `<li style="color: red;">Error loading posts: ${error.message}</li>`;
    }
}

fetchAndDisplayPosts();