import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ingresos : any[] = [];
  imagenes : any[] = [];

  constructor() 
  {
    let options : any = { timeZone: 'America/Argentina/Buenos_Aires'};
    let fechaHora = new Date().toLocaleDateString('es-AR', options);
    let ingreso = {valor: 200000, fecha: fechaHora, mes: new Date().getMonth()+1}
    this.ingresos.push(ingreso); 
  }

  async funcion()
  {
    let algo:any = [];
      for (let i = 0; i < 3; i++) {
        const result = await Camera.getPhoto({
          source: CameraSource.Camera,
          quality: 100,
          resultType: CameraResultType.DataUrl,
        });
        algo.push(result);
    }
    this.imagenes = algo;
    console.log(algo);
  }

  swiperSlideChanged(e:any)
  {
    console.log("algo", e);
  }

}
