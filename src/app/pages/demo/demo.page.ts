import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {
  showPassword = false;
  passwordToggleIcon = "eye"

  constructor(
    public toastController: ToastController,
    public loadingCtrl: LoadingController,

  ) { }

  ngOnInit() {
  
  }
}
