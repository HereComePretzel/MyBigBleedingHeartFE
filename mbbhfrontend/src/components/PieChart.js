
import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux'

function PieRechartComponent (props) {
        const colors = ['#0F3ABD', '#2635A9', '#3D3096', '#552B82', '#6C266F', '#83215B', '#9A1C48', '#C91221', '#C91221', '#E00D0D'];
        const pieData = [];

        
        const formatData = () => {
    
                const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                for(let i = 0; i < values.length; i++){
                    var num = 0;
                    const fartData = {};


                    fartData.name = values[i];
                    props.posts.forEach(postObj => {
                        if(postObj['number'] === values[i]){
                            num++
                        }
                        
                    })
                    fartData.value = num
                    pieData.push(fartData);
                }
                console.log(pieData)
                return pieData
            }
            

    const customTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    };

        return (
            <PieChart width={500} height={400}>
                <Pie data={formatData()} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                    {
                        pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
                    }
                </Pie>
                <Tooltip content={<customTooltip />} />
                <Legend />
            </PieChart>
        )
    ;
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        posts: state.posts
    }
}


export default connect(mapStateToProps, null)(PieRechartComponent);