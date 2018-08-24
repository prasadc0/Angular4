import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable,Observer} from 'rxjs/Rx';
import 'rxjs/add/operator/map'; 
import {Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class CommonserviceService  {

	data: any;
  dataChange: Observable<any>;
  dataChangeObserver;

  constructor(private http: Http ) {

    this.dataChange = new Observable((observer:Observer<any>)=> {
    this.dataChangeObserver = observer;
    });

     }

   setData(data:any) {
    this.data = data;
    console.log('data in service',this.data);
    this.dataChangeObserver.next(this.data);
   }   

public body ={};

getUser(url) : Observable<any>{ 
	  
	  return this.http.get(url).map(

		res =>{
				const data = res.json();
				console.log(data);
				 return data;
		});

	}

PostTransferDetils(tsfNumber,url) : Observable<any>{

let body =  {
  		"fromlocationId":"281",
		"lpn":null,
		"quantity":"1",
		"shipToSMWH":false,
		"skuOrUpc":"43900",
		"toLocationId":"5"
  	} ;
  let headers = new Headers({'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  let data = JSON.stringify(body);

	return this.http.post( 'http://localhost:7001/RSSShipping/shipping/transfer/addItem',data,options).map(		
	
		result =>{
					const dataresult = result.json();
					console.log(dataresult)
					return  dataresult;
					}
			
		); 
	}

	

  

   

}
