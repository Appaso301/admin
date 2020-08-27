import { Component, OnInit, Inject } from '@angular/core';
import { onSideNavChange, animateText } from '../../animations/animations';
import { SidenavService } from '../../services/sidenav.service';


interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
    {name: 'Home', link:'/promotionStatus', icon: 'home'},
    {name: 'Ride', link:'some-link', icon: 'star'},
    {name: 'Visit', link:'some-link', icon: 'send'},
    {name:'All Business',link:'some-link',icon:''}
  ]

  constructor(@Inject(SidenavService) private _sidenavService: SidenavService) { }

  ngOnInit() {
    this.onSinenavToggle();
  }


  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
    
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}