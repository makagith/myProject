import { Component, OnInit } from '@angular/core';
import { HelperDataService } from './../../../servises/helperData.service';
import { comand } from './../../../components/interFace/my-inter-face.service';
@Component({
  selector: 'app-my-help',
  templateUrl: './my-help.component.html',
  styleUrl: './my-help.component.css'
})
export class MyHelpComponent implements OnInit {

  public users: comand[] = [];

  constructor(private helperDataService: HelperDataService) {  
    
  }

  ngOnInit() {
    this.helperDataService.getList().subscribe(data => {
      console.log(data);  
      this.users = data;
    });
  }
}