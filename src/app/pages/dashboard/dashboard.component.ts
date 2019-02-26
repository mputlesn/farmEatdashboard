import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js'
import { statsService } from "../../provider/stats.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  farmRating = new Array();
  allFarms =  new Array();
  farmName = new Array();


  chart = []; // This will hold our chart info
  chart1 = []; 
  chart2 = []; 
  chart3 = []; 
  chart4 = []; 

  constructor(private stats: statsService) { }

  ngOnInit() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: [
            "Eastern Cape",
            "Free State",
            "Gauteng",
            "KwaZulu-Natal",
            "Limpopo",
            "Mpumalanga",
            "North West",
            "Northern Cape",
            "Western Cape"
          ],
          datasets: [{
              label: '',
              data: [12, 19, 3, 5, 2, 3, 7, 3, 1],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:false
                  }
              }]
          }
      }
  });


  var ctx = document.getElementById("Chart");
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
          "Eastern Cape",
          "Free State",
          "Gauteng",
          "KwaZulu-Natal",
          "Limpopo",
          "Mpumalanga",
          "North West",
          "Northern Cape",
          "Western Cape"
        ],
        datasets: [{
            label: '',
            data: [12, 19, 3, 5, 2, 3, 7, 3, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        }
    }
});


var ctx = document.getElementById("Chart1");
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
      labels: [
        "Eastern Cape",
        "Free State",
        "Gauteng",
        "KwaZulu-Natal",
        "Limpopo",
        "Mpumalanga",
        "North West",
        "Northern Cape",
        "Western Cape"
      ],
      datasets: [{
          label: '',
          data: [12, 19, 3, 5, 2, 3, 7, 3, 1],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:false
              }
          }]
      }
  }
});

var ctx = document.getElementById("Chart2");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: [
        "Eastern Cape",
        "Free State",
        "Gauteng",
        "KwaZulu-Natal",
        "Limpopo",
        "Mpumalanga",
        "North West",
        "Northern Cape",
        "Western Cape"
      ],
      datasets: [{
          label: '',
          data: [12, 19, 3, 5, 2, 3, 7, 3, 1],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:false
              }
          }]
      }
  }
});
}

  getAllFarms() {
    return new Promise((resolve, reject) => {
      this.stats.getallFarms().then((data: any) => {
        this.allFarms = data
        console.log(data);

        for (let index = 0; index < this.allFarms.length; index++) {
          var rate = this.allFarms[index].farmRate;
          var name = this.allFarms[index].name

          this.farmRating.push(rate)
          this.farmName.push(name)
          console.log(this.farmRating);
          


        }
      })
      console.log(this.farmRating);
      console.log(this.farmName);

      resolve()
    })


  }

  get1(){
    var ctx = document.getElementById("orgPerMonth");
    this.chart1 = new Chart("ratings", {
        type: 'doughnut',
        data: {
          labels: this.farmName,
          datasets: [{
            label: 'my data',
            data: this.farmRating,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
  }
  get2(){
    var ctx = document.getElementById("viewsPerCat");
    this.chart2 = new Chart("ratings", {
        type: 'doughnut',
        data: {
          labels: this.farmName,
          datasets: [{
            label: 'my data',
            data: this.farmRating,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
  }
  get3(){
    var ctx = document.getElementById("orgPerGeo");
    this.chart3 = new Chart("ratings", {
        type: 'doughnut',
        data: {
          labels: this.farmName,
          datasets: [{
            label: 'my data',
            data: this.farmRating,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
  }
  get4(){
    var ctx = document.getElementById("farmPerCat");
    this.chart4 = new Chart("farmPerCat", {
        type: 'doughnut',
        data: {
          labels: this.farmName,
          datasets: [{
            label: 'my data',
            data: this.farmRating,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
  }

  getFarmGeoStats(){
    // for (let index = 0; index < this.provinces.length; index++) {
    //   const province = this.provinces[index];
    //   this.stats.geocoder(province).then((data:any)=>{
    //     console.log(province);
    //     console.log(data);

    //   })

    // }
  }
}
