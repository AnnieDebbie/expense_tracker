import "./Chart.css";
import ChartBar from "./ChartBar";

// we are not going to hardcode the number of chart bars or data points, instead we want to make it so that anywhere the chart is being used somewhere in the app, we gat the datapoints from there and plot them

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
