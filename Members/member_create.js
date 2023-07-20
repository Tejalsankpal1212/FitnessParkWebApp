const btn_next_step1=document.querySelectorAll('.btn_next_step1');
const btn_next_step2=document.querySelectorAll('.btn_next_step2');
const btn_previous_step2=document.querySelectorAll('.btn_previous_step2');
const steps=document.querySelectorAll('.input-field-step');
const btn_submit=document.getElementById('btn_submit');

var memberId="";

let stepnum=0;

btn_next_step1.forEach((step)=>{
    console.log(step);
    step.addEventListener('click',(e)=>{
        stepnum++;
        steps.forEach(step=>{step.classList.remove('input-field-step-active')});              
        steps[stepnum].classList.add('input-field-step-active');

    });
})

btn_next_step2.forEach((step)=>{
    console.log(step);
    step.addEventListener('click',(e)=>{
        stepnum++;
        steps.forEach(step=>{step.classList.remove('input-field-step-active')});              
        steps[stepnum].classList.add('input-field-step-active');

    });
})

btn_previous_step2.forEach((step)=>{
    console.log(step);
    step.addEventListener('click',(e)=>{
        stepnum--;
        steps.forEach(step=>{step.classList.remove('input-field-step-active')});              
        steps[stepnum].classList.add('input-field-step-active');

    });
})


btn_submit.onclick=function(){
    console.log('Submit Button Clicked !');
    const result =[];
    var firstname=document.getElementById("firstname").value;
    var middlename=document.getElementById("middlename").value;
    var lastname=document.getElementById("lastname").value;

    var genderscopes= document.getElementsByName('gender-scope');
    for (var radio of genderscopes)
    {
        var gender=true;
        if (radio.checked) 
        {    
            gender=radio.value;
        }
        else
        {
            gender=false;
        }
    }    
    

    var dateofbirth=document.getElementById("dateofbirth").value;
    
    var address=document.getElementById("address").value;
    var city=document.getElementById("city").value;
    var state=document.getElementById("state").value;
    var zipcode=document.getElementById("zipcode").value;
    var emailid=document.getElementById("emailid").value;
    var mobileno=document.getElementById("mobileno").value;

    var height=document.getElementById("height").value;
    var weight=document.getElementById("weight").value;
    var chest=document.getElementById("chest").value;
    var waist=document.getElementById("waist").value;
    var arms=document.getElementById("arms").value;
    var thighs=document.getElementById("thighs").value;
    var pasttreatment=document.getElementById("pasttreatment").value;
    var allergydetails=document.getElementById("allergydetails").value;
    

    if(memberId!="") 
    {
        const member={
        "memberid":memberId,
        "firstname":firstname,
        "middlename":middlename,
        "lastname":lastname,
        "dateofbirth":dateofbirth,
        "gender":gender,           
        "address":address,
        "city":city,
        "state":state,
        "zipcode":zipcode,
        "emailid":emailid,
        "mobileno":mobileno,
        "height":height,
        "weight":weight,
        "chest":chest,
        "waist":waist,
        "arms":arms,
        "thighs":thighs,
        "pasttreatment":pasttreatment,
        "allergydetails":allergydetails,
        "updatedby":'f5a7e4e4-fe55-11ed-8ea1-85b80c133bf0'

        };

        try {
                axios.put('http://127.0.0.1:8001/member/putmember', member)
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
        const member={
            "firstname":firstname,
            "middlename":middlename,
            "lastname":lastname,
            "dateofbirth":dateofbirth,
            "gender":gender,           
            "address":address,
            "city":city,
            "state":state,
            "zipcode":zipcode,
            "emailid":emailid,
            "mobileno":mobileno,
            "height":height,
            "weight":weight,
            "chest":chest,
            "waist":waist,
            "arms":arms,
            "thighs":thighs,
            "pasttreatment":pasttreatment,
            "allergydetails":allergydetails,
            "createdby":'f5a7e4e4-fe55-11ed-8ea1-85b80c133bf0'
            };
            
                try {
                    axios.post('http://127.0.0.1:8001/member/postmember', member)
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