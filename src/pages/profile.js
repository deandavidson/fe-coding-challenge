import * as React from "react"
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.css';
import "./profile.css"

const Home = ({location}) => {
  console.log("state", location.state)
  const userDetail = location.state

  const [user, setUser] = useState('');
  const [userId, setUserId] = useState(userDetail.id);
  const token = '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'

  useEffect(() => {
    const fetchUser = async () => {
    const postUrl = `https://api.github.com/users/${userDetail.login}`;
    const fetchConfig = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(postUrl, fetchConfig);
    if (response.ok) {
      const data =  await response.json();
      setUser(data)
    }
    };
    fetchUser();
  }, [userId]);
  console.log("one user data", user)

  const handleNext = () => {
    setUserId(userId + 1);

  };

  function renderElement() {
    if (user.bio === null) {
      return (<p>This user has no bio</p>)
    }
    else {
      return (<p>{user.bio}</p>)
    }
  }

  function renderTwitter() {
    if (user.twitter_username === null) {
      return (<p>This user has no twitter.</p>)
    }
    else {
      return (<p>@{user.twitter_username}</p>)
    }
  }

  return (
    <main className="page">
      <div className="container-profile">
        <div className="content-profile">
          <div className="card-profile">
            <div className="card-left">
              <img className="card-profile-pic" src={user.avatar_url} alt="Avatar" />
              <div className="card-left-bottom">
                <p className="name">{user.name}</p>
                <p className="username">@{user.login}</p>
                <p className="location">{user.location}</p>
                <a className="website-url">{user.html_url}</a>
              </div>
            </div>
            <div className="card-right">
              <div className="card-right-top">
                <div className="card-right-top-col">{user.public_repos} <p>Public Repos</p></div>
                <div className="card-right-top-col">{user.public_gists} <p>Public Gists</p></div>
                <div className="card-right-top-col" type="number">{user.followers} <p> Followers</p></div>
                <div className="card-right-top-col">{user.following} <p> Following</p></div>
              </div>
              <div className="card-right-bottom">
                <p className="headings">
                  Biography: { user && renderElement() }
                </p>
                <p className="headings">
                  Company: {user.company}
                </p>
                <p className="headings">
                  Twitter: { user && renderTwitter() }
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="button-17-profile">
              <Link
                className="detail-link"
                to={`/`}
                state={user}
                >
                Profile List
              </Link>
          </button>
          <button className="button-17-profile" onClick={handleNext}>Next</button>
        </div>
      </div>
    </main>
  )



}

export default Home
