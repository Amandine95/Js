function stringToHex(str){

       var val="";

       for(var i = 0; i < str.length; i++){

              if(val == "")

                     val = str.charCodeAt(i).toString(16);

              else val += str.charCodeAt(i).toString(16);

       }
	   
	   console.log(val);

       return val;

}

stringToHex('http://www.landchina.com/default.aspx?tabid=263&ComName=default')

 

function YunSuoAutoJump(){

       var width =1920;

       var height=1080;

       var screendate = width + "," + height;
	   
	   // console.log(screendate);

       // var curlocation = window.location.href;

//        if(-1 == curlocation.indexOf("security_verify_")){
// 
//               document.cookie="srcurl=" + stringToHex(window.location.href) + ";path=/;";
// 
//        }

       location = "/default.aspx?tabid=263&ComName=default&security_verify_data=" + stringToHex(screendate);
	   
	   console.log(location);

}

// YunSuoAutoJump()

 



 

