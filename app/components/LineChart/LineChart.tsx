'use client'

import React, { useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'



import ChartBackgroundPlugin from './ChartBackgroundPlugin';
import { expense } from '@/app/types/Expense';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartBackgroundPlugin,
);


export const options = {
    responsive: true,
    chartArea: {
        backgroundColor: 'rgba(251, 85, 85, 0.4)'
    },
    plugins: {

    
    },
    maintainAspectRatio: false,
    scales: {
        x: {
            ticks:{
                font:{
                    size: 15
                }
            }
        },
        y: {
            ticks:{
                font:{
                    size: 15,
                }
            }
        },
    },
};



export default function LineChart({props, expenses_state} : {props: string, expenses_state: expense[]}) {

    //const expenses_state = useSelector((state: RootState) => state.expenses.expenses);
    const labels1 = expenses_state.map(expense => expense.name);
    const data  = {
        labels: labels1,
        datasets: [
            {
                label: 'Data',
                data: expenses_state.map(expense => expense.amount),
                fill: false,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ],
        };
    




    return (
        <section className='h-[500px] mr-1 w-[400px] sm:w-[820px]'>
            <Line   options={options}  data={data} height={200} width={820}  />
        </section>
    );
        

}