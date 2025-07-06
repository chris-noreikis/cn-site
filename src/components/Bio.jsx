import React from 'react'
import profilePic from '../images/profile-pic.jpeg'

const Bio = () => {
  const author = {
    name: 'Chris Noreikis',
    summary: 'Software developer passionate about creating innovative solutions and sharing knowledge with the community.'
  }

  return (
    <div className="flex items-center gap-4 mb-8 p-4 bg-accent dark:bg-accent-dark rounded-lg">
      <img
        className="w-12 h-12 rounded-full object-cover"
        src={profilePic}
        alt="Profile picture"
      />
      <div>
        <p className="text-text dark:text-text-dark">
          <strong className="text-heading dark:text-heading-dark">{author.name}</strong>
        </p>
        <p className="text-text-light dark:text-text-dark-light text-sm mt-1">
          {author.summary}
        </p>
      </div>
    </div>
  )
}

export default Bio