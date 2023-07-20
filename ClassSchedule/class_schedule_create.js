const btn_submit=document.getElementById('btn_submit');

var classId="";


document.body.onload = function() {
       getAllTrainers();
  }
  
  function getAllTrainers()
  {
    //Get the data from database and Bind to the table
    
    axios.get('http://127.0.0.1:8001/staff/getalltrainers')
    .then(res=>{
          console.log(res.data.payload);
          return res.data.payload;
    }).then((staffdata)=>{
     var combostaff = document.getElementById("staff");
     
     combostaff.innerHTML='<option value="">Select Trainer</option>';
     for (let index = 0; index < staffdata.length; index++) {
       var row = `<option value="${staffdata[index].staff_id}">${staffdata[index].staff_name}</option>`
       combostaff.innerHTML+=row;
     }
    })
    .catch(err=>{
     console.log(err);
    })
  }

  btn_submit.onclick=function(){
    console.log('Submit Button Clicked !');
    const result =[];
    var class_name=document.getElementById("class-name").value;
    var trainer=document.getElementById("staff").value;
    var location=document.getElementById("location").value;

    var startdate=document.getElementById("start-date").value;
    var enddate=document.getElementById("end-date").value;

    var booking_fee=document.getElementById("booking-fee").value;
    var class_days=document.getElementById("days").value;
    var start_time=document.getElementById("start-time").value;
    var end_time=document.getElementById("end-time").value;

    if(classId!="") 
    {
        const classSchedule={
        "classid":classId,
        "classname":class_name,
        "trainer":trainer,
        "location":location,
        "startdate":startdate,
        "enddate":enddate,
        "bookingfee":booking_fee,
        "classdays":class_days,
        "starttime":start_time,
        "endtime":end_time,
        "updatedby":'f5a7e4e4-fe55-11ed-8ea1-85b80c133bf0'
        };

        try {
                axios.put('http://127.0.0.1:8001/scheduleclass/putscheduleclass', classSchedule)
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
        const classSchedule={
            "classname":class_name,
            "trainer":trainer,
            "location":location,
            "startdate":startdate,
            "enddate":enddate,
            "bookingfee":booking_fee,
            "classdays":class_days,
            "starttime":start_time,
            "endtime":end_time,
            "createdby":'f5a7e4e4-fe55-11ed-8ea1-85b80c133bf0'
            };

            
                try {
                    axios.post('http://127.0.0.1:8001/scheduleclass/postscheduleclass', classSchedule)
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