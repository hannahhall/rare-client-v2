import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { deletePost, getCurrentUsersPosts } from "../../managers/PostManager"


export const MyPost = () => {
  const [posts, setPosts] = useState([])
  let navigate = useNavigate()

  const loadPosts = () => {
    getCurrentUsersPosts()
      .then((postArray) => {
        setPosts(postArray)
      })
  }

  useEffect(() => {
    loadPosts()
  }, [])

  const deleteClickEvent = (id) => {
    deletePost(id).then(() => {
      loadPosts()
    })
  }

  return (
    <section className="section">
      <h1 className="title">My Posts</h1>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Title</th>
            <th>Publication Date</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map(post => {
              return <tr>
                <td><Link to={`/posts/${post.id}`}>{post.title}</Link></td>
                <td>{post.publication_date}</td>
                <td>{post.category?.label}</td>
                <td>
                  <div className="buttons">
                    <button className="button is-warning" onClick={() => navigate(`/editpost/${post.id}`)}>edit</button>
                    <button className="button is-danger" onClick={() => { deleteClickEvent(post.id) }}>delete</button>
                  </div>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </section>
  )
}
