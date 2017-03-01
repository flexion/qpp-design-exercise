webpackJsonp([1,4],{

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(454);


/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get('api/users')
            .map(function (r) { return r.json(); });
    };
    UsersService.prototype.updateUser = function (user) {
        return this.http.put("api/users/" + user.id, JSON.stringify(user))
            .map(function (r) { return r.json(); });
    };
    UsersService.prototype.registerUser = function (registration) {
        return this.http.post('api/users', registration)
            .map(function (r) { return r.json(); });
    };
    UsersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], UsersService);
    return UsersService;
    var _a;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/users.service.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConnectionStatus; });
/* unused harmony export SurrogateFunction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EmployeeRole; });
var Connection = (function () {
    function Connection(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    Connection.prototype.roleName = function () {
        return EmployeeRole[this.role];
    };
    return Connection;
}());
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus[ConnectionStatus['Pending'] = 0] = 'Pending';
    ConnectionStatus[ConnectionStatus['Approved'] = 1] = 'Approved';
    ConnectionStatus[ConnectionStatus['Rejected'] = 2] = 'Rejected';
    ConnectionStatus[ConnectionStatus['Canceled'] = 3] = 'Canceled';
})(ConnectionStatus || (ConnectionStatus = {}));
var SurrogateFunction;
(function (SurrogateFunction) {
    SurrogateFunction[SurrogateFunction['EHR'] = 0] = 'EHR';
    SurrogateFunction[SurrogateFunction['PECOS'] = 1] = 'PECOS';
    SurrogateFunction[SurrogateFunction['NPPES'] = 2] = 'NPPES';
})(SurrogateFunction || (SurrogateFunction = {}));
var EmployeeRole;
(function (EmployeeRole) {
    EmployeeRole[EmployeeRole['- Choose Role -'] = 0] = '- Choose Role -';
    EmployeeRole[EmployeeRole['Authorized Official'] = 1] = 'Authorized Official';
    EmployeeRole[EmployeeRole['Surrogate'] = 2] = 'Surrogate';
})(EmployeeRole || (EmployeeRole = {}));
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/surrogate.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(values) {
        if (values === void 0) { values = {}; }
        this.connections = [];
        Object.assign(this, values);
    }
    return User;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/user.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PracticesService = (function () {
    //    practicesUrl: string = 'assets/data/practices.json';
    function PracticesService(http) {
        this.http = http;
        console.log('practices constructor');
    }
    PracticesService.prototype.getPractices = function () {
        return this.http.get('api/practices')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    // Base Provider Enrollment File
    PracticesService.prototype.searchNPI = function (npi) {
        this.http.get('https://data.cms.gov/resource/7b6b-dk5v.json?npi=1023041159');
        /*
         {
         "enrlmt_id": "O20031105000244",
         "npi": "1023041159",
         "org_name": "ASSOCIATION OF UNIVERSITY PHYSICIANS",
         "pecos_asct_cntl_id": "0446162697",
         "provider_type_cd": "12-70",
         "provider_type_desc": "PART B SUPPLIER - CLINIC/GROUP PRACTICE",
         "state_cd": "WA"
         }
         */
    };
    // reassignment sub-file
    // https://data.cms.gov/resource/94dn-q7c9.json
    PracticesService.prototype.savePractice = function (provider) {
    };
    PracticesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], PracticesService);
    return PracticesService;
    var _a;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/practices.service.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__practices_service__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_surrogate__ = __webpack_require__(249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConnectionsService = (function () {
    function ConnectionsService(usersService, practicesService, authentication, http) {
        var _this = this;
        this.usersService = usersService;
        this.practicesService = practicesService;
        this.authentication = authentication;
        this.http = http;
        authentication.currentUser.subscribe(function (user) { return _this.user = user; });
    }
    ConnectionsService.prototype.connectUser = function (provider, role) {
        var connection = new __WEBPACK_IMPORTED_MODULE_5__models_surrogate__["a" /* Connection */]();
        connection.role = role;
        connection.provider = provider;
        connection.status = __WEBPACK_IMPORTED_MODULE_5__models_surrogate__["b" /* ConnectionStatus */].Pending;
        (this.user.connections = this.user.connections || []).push(connection);
        this.authentication.update(this.user);
        return connection;
    };
    ConnectionsService.prototype.getUsers = function () {
        return this.http.get('/api/users')
            .map(function (r) { return r.json(); });
    };
    ConnectionsService.prototype.updateUser = function (user) {
        return this.http.put("/api/users/" + user.id, JSON.stringify(user))
            .map(function (r) { return r.json(); });
    };
    ConnectionsService.prototype.registerUser = function (registration) {
        return this.http.post('/api/users', registration)
            .map(function (r) { return r.json(); });
    };
    ConnectionsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__practices_service__["a" /* PracticesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__practices_service__["a" /* PracticesService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__authentication__["a" /* Authentication */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__authentication__["a" /* Authentication */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _d) || Object])
    ], ConnectionsService);
    return ConnectionsService;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/connections.service.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_surrogate__ = __webpack_require__(249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(auth) {
        this.auth = auth;
    }
    DashboardComponent.prototype.getRoleName = function (role) {
        return role ? __WEBPACK_IMPORTED_MODULE_2__models_surrogate__["c" /* EmployeeRole */][role] : '';
    };
    DashboardComponent.prototype.getConnectionStatus = function (status) {
        return status ? __WEBPACK_IMPORTED_MODULE_2__models_surrogate__["b" /* ConnectionStatus */][status] : 'Pending';
    };
    DashboardComponent.prototype.getLandings = function () {
        return DashboardComponent.landings;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        DashboardComponent.landings += 1;
        this.currentUser = this.auth.getUser();
    };
    DashboardComponent.landings = 0;
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(775),
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication__["a" /* Authentication */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication__["a" /* Authentication */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/dashboard.component.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var loggedIn = !!localStorage.getItem('currentUser');
        if (loggedIn) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/auth.guard.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authentication, router, route) {
        this.authentication = authentication;
        this.router = router;
        this.route = route;
        this.model = { 'email': 'user@presencehealth.org', 'password': 'password' };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'steps';
        //   this.returnUrl = (this.returnUrl == 'clear-profile') ? 'steps' : this.returnUrl;
        this.authentication.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authentication.login(this.model.email, this.model.password).subscribe(function (user) {
            _this.router.navigate([_this.returnUrl]);
        }, function (e) {
            _this.error = e;
            console.log('error', e);
        }, function () {
            console.log('complete?');
        });
        return null;
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            /*  selector: 'app-login', */
            template: __webpack_require__(776),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication__["a" /* Authentication */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication__["a" /* Authentication */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/login.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_practices_service__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_connections_service__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_surrogate__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_user__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PracticeComponent = (function () {
    function PracticeComponent(connectionsService, practicesService, authentication, router) {
        this.connectionsService = connectionsService;
        this.practicesService = practicesService;
        this.authentication = authentication;
        this.router = router;
        this.connected = false;
        this.roles = ['- Choose Role -', 'Authorized Official', 'Surrogate'];
        this.rolesEnum = __WEBPACK_IMPORTED_MODULE_3__models_surrogate__["c" /* EmployeeRole */];
        this.model = {
            status: 0,
            role: 0,
            npi: '',
        };
    }
    PracticeComponent.prototype.search = function () {
        var _this = this;
        console.log(this.model.query);
        this.practicesService.getPractices()
            .subscribe(function (providers) { return _this.providers = providers; });
    };
    PracticeComponent.prototype.connect = function (provider, type) {
        this.connected = true;
        console.log(this.model);
        this.connectionsService.connectUser(provider, type);
        this.router.navigate(['/dashboard']);
    };
    PracticeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authentication.currentUser.subscribe(function (user) {
            _this.user = user;
        });
    };
    __decorate([
        // Observable<Provider>;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* User */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* User */]) === 'function' && _a) || Object)
    ], PracticeComponent.prototype, "user", void 0);
    PracticeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-practice',
            template: __webpack_require__(777),
            styles: [__webpack_require__(732)],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_connections_service__["a" /* ConnectionsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_connections_service__["a" /* ConnectionsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_practices_service__["a" /* PracticesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_practices_service__["a" /* PracticesService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_authentication__["a" /* Authentication */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_authentication__["a" /* Authentication */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _e) || Object])
    ], PracticeComponent);
    return PracticeComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/practice.component.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClearProfileComponent = (function () {
    function ClearProfileComponent(authentication, router) {
        this.authentication = authentication;
        this.router = router;
    }
    ClearProfileComponent.prototype.ngOnInit = function () {
        this.authentication.reset();
        //    this.authentication.logout();
    };
    ClearProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clear-profile',
            template: "<section class=\"usa-grid usa-section\">\n    <h2>User data cleared</h2>\n    <p><a class=\"usa-button\" routerLink=\"/login\">Login</a></p>\n    </section>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication__["a" /* Authentication */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication__["a" /* Authentication */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], ClearProfileComponent);
    return ClearProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/clear-profile.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(usersService, authentication, router) {
        this.usersService = usersService;
        this.authentication = authentication;
        this.router = router;
    }
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        // if submitting profile for the first time, redirect back to the steps page.
        if (this.user.step === 'profile') {
            this.user.step = 'connect';
            this.redirect = '/steps';
        }
        else {
            this.redirect = '/dashboard';
        }
        this.usersService.updateUser(this.user)
            .subscribe(function () {
            console.log('success');
            // this.router.navigate(['/dashboard']);
            _this.router.navigate([_this.redirect]);
        }, function (e) { return _this.error = 'Error updating'; });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authentication.currentUser.subscribe(function (user) {
            _this.user = user;
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]) === 'function' && _a) || Object)
    ], ProfileComponent.prototype, "user", void 0);
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(778),
            styles: [__webpack_require__(733)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication__["a" /* Authentication */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_authentication__["a" /* Authentication */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/profile.component.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_registration__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = (function () {
    function RegistrationComponent(usersService, authentication, router) {
        this.usersService = usersService;
        this.authentication = authentication;
        this.router = router;
        this.registration = new __WEBPACK_IMPORTED_MODULE_2__models_registration__["a" /* Registration */]();
    }
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        this.usersService.registerUser(this.registration).subscribe(function () {
            // login on successful registration
            _this.authentication.login(_this.registration.email, _this.registration.password)
                .subscribe(function () { return _this.router.navigate(['/profile']); });
        }, function (e) {
            _this.error = e;
            console.log('error', e);
        });
    };
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(779),
            styles: [__webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication__["a" /* Authentication */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_authentication__["a" /* Authentication */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], RegistrationComponent);
    return RegistrationComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/registration.component.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StepsComponent = (function () {
    function StepsComponent(auth) {
        this.auth = auth;
    }
    StepsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    };
    StepsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-steps',
            template: __webpack_require__(780),
            styles: [__webpack_require__(735)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication__["a" /* Authentication */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication__["a" /* Authentication */]) === 'function' && _a) || Object])
    ], StepsComponent);
    return StepsComponent;
    var _a;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/steps.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    baseUrl: '/'
};
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/environment.js.map

/***/ }),

