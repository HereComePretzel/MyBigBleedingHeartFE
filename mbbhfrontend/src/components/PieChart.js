
import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, CustomToolTip } from 'recharts';
import { connect } from 'react-redux'

function PieRechartComponent (props) {
        const [data, setData] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
        const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];
        const pieData = []
        
        useEffect(() => {
    
                // const pieData = [];
                const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                for(let i = 0; i < values.length; i++){
                    var num = 0;
                    const fartData = {};
                    // pieData[num] = pieData[num] ? pieData[num] + 1 : 1;

                    fartData.name = values[i];
                    props.posts.forEach(postObj => {
                        if(postObj['number'] === values[i]){
                            num++
                        }
                        
                    })
                    fartData.value = num
                    pieData.push(fartData);
                     console.log(pieData)
                }
    
            setData(pieData);
            setIsLoading(false)
            return null;
        })


    const customToolTip = ({ active, payload, label }) => {
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
            <PieChart width={730} height={300}>
                <Pie data={data} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                    {
                        this.data.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                    }
                </Pie>
                <Tooltip content={<this.CustomTooltip />} />
                <Legend />
            </PieChart>
        )
    ;
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        auth: state.auth
    }
}


export default connect(mapStateToProps, null)(PieRechartComponent);