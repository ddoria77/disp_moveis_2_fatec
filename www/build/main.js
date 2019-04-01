webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoasVindasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration_ngx__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BoasVindasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BoasVindasPage = (function () {
    function BoasVindasPage(navCtrl, navParams, vibration, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vibration = vibration;
        this.alert = alert;
        this.guardaTente = [];
        this.nome_usuario = navParams.get('nome_usuario');
        this.count = 0;
    }
    BoasVindasPage.prototype.sorteio = function () {
        this.num_sorteado = Math.floor(Math.random() * 10000) + 1;
        //this.num_sorteado = 7777;
        this.inputNumero = true;
    };
    BoasVindasPage.prototype.tentativa = function () {
        if (this.tente) {
            var i = this.count++;
            this.tentativaMsg = "";
            this.guardaTente[i] = this.tente;
            console.log(this.num_sorteado + " sorteado");
            console.log(this.tente + " chute");
            console.log(i + " contador");
            console.log(this.guardaTente);
            if (i < 10) {
                if (this.tente > this.num_sorteado) {
                    this.menos = true;
                    this.mais = false;
                    this.tentativaMsg = "Tente um pouco pra baixo";
                    this.tente = "";
                }
                else if (this.tente < this.num_sorteado) {
                    this.mais = true;
                    this.menos = false;
                    this.tentativaMsg = "Tente um pouco pra cima";
                    this.tente = "";
                }
                else if (this.tente == this.num_sorteado) {
                    this.igual = true;
                    this.mais = false;
                    this.menos = false;
                    this.inputNumero = false;
                    this.acabou = false;
                    //this.tentativaMsg = "Impressionante você acertou, você está roubando??";
                    this.tente = "";
                    i = 4;
                    this.acertou();
                    navigator.vibrate([1000, 500, 2000]);
                }
            }
            else {
                this.inputNumero = false;
                this.acabou = true;
                this.igual = false;
                this.mais = false;
                this.menos = false;
                i = 4;
                //this.tentativaMsg = "Acabaram suas chances, esperava mais de você"
                this.tente = "";
                this.errou();
            }
        }
        else { }
    };
    BoasVindasPage.prototype.tentarNovamente = function () {
        this.count = 0;
        this.i = 0;
        this.guardaTente = [];
        this.tente = "";
        this.igual = false;
        this.mais = false;
        this.menos = false;
        this.acabou = false;
        this.inputNumero = true;
        this.num_sorteado = 7777;
        this.sorteio();
    };
    BoasVindasPage.prototype.limparTentativa = function () {
        this.tente = "";
    };
    BoasVindasPage.prototype.limparUserList = function () {
        this.guardaTente = [];
        var i = 0;
        this.count = 0;
        this.igual = false;
        this.mais = false;
        this.menos = false;
        this.acabou = false;
    };
    BoasVindasPage.prototype.acertou = function () {
        var alert1 = this.alert.create({
            title: 'Inacreditável',
            message: 'não achei que você fosse capaz de vencer Zolthar',
            buttons: ['ok']
        });
        alert1.present();
    };
    BoasVindasPage.prototype.errou = function () {
        var alert = this.alert.create({
            title: 'MuaHAHAHAHA',
            message: 'Zolthar esperava mais de você, tente outra vez, o Número era ' + this.num_sorteado,
            buttons: ['ok']
        });
        alert.present();
    };
    BoasVindasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BoasVindasPage');
    };
    BoasVindasPage.prototype.vibra = function () {
        this.vibration.vibrate([2000, 1000, 2000]);
    };
    BoasVindasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-boas-vindas',template:/*ion-inline-start:"D:\OneDrive - Fatec Centro Paula Souza\Dev\DevWebServer\fatec\6s\E1\ex1\z\zt\src\pages\boas-vindas\boas-vindas.html"*/`<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Desafie Zolthar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding class="getstart bg-style">\n  <div id="box-texto">\n  <h1 class="texto"><b>{{nome_usuario}}!!!</b></h1>\n  <h2 class="texto">Então você quer desafiar Zolthar...</h2>\n  <h4 class="texto">Que comecem os jogos</h4>\n  </div>\n\n<div padding>\n  <button block ion-button (click)="sorteio()" color="light" border-radius ="15" min-width="70" id="btn">Sorteio</button>\n</div>\n\n<div padding>\n  <ion-card *ngIf="num_sorteado">\n    <ion-card-header>\n      <h1>Dê seu palpite</h1>\n    </ion-card-header>\n    <ion-card-content >\n        <div padding *ngIf="inputNumero">\n          <h3>Você tem até 10 tentativas</h3>\n          <ion-item>\n            <ion-input type="number" [(ngModel)]="tente" required></ion-input>\n          </ion-item>\n           <div id="box-btn1">\n             <button block ion-button (click)="tentativa()" color="dark" expand="block" shape="round" class="btn-todos">chute</button>\n             <button block ion-button (click)="tentarNovamente()" color="dark" expand="block" shape="round" class="btn-todos">cancelar partida</button>\n           </div>\n           <div id="box-btn2">\n             <button block ion-button (click)="limparTentativa()" color="dark" expand="block" shape="round" class="btn-todos">apagar número</button>\n           <button block ion-button (click)="limparUserList()" color="dark" expand="block" shape="round" class="btn-todos">limpar lista</button>\n          </div>\n\n          <ion-item *ngIf="count">\n          <p><strong >Tentativa de número {{this.count}}</strong></p>\n          </ion-item>\n        </div>\n\n        <div padding>\n            <ion-item *ngIf="mais">\n            <p><strong style="color:orangered">{{tentativaMsg}}</strong></p>\n            </ion-item>\n            <ion-item *ngIf="menos">\n            <p><strong style="color:blue">{{tentativaMsg}}</strong></p>\n            </ion-item>\n            <ion-item *ngIf="igual">\n            <p><strong style="color:green">{{tentativaMsg}}</strong></p>\n            <button block ion-button (click)="tentarNovamente()" color="light" border-radius ="15" min-width="70" id="btn-chute">Jogar Novamente</button>\n            </ion-item>\n            <ion-item *ngIf="acabou">\n            <p><strong style="color:red">{{tentativaMsg}}</strong></p>\n            <button block ion-button (click)="tentarNovamente()" color="light" border-radius ="15" min-width="70" id="btn-chute">Tentar Novamente</button>\n           </ion-item>\n        </div>\n    </ion-card-content>\n\n      <ion-card id="lista_user">\n          <ion-card-header>\n            <h1 style="color:white">Suas tentativas</h1>\n            </ion-card-header>\n            <ion-card-content>\n            <ion-item *ngFor="let tent of guardaTente" style="background-color:#4e2026">\n              <p style="color:white">Número escolhido:  {{tent}}</p>\n            </ion-item>\n            <ion-item *ngIf="end">\n              <p style="color:white;background-color:#4e2026;"><b>Número sorteado foi : {{this.num_sorteado}}</b></p>\n            </ion-item>\n            </ion-card-content>\n      </ion-card>\n\n    </ion-card>\n</div>\n\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-title style="text-align:right">2019.01</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n`/*ion-inline-end:"D:\OneDrive - Fatec Centro Paula Souza\Dev\DevWebServer\fatec\6s\E1\ex1\z\zt\src\pages\boas-vindas\boas-vindas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration_ngx__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], BoasVindasPage);
    return BoasVindasPage;
}());

