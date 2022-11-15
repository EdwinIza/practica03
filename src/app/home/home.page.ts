import { Component } from '@angular/core';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  

  constructor(private nativeAudio: NativeAudio) { }

  ionViewWillenter(){
    this.nativeAudio.preloadSimple('num1','src\assets\sound\oso-efecto-de-sonido-grizzly-bear-sound-effect.mp3')
  }

  play1(){
    this.nativeAudio.play('num1')
  }

  ionViewWillend(){
    this.nativeAudio.unload('num1')
  }

 


}
