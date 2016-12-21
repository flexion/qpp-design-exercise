import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Provider} from '../_models/provider';
import {Observable} from 'rxjs';

@Injectable()
export class PracticesService {

    http: Http;
//    practicesUrl: string = 'assets/data/practices.json';

    constructor(http: Http) {
        this.http = http;
        console.log('practices constructor');
    }

    getPractices(): Observable<Provider[]> {
        return this.http.get('/api/practices')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Base Provider Enrollment File
    searchNPI(npi: string) {
        http.get('https://data.cms.gov/resource/7b6b-dk5v.json?npi=1023041159');
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
    }

    // reassignment sub-file
    // https://data.cms.gov/resource/94dn-q7c9.json

    savePractice(provider: Provider) {
    }


}
