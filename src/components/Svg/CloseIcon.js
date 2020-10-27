import React from "react"

function CloseIcon(props) {
  return (
    <svg className="w-3 h-3 hover:fill-0" viewBox="0 0 24 24" fill={props.fill || "#fff"} {...props}>
      <path d="M24 20.188l-8.315-8.209 8.2-8.282L20.188 0l-8.212 8.318L3.666.115 0 3.781l8.321 8.24-8.206 8.313L3.781 24l8.237-8.318 8.285 8.203z" />
    </svg>
  )
}

export default CloseIcon


