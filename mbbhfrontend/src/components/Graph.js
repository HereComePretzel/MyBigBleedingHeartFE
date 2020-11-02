import React, { useState, useEffect } from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import { connect } from 'react-redux'

function Graph (props){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {

            const chartData = [];

            props.posts.forEach(postObj => {
                const fartData = {};
                var dateAtt = postObj['date']
                var dateString = dateAtt.toString()
                fartData.name = dateString
                fartData.data = postObj['number'];
                chartData.push(fartData);
            })

        setData(chartData);
        setIsLoading(false)
        return null;
    })

    return (
        <div className="chart-wrapper">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="data" stroke="#8884d8" activeDot={{r: 8 }} />
                </LineChart>
             
        </div>
    )
            }

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Graph)