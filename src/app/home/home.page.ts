import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username:any;
  password:any;

  constructor() {
  //  this.soapCall();
  }

  soapCall() {

    if(this.username != null || this.username != undefined && this.password != null || this.password != undefined){



    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', '', true);
   // const input_element = <HTMLInputElement> document.getElementById('choosenNumber');
    // The following variable contains the xml SOAP request.
    const sr = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <IndusMobileUserLogin1 xmlns="http://tempuri.org/">
      <UserName>`+this.username+`</UserName>
      <UserPassword>`+this.password+`</UserPassword>
    </IndusMobileUserLogin1>
  </soap:Body>
</soap:Envelope>`;

    xmlhttp.onreadystatechange =  () => {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                const xml = xmlhttp.responseXML;
                // Here I'm getting the value contained by the <return> node.
            //    const response_number = parseInt(xml.getElementsByTagName('return')[0].childNodes[0].nodeValue);
                // Print result square number.
                var s = new XMLSerializer();
              var newXmlStr = s.serializeToString(xml);      
              alert(newXmlStr);
            }else{
              console.log(xmlhttp.status);
            }

        }
    }
    // Send the POST request.
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.responseType = 'document';
    xmlhttp.send(sr);
  }else{
    alert("Invalid Username or Password");
  }

  }


}
