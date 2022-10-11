import "./ChartBar.css";

function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    // get the percentage in relation to the max expenses to fill each bar
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* in react, to add css styles you use objects. the key is the property name, the value is the value. You either wrap the key in quotes if it has a dash or use camel case version  */}
        <div className="chart-bar__fill" style={{ height: barFillHeight }} />
      </div>
      <div className="chart-bar__label"> {props.label} </div>
    </div>
  );
}

export default ChartBar;
