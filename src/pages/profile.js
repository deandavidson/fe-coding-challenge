import * as React from "react"
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.css';
import "./profile.css"

const Home = ({location}) => {
  console.log("state", location.state)
  const userDetail = location.state;

  const [user, setUser] = useState('');
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
  }, [token]);
  console.log("one user data", user)

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



  // return (
  //   <main>
  //     <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
  //     <div className="card p-4">
  //     <div className=" image d-flex flex-column justify-content-center align-items-center">
  //     <button className="btn btn-secondary">
  //     <img class="circular--square" src={user.avatar_url} height="100" width="100" />
  //     </button> <span className="name mt-3">{user.name}</span>
  //     <span className="idd">@{user.login}</span>
  //     <div className="d-flex flex-row justify-content-center align-items-center gap-2">
  //     <span className="idd1">location: {user.location}</span>
  //     <span><i className="fa fa-copy"></i></span>
  //     </div>
  //     <div className="d-flex flex-row justify-content-center align-items-center mt-3">
  //     <span className="number">{user.followers} <span className="follow">Followers</span></span>
  //     </div> <div className=" d-flex mt-2">
  //     <button className="btn1 btn-dark">Public Repos: {user.public_repos}</button>
  //     </div>
  //     <div className="text mt-3">
  //     <span>{user.name} is currently employed at {user.company}<br/>
  //     <br/> You can contact {user.name} via email using: {user.email}
  //     </span>
  //     </div>
  //     <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
  //     <span><i className="fa fa-twitter"></i></span>
  //     <span><i className="fa fa-facebook-f"></i></span>
  //     <span><i className="fa fa-instagram"></i></span>
  //     <span><i className="fa fa-linkedin"></i></span>
  //     </div>
  //     <div className=" px-2 rounded mt-4 date ">
  //     <span className="join">Joined {user.created_at}</span>
  //     </div>
  //     <button class="button-17"><Link
  //                   className="detail-link"
  //                   to={`/`}
  //                   >
  //                   Profile List
  //                 </Link></button>
  //     </div>
  //     </div>
  //     </div>
  //   </main>
  // );

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
        </div>
      </div>
    </main>
  )



}

export default Home
