import React, { useContext } from "react";
import { GithubContext } from "../context/GithubContext";

const Overview = () => {
    const { overview } = useContext(GithubContext);
    let id = 0;

    return(
      <div className="overviewContainer">
        {overview && 
          overview.map((item, index) => (
            <a
              key={index}
              href={item.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={"overview overview-" + ++id}>
                {item.name && <h2>{item.name}</h2>}
                {item.language && (
                  <p>
                    <span></span>
                    {item.language}
                  </p>
                )}
              </div>
            </a>
          ))}
      </div>
    );
};

export default Overview;