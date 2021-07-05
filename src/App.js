import './App.css';
import Header from "./Header"

import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function App() {
  const [blog, setBlog] = useState([])
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/blogs')
    .then(response => response.json())
    .then(blogData => {
      console.log(blogData.blogs)
      setBlog(blogData.blogs)
    })
    .catch(err => console.log(err))
  }, [])

const renderedBlogs = blog.map((blog, idx) =>
  <div key={idx}>
    <h3> 
      {blog.title}
    </h3>
  </div>
  )

  return (
    <div className="App">
    <Router>
      <Header />

      <h1>Welcome to the Blog!</h1>
      {renderedBlogs}

    </Router>
    
    <form>
        <input
          type="text"
          name="title"
          placeholder='Enter Title'
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="subTitle"
          placeholder='Enter Subtitle'
          onChange={e => setSubTitle(e.target.value)}
        />
        <input
          type="text"
          name="content"
          placeholder='Write your blog...'
          onChange={e => setContent(e.target.value)}
        />
        <input
          type='submit'
          value='Submit'
        />
      </form>
    
    </div>
  );
}

export default App;
