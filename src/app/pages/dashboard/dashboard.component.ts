import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js'
import { statsService } from "../../provider/stats.service" ;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  farmRating = new Array();
  allFarms =  new Array();
  farmName = new Array();

  farm = []

  chart = []; // This will hold our chart info
  chart1 = []; 
  chart2 = []; 
  chart3 = []; 
  chart4 = []; 
  totalVerticalFarming = 0
  totalGreenHouse = 0
  totalTraditionalFarming = 0

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






    ///////////////////////////////////////
    
    setTimeout(() => {
      var ctx = document.getElementById("farmtype");
      this.farm = new Chart("farmtype", {
          type: 'bar',
          data: {
            labels: ["Vertical Farm" , "Green House" , " Tradition Farm"] ,
            datasets: [{
              label: ["Vertical Farm" , "Green House" , " Tradition Farm"],
              data: [this.totalVerticalFarming ,this.totalGreenHouse , this.totalTraditionalFarming],
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
    }, 3000);
   

  


  
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

  //   }
  }



  getOverallStats(){
    this.stats.getallFarms().then((data:any)=>{
      var farmArray = data ;
     let totalVerticalFarming = 0  ;
     let totalTraditionalFarming = 0 ;
     let totalGreenHouse = 0 ;
     console.log(farmArray);
     
      console.log(farmArray);
      
      var farmArray = data ;
      for (let index = 0; index <   farmArray.length/2; index++) {

        if (farmArray[index].type == "Vertical Farming"){
          this.totalVerticalFarming++ ;
          //console.log(  totalVerticalFarming);
          

        }else if ( farmArray[index].type == "Traditional Farming"){
          this.totalTraditionalFarming++ ;
          //console.log( totalTraditionalFarming);
        }else if (farmArray[index].type == "Green House"){
          this.totalGreenHouse++ ;
         // console.log( totalGreenHouse);
          

        }
       //this.totalFarmtype.push( totalVerticalFarming,  totalGreenHouse , totalTraditionalFarming ,  )
        
      }

      console.log("V :" +  this.totalVerticalFarming);
      console.log("T :" +this.totalTraditionalFarming);
      console.log("G :" +this. totalGreenHouse)
      
     })
  }

  getCities (){
    this.stats.getallFarms().then((data:any)=>{
      var cities = data ;
      for (let index = 0; index < cities.length; index++) {
         // this.cpush(cities.city)
       
        
      }
    })

     
  }
}
