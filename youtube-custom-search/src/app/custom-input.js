import React, { useState } from "react";
// import {exampleObject} from '../assets/search-object';

const API_KEY = process.env.REACT_APP_API_KEY;

const CustomInput = () => {
  const [query, setQuery] = useState({
    q: "",
    beforeDate: "",
    beforeTime: "",
    afterDate: "",
    afterTime: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const getVideos = async (query) => {
      // const url = "https://api.github.com/users";

      const url = new URL("https://youtube.googleapis.com/youtube/v3/search");
      url.searchParams.append("part", "snippet");
      url.searchParams.append("maxResults", "10");
      url.searchParams.append("order", "date");
      url.searchParams.append("type", "video");
      url.searchParams.append("key", API_KEY);
      url.searchParams.append("q", query.q);

      var param;
      if (query.afterDate) {
        param = `${query.afterDate}`;
        if(query.afterTime){
          param = `${param} ${query.afterTime}`;
        }
        url.searchParams.append(
          "publishedAfter",
          new Date(param).toISOString().toString()
        );
      }
      if (query.beforeDate) {
        param = `${query.beforeDate}`;
        if (query.beforeTime) {
          param = `${param} ${query.beforeTime}`;
        }
        url.searchParams.append(
          "publishedBefore",
          new Date(param).toISOString().toString()
        );
      }

      console.log(url.href);

      fetch(url)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error(response.statusText);
          }
        })
        .then((searchObject) => {
          setVideos((prev) => {
            return searchObject.items;
          });
        
        })
        .catch((error) => {
          console.log(error);
        });

        setIsLoading(false);
        
        // setVideos((prev) => {
          // return exampleObject.items;
        // })
    };

    getVideos(query);

    setQuery({
      q: "",
      beforeDate: "",
      beforeTime: "",
      afterDate: "",
      afterTime: "",
    });

  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuery((query) => {
      return { ...query, [name]: value };
    });
  };

  return (
    <>
      <h2>Custom Youtube Search</h2>
      <form className="form" onSubmit={submitHandler}>
        <div style={{ margin: "20px" }}>
          <input
            type="text"
            placeholder="search"
            name="q"
            onChange={handleChange}
            value={query.q}
            required
          ></input>
          <button type="submit">Search</button>
        </div>
        <div className="item">
          <div>
            <lable htmlFor="to">After:</lable>
            <input
              type="date"
              id="to"
              name="afterDate"
              value={query.afterDate}
              onChange={handleChange}
            ></input>
            <input
              type="time"
              id="to"
              name="afterTime"
              value={query.afterTime}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <lable htmlFor="for">Before:</lable>
            <input
              type="date"
              id="for"
              name="beforeDate"
              value={query.beforeDate}
              onChange={handleChange}
            ></input>
            <input
              type="time"
              id="for"
              name="beforeTime"
              value={query.beforeTime}
              onChange={handleChange}
            ></input>
          </div>
        </div>
      </form>

      {isLoading && <h4>Loading...</h4>}
      {isLoading || (
        <section className="products">
          {videos.map((video) => {
            const { id } = video;
            const {
              publishTime,
              title,
              thumbnails,
              description,
              channelTitle,
            } = video.snippet;

            return (
              <>
                <div key={id.videoId} className="product">
                  <h4>{channelTitle}</h4>
                  <h4>{title}</h4>

                  <a href={`https://youtu.be/${id.videoId}`}>
                    <img
                      src={thumbnails.high.url}
                      width="480"
                      height="360"
                      alt={title}
                    ></img>
                  </a>
                  <article style={{ textAlign: "left", margin: "5px 0px" }}>
                    {description}
                  </article>
                  <article style={{ textAlign: "left", margin: "10px 0px" }}>
                    Published At: {new Date(publishTime).toString()}
                  </article>
                </div>
              </>
            );
          })}
          <h4>{videos.length} results found..</h4>
        </section>
      )}
    </>
  );
};

export default CustomInput;
