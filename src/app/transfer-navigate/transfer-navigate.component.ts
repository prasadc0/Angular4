import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}   from '@angular/router';
import {CommonserviceService} from '../services/commonservice.service';
import {ConstantService} from '../constant/constant.service';



@Component({
  selector: 'app-transfer-navigate',
  templateUrl: './transfer-navigate.component.html',
  styleUrls: ['./transfer-navigate.component.css'] ,
  providers:[CommonserviceService,ConstantService]
})
export class TransferNavigateComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute ,private  cmnSercive: CommonserviceService, private  cnstnt:ConstantService ) { }

  public user ='';
  public shippedManifestOver15Days =  '';
  public dataToDisplay ='';
 // public url =this.constant.constUrl;
  public shippedManifestOver15DaysString ='Shipping Home';
  public fileContent = " ";

 	 ngOnInit() {
  		const userId =this.activeRoute.snapshot.params['id'];
 		console.log(  this.activeRoute.snapshot.params['id'],  'is'+  "this.activeRoute.snapshot.params['id']");

	     this.cmnSercive.getUser(this.cnstnt.constUrl).subscribe(
	 		res=> {
		  		this.dataToDisplay = res.rtvSuspendList;
		  		 
 		});
 		this.fileContent = " ";
 	}
 	onClickMe(event){  

	function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {

    	//If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    	var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    	var CSV = '';    
    	//Set Report title in first row or line
   		// CSV += ReportTitle + '\r\n\n';
    	//This condition will generate the Label/Header
    	if (ShowLabel) {
        	var row = "";
	        //This loop will extract the label from 1st index of on array
	        for (var index in arrData[0]) {
	            //Now convert each value to string and comma-seprated
	            row += index + ',';
	             
        }
	        row = row.slice(0, -1);
			 
	        //append Label row with line break
	        CSV += row + '\r\n';
	        
    	}
    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";

        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
            

        }

        row.slice(0, row.length - 1);
        

        //add a line break after each row
        CSV += row + '\r\n';
           
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    }      
		    //Generate a file name PATH = "/app/changedFiles";
		    var fileName = "MyReport";
		    //this will remove the blank-spaces from the title and replace it with an underscore
		   // fileName += ReportTitle.replace(/ /g,"/");   

		    //Initialize file format you want csv or xls
		    var uri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(CSV);

		    // Now the little tricky part.
		    // you can use either>> window.open(uri);
		    // but this will not work in some browsers
		    // or you will not get the correct file extension    

		    //this trick will generate a temp <a /> tag
		    var link = document.createElement("a");    
		    link.href = uri;
			//var file = new File(fileName);
		    //set the visibility hidden so it will not effect on your web-layout
		    // link.style = "visibility:hidden";
		     link.download = fileName + ".csv";

		    //this part will append the anchor tag and remove it after automatic click
		    document.body.appendChild(link);
		    link.click();
		    document.body.removeChild(link);
	} 
      JSONToCSVConvertor(this.dataToDisplay, '', true);
 	}
  }


		 //this.cmnSercive.PostTransferDetils(userId,this.url).subscribe(res =>{
		 //console.log('Data',res)
	    //;  
	     //this.shippedManifestOver15Days =res.shippedManifestOver15Days;
	     //this.shippedManifestOver15DaysString = "Work In Progress DO NOT ENTER";
	     //})



 
