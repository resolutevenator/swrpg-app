import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer) {
    this._matIconRegistry.addSvgIcon(
      'eote',
      this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/eote.svg')
    );
    this._matIconRegistry.addSvgIcon(
      'aor',
      this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/aor.svg')
    );
    this._matIconRegistry.addSvgIcon(
      'fnd',
      this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/fnd.svg')
    );
    this._matIconRegistry.addSvgIcon(
      'uni',
      this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/uni1.svg')
    );
  }
}
