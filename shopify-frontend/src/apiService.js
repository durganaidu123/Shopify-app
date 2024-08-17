// src/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Update with your backend URL if deployed

export const getTotalSales = async (interval) => {
    const response = await axios.get(`${API_BASE_URL}/total-sales`, {
        params: { interval }
    });
    return response.data;
};

export const getSalesGrowthRate = async () => {
    const response = await axios.get(`${API_BASE_URL}/sales-growth-rate`);
    return response.data;
};

export const getNewCustomers = async (interval) => {
    const response = await axios.get(`${API_BASE_URL}/new-customers`, {
        params: { interval }
    });
    return response.data;
};

export const getRepeatCustomers = async () => {
    const response = await axios.get(`${API_BASE_URL}/repeat-customers`);
    return response.data;
};

export const getGeoDistribution = async () => {
    const response = await axios.get(`${API_BASE_URL}/geo-distribution`);
    return response.data;
};

export const getCustomerLifetimeValue = async () => {
    const response = await axios.get(`${API_BASE_URL}/customer-lifetime-value`);
    return response.data;
};
