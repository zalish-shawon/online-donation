import React from 'react';
import { Chart } from 'react-google-charts';

const Statistics = () => {
    const donationItems = JSON.parse(localStorage.getItem('donations'));

    const len = donationItems.length;
    const percentage = (len / 12) * 100;
    const fixedPercentage = parseFloat(percentage.toFixed(2));
    const remainPercentage = 100 - fixedPercentage;

    const chartData = [
        ['Category', 'Percentage'],
        ['Your Donation', fixedPercentage],
        ['Total Donation', remainPercentage],
    ];

    const options = {
        title: 'Donation Statistics',
        is3D: true, 
    };

    return (
        <div className="w-full md:w-1/2 lg:w-[1024px] mx-auto p-4">
            
            <div className="w-full h-96">
                <Chart
                    chartType="PieChart"
                    data={chartData}
                    options={options}
                    loader={<div>Loading Chart...</div>}
                    width={'100%'}
                    height={'100%'}
                />
            </div>
        </div>
    );
};

export default Statistics;
