const btn_schedule_class=document.getElementById('btn_schedule_class');


btn_schedule_class.onclick = function() {
    window.location.replace('class_schedule_create.html')
  }  

document.body.onload = function() {
    getAllClassSchedules();
  }

  function getAllClassSchedules()
  {
    //Get the data from database and Bind to the table
    
    axios.get('http://127.0.0.1:8001/classschedule/getallclassschedules')
    .then(res=>{
          console.log(res.data.payload);
          return res.data.payload;
    }).then((membersdata)=>{
     var table = document.getElementById("table-box");
     
     table.innerHTML="";
     for (let index = 0; index < membersdata.length; index++) {
       var row = ` <div class="table-outer-row">
                      <div class="table-inner-row">
                          <div class="table-cell activecheckbox">
                              <div class="mem-active">
                                  <input type="checkbox" id="mem-active"/>
                                  <label for="mem-active">
                                      <ion-icon class="ion-icons" name=""></ion-icon>
                                  </label>
                              </div>
                          </div>
                          <div class="table-cell membershipid">
                              <p>${membersdata[index].membership_id}</p>
                          </div>
                          <div class="table-cell membershipname">
                              <p>${membersdata[index].membership_name}</p>
                          </div>   
                          <div class="table-cell membershipcategory">
                              <p>${membersdata[index].membership_category}</p>
                          </div>
                          <div class="table-cell membershipperiod">
                              <p>${membersdata[index].membership_period}</p>
                          </div>   
                          <div class="table-cell membershipIslimited">
                              <p>${membersdata[index].membership_Islimited}</p>
                          </div>
                          <div class="table-cell numberofsessions">
                              <p>${membersdata[index].numberof_sessions}</p>
                          </div> 
                          <div class="table-cell membershipamount">
                              <p>${membersdata[index].membership_amount}</p>
                          </div>
                          <div class="table-cell membershipclass">
                              <p>${membersdata[index].membership_class}</p>
                          </div>                                   
                          <div class="table-cell action-btn">
                              <button class="edit-btn">
                                  <span class="oi oi-icon-person"></span>
                              </button>
                          </div>                        
                      </div>
                    </div>
                 `
       table.innerHTML+=row;
     }

     document.getElementById("count").innerHTML = `| ${designdata.length} Designations`;
    })
    .catch(err=>{
     console.log(err);
    })
  }