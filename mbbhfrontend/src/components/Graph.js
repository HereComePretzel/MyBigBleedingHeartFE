import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import { connect } from 'react-redux'
function Graph (props){
    console.log(props)

    const formatData = () => {
        const chartData = [];
    
        props.posts.forEach(postObj => {
            const fartData = {};
            var dateAtt = postObj['date']
            var dateString = dateAtt.toString()
            fartData.name = dateString
            fartData.data = postObj['number'];
            chartData.push(fartData);
        })
        return chartData

    }
   
    return (
        <div className="chart-wrapper" style={{padding:'70px'}}>
            <LineChart
                width={500}
                height={330}
                data={formatData()}
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
        auth: state.auth,
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Graph)