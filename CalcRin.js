var rez=0;
var mem="";
var flag="";
var operaciya="";


function addnum (n)
 {
	var n;
	if((flag=="")||(flag=="1")){

        if(rez==0){
            rez="";          
        }
        if(operaciya=="plus"){
        rez=rez+n;
        
        }

        if(operaciya=="minus"){
        rez=rez-n;

        }
        text1.value=rez;

        
        //info();
    }
    if(flag=="0.5"){
        if (operaciya=="plus"){
        rez=text1.value;
        text3.value=rez;
        rez="";
        rez=rez+n;
        text1.value=rez;
        flag="1";
        text2.value=flag;
        }
         if (operaciya=="minus"){
        rez=text1.value;
        text3.value=rez;
        rez="";
        rez=rez-n;
        text1.value=rez;
        flag="1";
        text2.value=flag;
        }
    }

}

function deistvie (operaciya)
 {
    if(operaciya=="plus"){

      if((flag=="")||(flag=="2")){
        flag="0.5"
      }
    }


    if(operaciya=="minus") {

        if((flag=="")||(flag=="2")){
        flag="0.5"
        }

    }

    if(operaciya=="ravno"){
        if(flag=="2"){
            



            rez=(parseInt(text1.value)+parseInt(text1.value)-parseInt(text3.value));
            text3.value=text1.value;
            text1.value=rez;
            
           
        }
        if(flag=="1"){
            flag="2";
                  if (text4.value=="plus"){
                  rez=parseInt(text1.value)+parseInt(text4.value);
                  text1.value=rez;
                  }  
                  if (text4.value=="minus"){
                  rez=parseInt(text1.value)-parseInt(text4.value);
                  text1.value=rez;
                  }
                  if(text4.value=="ymnozhenie"){
                    rez=parseInt(text1.value)*parseInt(text4.value);
                    text1.value=rez;
                  }

        } 

    }



    text2.value=flag; 
    text4.value=operaciya;
}



function info() {
    text2.value=flag;
    text3.value=mem;
    text4.value=operaciya;
}