import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  hartOptions= {}; 
  Highcharts=Highcharts

  @Input() label:string | undefined;
  @Input() total:string | undefined;
  @Input() percentage:string | undefined;
@Input() data=[]
    ngOnInit() {
      this.hartOptions = {
        chart: {
          type: 'area',
          backgroundColor: null,
          borderwidth: 0,
          margin:[2,2,2,2],
          height:60
        },
        title: {
          text: null
        },
        subtitle: {
          text: null
        },
        tooltip: {
          split: true,
         Outside: true
        },
        legend:{
          enabled: false
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: false,
        },
        xAxis:{
         labels:{
          enabled: false
         },
         titel:{
          text:null,
         },
         startOnTick: false,
         endOnTick: false,
         tickOptions:{}
        },
        yAxis:{
          labels:{
           enabled: false
          },
          titel:{
           text:null,
          },
          startOnTick: false,
          endOnTick: false,
          tickOptions:{}
         },
        series: [{
          data:this.data
        }]
      };
  
      HC_exporting(Highcharts);
  
      setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        );
      }, 300);
    }
  
}
