



    var cnt=0;
    function abc(){
     cnt=parseInt(cnt)+parseInt(1);
     var divData=document.getElementById("result");
     divData.innerHTML= cnt ;
     if (cnt>'4')
     {
        cnt=0;
     }

    }