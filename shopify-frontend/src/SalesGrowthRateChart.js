// src/SalesGrowthRateChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';
import { getSalesGrowthRate } from './apiService';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

const SalesGrowthRateChart = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const growthRateData = await getSalesGrowthRate();
            setData({
                labels: growthRateData.map(d => d.month),
                datasets: [
                    {
                        label: 'Sales Growth Rate',
                        data: growthRateData.map(d => d.growth_rate),
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    }
                ],
            });
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Sales Growth Rate Over Time</h2>
            <Line data={data} />
        </div>
    );
};

export default SalesGrowthRateChart;
