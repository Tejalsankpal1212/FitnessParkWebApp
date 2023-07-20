const btn_add_member=document.getElementById('btn_add_member');
const tabs=document.querySelectorAll('.tab_btn');
const all_content=document.querySelectorAll('.tab_content');
const btn_all=document.getElementById('all_btn');


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


btn_add_member.onclick = function() {
    window.location.replace('member_create.html')
  } 


document.body.onload = function() {
    btn_all.click();
    getAllMembers();
  }

function getAllMembers()
  {
    //Get the data from database and Bind to the table
    
    axios.get('http://127.0.0.1:8001/member/getallmembers')
    .then(res=>{
          console.log(res.data.payload);
          return res.data.payload;
    }).then((membersdata)=>{
     var table = document.getElementById("active-table-box");
     
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
                              <p>${membersdata[index].fname + ' ' + membersdata[index].mname + ' '+ membersdata[index].lname}</p>
                          </div>   
                          <div class="table-cell membershipcategory">
                              <p>${membersdata[index].gender}</p>
                          </div>
                          <div class="table-cell membershipperiod">
                              <p>${membersdata[index].city}</p>
                          </div>   
                          <div class="table-cell membershipIslimited">
                              <p>${membersdata[index].dob}</p>
                          </div>
                          <div class="table-cell numberofsessions">
                              <p>${membersdata[index].emailid}</p>
                          </div> 
                          <div class="table-cell membershipamount">
                              <p>${membersdata[index].mobileno}</p>
                          </div>
                          <div class="table-cell membershipclass">
                              <p>${membersdata[index].status}</p>
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

    })
    .catch(err=>{
     console.log(err);
    })
  }