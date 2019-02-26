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

   totalFarmtype = [] ;
   totalVerticalFarming= 0 ;
   totalTraditionalFarming  = 0;
   totalGreenHouse  = 0;
   citiesArray = [] ;

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

farmtype =  [ "Vertical Farming" , "Green House" , "Tradition"]
farm  = [] ;
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
    setTimeout(()=>{
      this.getOverallStats()

    }, 2000)
   
    console.log(this.temp);
    console.log(this.totalGreenHouse);
    console.log(this.totalTraditionalFarming);
    console.log(this.totalVerticalFarming);
    
    
    
    
    this.getAllFarms().then(() => {
      //this.getFarmGeoStats()

      setTimeout(() => {
        var ctx = document.getElementById("ratings");
        this.chart = new Chart("ratings", {
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
      }, 3000);
     

    })






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

  // getFarmGeoStats(){
  //   for (let index = 0; index < this.provinces.length; index++) {
  //     const province = this.provinces[index];
  //     this.stats.geocoder(province).then((data:any)=>{
  //       console.log(province);
  //       console.log(data);

  //     })

  //   }
  // }



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
