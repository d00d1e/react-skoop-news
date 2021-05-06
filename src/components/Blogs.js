import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchInput, setBlogData } from "../redux/userSlice";

import "../styles/blogs.css";

export default function Blogs() {
  const searchInput = useSelector(selectSearchInput);
  const GNEWS_URL = `https://gnews.io/api/v4/search?q=${searchInput}&token=${process.env.REACT_APP_API_TOKEN}`;

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(GNEWS_URL)
      .then((response) => {
        console.log(response.data.articles);
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [GNEWS_URL, dispatch, searchInput]);

  return (
    <div className="blog__container">
      {blogs?.totalArticles === 0 ? (
        ""
      ) : (
        <h1 className="blog__header">{searchInput} News Today</h1>
      )}
      {isLoading && <h3 className="loading">Loading...</h3>}
      <div className="blogs">
        {blogs?.articles?.map((blog) => (
          <a
            className="blog"
            key={uuidv4()}
            href={blog.url}
            target="_blank"
            rel="noreferrer"
          >
            <img src={blog?.image} alt={blog.title} />
            <div className="blog__content">
              <h3 className="source-name">
                <span>{blog.source.name}</span>
                <p>{blog.publishedAt}</p>
              </h3>
              <h1 className="blog__title">{blog.title}</h1>
              <p className="blog__description">{blog.description}</p>
            </div>
          </a>
        ))}
        {blogs?.totalArticles === 0 && (
          <h1 className="no__blogs">
            No news available ☹︎. Try your search again.
          </h1>
        )}
      </div>
    </div>
  );
}
