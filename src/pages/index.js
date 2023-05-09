import * as React from "react"
import { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "./index.css"

const IndexPage = () => {

  const [users, setUsers] = useState([]);

  const apiKey = `${process.env.GITHUB_API_TOKEN}`

  useEffect(() => {
    const fetchUsers = async () => {
    const postUrl = 'https://api.github.com/users';
    const fetchConfig = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };
    const response = await fetch(postUrl, fetchConfig);
    if (response.ok) {
      const data =  await response.json();
      setUsers(data)
    }
    };
    fetchUsers();
  }, [apiKey]);

  return (
	<main>
		<div className="three-columns-grid">
		{users.map((user, index) => {
					return (
			<div className="content">
				<div className="card">
						<>
							<img src={user.avatar_url} alt="Avatar" />
							<div className="container">
								<h4><b>@{user.login}</b></h4>
								<p></p>
							</div>
						</>
					<button className="button-17">
						<Link
							className="detail-link"
							to={`/profile`}
							state={{
								user: user,
								users: users,
								index: index,
							}}
							>
							Profile Detail
						</Link>
                 </button>
				</div>
			</div>
			)})}
		</div>
	</main>
  )






}

export default IndexPage

export const Head = () => <title>Github User Viewer - Coding Challenge</title>
