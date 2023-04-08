import * as React from "react"
import { useEffect, useState } from "react";
import { Link } from "gatsby";

const Home = () => {

  const [user1, setUser1] = useState('');

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
    console.log(response);
    if (response.ok) {
      const data =  await response.json();
      console.log(data);
      setUser1(data)
    }
    console.log(user1)
    };
    fetchUser1();
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
    <h1>{user1.name}'s Profile</h1>

    <div class="card mb-3">
      <img class="card-img-top" src={user1.avatar_url} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{user1.name}</h5>
        <p class="card-text">{user1.login}</p>
        <p class="card-text">{user1.email}</p>
        <p class="card-text">
          <small class="text-muted">repos: {user1.public_repos}</small><br></br>
          <small class="text-muted">followers: {user1.followers}</small><br></br>
          <small class="text-muted">following: {user1.following}</small><br></br>
          <small class="text-muted">location: {user1.location}</small><br></br>
        </p>
        <small class="text-muted"><button><Link to="/">Home</Link></button></small>
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</main>
  );
}

export default Home
