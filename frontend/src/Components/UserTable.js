import { useEffect, useState } from "react"
import axios from 'axios'
import { Button } from 'antd';
import { Spin, Table } from 'antd';
import 'antd/dist/antd.css';

function UserTable() {

  const [data, setData] = useState("")



  useEffect(() => {
    if (data === "") {
         const getData = async () => {
         const resp = await axios.get("http://localhost:5000/userdata")
         setData(resp.data.data)

      }
      getData()
    }
  }, [data]
  )

  



  const columns = [
    {
      title: 'Sr.No.',
      dataIndex: 'serialno',
      key: 'serialno',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Mobile Number',
      dataIndex: 'mobileno',
      key: 'mobileno',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
  ];

  const nextHandler = () => {
    if (data === "") {


    } else {
      window.location.href = "/piedata"
    }
  }

  return (
    <div >

      <div style={{ padding: '1%', marginLeft: '80%' }}>
        <Button type="primary" onClick={nextHandler}>Next</Button>
     </div>


      {data ? <Table dataSource={data} columns={columns} scroll={{ x: 400 }} /> :
        <div style={{ padding: '250px' }}>
          <center ><Spin size="large" /></center></div>

      }
    </div>
  )
}

export default UserTable