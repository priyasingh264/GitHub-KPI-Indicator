import React, { useContext } from "react";
import { GithubContext } from "../context/GithubContext";

const Repos = () => {
  const { repos } = useContext(GithubContext);

  return (
    <>
      {repos &&
        repos.map((repo, index) => (
          <a
            key={index}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="reposWrap"
          >
            <div className="repos">
              {repos.name && <p>{repo.name}</p>}
              <div className="repoInfo">
                {repo.language && (
                  <p>
                    <span></span>
                    {repo.language}
                  </p>
                )}
                {repo.update_at && <p>{repo.updated_at}</p>}
              </div>
            </div>
          </a>
        ))}
    </>
  );
};

export default Repos;