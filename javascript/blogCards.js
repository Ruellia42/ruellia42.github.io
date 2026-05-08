import { blogPosts } from "./blogPostsData.js"

const blogCardsContainer = document.querySelector("#blog-cards-container");

blogPosts.forEach(post => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    blogCard.setAttribute("data-id", post.id);

    const blogCardHTML = `
    <a href="/blog/post.html?slug=${post.slug}" data-link>
        <h2 class="blog-title">${post.title}</h2>
        <small class="author">By ${post.author}</small>
        <small class="date"${new Date(post.date).toLocaleDateString()}</small>
        <small class="tags"Tags: ${post.tags.join(", ")}</small>
        <p class="blog-excerpt">${post.body.substring(0,100)}...</p>
    </a>
    `;

    blogCard.innerHTML = blogCardHTML;
    blogCardsContainer.appendChild(blogCard);
})