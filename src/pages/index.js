import * as React from "react"
import { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = () => {

  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');
  const [user3, setUser3] = useState('');

  const token = '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'

  useEffect(() => {
    const fetchUser1 = async () => {
    const postUrl = 'https://api.github.com/users/deandavidson';
    const fetchConfig = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(postUrl, fetchConfig);
    if (response.ok) {
      const data =  await response.json();
      setUser1(data)
    }
    };
    fetchUser1();
  }, [token]);

  useEffect(() => {
    const fetchUser2 = async () => {
    const postUrl = 'https://api.github.com/users/nadinagray';
    const fetchConfig = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(postUrl, fetchConfig);
    if (response.ok) {
      const data =  await response.json();
      setUser2(data)
    }
    };
    fetchUser2();
  }, [token]);

  useEffect(() => {
    const fetchUser3 = async () => {
    const postUrl = 'https://api.github.com/users/brandsoulmates';
    const fetchConfig = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(postUrl, fetchConfig);
    if (response.ok) {
      const data =  await response.json();
      setUser3(data)
    }
    };
    fetchUser3();
  }, [token]);


  return (
    <main>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

        <title>Github Users</title>
      </head>
      <body>
        <h1>Github Users</h1>
        <div class="card-group">
          <div class="card">
            <img class="card-img-top" src={user2.avatar_url} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{user2.name}</h5>
              <p class="card-text">{user2.login}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted"><button><Link to="/profile2/">View Profile</Link></button></small>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={user1.avatar_url} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{user1.name}</h5>
              <p class="card-text">{user1.login}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted"><button><Link to="/profile1/">View Profile</Link></button></small>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={user3.avatar_url} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{user3.name}</h5>
              <p class="card-text">{user3.login}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted"><button><Link to="/profile3/">View Profile</Link></button></small>
            </div>
          </div>


        </div>


        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </body>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Github User Viewer - Coding Challenge</title>
