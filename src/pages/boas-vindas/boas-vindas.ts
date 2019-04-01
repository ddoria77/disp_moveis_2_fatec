import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the BoasVindasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boas-vindas',
  templateUrl: 'boas-vindas.html',
})
export class BoasVindasPage {
  nome_usuario:any;
  num_sorteado:number;
  tente:any;
  tentativaMsg:string;
  count:number;
  Data:any;
  i:number;
  guardaTente = [];
  menos:any;
  mais:any;
  igual:any;
  acabou:any;
  inputNumero:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration :Vibration ,public alert:AlertController) {
    this.nome_usuario = navParams.get('nome_usuario');
    this.count = 0;
  }

  sorteio(){
    this.num_sorteado = Math.floor(Math.random() * 10000) + 1
    //this.num_sorteado = 7777;
    this.inputNumero = true;
  }

  tentativa(){
    if (this.tente){
   var i = this.count++;
   this.tentativaMsg ="";

    this.guardaTente[i] = this.tente;

   console.log(this.num_sorteado+" sorteado")
    console.log(this.tente+" chute")
    console.log(i+" contador")
    console.log(this.guardaTente)

    if (i <10){
      if (this.tente > this.num_sorteado){
        this.menos= true;
        this.mais= false;
        this.tentativaMsg = "Tente um pouco pra baixo";
        this.tente ="";
      } else if(this.tente < this.num_sorteado){
       this.mais = true;
       this.menos= false;
        this.tentativaMsg = "Tente um pouco pra cima";
        this.tente ="";

      } else if(this.tente == this.num_sorteado){
       this.igual = true;
       this.mais= false;
       this.menos= false;
       this.inputNumero= false;
       this.acabou=false;
        //this.tentativaMsg = "Impressionante você acertou, você está roubando??";
        this.tente ="";
        i=4;
        this.acertou();
        navigator.vibrate([1000 , 500 , 2000]);
      }
    }else{
      this.inputNumero= false;
      this.acabou=true;
      this.igual = false;
       this.mais= false;
       this.menos= false;
       i=4;
      //this.tentativaMsg = "Acabaram suas chances, esperava mais de você"
      this.tente ="";
      this.errou();

    }

  }else{}
  }

  tentarNovamente(){
    this.count = 0;
    this.i=0;
    this.guardaTente = [];
    this.tente ="";
    this.igual = false;
    this.mais= false;
    this.menos= false;
    this.acabou= false;
    this.inputNumero= true;
    this.num_sorteado = 7777;
    this.sorteio();

  }

  limparTentativa(){
    this.tente =""
  }
  limparUserList(){
    this.guardaTente = [];
    var i = 0;
    this.count= 0;
    this.igual = false;
    this.mais= false;
    this.menos= false;
    this.acabou= false;
  }

  acertou()
  {
      let alert1=this.alert.create({
        title:'Inacreditável',
        message:'não achei que você fosse capaz de vencer Zolthar',
        buttons:['ok']
      })

      alert1.present();
  }

  errou(){
    let alert=this.alert.create({
      title:'MuaHAHAHAHA',
      message:'Zolthar esperava mais de você, tente outra vez, o Número era '+this.num_sorteado,
      buttons:['ok']
    })

    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoasVindasPage');
  }
  vibra(){
    this.vibration.vibrate([2000,1000,2000]);
}

}
