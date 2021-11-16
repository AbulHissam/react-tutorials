export const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    return a.cases > b.cases ? -1 : 1;
  });
  return sortedData;
};

export const formGraphData = (data, country) => {
  // Destructure cases from data
  let cases;
  if (country === "worldwide") {
    cases = data["cases"];
  } else {
    cases = data["timeline"]["cases"];
  }
  const chartData = [];
  let lastDataPoint;

  for (let date in cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: cases[date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = cases[date];
  }

  return chartData;
};
