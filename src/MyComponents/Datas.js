import React from 'react'
import DataItem from './DataItem'
// import DataItem from '../MyComponents/DataItem';

const Datas = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className='container'style={myStyle}>
            <h3 className='text-center my-3'>Datas List</h3>
            {props.datas.length === 0 ? "No Datas To Display" :
                props.datas.map((data) => {
                    return (
                     <DataItem data={data} key={data.sno} onDelete={props.onDelete} />
                    )
                })}
            {/* <DataItem data={props.datas[0]}/> */}
        </div>
    )
}

export default Datas
