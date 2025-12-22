import { useEffect, useState } from "react";

export default function Pagination() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const POSTS_PER_PAGE = 5;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const viewPosts = posts.slice(startIndex, endIndex);

  return (
    <div>
      {/* Pagination Buttons */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button key={i} onClick={() => setCurrentPage(i + 1)}>
          {i + 1}
        </button>
      ))}

      {/* Posts */}
      <div>
        {viewPosts.map(post => (
          <div key={post.id}>
            <p>{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
