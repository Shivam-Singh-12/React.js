import React from 'react'

const Footer = () => {
  let footerStyle = {
    // position: "relative",
    top: "88vh",
    width: "100%"
  }
  return (
    <footer className='bg-dark text-light text-center py-3' style={footerStyle}>
      <p className="text-center">
        Copyright &copy; MyPOC.com
      </p>
    </footer>
  )
}

export default Footer
