// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
// import DataItem from './MyComponents/DataItem';
import Datas from './MyComponents/Datas';
import Footer from './MyComponents/Footer';
import React, { useEffect, useState } from 'react';
import AddData from './MyComponents/AddData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './MyComponents/About';

function App() {
  let initData;
  if (localStorage.getItem("datas") === null) {
    initData = [];
  } else {
    initData = JSON.parse(localStorage.getItem("datas"))
  }
  const onDelete = (data) => {
    console.log("I am delete", data);
    // let index = data.indexOf(data);
    // datas.splice(index, 1);

    setDatas(datas.filter((e) => {
      return e !== data;
    }));
    localStorage.setItem("datas", JSON.stringify(datas))
  }

  const addData = (title, desc) => {
    console.log("I am adding this data", title, desc);
    let sno;
    if (datas.length === 0) {
      sno = 0;
    } else {
      sno = datas[datas.length - 1].sno + 1;
    }
    const myData = {
      sno: sno,
      title: title,
      desc: desc
    }
    setDatas([...datas, myData])
    console.log("myData", myData);

    // useEffect(()=>{
    //   localStorage.setItem("datas", JSON.stringify(datas))
    // }, [datas])

  }

  const [datas, setDatas] = useState(
    // [ 
    initData



    // {
    //   sno: 1,
    //   title: "Go to the Market",
    //   desc: "You need to go to market this job done"
    // },
    // {
    //   sno: 2,
    //   title: "Go to the Cricket Stadium",
    //   desc: "You need to go to Cricket Stadium this job done"
    // },
    // {
    //   sno: 3,
    //   title: "Go to the Football Club",
    //   desc: "You need to go to Football Club this job done"
    // }
    // ]
  )
  useEffect(() => {
    localStorage.setItem("datas", JSON.stringify(datas))
  }, [datas])
  return (
    <>
      <Router>
        {/* Header */}
        <Header title="MyTitle - POC" searchBar={true} />

        <Routes>
          <Route path='/' element={
            <>
              <AddData addData={addData} />
              <Datas datas={datas} onDelete={onDelete} />
            </>
          } />
          {/* </Route> */}
          <Route exact path='/about' element={<About />} />
          {/* </Route> */}
        </Routes>

        {/* Footer */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
