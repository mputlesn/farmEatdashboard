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

  tempName = ["Betrams Inner City Farm",
    "Urban Farmer",
    "Urban Fresh South Africa",
    "Shaik’s Poultry Farm",
    "Rutagang Coporate",
    "Goodfighter chicken farm",
    "Herbs and Food gardening Agriculture Coporate",
    "Thandolwethu Project"]

  temp = [
    2,
    0,
    0,
    3,
    0,
    0,
    0,
    0
  ]


  chart = []; // This will hold our chart info
  provinces = [
    "Eastern Cape",
    "Free State",
    "Gauteng",
    "KwaZulu-Natal",
    "Limpopo",
    "Mpumalanga",
    "North West",
    "Northern Cape",
    "Western Cape"
  ]

  constructor(private stats: statsService) { }

  ngOnInit() {
    this.getAllFarms().then(() => {
      //this.getFarmGeoStats()
      var ctx = document.getElementById("ratings");
    this.chart = new Chart("ratings", {
        type: 'doughnut',
        data: {
          labels: this.farmName,
          datasets: [{
            label: 'my data',
            data: this.temp,
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
                beginAtZero: false
              }
            }]
          }
        }
      });

    })


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


        }
      })
      console.log(this.farmRating);
      console.log(this.farmName);

      resolve()
    })


  }

  // getFarmGeoStats(){
  //   for (let index = 0; index < this.provinces.length; index++) {
  //     const province = this.provinces[index];
  //     this.stats.geocoder(province).then((data:any)=>{
  //       console.log(province);
  //       console.log(data);

  //     })

  //   }
  // }
}
