const CHART = $("#doughnutChart");
let doughnut = new Chart(CHART, {
  type: "doughnut",
  data: {
    label: ["completed"],
    datasets: [{
      label: "uncompleted",
      backgroundColor: ["#f1c40f", "#eee"]
    }]
  },
  options: {
    cutoutPercentage: 60
  }
});
