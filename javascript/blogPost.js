import { blogPosts } from "./blogPostsData";

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const blogPost = blogPosts.find((post) => post.slug === slug);
const blogPostContainer = document.querySelector("#blogPost");

if (!blogPost) {
    console.error("Blog post not found");
    blogPostContainer.innerHTML = `<p>Sorry, this post does not exist.</p>`;
}
else
{
    const blogPostHTML = `
    <h1>${blogPost.title}</h1>
    <small class="author">By ${blogPost.author}</small>
    <small class="date">${new Date(blogPost.date).toLocaleDateString()}</small>
    <small class="tags">Tags: ${blogPost.tags.join(" ,")}</small>
    <p>${blogPost.body}</p>
    <a href="/blog.html" class="btn" data-link>Back to Blog</a>
    `;

    blogPostContainer.innerHTML = blogPostHTML;
}