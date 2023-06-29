'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

function renderChart() {
  const productNames = [];
  const productViews = [];
  const productClicks = [];

   for (let i = 0; i < JSON.parse(localStorage.getItem("productsSoFar")).length; i++) {
     productNames.push(JSON.parse(localStorage.getItem("productsSoFar"))[i].name);
     productViews.push(JSON.parse(localStorage.getItem("productsSoFar"))[i].timesShown);
     productClicks.push(JSON.parse(localStorage.getItem("productsSoFar"))[i].timesClicked);
   }

  // console.log(productNames);
  // console.log(productViews);
  // console.log(productClicks);

  const data = {
    labels: productNames,
    datasets: [
      {
        label: "clicks",
        data: productClicks,
        backgroundColor: ["#42032C"],
        borderColor: ["#D36B00"],
        borderWidth: 1,
      },
      {
        label: "views",
        data: productViews,
        backgroundColor: ["#D36B00"],
        borderColor: ["#42032C"],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
}
const myChart = new Chart(canvasElem, config);
}

renderChart();
