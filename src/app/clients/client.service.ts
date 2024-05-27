import { Injectable } from '@angular/core';
import { Client } from './client';
import { faker } from '@faker-js/faker';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  createRandomUser() {
    return new Client(faker.number.int(300), faker.person.firstName(), faker.person.lastName(), faker.date.past(), faker.internet.email(), faker.image.avatar())

  }

  getClients(): Observable<Client[]> {
    return of(faker.helpers.multiple(this.createRandomUser, {
      count: 5,
    })).pipe(delay(5000))
  }
}
