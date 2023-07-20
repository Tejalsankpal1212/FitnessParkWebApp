const tabs=document.querySelectorAll('.tab_btn');
const all_content=document.querySelectorAll('.tab_content');
const btn_all=document.getElementById('all_btn');
const btn_add_membership=document.getElementById('btn_add_membership');



console.log(all_content);

tabs.forEach((tab,index)=>{
    tab.addEventListener('click',(e)=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');
        var line=document.querySelector('.line');
    line.style.width=e.target.offsetWidth + "px";
    line.style.left=e.target.offsetLeft + "px";

    all_content.forEach(content=>{content.classList.remove('active')});
    all_content[index].classList.add('active');

    })

    console.log(all_content.classList)
})

document.body.onload = function() {
    btn_all.click();
    getAllMemberships();

  }

btn_add_membership.onclick = function() {
    window.location.replace('membership_create.html')
  } 


  function getAllMemberships()
  {
    //Get the data from database and Bind to the table
    
    axios.get('http://127.0.0.1:8001/membership/getallmemberships')
    .then(res=>{
          console.log(res.data.payload);
          return res.data.payload;
    }).then((membershipsdata)=>{
     var table = document.getElementById("table-box");
     
     table.innerHTML="";
     for (let index = 0; index < membershipsdata.length; index++) {
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
                              <p>${membershipsdata[index].membership_id}</p>
                          </div>
                          <div class="table-cell membershipname">
                              <p>${membershipsdata[index].membership_name}</p>
                          </div>   
                          <div class="table-cell membershipcategory">
                              <p>${membershipsdata[index].membership_category}</p>
                          </div>
                          <div class="table-cell membershipperiod">
                              <p>${membershipsdata[index].membership_period}</p>
                          </div>   
                          <div class="table-cell membershipIslimited">
                              <p>${membershipsdata[index].membership_Islimited}</p>
                          </div>
                          <div class="table-cell numberofsessions">
                              <p>${membershipsdata[index].numberof_sessions}</p>
                          </div> 
                          <div class="table-cell membershipamount">
                              <p>${membershipsdata[index].membership_amount}</p>
                          </div>
                          <div class="table-cell membershipclass">
                              <p>${membershipsdata[index].membership_class}</p>
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


