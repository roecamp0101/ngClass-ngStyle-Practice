import { Injectable } from '@angular/core';
import { Users } from './usercheck';


@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  userData:Users[] = [
    {avatar: 'https://via.placeholder.com/150', nameFirst: 'John', nameLast: 'Mckenzey', city:'Brooklyn', address: '77 Main Street', zip: 11920, state: 'NY', online: 'onsite', org: 'MH' },
    {avatar: 'https://via.placeholder.com/150', nameFirst: 'Jane', nameLast: 'Henzy', city:'Newark', address: '99 South Street', zip: 11849, state: 'NJ', online: 'remote', org: 'DH' },
    {avatar: 'https://via.placeholder.com/150', nameFirst: 'Henrey', nameLast: 'Mc. Masters', city:'Rodeo Drive', address: '88 Street', zip: 11920, state: 'CA', online: 'onsite', org: 'MH'},
    {avatar: 'https://via.placeholder.com/150', nameFirst: 'Cindy', nameLast: 'Nowzazye', city:'Houston', address: '0021 Cool Street', zip: 11920, state: 'TX', online: 'onsite', org: 'DH' },
    {avatar: 'https://via.placeholder.com/150', nameFirst: 'Bob', nameLast: 'Yomaui', city:'Fort Lauderdale', address: '7 Blvd', zip: 11920, state: 'FL', online: 'remote', org: 'DH' },
    {avatar: 'https://via.placeholder.com/150', nameFirst: 'Johnny', nameLast: 'Chillaima', city:'New Brons', address: '77 Recondora Ave', zip: 11920, state: 'MN', online: 'onsite', org: 'MH' }

  ]
}
