// src/App.js
import React, { useState } from 'react';
import SalesChart from './SalesChart';
import SalesGrowthRateChart from './SalesGrowthRateChart';
import NewCustomersChart from './NewCustomersChart';
import RepeatCustomersChart from './RepeatCustomersChart';
import GeoDistributionChart from './GeoDistributionChart';
import CustomerLifetimeValueChart from './CustomerLifetimeValueChart';
import './App.css'; // Optional: for custom styling

function App() {
    const [interval, setInterval] = useState('daily');

    return (
        <div className="App">
            <h1>Shopify Analytics Dashboard</h1>
            
            <div className="button-group">
                <button onClick={() => setInterval('daily')}>Daily</button>
                <button onClick={() => setInterval('monthly')}>Monthly</button>
                <button onClick={() => setInterval('quarterly')}>Quarterly</button>
                <button onClick={() => setInterval('yearly')}>Yearly</button>
            </div>

            <SalesChart interval={interval} />
            <SalesGrowthRateChart />
            <NewCustomersChart interval={interval} />
            <RepeatCustomersChart interval={interval} />
            <GeoDistributionChart />
            <CustomerLifetimeValueChart />
        </div>
    );
}

export default App;
