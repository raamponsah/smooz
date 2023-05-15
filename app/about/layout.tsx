import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
<>
<nav>
    <h1>Logo</h1>
</nav>
<main>
        
        {children}</main>

</>
  )
}

export default layout