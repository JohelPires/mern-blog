import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Header from './components/Header'
import Layout from './components/Layout'
import PostCard from './components/PostCard'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <div>
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          }
        />
        <Route path='/login' element={<div>login</div>} />
      </Route>
    </Routes>
  )
}

export default App
