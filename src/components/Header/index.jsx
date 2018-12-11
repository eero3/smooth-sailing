import React from 'react'

const Header = ({user}) => (
  <header className="h-12 flex justify-between">
    <h1 className="p-1 text-2xl italic sm:ml-2 lg:ml-3">Smooth Sailing</h1>
    <div>{user.name}</div>
  </header>
)

export default Header
