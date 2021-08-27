import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public allowNewServer: boolean = false;
  
  public serverCreateStatus: string = "No Server Is Created";
  
  public serverName: string = "TestServer";

  public servers:  string[] = ["testServer 1","testServer 2"];

  public serverCreated: boolean = false;
  constructor() {
  setTimeout( () => {
    this.allowNewServer = true;
  },3000);
  }

  onCreateServer(){
    this.serverCreated = true
    this.servers.push(this.serverName);
    this.serverCreateStatus = "Server is created & Name of the server is : " + this.serverName;  
  }

  onUpdateServerName(event: Event){
   this.serverName = (<HTMLInputElement>event.target).value;     
  }

  ngOnInit(): void {
  }

}
