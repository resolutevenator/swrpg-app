import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  public getSpecDataObject(specName: string) {
    return this.db.object('specs/' + specName).valueChanges();
  }

  public getRaceDataObject(raceName: string) {
    return this.db.object('races/' + raceName).valueChanges();
  }

  public getList(path: string) {
    return this.db.list(path).valueChanges();
  }
}
