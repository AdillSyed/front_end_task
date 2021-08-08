let buttonEl = document.getElementById("dataButton");
let canvasEl = document.getElementById("myChart").getContext('2d');
let canvasElTwo = document.getElementById("myChartTwo").getContext('2d');
let canvasElThree = document.getElementById("myChartThree").getContext('2d');
let canvasElFour = document.getElementById("myChartFour").getContext('2d');
let bottomChartEl = document.getElementById("bottomChart").getContext('2d');

let hamburgerEl = document.getElementById("hamburgerFont");
let dropdownEl = document.getElementById("dropdownContainer");

hamburgerEl.addEventListener("click", function() {
    dropdownEl.classList.toggle("dropdown");
    hamburgerEl.classList.toggle("fa-times");
});

let url = "http://localhost:3008/parameters";
let options = {
  method: "GET",
};
let obj = {};
let newObj = {};
let tempArr = [];
let pressureArr = [];
let leakHoleDiaArr = []; 
let percentOfSurfaceCorrisionArr = [];
fetch(url, options)
.then(function(response) {
  return response.json();
})
.then(function(jsonData) {
  obj = jsonData;
  for (let d of obj) {
    pressureArr.push(d.pressure)
    leakHoleDiaArr.push(d.leak_hole_diameter);
    percentOfSurfaceCorrisionArr.push(d.percentage_of_surface_corrosion);
  }
});

const urls = "http://localhost:3008/parameters";
let data;
const doNetworkCall = async () => {
  const response = await fetch(urls);
  const jsonData = await response.json();
  data = jsonData
  for (let te of data) {
    tempArr.push(te.temperature)
    pressureArr.push(te.pressure)
    leakHoleDiaArr.push(te.leak_hole_diameter)
    percentOfSurfaceCorrisionArr.push(te.percentage_of_surface_corrosion)
  }
  console.log(tempArr)
  var myChartTemp = new Chart(canvasEl, {
    type: 'line',
    data: {
        labels: ['Day-1', 'Day-2', 'Day-3', 'Day-4', 'Day-5', 'Day-6', 'Day-7', 'Day-8', 'Day-9'],
        datasets: [{
            label: '# Average Temperature For a Day',
            data: tempArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            width: '40%',
            height: '40vh',
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
  var myChartPressure = new Chart(canvasElTwo, {
    type: 'line',
    data: {
        labels: ['Day-1', 'Day-2', 'Day-3', 'Day-4', 'Day-5', 'Day-6', 'Day-7', 'Day-8', 'Day-9'],
        datasets: [{
            label: '# Average Pressure For a Day',
            data: pressureArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            width: '40%',
            height: '40vh',
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
  var myChartDia = new Chart(canvasElThree, {
    type: 'line',
    data: {
        labels: ['Day-1', 'Day-2', 'Day-3', 'Day-4', 'Day-5', 'Day-6', 'Day-7', 'Day-8', 'Day-9'],
        datasets: [{
            label: '# Leak Hole Diameter',
            data: leakHoleDiaArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            width: '40%',
            height: '40vh',
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
  var myChartPercent = new Chart(canvasElFour, {
    type: 'line',
    data: {
        labels: ['Day-1', 'Day-2', 'Day-3', 'Day-4', 'Day-5', 'Day-6', 'Day-7', 'Day-8', 'Day-9'],
        datasets: [{
            label: '# Avg Percent Of Surface Corrosion',
            data: percentOfSurfaceCorrisionArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            width: '40%',
            height: '40vh',
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });
  var bottomChart = new Chart(bottomChartEl, {
    type: 'line',
    data: {
        labels: ['Day-1', 'Day-2', 'Day-3', 'Day-4', 'Day-5', 'Day-6', 'Day-7', 'Day-8', 'Day-9'],
        datasets: [{
            label: '# Average Temperature For a Day',
            data: tempArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            width: '40%',
            height: '40vh',
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2,
            tension: 0.4
        },
        {
          label: '# Average Pressure For a Day',
          data: pressureArr,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          width: '40%',
          height: '40vh',
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2,
          tension: 0.4
      },
      {
        label: '# Leak Hole Diameter',
        data: leakHoleDiaArr,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        width: '40%',
        height: '40vh',
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2,
        tension: 0.4
    },
    {
      label: '# Avg Percent Of Surface Corrosion',
      data: percentOfSurfaceCorrisionArr,
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      width: '40%',
      height: '40vh',
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
      tension: 0.4
  }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });

};

const asyncPromise = doNetworkCall();
console.log(asyncPromise)



