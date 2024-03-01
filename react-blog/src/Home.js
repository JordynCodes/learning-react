import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    // fetches blog data from JSON server, run 'npx json-server --watch data/db.json --port 8000' to start server
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      { error && <div>{error}</div> }
      { isLoading && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs}/> }
      { blogs && <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs"/> }
    </div>
  );
}
 
export default Home;