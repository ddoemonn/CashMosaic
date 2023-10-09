import { Chart, Plugin } from 'chart.js';

const ChartBackgroundPlugin: Plugin = {
  id: 'chartBackground',
  beforeDraw: (chart: Chart, args: { cancelable: true }, options: any) => {
    const ctx = chart.ctx as CanvasRenderingContext2D;
    const chartArea = chart.chartArea as { left: number; top: number; right: number; bottom: number };

    // Set the background color for the area behind the chart lines
    ctx.fillStyle = 'rgb(226 232 240)';
    ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
  },
};

export default ChartBackgroundPlugin;
