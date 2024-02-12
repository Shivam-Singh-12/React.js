import React from 'react'

const DataItem = ({ data, onDelete }) => {
  return (
    <>
    <div>
      {/* DataItem Works to display list !! */}
      <h4>{data.title}</h4>
      <p>{data.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={() => onDelete(data)}>Delete</button> 
    </div>
    <hr/>
    </>
  )
}

export default DataItem
