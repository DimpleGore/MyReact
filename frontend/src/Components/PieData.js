import axios from "axios";
import { useEffect, useState } from "react";
import PieChart from "./PieChart";
import { Spin, Button } from 'antd'

function PieData() {

    const [data, setData] = useState("")


    useEffect(() => {
           axios.get('http://localhost:5000/pieinfo').then(resp => {
            setData(resp.data.data)
        })
    }, [])

    const backHandler = () => {
        if (data === "") {

        } else {
            window.location.href = "/"
        }
    }

    return (
        <div >
            <div style={{ padding: '1%', marginLeft: '80%' }}>
                <Button type="primary" onClick={backHandler}>Go Back</Button>

            </div>
              {data ? <center>
                <PieChart
                   data={data}
                    outerRadius={200}
                    innerRadius={0} />
                   </center> : <div style={{ padding: '250px' }}>
                    <center ><Spin size="large" /></center></div>}

        </div>
    )
}

export default PieData