import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BoasVindasPage} from './../boas-vindas/boas-vindas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //altura: number;
 // peso: number;
 // imcValor: number;
  nome: string;
  nome_usuario : string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

//Calculo IMC
  pegaNome(){

    if (this.nome) {
       this.nome_usuario = this.nome
      this.setBoasVindasMessage();
    console.log(this.nome);
    console.log((this.nome).length);
    }

  }

  public setBoasVindasMessage(){
    this.nome_usuario
    this.navCtrl.push(BoasVindasPage,{
      nome_usuario:this.nome
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