/***/ 453:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 453;


/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(575);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/main.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_users_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Authentication; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Authentication = (function () {
    function Authentication(http, usersService) {
        this.http = http;
        this.usersService = usersService;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](null);
        this.currentUser.subscribe(function (user) { return console.log('updating user', user); });
        this.currentUser.next(JSON.parse(localStorage.getItem('currentUser')));
    }
    Authentication.prototype.getUser = function () {
        return this.currentUser.asObservable();
    };
    Authentication.prototype.update = function (data) {
        var updated = Object.assign({}, this.currentUser.getValue(), data);
        localStorage.setItem('currentUser', JSON.stringify(updated));
        this.currentUser.next(updated);
    };
    Authentication.prototype.reset = function () {
        var _this = this;
        // todo: we should be clearing local storage, not assigning blank data to local storage
        var old = this.currentUser.getValue();
        var cleared = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]({ id: old.id, email: old.email, step: old.step });
        //        this.currentUser.next(cleared);
        this.usersService.updateUser(cleared).subscribe(function (user) {
            _this.currentUser.next(user);
        });
    };
    Authentication.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post('api/authenticate', { email: email, password: password })
            .map(function (r) {
            var user = r.json();
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUser.next(user);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(user);
            }
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw('Authentication error'); });
    };
    Authentication.prototype.logout = function () {
        this.currentUser.next(null);
        localStorage.removeItem('currentUser');
    };
    Authentication = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_users_service__["a" /* UsersService */]) === 'function' && _b) || Object])
    ], Authentication);
    return Authentication;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/authentication.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registration; });
