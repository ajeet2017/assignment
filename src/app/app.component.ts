import { Component, OnInit } from '@angular/core';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit { 

    expected: any = {};

    constructor() { }
  
    ngOnInit(){
      this.tranformData();
    }
  
    band = {
      members: {
          current: [
              {name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass']},
              {name: 'Lucia', age: 49, plays: ['vocals', 'synth']},
              {name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth']},
              {name: 'Steve', age: 55, plays: ['guitar']}
          ],
          past: [
              {name: 'Raymond', age: 57, plays: ['vocals', 'synth']},
              {name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth']},
              {name: 'Gunter', age: 57, plays: ['guitar', 'synth']}
          ]
      }
  };
  
  
  tranformData(){
    let all = [String];
    let uniquePlays:any = [];
    let plays:any = {}
    this.expected = {...this.band}
    let myPlay:any = [];
    let members: any = [...this.band.members.past]
    members.push(...this.band.members.current)
    members.sort((a:any, b:any)=> a.name > b.name ? -1 : (a.age == b.age)?1:-1).sort((a:any, b:any)=> a.age > b.age ? -1 : 1);
      members.forEach((e:any) => {
        all.push(e.name.toLowerCase());
        e.plays.forEach((i:any) => {
          if(uniquePlays.indexOf(i) == -1)
            uniquePlays.push(i); 
        });
      });
  
      uniquePlays.forEach((i:any) => {
        myPlay = [];
          members.forEach((e:any) => {
           if(e.plays.indexOf(i)>-1){
            myPlay.push(e.name.toLowerCase());
           }
        });
        plays[i] = myPlay;
      });
      this.expected.members['all'] = all;
      this.expected['plays'] = plays;
      console.log("expected===",this.expected);
  }
}