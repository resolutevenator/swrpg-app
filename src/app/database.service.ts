import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  public getRacesList() {
    return this.db.list('races/').valueChanges();
  }

  public getRaceDataObject(raceName: string) {
    return this.db.object('races/' + raceName).valueChanges();
  }
}