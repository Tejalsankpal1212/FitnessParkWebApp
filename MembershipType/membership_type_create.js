const btn_submit=document.getElementById('btn_submit');

var membershipTypeId="";

btn_submit.onclick=function(){
    console.log('Submit Button Clicked !');
    const result =[];
    var membershipTypeName=document.getElementById("membershiptype_name").value;
    
    if(membershipTypeId!="") 
    {
        const membershiptype={
        "membershiptypeid":membershipTypeId,
        "membershiptypename":membershipTypeName
        };

        try {
                axios.put('http://127.0.0.1:8001/membershiptype/putmembershiptype', membershiptype)
                .then(res=>{
                            return res.data.message;
                            }).then((msg)=>
                            {
                                swal({
                                    text: msg,
                                    icon: "success"
                                }); 
                            });
            } 
        catch (errors) 
            {
                //console.error(errors);
            }
    }
    else
    {
      const membershiptype={
                "membershiptypename":membershipTypeName,
                "createdby":'f5a7e4e4-fe55-11ed-8ea1-85b80c133bf0'
        };

                try {
                    axios.post('http://127.0.0.1:8001/membershiptype/postmembershiptype', membershiptype)
                    .then(res=>{
                                return res.data.message;
                                }).then((msg)=>
                                {
                                    swal({
                                        text: msg,
                                        icon: "success"
                                    }); 
                                });
                } 
            catch (errors) 
                {
                    //console.error(errors);
                }
    }  
  }
