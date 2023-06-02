import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';





function graph_color(opacity) {
  return `rgba(99, 102, 241, ${opacity.toString()})`
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);





export function Chart({ name, icon, data }) {



  let gridColor = "#2A284F"
  let textColor = "rgba(220,220,255,0.8)"

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },

    maintainAspectRatio: false,

    scales: {

      y: {
        stacked: true,
        grid: {
          display: true,
          color: gridColor,
        },
        ticks: {
          stepSize: 50,
          color: textColor,
        },
      },
      x: {
        grid: {
          display: false,
          color: gridColor,
        },
        ticks: {
          color: textColor,
        },
      },
    }
  };

  let t1 = []
  for (let index = 0; index < 24; index++) {
    t1.push(Math.round(Math.random() * (100)))
  }

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



  const chartData = {
    labels,
    datasets: [{
      label: "user",
      backgroundColor: graph_color(0.1),
      borderColor: graph_color(1),
      borderWidth: 2,
      hoverBackgroundColor: graph_color(1),
      hoverBorderColor: graph_color(1),
      cubicInterpolationMode: 'monotone',
      borderJoinStyle: 'round',

      pointBorderWidth: 2,
      pointBorderColor: graph_color(1),
      pointBackgroundColor: graph_color(1),
      pointHoverBackgroundColor: graph_color(0.7),
      pointHoverBorderColor: graph_color(0),
      pointHoverRadius: 4,

      pointHitRadius: 15,
      pointRadius: 1.5,
      data: t1,
      fill: true,
    }]
  };





  return (
    <div className='bg-indigo-500/5 px-7 py-8 rounded-lg relative overflow-hidden'>
      <div className='w-[200px] h-[150px] bg-indigo-500 absolute rounded-full opacity-[0.9] blur-[200px] z-[0] left-0 top-0 bottom-10'></div>
      <nav className='flex relative'>
        <div className='bg-gradient-to-b from-indigo-500 to-indigo-600/80 w-14 h-14 rounded-md flex items-center justify-center'>
          {icon}
        </div>

        <div className='ml-5 relative bottom-0.5'>
          <p className='text-indigo-200/80'>{name}</p>
          <p className='font-bold text-3xl text-white relative bottom-0.5 '>{data.value}<span className='text-xl font-medium ml-1 text-indigo-100/60'>{data.unit}</span></p>
        </div>

        <div className='absolute right-4 top-4 rounded-full px-4 py-1.5 border border-indigo-200/20 flex items-center justify-center'>
          <p className={`${data.percent < 0 && "text-red-500" || "text-green-500"} text-[14px]`}>{data.percent >= 0 && "+" || ""}{data.percent}%</p>
        </div>
      </nav>

      <main className='mt-10'>
        <Line options={options} data={chartData} />
      </main>
    </div>
  )
}