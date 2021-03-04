import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  currentTheme = 'theme-dark';
  get isDarkTheme (): boolean {
    return this.currentTheme === 'theme-dark'
  };
  isSidenavExpand: boolean = true

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, 
    @Inject(DOCUMENT) private document: Document, private renderer: Renderer2,
    private mediaQueryObserver: MediaObserver) {
    this.mobileQuery = media.matchMedia('(max-width: 992px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  
  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('theme') || 'theme-dark';
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);

    // flex layout
    this.mediaQueryObserver.media$.subscribe(data => console.log(data))
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  sidenavswitch () {
    this.isSidenavExpand = !this.isSidenavExpand
  }

  themeSwitch () {
    this.currentTheme = this.currentTheme === 'theme-dark' ? 'theme-light' : 'theme-dark';
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
    localStorage.setItem('theme', this.currentTheme)
  }
}
