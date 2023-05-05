import * as React from "react"
import { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.css';

const IndexPage = () => {

  const [users, setUsers] = useState([]);

  const token = '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'

  useEffect(() => {
    const fetchUsers = async () => {
    const postUrl = 'https://api.github.com/users';
    const fetchConfig = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(postUrl, fetchConfig);
    if (response.ok) {
      const data =  await response.json();
      setUsers(data)
    }
    };
    fetchUsers();
  }, [token]);

  console.log(users)



  return (
    <main>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {users.map((user) => {
        return (
        <div className="col" key={user.id}>
            <div className="card">
              <img src={user.avatar_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" >{user.login}</h5>
                <p className="card-text"></p>
                <button className="detail-button1">
                  <Link
                    className="detail-link"
                    to={`/profile`}
                    state={user}
                    >
                    Profile Detail
                  </Link>
                </button>
              </div>
            </div>
        </div>
        )})}
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Github User Viewer - Coding Challenge</title>
