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

  public getTalentsObject() {
    return this.db.object('talents/').valueChanges();
  }

  public getTalentObject(talentName: string) {
    return this.db.object('talents/' + talentName).valueChanges();
  }

  public pushTalent(talent: Object, key: string) {
    this.db.object('talents/' + key).update(talent);
  }

  public pushSpec(spec: Object, key: string) {
    this.db.object('specs/' + key).update(spec)
  }

  public pushRace(race: Object, key: string) {
    this.db.object('races/' + key).update(race)
  }
}
