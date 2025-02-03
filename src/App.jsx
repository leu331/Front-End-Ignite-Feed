import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Post/Post'

import { posts } from './database/fakeDb'


//mainHeader {avatar URL = "", name="", role=""}
//publishedAt = date
//content=""

//componentes tem extensão JSX ou TSX
export function App() {

  return (
    <>
    <Header />

    <div className='wrapper'>
      <Sidebar />

      <main>
          {posts.map(post => { //depois o map para percorrer o array, renderizar o post dentro do array e depois passar as prorpiedades
            return <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
           
          })}  
    </main>

  </div>
</>
  )
}
