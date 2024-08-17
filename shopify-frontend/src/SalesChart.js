// src/SalesChart.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';
import { getTotalSales } from './apiService';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

const SalesChart = ({ interval }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const salesData = await getTotalSales(interval);
            setData({
                labels: salesData.map(d => d._id),
                datasets: [
                    {
                        label: 'Total Sales',
                        data: salesData.map(d => d.total),
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    }
                ],
            });
        };

        fetchData();
    }, [interval]);

    return (
        <div>
            <h2>Total Sales Over Time ({interval})</h2>
            <Line data={data} />
        </div>
    );
};

export default SalesChart;
