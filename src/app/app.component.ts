import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  locationText: string = ""
  currentTemp: number = null
  constructor(){
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
     

      fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=ace6c017d0cf763632db2b53251d94e4&units=imperial")
        .then((res) => res.json()).then((data) => {
          console.log(data)
          this.locationText = data.name
          this.currentTemp = data.main.temp
        });
      
    });
  }
  checkWeather(){
   fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.locationText + "&appid=ace6c017d0cf763632db2b53251d94e4&units=imperial")
   .then((res) => res.json()).then((data) => {
      console.log(data)
      this.currentTemp = data.main.temp
   });
 
  }
}
