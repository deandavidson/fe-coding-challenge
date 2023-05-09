import * as React from "react"
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.css';
import "./profile.css"

const Home = ({location}) => {
  const {user, users, index} = location.state
  const prevUser = users[index - 1] ? users[index - 1] : users[users.length - 1]
  const nextUser = users[index + 1] ? users[index + 1] : users[0]
  const prevIndex = users[index - 1] ? index - 1 : 0
  const nextIndex = users[index + 1] ? index + 1 : users.length + 1
  const [userProfile, setUserProfile] = useState('');
  const apiKey = `${process.env.GITHUB_API_TOKEN}`

  useEffect(() => {
    const fetchUser = async () => {
    const postUrl = `https://api.github.com/users/${user.login}`;
    const fetchConfig = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };
    const response = await fetch(postUrl, fetchConfig);
    if (response.ok) {
      const data =  await response.json();
      setUserProfile(data)
    }
    };
    fetchUser();
  }, [location.state]);

  function renderElement() {
    if (userProfile.bio === null) {
      return (<p>This user has no bio</p>)
    }
    else {
      return (<p>{userProfile.bio}</p>)
    }
  }

  function renderTwitter() {
    if (userProfile.twitter_username === null) {
      return (<p>This user has no twitter.</p>)
    }
    else {
      return (<p>@{userProfile.twitter_username}</p>)
    }
  }

  return (
    <main className="page">
      <div className="container-profile">
        <div className="content-profile">
          <div className="card-profile">
            <div className="card-left">
              <img className="card-profile-pic" src={userProfile.avatar_url} alt="Avatar" />
              <div className="card-left-bottom">
                <p className="name">{userProfile.name}</p>
                <p className="username">@{userProfile.login}</p>
                <p className="location">{userProfile.location}</p>
                <a className="website-url">{userProfile.html_url}</a>
              </div>
            </div>
            <div className="card-right">
              <div className="card-right-top">
                <div className="card-right-top-col">{userProfile.public_repos} <p>Public Repos</p></div>
                <div className="card-right-top-col">{userProfile.public_gists} <p>Public Gists</p></div>
                <div className="card-right-top-col" type="number">{userProfile.followers} <p> Followers</p></div>
                <div className="card-right-top-col">{userProfile.following} <p> Following</p></div>
              </div>
              <div className="card-right-bottom">
                <p className="headings">
                  Biography: { userProfile && renderElement() }
                </p>
                <p className="headings">
                  Company: {userProfile.company}
                </p>
                <p className="headings">
                  Twitter: { userProfile && renderTwitter() }
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
        <button className="button-17-profile">
          <Link
            className="detail-link"
            to={`/profile`}
            state={{
              user: prevUser,
              users: users,
              index: prevIndex
            }}
            >
            Previous
          </Link>
          </button>
          <button className="button-17-profile">
              <Link
                className="detail-link"
                to={`/`}
                state={userProfile}
                >
                Profile List
              </Link>
          </button>
          <button className="button-17-profile">
          <Link
            className="detail-link"
            to={`/profile`}
            state={{
              user: nextUser,
              users: users,
              index: nextIndex
            }}
            >
            Next
          </Link>
          </button>
        </div>
      </div>
    </main>
  )



}

export default Home
