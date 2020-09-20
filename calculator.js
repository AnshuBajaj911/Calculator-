
    var ch;
    function f5(){
        var str = document.getElementById("l").value;
        var len = str.length;
        var s;
///////////////////////
if(ch==true){
           // alert("dscd");
if(str.charAt(str.length-1)=='+' ||str.charAt(str.length-1)=='*' || str.charAt(str.length-1)=='/' || str.charAt(str.length-1)=='-'){
  //  alert("dscd");
      ch= false;
    }
else {        //alert("dscd");  
s=str.charAt(str.length-1);
document.getElementById("l").value="";
  if(s==0){}
  else{
    
  document.getElementById("l").value+=s;
            ch=false;
        } } }
//code to clear screen after result when input is given using keyboard

        ///////////////////
       // alert(len);
        if(str.charAt(str.length-1)=='+' || str.charAt(str.length-1)=='-' || str.charAt(str.length-1)=='/' || str.charAt(str.length-1)=='*')
            if(
          str.charAt(str.length-2)=='+' || str.charAt(str.length-2)=='-' || str.charAt(str.length-2)=='/' || str.charAt(str.length-2)=='*'){
            var t = str.charAt(str.length-1);
                document.getElementById("l").value=str.slice(0,-2);
                document.getElementById("l").value+=t;
        }
        
        if(str.charAt(str.length-1) =='.' && str.charAt(str.length-2)=='.'){
            
                document.getElementById("l").value=str.slice(0,-1);
                //alert(str.slice(0,-1));
                
        }
        //alert(str);
        // ZERO OCTAL ERROR
        // also added f5() call in onclick of numerics 
        if(str.charAt(str.length-3) =='+' ||str.charAt(str.length-3) =='-' ||str.charAt(str.length-3) =='*' ||str.charAt(str.length-3) =='/')
            if(str.charAt(str.length-2)=='0'){
            t = str.charAt(str.length-1);
                document.getElementById("l").value=str.slice(0,-2);
            document.getElementById("l").value+=t;
                //alert(str.slice(0,-1));
                
        }
        if(str.charAt(0) == '*' ||str.charAt(0) == '/' ){
            document.getElementById("l").value="Syntax Error";
        }
        if(str.charAt(0) == '.' ){
            if(str.charAt(1) == '/' || str.charAt(1) == '*' || str.charAt(1) == '-' || str.charAt(1) == '+'  )
            document.getElementById("l").value="Syntax Error";
        }
         if(str.length>=3){
             if(str.charAt(0) == '0' && str.charAt(1) != '.'){
                 alert("Error: Number staring with 0 is Octal")
             document.getElementById("l").value="";
         }}
        
        
    }
    //ZERO OCTAL ERROR
    function f2(){
         setInterval(function(){ var q = document.getElementById("l").autofocus;}, 1000);
    }
function f(x){
      /*var str = document.getElementById("l").value;
 var res = str.charAt(str.length-1); 
          if(res==42 || res==43 || res==45 || res==46 || res==47){
              if(charCode==42 || charCode==43 || charCode==45 || charCode==46 || charCode==47 ){
                  alert("two symbols in a row");
              }
          }*/
   // var q = document.getElementById("l").autofocus;
   var c =true;
    if(x.keyCode===13){
        
        f1();
      
       // c=false;

    }
    else{
        if(ch==true){
            //alert("dscd");
if(x=='+' ||x=='*' || x=='/' || x=='-'){
         ch= false;
    }
else {            document.getElementById("l").value="";    
            ch=false;
        } }
    document.getElementById("l").value+=x;
     document.getElementById("l").focus();
} }
    function f1(){
        var str = document.getElementById("l").value;
  var n = str.endsWith("+"); 
        if(n==true){
 document.getElementById("l").value="Syntax Error";
  }
         var n = str.endsWith("-"); 
        if(n==true){
 document.getElementById("l").value="Syntax Error";
  }
         var n = str.endsWith("/"); 
        if(n==true){
 document.getElementById("l").value="Syntax Error";
  }
         var n = str.endsWith("*"); 
        if(n==true){
 document.getElementById("l").value="Syntax Error";
  }
  
        
  
        let a = document.getElementById("l").value;
        let y = eval(a);
       
        var n = y.toFixed(2);
        document.getElementById("l").value=n;
        ch=true;
       
        
    }
    
    
   
  function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         
if(charCode >= 48 && charCode<= 57 || charCode==42 || charCode==43 || charCode==45 || charCode==46 || charCode==47 || charCode==61 || charCode==13 || charCode==8 )  
    /////////////////////
   
    
    /////////////////
return true; 

          else return false;
      }
    
    function clears()
    {
   document.getElementById("l").value="";
    }
    
    
  
    
