import React, { useContext } from "react";
import { GithubContext } from "../context/GithubContext";

const User = () => {
  const { user } = useContext(GithubContext);

  return (
    <div className="user">
      <div className="userContainer">
        <div className="imgContainer">
          <img src={user.avatar_url} alt="user" />
        </div>
        <div className="userRow">
          <div className="userInfo">
            {user.name && <h2>{user.name}</h2>}
            {user.login && <h2>{user.loigin}</h2>}
          </div>
          {user.bio && (
            <div className="userDesc">
              <p>{user.bio}</p>
            </div>
          )}
          <div className="userLinks">
            {user.location && (
              <p>
                <i className="fas fa-map-marker-alt fa-sm"></i>
                {user.location}
              </p>
            )}
            {user.blog && (
              <a
                href={`https://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-link fa-sm"></i>
                {user.blog}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
