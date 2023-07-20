const btn_submit=document.getElementById('btn_submit');

var membershipId="";

document.body.onload = function() {
   
    getAllMembershipTypes();

  }

  function getAllMembershipTypes()
  {
    //Get the data from database and Bind to the table
    
    axios.get('http://127.0.0.1:8001/membershiptype/getallmembershiptypes')
    .then(res=>{
          console.log(res.data.payload);
          return res.data.payload;
    }).then((membershiptypesdata)=>{
     var combomembershiptypes = document.getElementById("membership-types");
     
     combomembershiptypes.innerHTML='<option value="">Select Membership Type</option>';
     for (let index = 0; index < membershiptypesdata.length; index++) {
       var row = `<option value="${membershiptypesdata[index].memcategory_id}">${membershiptypesdata[index].memcategory_name}</option>`
       combomembershiptypes.innerHTML+=row;
     }
    })
    .catch(err=>{
     console.log(err);
    })
  }

btn_submit.onclick=function(){
    console.log('Submit Button Clicked !');
    const result =[];
    var membership_name=document.getElementById("membership_name").value;
    var membership_type=document.getElementById("membership-types").value;
    var membership_period=document.getElementById("membership_period").value;
    
    var membershipscopes= document.getElementsByName('membership-scope');
    for (var radio of membershipscopes)
    {
        var membership_scope=true;
        if (radio.checked && radio.value=="Limited") 
        {    
            membership_scope=true;
        }
        else
        {
            membership_scope=false;
        }
    }    
    
    var number_of_sessions=document.getElementById("number_of_sessions").value;
    var membership_amount=document.getElementById("membership_amount").value;
    var membership_class=document.getElementById("membership-class").value;
    //var membership_class= membershipclass.options[membershipclass.selectedIndex].value;
    
    if(membershipId!="") 
    {
        const membership={
        "membershipid":membershipId,
        "membershipname":membership_name,
        "membershiptype":membership_type,
        "membershipperiod":membership_period,
        "membershipscope":membership_scope,
        "numberofsessions":number_of_sessions,
        "membershipamount":membership_amount,
        "membershipclass":membership_class,
        "updatedby":'f5a7e4e4-fe55-11ed-8ea1-85b80c133bf0'
        };

        try {
                axios.put('http://127.0.0.1:8001/membership/putmembership', membership)
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
        const membership={            
            "membershipname":membership_name,
            "membershiptype":membership_type,
            "membershipperiod":membership_period,
            "membershipscope":membership_scope,
            "numberofsessions":number_of_sessions,
            "membershipamount":membership_amount,
            "membershipclass":membership_class,
            "createdby":'f5a7e4e4-fe55-11ed-8ea1-85b80c133bf0'
            };

                try {
                    axios.post('http://127.0.0.1:8001/membership/postmembership', membership)
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