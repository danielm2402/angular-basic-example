import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor(private objClientService: ClientService) {
    this.clients = []
  }


  ngOnInit(): void {
    this.objClientService.getClients().subscribe((clients) => {
      this.clients = clients
    })
  }
}
