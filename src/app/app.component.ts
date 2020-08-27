import { Component, Inject } from '@angular/core';
import { SidenavService } from './services/sidenav.service';
import { onMainContentChange } from './animations/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [ onMainContentChange ]
})
export class AppComponent  {
  name = 'Angular';
  public onSideNavChange: boolean;
 // @Inject(ServiceName) public service: ServiceName 
  constructor(@Inject(SidenavService) private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe( res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }

}
