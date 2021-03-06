import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { ISlimScrollOptions } from 'ngx-slimscroll';
import { AuthService } from '../services/auth/auth.service';

declare const $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  opts1: ISlimScrollOptions;
  menuSidebar = false;

  public url;
  public userProfile: any;
  public isLoading = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {
    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.url = event.url.split('/')[1];
        // console.log(this.url);
        if (this.url === 'inbox' || this.url === 'chats' || this.url === 'settings' || this.url === 'calls') {
          if ($('body').hasClass('mini-sidebar')) {
            $('body').removeClass('mini-sidebar');
            $('.subdrop + ul').slideDown();
          }
        }
      }
    });
  }

  ngAfterViewInit() {
    var h = $(window).height() - 124;
    $('.msg-list-scroll').height(h);
    $('.msg-sidebar .slimscroll-wrapper').height(h);

  }

  ngOnInit() {
    this.userProfile = localStorage.getItem('profile');
    console.log('HeaderComponent: user profile ==> ', JSON.parse(this.userProfile));

    this.opts1 = {
      barBackground: '#878787',
      gridBackground: 'transparent',
      barOpacity: '0.6',
      barBorderRadius: '6',
      barWidth: '7',
      gridWidth: '0',
      alwaysVisible: false
    };

    // console.log($(window).height());

    var h = $(window).height() - 124;
    $('.msg-list-scroll').height(h);
    $('.msg-sidebar .slimscroll-wrapper').height(h);

    $(window).resize(function () {
      var h = $(window).height() - 124;
      $('.msg-list-scroll').height(h);
      $('.msg-sidebar .slimscroll-wrapper').height(h);
    });
    $(document).on('click', '#toggle_btn', function () {
      if ($('body').hasClass('mini-sidebar')) {
        $('body').removeClass('mini-sidebar');
        $('.subdrop + ul').slideDown();

      } else {
        $('body').addClass('mini-sidebar');
        $('.subdrop + ul').slideUp();
      }
      return false;
    });
    $(document).on('mouseover', function (e) {
      e.stopPropagation();
      if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
        var targ = $(e.target).closest('.sidebar').length;
        if (targ) {
          $('body').addClass('expand-menu');
          $('.subdrop + ul').slideDown();
        } else {
          $('body').removeClass('expand-menu');
          $('.subdrop + ul').slideUp();
        }
      }
    });
    if ($(window).width() > 991) {
    }

    // this.getUserProfile();
  }

  getUserProfile() {
    this.authService.getUserProfile()
      .subscribe(res => {
        this.userProfile = res;
        this.isLoading = false;

        console.log(`HeaderController: ${this.userProfile}`);
      },
        error => {
          console.log(`HeaderController: Error ==> ${error}`);
        });
  }
  onLogout() {
    this.authService.logout();
    console.log(`onlogout success: `);
    this.router.navigate(['pages/login']);
  }

}