var Registration = (function () {
    function Registration() {
    }
    return Registration;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/registration.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http_testing__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http_testing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http_testing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_data_users__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_data_practices__ = __webpack_require__(577);
/* unused harmony export fakeBackendFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fakeBackendProvider; });




/**
 * lifted from https://github.com/cornflourblue/angular2-registration-login-example/blob/master/app/_helpers/fake-backend.ts
 */
function fakeBackendFactory(backend, options) {
    // array in local storage for registered users
    var users = JSON.parse(localStorage.getItem('users'));
    console.log('users from localstorage:', users);
    if (!users) {
        users = __WEBPACK_IMPORTED_MODULE_2__assets_data_users__["a" /* DATA_USERS */];
        console.log('users set in localstorage', users);
        localStorage.setItem('users', JSON.stringify(users));
    }
    var practices = JSON.parse(localStorage.getItem('practices'));
    console.log('practices from localStorage:', practices);
    if (!practices) {
        practices = __WEBPACK_IMPORTED_MODULE_3__assets_data_practices__["a" /* DATA_PRACTICES */];
        localStorage.setItem('practices', JSON.stringify(practices));
    }
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        // wrap in timeout to simulate server api call
        var url = connection.request.url;
        var methodName = __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"][connection.request.method];
        var method = connection.request.method;
        console.log(methodName + ": " + url, connection.request.getBody());
        function hasToken() {
            //                return connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token';
            return true;
        }
        function respondUnauthorized() {
            console.log('unauthorized');
            connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 401 })));
        }
        setTimeout(function () {
            // authenticate
            if (url.endsWith('api/authenticate') && method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Post) {
                // get parameters from post request
                var params_1 = JSON.parse(connection.request.getBody());
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.email === params_1.email && user.password === params_1.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    console.log('successful auth');
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({
                        status: 200,
                        body: Object.assign(user, { token: 'fake-jwt-token' })
                    })));
                    return;
                }
                else {
                    // else return 400 bad request
                    connection.mockError(new Error('Username or password is incorrect'));
                    return;
                }
            }
            // get practices
            if (url.endsWith('api/practices') && method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get) {
                if (hasToken()) {
                    console.log(practices);
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200, body: practices })));
                    return;
                }
                else {
                    respondUnauthorized();
                    return;
                }
            }
            // get users
            if (url.endsWith('api/users') && method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get) {
                if (hasToken()) {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200, body: users })));
                    return;
                }
                else {
                    respondUnauthorized();
                    return;
                }
            }
            // get user by id
            if (url.match(/api\/users\/\d+$/)) {
                if (hasToken()) {
                    // find user by id in users array
                    var urlParts = url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1], 10);
                    var matchedUsers = users.filter(function (user) {
                        return user.id === id_1;
                    });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    if (!user) {
                        connection.mockError(new Error('Not found'));
                        return;
                    }
                    if (method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Get) {
                        // respond 200 OK with user
                        connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200, body: user })));
                        return;
                    }
                    if (method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Put) {
                        //                        Object.assign(user, JSON.parse(connection.request.getBody()));
                        user = JSON.parse(connection.request.getBody());
                        localStorage.setItem('users', JSON.stringify(users));
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200, body: user })));
                        return;
                    }
                    if (method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Delete) {
                        users.splice(users.indexOf(user), 1);
                        localStorage.setItem('users', JSON.stringify(users));
                        connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200 })));
                        return;
                    }
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    respondUnauthorized();
                    return;
                }
            }
            // create user
            if (url.endsWith('api/users') && method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["RequestMethod"].Post) {
                // get new user object from post body
                var newUser_1 = JSON.parse(connection.request.getBody());
                // validation
                var duplicateUser = users.filter(function (user) {
                    return user.email === newUser_1.email;
                }).length;
                if (duplicateUser) {
                    return connection.mockError(new Error('Email "' + newUser_1.email + '" is already taken'));
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["ResponseOptions"]({ status: 200 })));
                return;
            }
        }, 500);
    });
    return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"](backend, options);
}
var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"],
    useFactory: fakeBackendFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http_testing__["MockBackend"], __WEBPACK_IMPORTED_MODULE_0__angular_http__["BaseRequestOptions"]]
};
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/fake-backend.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_clear_profile_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guard_auth_guard__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__steps_steps_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__practice_practice_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'clear-profile', component: __WEBPACK_IMPORTED_MODULE_4__profile_clear_profile_component__["a" /* ClearProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'steps', component: __WEBPACK_IMPORTED_MODULE_7__steps_steps_component__["a" /* StepsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'practice', component: __WEBPACK_IMPORTED_MODULE_8__practice_practice_component__["a" /* PracticeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '*', redirectTo: 'login' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/app-routing.module.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authentication, router) {
        this.authentication = authentication;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authentication.getUser();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(774),
            styles: [__webpack_require__(737)]
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication__["a" /* Authentication */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication__["a" /* Authentication */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/app.component.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http_testing__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http_testing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_http_testing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__usa_offical_usa_offical_component__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__registration_registration_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_clear_profile_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authentication__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guard_auth_guard__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__steps_steps_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__practice_practice_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_practices_service__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_fake_backend__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_users_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_connections_service__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_routing_module__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__environments_environment__ = __webpack_require__(376);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__usa_offical_usa_offical_component__["a" /* UsaOfficalComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__profile_clear_profile_component__["a" /* ClearProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__steps_steps_component__["a" /* StepsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__practice_practice_component__["a" /* PracticeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_20__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_authentication__["a" /* Authentication */],
                __WEBPACK_IMPORTED_MODULE_18__services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_19__services_connections_service__["a" /* ConnectionsService */],
                __WEBPACK_IMPORTED_MODULE_16__services_practices_service__["a" /* PracticesService */],
                __WEBPACK_IMPORTED_MODULE_12__guard_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_16__services_practices_service__["a" /* PracticesService */],
                __WEBPACK_IMPORTED_MODULE_17__services_fake_backend__["a" /* fakeBackendProvider */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http_testing__["MockBackend"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["BaseRequestOptions"],
                { provide: __WEBPACK_IMPORTED_MODULE_21__angular_common__["a" /* APP_BASE_HREF */], useValue: __WEBPACK_IMPORTED_MODULE_22__environments_environment__["a" /* environment */].baseUrl }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/app.module.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsaOfficalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsaOfficalComponent = (function () {
    function UsaOfficalComponent() {
    }
    UsaOfficalComponent.prototype.ngOnInit = function () {
    };
    UsaOfficalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usa-offical',
            template: __webpack_require__(781),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [])
    ], UsaOfficalComponent);
    return UsaOfficalComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/usa-offical.component.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATA_PRACTICES; });
var DATA_PRACTICES = [
    {
        'id': 20,
        'name': 'Advocate Bethany Hospital',
        'npi': '32234234'
    },
    {
        'id': 22,
        'name': 'Generations at Elmwood Park',
        'npi': '12341234'
    },
    {
        'id': 20,
        'name': 'Kindred Hospital - Sycamore',
        'npi': '32234234'
    },
    {
        'id': 19,
        'name': 'Presence Holy Family Medical Center',
        'npi': '32234234'
    },
    {
        'id': 23,
        'name': 'Presence Resurection Medical Center',
        'npi': '435252323'
    },
    {
        'id': 24,
        'name': 'Presence Saint Francis Hospital',
        'npi': '23423423'
    },
    {
        'id': 25,
        'name': 'Presence Saint Joseph Hospital - Chicago',
        'npi': '4352524'
    },
    {
        'id': 26,
        'name': 'Presence Saints Mary and Elizabeth Medical Center - Saint Elizabeth Campus',
        'npi': '23425523'
    },
    {
        'id': 27,
        'name': 'Presence Saints Mary and Elizabeth Medical Center - Saint Mary Campus',
        'npi': '234261613'
    },
    {
        'id': 21,
        'name': 'RML Speciality Hospital',
        'npi': '12304182'
    }
];
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/practices.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATA_USERS; });
var DATA_USERS = [
    {
        'id': 1,
        'email': 'user@presencehealth.org',
        'password': 'password',
        'title': '',
        'first_name': '',
        'middle_name': '',
        'last_name': '',
        'suffix': '',
        'company_name': '',
        'company_title': '',
        'address': '',
        'city': '',
        'state': '',
        'zip': '',
        'step': 'profile',
        'connections': [
            {
                'role': '1',
                'provider': {
                    'id': 19,
                    'name': 'Presence Holy Family Medical Center',
                    'npi': '32234234'
                },
                'status': 1
            }
        ]
    },
    {
        'id': 2,
        'email': 'debra@test.com',
        'password': 'test',
        'first_name': 'Debra',
        'last_name': 'Tester',
        'company_name': 'Test Company',
        'title': '',
        'address': '1222 E Washington Ave.',
        'city': 'Madison',
        'state': 'WI',
        'zip': '55104',
        'company_title': 'Director of Case Management',
        'birth_month': 5,
        'birth_day': 5,
        'birth_year': 1981,
        'step': 'connect'
    },
    {
        'id': 1,
        'email': 'debra@test.com',
        'password': 'test',
        'first_name': 'Debra',
        'last_name': 'Tester',
        'company_name': 'Test Company',
        'title': '',
        'address': '1222 E Washington Ave.',
        'city': 'Madison',
        'state': 'WI',
        'zip': '55104',
        'token': 'fake-jwt-token',
        'company_title': 'Director of Case Management',
        'birth_month': 5,
        'birth_day': 5,
        'birth_year': 1981,
        'step': 'dashboard',
        'connections': [
            {
                'role': '1',
                'provider': {
                    'id': 19,
                    'name': 'practice 1',
                    'npi': '32234234234'
                },
                'status': 0
            }
        ]
    }
];
//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/users.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1096);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/xampp/htdocs/apps/qpp4/src/polyfills.js.map

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<app-usa-offical></app-usa-offical>\r\n<header class=\"usa-header usa-header-extended\" role=\"banner\">\r\n\r\n  <div class=\"usa-navbar\">\r\n    <button class=\"usa-menu-btn\">Menu</button>\r\n    <div class=\"usa-logo\" id=\"logo\">\r\n      <em class=\"usa-logo-text\"><a href=\"#\" accesskey=\"1\" title=\"Home\" aria-label=\"Home\">Quality Payment Program</a></em>\r\n    </div>\r\n  </div>\r\n  <nav role=\"navigation\" class=\"usa-nav\">\r\n    <div class=\"usa-nav-inner\">\r\n      <button class=\"usa-nav-close\">\r\n        <img src=\"assets/img/close.svg\" alt=\"close\">\r\n      </button>\r\n      <ul *ngIf=\"(currentUser|async)\" class=\"usa-nav-primary usa-accordion\">\r\n        <li>\r\n          <a class=\"usa-nav-link\" routerLink=\"/dashboard\">\r\n            <span>Dashboard</span>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a class=\"usa-nav-link\" routerLink=\"/clear-profile\">\r\n            <span>Clear Profile</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"usa-nav-secondary\">\r\n        <form class=\"usa-search usa-search-small js-search-form\">\r\n          <div role=\"search\">\r\n            <label class=\"usa-sr-only\" for=\"search-field-small\">Search small</label>\r\n            <input id=\"search-field-small\" type=\"search\" name=\"search\">\r\n            <button type=\"submit\">\r\n              <span class=\"usa-sr-only\">Search</span>\r\n            </button>\r\n          </div>\r\n        </form>\r\n        <ul class=\"usa-unstyled-list usa-nav-secondary-links\">\r\n          <li class=\"js-search-button-container\">\r\n            <button class=\"usa-header-search-button js-search-button\">Search</button>\r\n          </li>\r\n          <li>\r\n            <a *ngIf=\"(currentUser|async)\" routerLink=\"/profile\">Logged in as {{(currentUser|async).email}}</a>\r\n            <a *ngIf=\"!(currentUser|async)\" routerLink=\"/login\">Login</a>\r\n          </li>\r\n          <li *ngIf=\"currentUser|async\"><a routerLink=\"/login\">Log Out</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n\r\n<div class=\"usa-overlay\"></div>\r\n<main id=\"main-content\" role=\"main\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n"

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "<section class=\"usa-grid usa-section\">\r\n  <div class=\"usa-width-one-third\">\r\n    <div class=\"usa-hero-callout usa-section-dark\">\r\n      <h2>{{(currentUser|async).first_name}} {{(currentUser|async).last_name}}</h2>\r\n      <p>{{(currentUser|async).company_name}}<br/>{{(currentUser|async).company_title}}</p>\r\n      <hr/>\r\n      <p>{{(currentUser|async).address}}<br/>{{(currentUser|async).city}}, {{(currentUser|async).state}} {{(currentUser|async).zip}}</p>\r\n      <button>Change Password</button>\r\n      <button routerLink=\"/profile\">Edit Profile</button>\r\n      <button><a class=\"usa-color-text-white text-decoration-none\" [routerLink]=\"['/dashboard']\" fragment=\"your-connections\">Manage Connections</a></button>\r\n      <button><a class=\"usa-color-text-white text-decoration-none\" [routerLink]=\"['/dashboard']\" fragment=\"your-connections\">Manage Users</a></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"usa-width-two-thirds\">\r\n    <div class=\"usa-alert usa-alert-success\" *ngIf=\"(currentUser|async).connections != 0\" role=\"alertdialog\">\r\n      <div class=\"usa-alert-body\">\r\n        <h3 class=\"usa-alert-heading\">Your Connection Request is in process.</h3>\r\n        <p class=\"usa-alert-text\">Requests must be approved by the practice. This usually takes 1-3 business days.</p>\r\n        <p class=\"usa-alert-text\">You can view the status of your <a [routerLink]=\"['/dashboard']\" fragment=\"your-connections\">connections</a> below or  <a [routerLink]=\"['/practice']\">search and connect</a> to additional practices.</p>\r\n      </div>\r\n    </div>\r\n\r\n    <h2>Welcome, {{(currentUser|async).first_name}}</h2>\r\n    <!-- only show this on first access -->\r\n    <!--\r\n    <div *ngIf=\"(currentUser|async).dashboard_landings < 2\">\r\n    -->\r\n    <div *ngIf=\"getLandings() < 2\">\r\n      <p>Thanks for joining the Quality Payment Program community!</p>\r\n      <p>Congratulations on completing your profile and connecting to a medical practice! You're well on your way to successfully using the Quality Payment Program system. We're glad to have you working with us in the quest to provide better care and smarter spending for a healthier America.</p>\r\n    </div>\r\n    <!-- end only show this on first access -->\r\n\r\n    <p>Be sure to check out our <a href=\"#\">Help & Frequently Asked Questions</a> section to learn about the features and programs which will help you get the most out of your QPP experience.</p>\r\n\r\n    <h2>Your Dashboard</h2>\r\n\r\n    <h3 id=\"your-connections\">Connections</h3>\r\n    <p>Need to check on the status of your request to connect to a medical practice? Look no further. Check below to see successfully connected practices and those you're still awaiting confirmation from.</p>\r\n    <table class=\"usa-table-borderless\">\r\n      <thead>\r\n      <tr>\r\n        <th scope=\"col\">Practice</th>\r\n        <th scope=\"col\">NPI</th>\r\n        <th scope=\"col\">Your Role</th>\r\n        <th scope=\"col\">Status</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let connection of (currentUser|async).connections\">\r\n        <ng-container *ngIf=\"connection.provider\">\r\n          <th scope=\"row\">{{connection.provider.name}}</th>\r\n          <td>{{connection.provider.npi}}</td>\r\n          <td>{{getRoleName(connection.role)}}</td>\r\n          <td><span class=\"usa-color-text\"\r\n                    [ngClass]=\"{'usa-color-text-green': connection.status === 1,\r\n                    'usa-color-text-primary': connection.status != 1}\">\r\n            {{getConnectionStatus(connection.status)}}</span>\r\n        </td>\r\n        </ng-container>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n    <a class=\"usa-button\" routerLink=\"/practice\">Request To Connect To Practice</a>\r\n    <hr/>\r\n\r\n    <h3 id=\"your-users\">Users</h3>\r\n    <div class=\"usa-alert usa-alert-warning\">\r\n      <div class=\"usa-alert-body\">\r\n        <h3 class=\"usa-alert-heading\">Notice</h3>\r\n        <p class=\"usa-alert-text\">This section is a visual representation of future functionality and is for demonstration purposes only. User management functionality is not yet built and is not part of the acceptance criteria for the current sprint.</p>\r\n      </div>\r\n    </div>\r\n    <p>Need to manage users that can act as a surrogate on behalf of you and the medical practice you manage quality submissions for? Look under Connections to see requests that you can approve or deny. If you need to revoke a user's access, you can also do that from this Dashboard.</p>\r\n    <table class=\"usa-table-borderless\">\r\n      <thead>\r\n      <tr>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Practice</th>\r\n        <th scope=\"col\">Type</th>\r\n        <th scope=\"col\">Status</th>\r\n        <th scope=\"col\">Action</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr>\r\n        <td scope=\"row\">Sue Nelson</td>\r\n        <!-- Maybe set the practice to a practice name that is already connected to the user -->\r\n        <td>Presence Saint Francis Hospital</td>\r\n        <td>Surrogate</td>\r\n        <td><span class=\"usa-color-text usa-color-text-green\">Approved</span></td>\r\n        <td>\r\n          <a href=\"\">Revoke Access</a>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td scope=\"row\">John Jones</td>\r\n        <td>Presence Saint Francis Hospital</td>\r\n        <td>Authorized Official</td>\r\n        <td><span class=\"usa-color-text usa-color-text-primary\">Pending</span></td>\r\n        <td>\r\n          <div class=\"button_wrapper\">\r\n            <button>Approve</button>\r\n            <button class=\"usa-button-secondary\">Deny</button>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "<section class=\"usa-hero\">\r\n  <div class=\"usa-grid\">\r\n    <div class=\"usa-section\">\r\n      <div class=\"usa-width-one-third\">\r\n        <div class=\"usa-hero-callout usa-section-dark\">\r\n          <form (ngSubmit)=\"f.form.valid && login()\" ngForm #f=\"ngForm\" class=\"usa-form\">\r\n            <fieldset>\r\n              <legend class=\"usa-drop_text\">Sign in</legend>\r\n              <span>or <a routerLink=\"/register\">create an account</a></span>\r\n\r\n              <div *ngIf=error class=\"usa-alert usa-alert-error\" role=\"alert\">\r\n                <div class=\"usa-alert-body\">\r\n                  <h3 class=\"usa-alert-heading usa-color-text-secondary-dark\">Error</h3>\r\n                  <p class=\"usa-alert-text usa-color-text-secondary-dark\">{{error}}, please make sure your email address and password are entered correct</p>\r\n                </div>\r\n              </div>\r\n\r\n              <label for=\"email\">Email address</label>\r\n              <input id=\"email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" type=\"text\" autocapitalize=\"off\" autocorrect=\"off\">\r\n\r\n              <label for=\"password\">Password</label>\r\n              <input id=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" type=\"password\">\r\n              <p class=\"usa-form-note\">\r\n                <a title=\"Show password\" href=\"javascript:void(0);\"\r\n                   class=\"usa-show_password\"\r\n                   aria-controls=\"password\">\r\n                  Show password</a>\r\n              </p>\r\n\r\n              <input type=\"submit\" value=\"Sign in\"/>\r\n              <p><a href=\"javascript:void(0);\" title=\"Forgot email\">\r\n                Forgot email?</a></p>\r\n              <p><a href=\"javascript:void(0);\" title=\"Forgot password\">\r\n                Forgot password?</a></p>\r\n            </fieldset>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"usa-width-two-thirds usa-color-text-white margin-top-1 margin-top-tab-6\">\r\n        <h1>Quality Payment Program</h1>\r\n        <h2>Helping you focus on care quality and the one thing that matters most - <br />making patients healthier.</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "<section class=\"usa-grid usa-section\">\r\n  <!-- Show message if connected to practice -->\r\n  <h2>Connect to practice</h2>\r\n  <p>Enter the name or NPI of the practice you would like to connect to and click \"search\"</p>\r\n  <p>Don't see the practice you're searching for? <a href=\"#\">Contact Practice Registrar</a> or call 1-800-NNN-NNNN for\r\n    assistance.</p>\r\n  <div class=\"usa-alert usa-alert-info\">\r\n    <div class=\"usa-alert-body\">\r\n      <p class=\"usa-alert-text\">Your request will be in a \"pending\" state until it is approved by the practice.</p>\r\n      <p class=\"usa-alert-text\">This usually takes 1-3 business days. If you don't want to connect right now, <a\r\n              [routerLink]=\"['/dashboard']\">visit your dashboard</a>.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"usa-grid margin-top-1\">\r\n    <h6>Practice name or NPI</h6>\r\n    <div class=\"usa-width-one-half\">\r\n      <form class=\"usa-search usa-search-big\">\r\n        <div role=\"search\">\r\n          <label class=\"usa-sr-only\" for=\"search-field-big\">practice name or NPI</label>\r\n          <input id=\"search-field-big\" type=\"search\" name=\"search\" [(ngModel)]=\"model.query\">\r\n          <button type=\"submit\" (click)=\"search()\">\r\n            <span class=\"usa-search-submit-text\">Search</span>\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"usa-alert usa-alert-success\" *ngIf=\"connected\">\r\n    <div class=\"usa-alert-body\">\r\n      <h3 class=\"usa-alert-heading\">Your Connection Request in in process.</h3>\r\n      <p class=\"usa-alert-text\">All requests must be approved by the practice. This usually takes 1-3 business days.</p>\r\n      <p class=\"usa-alert-text\">In the meantime, you can request to connect to any additional practices you need access\r\n        to, or return to the <a [routerLink]=\"['/dashboard']\">dashboard</a>.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <table class=\"usa-table-borderless\">\r\n    <thead>\r\n    <tr>\r\n      <th scope=\"col\">Practice</th>\r\n      <th scope=\"col\">NPI</th>\r\n      <th scope=\"col\">Your Role</th>\r\n      <th scope=\"col\">Connect</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody *ngFor=\"let provider of providers\">\r\n    <tr ngForm=\"connectForm\" #connectForm=\"ngForm\">\r\n      <th scope=\"row\" class=\"max-width-250\">{{provider.name}}</th>\r\n      <td>{{provider.npi}}</td>\r\n      <td>\r\n        <select name=\"user-roles\" id=\"user-role\" [(ngModel)]=\"model.role\">\r\n          <option *ngFor=\"let role of roles\" [value]=\"rolesEnum[role]\">{{role}}</option>\r\n        </select>\r\n      </td>\r\n\r\n      <td>\r\n        <button (click)=\"connect(provider, model.role)\" *ngIf=\"model.role\">Request to Connect</button>\r\n        <span *ngIf=\"!model.role\" class=\"usa-color-text-secondary-dark\">Select Role</span>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</section>\r\n"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "<section class=\"usa-grid usa-section\">\r\n  <h2>Create Profile</h2>\r\n  <p>Fill in the form below to create your profile.</p>\r\n  <p>We respect your privacy and will never sell your personal information. View the <a href=\"https://qpp.cms.gov/privacy\">CMS Privacy Notice</a> to learn more.\r\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"usa-width-one-half\">\r\n      <div class=\"usa-form\">\r\n        <fieldset>\r\n          <legend>Name</legend>\r\n\r\n          <label for=\"title\">Title</label>\r\n          <input class=\"usa-input-tiny\" id=\"title\" name=\"title\" type=\"text\" [(ngModel)]=\"user.title\">\r\n          <div class=\"usa-input\" [ngClass]=\"{'usa-input-error': name.invalid && name.touched}\">\r\n            <label for=\"first-name\" class=\"usa-input-required\">First name</label>\r\n            <span class=\"usa-input-error-message\" id=\"input-error-message\" role=\"alert\" [hidden]=\"name.valid || name.pristine\" >Field is required</span>\r\n            <input id=\"first-name\" name=\"first-name\" type=\"text\" aria-required=\"true\"\r\n                   [ngClass]=\"{'usa-input-success': name.valid}\"\r\n                   [(ngModel)]=\"user.first_name\" #name=\"ngModel\" required>\r\n          </div>\r\n\r\n          <div class=\"usa-input\">\r\n            <label for=\"middle-name\">Middle name</label>\r\n            <input id=\"middle-name\" name=\"middle-name\" type=\"text\" [(ngModel)]=\"user.middle_name\">\r\n          </div>\r\n\r\n          <div class=\"usa-input\" [ngClass]=\"{'usa-input-error': last_name.invalid && last_name.touched}\">\r\n            <label for=\"last-name\" class=\"usa-input-required\">Last name</label>\r\n            <span class=\"usa-input-error-message\" id=\"input-error-message\" role=\"alert\" [hidden]=\"last_name.valid || last_name.pristine\" >Field is required</span>\r\n            <input id=\"last-name\" name=\"last-name\" type=\"text\" aria-required=\"true\"\r\n                   [ngClass]=\"{'usa-input-success': last_name.valid}\"\r\n                   [(ngModel)]=\"user.last_name\" #last_name=\"ngModel\" required>\r\n          </div>\r\n\r\n          <div class=\"usa-input\">\r\n            <label for=\"suffix\">Suffix</label>\r\n            <input class=\"usa-input-tiny\" id=\"suffix\" name=\"suffix\" type=\"text\" [(ngModel)]=\"user.suffix\">\r\n          </div>\r\n        </fieldset>\r\n        <fieldset class=\"margin-top-2\">\r\n          <legend>Date of birth</legend>\r\n          <span class=\"usa-form-hint\" id=\"dobHint\" class=\"usa-input-required\">For example: 04 28 1986</span>\r\n\r\n          <div class=\"usa-date-of-birth\">\r\n            <span class=\"usa-input-error-message\" role=\"alert\" *ngIf=\"(day.invalid || year.invalid || month.invalid) && (month.touched && day.touched && year.touched)\" >Field is required</span>\r\n            <div class=\"usa-form-group usa-form-group-month\">\r\n              <label for=\"date_of_birth_1\">Month</label>\r\n              <input class=\"usa-input-inline\" aria-describedby=\"dobHint\" class=\"usa-form-control\" id=\"date_of_birth_1\"\r\n                     name=\"date_of_birth_1\" pattern=\"0?[1-9]|1[012]\" type=\"number\" min=\"1\" max=\"12\" value=\"\" placeholder=\"4\"\r\n                     [ngClass]=\"{'usa-input-success': month.valid}\"\r\n                     [(ngModel)]=\"user.birth_month\" #month=\"ngModel\" required>\r\n            </div>\r\n            <div class=\"usa-form-group usa-form-group-day\">\r\n              <label for=\"date_of_birth_2\">Day</label>\r\n              <input class=\"usa-input-inline\" aria-describedby=\"dobHint\" class=\"usa-form-control\" id=\"date_of_birth_2\"\r\n                     name=\"date_of_birth_2\" pattern=\"0?[1-9]|1[0-9]|2[0-9]|3[01]\" type=\"number\" min=\"1\" max=\"31\"\r\n                     [ngClass]=\"{'usa-input-success': day.valid}\"\r\n                     value=\"\" [(ngModel)]=\"user.birth_day\" placeholder=\"28\" #day=\"ngModel\" required>\r\n            </div>\r\n            <div class=\"usa-form-group usa-form-group-year\">\r\n              <label for=\"date_of_birth_3\">Year</label>\r\n              <input class=\"usa-input-inline\" aria-describedby=\"dobHint\" class=\"usa-form-control\" id=\"date_of_birth_3\"\r\n                     name=\"date_of_birth_3\" pattern=\"[0-9]{4}\" type=\"number\" min=\"1900\" max=\"2000\" placeholder=\"1984\" value=\"\"\r\n                     [ngClass]=\"{'usa-input-success': year.valid}\"\r\n                     [(ngModel)]=\"user.birth_year\" #year=\"ngModel\" required>\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"margin-top-2\">\r\n          <legend>Company</legend>\r\n          <div class=\"usa-input\" [ngClass]=\"{'usa-input-error': company.invalid && company.touched}\">\r\n            <label for=\"company\" class=\"usa-input-required\">Company</label>\r\n            <span class=\"usa-input-error-message\" role=\"alert\" [hidden]=\"company.valid || company.pristine\" >Field is required</span>\r\n            <input id=\"company\" name=\"company\" aria-required=\"true\" type=\"text\"\r\n                   [ngClass]=\"{'usa-input-success': company.valid}\"\r\n                   [(ngModel)]=\"user.company_name\" #company=\"ngModel\" required>\r\n          </div>\r\n\r\n          <div class=\"usa-input\" [ngClass]=\"{'usa-input-error': job_title.invalid && job_title.touched}\">\r\n            <label for=\"job-title\" class=\"usa-input-required\">Job title</label>\r\n            <span class=\"usa-input-error-message\" id=\"input-error-message\" role=\"alert\" [hidden]=\"job_title.valid || job_title.pristine\" >Field is required</span>\r\n            <input id=\"job-title\" name=\"job-title\" aria-required=\"true\" type=\"text\"\r\n                   [ngClass]=\"{'usa-input-success': job_title.valid}\"\r\n                   [(ngModel)]=\"user.company_title\" #job_title=\"ngModel\" required>\r\n          </div>\r\n\r\n        </fieldset>\r\n        <fieldset class=\"margin-top-2\">\r\n          <legend>Mailing address</legend>\r\n          <div class=\"usa-input\" [ngClass]=\"{'usa-input-error': address.invalid && address.touched}\">\r\n            <label for=\"mailing-address-1\" class=\"usa-input-required\">Street address 1</label>\r\n            <span class=\"usa-input-error-message\" role=\"alert\" [hidden]=\"address.valid || address.pristine\" >Field is required</span>\r\n            <input id=\"mailing-address-1\" name=\"mailing-address-1\" aria-required=\"true\" type=\"text\"\r\n                   [ngClass]=\"{'usa-input-success': address.valid}\"\r\n                   [(ngModel)]=\"user.address\" #address=\"ngModel\" required>\r\n          </div>\r\n\r\n          <div class=\"usa-input\">\r\n            <label for=\"mailing-address-2\">Street address 2</label>\r\n            <input id=\"mailing-address-2\" name=\"mailing-address-2\" type=\"text\" [(ngModel)]=\"user.address2\">\r\n          </div>\r\n\r\n          <div class=\"usa-input\" [ngClass]=\"{'usa-input-error': city.invalid && city.touched}\">\r\n            <label for=\"city\" class=\"usa-input-required\">City</label>\r\n            <span class=\"usa-input-error-message\" role=\"alert\" [hidden]=\"city.valid || city.pristine\" >Field is required</span>\r\n            <input id=\"city\" name=\"city\" type=\"text\" [(ngModel)]=\"user.city\"\r\n                   [ngClass]=\"{'usa-input-success': city.valid}\"\r\n                   aria-required=\"true\" #city=\"ngModel\" required>\r\n          </div>\r\n\r\n\r\n          <div class=\"usa-input\">\r\n            <label for=\"state\" class=\"usa-input-required\">State</label>\r\n            <select id=\"state\" name=\"state\" [(ngModel)]=\"user.state\" aria-required=\"true\"  required>\r\n              <option value></option>\r\n              <option value=\"AL\">Alabama</option>\r\n              <option value=\"AK\">Alaska</option>\r\n              <option value=\"AZ\">Arizona</option>\r\n              <option value=\"AR\">Arkansas</option>\r\n              <option value=\"CA\">California</option>\r\n              <option value=\"CO\">Colorado</option>\r\n              <option value=\"CT\">Connecticut</option>\r\n              <option value=\"DE\">Delaware</option>\r\n              <option value=\"DC\">District of Columbia</option>\r\n              <option value=\"FL\">Florida</option>\r\n              <option value=\"GA\">Georgia</option>\r\n              <option value=\"HI\">Hawaii</option>\r\n              <option value=\"ID\">Idaho</option>\r\n              <option value=\"IL\">Illinois</option>\r\n              <option value=\"IN\">Indiana</option>\r\n              <option value=\"IA\">Iowa</option>\r\n              <option value=\"KS\">Kansas</option>\r\n              <option value=\"KY\">Kentucky</option>\r\n              <option value=\"LA\">Louisiana</option>\r\n              <option value=\"ME\">Maine</option>\r\n              <option value=\"MD\">Maryland</option>\r\n              <option value=\"MA\">Massachusetts</option>\r\n              <option value=\"MI\">Michigan</option>\r\n              <option value=\"MN\">Minnesota</option>\r\n              <option value=\"MS\">Mississippi</option>\r\n              <option value=\"MO\">Missouri</option>\r\n              <option value=\"MT\">Montana</option>\r\n              <option value=\"NE\">Nebraska</option>\r\n              <option value=\"NV\">Nevada</option>\r\n              <option value=\"NH\">New Hampshire</option>\r\n              <option value=\"NJ\">New Jersey</option>\r\n              <option value=\"NM\">New Mexico</option>\r\n              <option value=\"NY\">New York</option>\r\n              <option value=\"NC\">North Carolina</option>\r\n              <option value=\"ND\">North Dakota</option>\r\n              <option value=\"OH\">Ohio</option>\r\n              <option value=\"OK\">Oklahoma</option>\r\n              <option value=\"OR\">Oregon</option>\r\n              <option value=\"PA\">Pennsylvania</option>\r\n              <option value=\"RI\">Rhode Island</option>\r\n              <option value=\"SC\">South Carolina</option>\r\n              <option value=\"SD\">South Dakota</option>\r\n              <option value=\"TN\">Tennessee</option>\r\n              <option value=\"TX\">Texas</option>\r\n              <option value=\"UT\">Utah</option>\r\n              <option value=\"VT\">Vermont</option>\r\n              <option value=\"VA\">Virginia</option>\r\n              <option value=\"WA\">Washington</option>\r\n              <option value=\"WV\">West Virginia</option>\r\n              <option value=\"WI\">Wisconsin</option>\r\n              <option value=\"WY\">Wyoming</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"usa-input\" [ngClass]=\"{'usa-input-error': zip.invalid && zip.touched}\">\r\n            <label for=\"zip\" class=\"usa-input-required\">ZIP</label>\r\n            <span class=\"usa-input-error-message\" role=\"alert\" [hidden]=\"zip.valid || zip.pristine\" >Field is required</span>\r\n            <input class=\"usa-input-medium\" id=\"zip\" name=\"zip\" type=\"text\" pattern=\"[\\d]{5}(-[\\d]{4})?\"\r\n                   data-grouplength=\"5,4\" data-delimiter=\"-\" aria-required=\"true\"\r\n                   [ngClass]=\"{'usa-input-success': zip.valid}\"\r\n                   data-politespace [(ngModel)]=\"user.zip\" #zip=\"ngModel\" required>\r\n          </div>\r\n        </fieldset>\r\n        <button class=\"usa-button usa-button-big\" type=\"submit\">Submit</button>\r\n\r\n      </div>\r\n    </div>\r\n  </form>\r\n</section>\r\n"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "<section class=\"usa-grid usa-section\">\r\n  <form class=\"usa-form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\">\r\n    <fieldset>\r\n      <legend class=\"usa-drop_text\">Create an Account</legend>\r\n\r\n      <label for=\"email\">Email address</label>\r\n      <input id=\"email\" name=\"email\" [(ngModel)]=\"registration.email\" #email=\"ngModel\" type=\"text\" autocapitalize=\"off\" autocorrect=\"off\">\r\n\r\n      <label for=\"password\">Password</label>\r\n      <input id=\"password\" name=\"password\" type=\"password\" [(ngModel)]=\"registration.password\" #password=\"ngModel\">\r\n      <input id=\"password2\" name=\"password2\" type=\"password\" [(ngModel)]=\"registration.password2\" #password2=\"ngModel\">\r\n      <p class=\"usa-form-note\">\r\n        <a title=\"Show password\" href=\"javascript:void(0);\"\r\n           class=\"usa-show_password\"\r\n           aria-controls=\"password\">\r\n          Show password</a>\r\n      </p>\r\n\r\n      <input type=\"submit\" value=\"Create\" />\r\n    </fieldset>\r\n  </form>\r\n</section>\r\n\r\n"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "<section class=\"usa-grid usa-section\">\r\n  <h2 id=\"complete-account-steps\">Steps to Complete Account</h2>\r\n\r\n  <input id=\"carver\" type=\"checkbox\" name=\"historical-figures-1\" disabled>\r\n\r\n  <div class=\"usa-alert usa-alert-success\">\r\n    <div class=\"usa-alert-body\">\r\n      <!-- change message based on what step user is in the process -->\r\n      <h3 class=\"usa-alert-heading\" *ngIf=\"currentUser.step == 'profile'\">Your account has been verified</h3>\r\n      <h3 class=\"usa-alert-heading\" *ngIf=\"currentUser.step == 'connect'\">Your profile has been created</h3>\r\n      <ul class=\"usa-unstyled-list\"  role=\"stepgroup\" aria-labelledby=\"complete-account-steps\">\r\n        <li role=\"step\">\r\n          <input id=\"create-account\" type=\"checkbox\" onclick=\"this.checked=!this.checked;\" checked aria-checked=\"true\">\r\n          <label for=\"create-account\">Create a new account</label>\r\n        </li>\r\n        <li role=\"step\">\r\n          <input id=\"look-for-account\" type=\"checkbox\" onclick=\"this.checked=!this.checked;\" checked  aria-checked=\"true\">\r\n          <label for=\"look-for-account\">Look for the email in your inbox</label>\r\n        </li>\r\n        <li role=\"step\">\r\n          <input id=\"click-verification\" type=\"checkbox\" onclick=\"this.checked=!this.checked;\" checked aria-checked=\"true\">\r\n          <label for=\"click-verification\">Click the verification link</label>\r\n        </li>\r\n\r\n        <li role=\"step\" *ngIf=\"currentUser.step == 'profile'\">\r\n          <input id=\"complete-profile\" type=\"checkbox\" routerLink=\"/profile\" class=\"cursor-pointer\" aria-checked=\"false\">\r\n          <label for=\"complete-profile\"><a routerLink=\"/profile\">Complete profile</a></label>\r\n        </li>\r\n        <li role=\"step\" *ngIf=\"currentUser.step == 'connect'\">\r\n          <input id=\"complete-profile\" type=\"checkbox\" onclick=\"this.checked=!this.checked;\" checked aria-checked=\"true\">\r\n          <label for=\"complete-profile\">Complete profile</label>\r\n        </li>\r\n        <li role=\"step\" *ngIf=\"currentUser.step == 'connect'\">\r\n          <input id=\"connect-practices\" type=\"checkbox\" routerLink=\"/practice\" class=\"cursor-pointer\"  aria-checked=\"false\">\r\n          <label for=\"connect-practices\"><a routerLink=\"/practice\">Request to Connect with a Practice</a></label>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"button_wrapper\">\r\n    <!-- change button style based on what step user is in the process -->\r\n    <button class=\"usa-button-outline-inverse usa-button-hover\" aria-disabled=\"true\" disabled>\r\n      Confirm Account\r\n    </button>\r\n    <button\r\n        [ngClass]=\"{'usa-button usa-button-big': currentUser.step === 'profile',\r\n        'usa-button-outline-inverse usa-button-hover': currentUser.step != 'profile'}\"\r\n        routerLink=\"/profile\" [disabled]=\"currentUser.step != 'profile'\" [attr.aria-disabled]=\"currentUser.step != 'profile'\">\r\n      Complete Profile\r\n    </button>\r\n    <button\r\n        [ngClass]=\"{'usa-button usa-button-big': currentUser.step === 'connect',\r\n        'usa-button-outline-inverse usa-button-hover': currentUser.step != 'connect'}\"\r\n        routerLink=\"/practice\" [disabled]=\"currentUser.step != 'connect'\" [attr.aria-disabled]=\"currentUser.step != 'connect'\">\r\n      Request to Connect\r\n    </button>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<div class=\"usa-banner\">\r\n  <div class=\"usa-accordion\">\r\n    <header class=\"usa-banner-header\">\r\n      <div class=\"usa-grid usa-banner-inner\">\r\n        <img src=\"assets/img/favicons/favicon-57.png\" alt=\"U.S. flag\">\r\n        <p>An official website of the United States government</p>\r\n        <button class=\"usa-accordion-button usa-banner-button\"\r\n                aria-expanded=\"false\" aria-controls=\"gov-banner\">\r\n          <span class=\"usa-banner-button-text\">Here's how you know</span>\r\n        </button>\r\n      </div>\r\n    </header>\r\n    <div class=\"usa-banner-content usa-grid usa-accordion-content\" id=\"gov-banner\">\r\n      <div class=\"usa-banner-guidance-gov usa-width-one-half\">\r\n        <img class=\"usa-banner-icon usa-media_block-img\" src=\"assets/img/icon-dot-gov.svg\" alt=\"Dot gov\">\r\n        <div class=\"usa-media_block-body\">\r\n          <p>\r\n            <strong>The .gov means it’s official.</strong>\r\n            <br>\r\n            Federal government websites always use a .gov or .mil domain. Before sharing sensitive information online, make sure you’re on a .gov or .mil site by inspecting your\r\n            browser’s address (or “location”) bar.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"usa-banner-guidance-ssl usa-width-one-half\">\r\n        <img class=\"usa-banner-icon usa-media_block-img\" src=\"assets/img/icon-https.svg\" alt=\"SSL\">\r\n        <div class=\"usa-media_block-body\">\r\n          <p>This site is also protected by an SSL (Secure Sockets Layer) certificate that’s been signed by the U.S. government. The <strong>https://</strong> means all\r\n            transmitted data is encrypted — in other words, any information or browsing history that you provide is transmitted securely.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ })

},[1098]);
//# sourceMappingURL=main.bundle.js.map