import { Component, inject } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styles: []
})
export class AppComponent {
  private readonly globalService = inject(GlobalService);

  public lastFetchDate$ = this.globalService.lastFetchDate$;
  public serviceCreationDate$ = this.globalService.serviceCreationDate$;
}