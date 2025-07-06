import React from 'react'
import Layout from './components/Layout'
import Bio from './components/Bio'

function App() {
  return (
    <Layout title="Chris Noreikis">
      <Bio />
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Welcome</h2>
        <p className="text-lg mb-6">
          Welcome to my personal website. I'm a software developer interested in Data Engineering, Machine Learning, and Web Development.
        </p>
        <p className="text-lg">
          Feel free to connect with me through the social links above or explore my work 
          and projects.
        </p>
      </div>
    </Layout>
  )
}

export default App