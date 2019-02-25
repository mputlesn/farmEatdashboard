import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var firebase
declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class statsService {
  farmArray
  geocoder = new google.maps.Geocoder;
  constructor() { }

  getallFarms(){

    return new Promise((resolve ,reject)=>{
      firebase.database().ref('Farms').on('value',(data:any)=>{
      firebase.database().ref('UrbanFarmz').on('value',(data2:any)=>{
  
        var farms =data.val() ;
        var farms2 =data2.val();
        console.log(farms);
        console.log(farms2)
        var keys:any =Object.keys(farms2)
        
  
        this.farmArray.length = 0;
        console.log(keys);
        for(var i =0 ; i <keys.length;i++){
          var  k =keys[i];
          var y  = 'UrbanFarmz/' + k;
          var FarmDetails;
          firebase.database().ref(y).on('value', (data3:any)=>{
            FarmDetails = data3.val();
            console.log(FarmDetails);
  
            var keys3 = Object.keys(FarmDetails)
            console.log(keys3)
             for(var a = 0 ;a < keys3.length;a++){
               var k3 = keys3[a];
               console.log(k3)
  
               let obj = {
  
                k:k3 ,
                userK: k,
                lat:FarmDetails[k3].lat ,
                lng:FarmDetails[k3].lng ,
                name: FarmDetails[k3].name ,
                description:FarmDetails[k3].description ,
                type:FarmDetails[k3].type ,
                address: FarmDetails[k3].address ,
                aquatic: FarmDetails[k3].aquatic ,
                crops:FarmDetails[k3].crops ,
                tel:FarmDetails[k3].tel ,
                email: FarmDetails[k3].email ,
                image:FarmDetails[k3].image ,
                beeKeeping:FarmDetails[k3].beeKeeping ,
                liveStock:FarmDetails[k3].liveStock ,
                facebook:FarmDetails[k3].facebook,
                products:FarmDetails[k3].products,
                farmRate: FarmDetails[k3].farmRate
              }
              this.farmArray.push(obj)
              console.log(this.farmArray)
             }
          })
            console.log(FarmDetails)
  
  
  
           ;
          resolve(this.farmArray)
        }
      })
  
    })
  })
  }

  geocodeLatLng(location) {
    return new Promise((resolve, reject) => {
      this.geocoder.geocode({ 'location': location }, function (results, status) {
        if (status === 'OK') {
          console.log('OK');
          console.log(status);
          let locName = results[0].formatted_address;
          this.destinationAddress = locName;
          console.log("Location Push:" + this.destinationAddress);
        } else {
          console.log(' not OK' + status);

          window.alert('Geocoder failed due to: ' + status);
        } resolve(this.destinationAddress);
      }, (error) => {
        reject(error);
      });
    });
  }


  gettingGeoStats(lat, lng){
    return new Promise ((resolve, reject) =>{
      var counter = 0
      this.getallFarms().then((data:any)=>{
       for (let index = 0; index < data.length; index++) {
         var farmLat = data[index].lat
         var farmLng = data[index].lng
         if(lat <= farmLat && lng <= farmLng){
           counter += 1
         }
         
       }
       resolve(counter)
      })
    })
   
   }
}
