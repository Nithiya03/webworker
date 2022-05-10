import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'webworker';
  worker1!: Worker;
  ngOnInit(){
    console.log("Inside NGOnInit")
    this.worker();
  }
worker():void{
if (typeof Worker !== 'undefined') {
  console.log(import.meta.url)
  this.worker1 = new Worker(new URL('app.worker', import.meta.url));
  this.worker1.onmessage = (evt: MessageEvent) => {
    console.log("Data received from Worker",evt.data);
  };
  this.worker1.onerror = (error:any) => {
    console.error("Error Message received from Worker",error);
  };
  this.worker1.postMessage({action :'generateFibonacci',param:45});
} else {
  console.log("Error in Worker");
  }
}
}