//# sourceMappingURL=boas-vindas.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/boas-vindas/boas-vindas.module": [
		273,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boas_vindas_boas_vindas__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    //Calculo IMC
    HomePage.prototype.pegaNome = function () {
        if (this.nome) {
            this.nome_usuario = this.nome;
            this.setBoasVindasMessage();
            console.log(this.nome);
            console.log((this.nome).length);
        }
    };
    HomePage.prototype.setBoasVindasMessage = function () {
        this.nome_usuario;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__boas_vindas_boas_vindas__["a" /* BoasVindasPage */], {
            nome_usuario: this.nome
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\OneDrive - Fatec Centro Paula Souza\Dev\DevWebServer\fatec\6s\E1\ex1\z\zt\src\pages\home\home.html"*/`<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Desafie Zolthar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="getstart bg-style">\n  <div id="box-texto">\n  <h1 class="texto">Seja bem-vindo</h1>\n  <h2 class="texto">Aos domínios de Zolthar</h2>\n  <h4 class="texto">Diga-me seu nome</h4>\n  </div>\n\n  <ion-list>\n      <ion-item>\n        <ion-input type="string" [(ngModel)]="nome" required></ion-input>\n      </ion-item>\n\n    </ion-list>\n    <div padding>\n    <button block ion-button (click)="pegaNome()" color="light" border-radius ="15" min-width="70" id="btn">Diga</button>\n    </div>\n\n\n</ion-content>\n  <ion-footer>\n        <ion-toolbar>\n          <ion-title style="text-align:right">2019.01 </ion-title>\n        </ion-toolbar>\n      </ion-footer>\n`/*ion-inline-end:"D:\OneDrive - Fatec Centro Paula Souza\Dev\DevWebServer\fatec\6s\E1\ex1\z\zt\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_boas_vindas_boas_vindas__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_vibration_ngx__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_boas_vindas_boas_vindas__["a" /* BoasVindasPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/boas-vindas/boas-vindas.module#BoasVindasPageModule', name: 'BoasVindasPage', segment: 'boas-vindas', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_boas_vindas_boas_vindas__["a" /* BoasVindasPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_vibration_ngx__["a" /* Vibration */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\OneDrive - Fatec Centro Paula Souza\Dev\DevWebServer\fatec\6s\E1\ex1\z\zt\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"D:\OneDrive - Fatec Centro Paula Souza\Dev\DevWebServer\fatec\6s\E1\ex1\z\zt\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map