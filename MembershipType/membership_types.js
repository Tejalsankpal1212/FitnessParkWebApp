const tabs=document.querySelectorAll('.tab_btn');
const all_content=document.querySelectorAll('.tab_content');
const btn_all=document.getElementById('all_btn');
const btn_add_membership_type=document.getElementById('btn_add_membership_type');
const btn_submit=document.getElementById('btn_submit');

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
    getAllMembershipTypes();
  }

btn_add_membership_type.onclick = function() {
    window.location.replace('membership_type_create.html')
  }

  function getAllMembershipTypes()
  {
    //Get the data from database and Bind to the table
    
    axios.get('http://127.0.0.1:8001/membershiptype/getallmembershiptypes')
    .then(res=>{
          console.log(res.data.payload);
          return res.data.payload;
    }).then((membershiptypesdata)=>{
     var table = document.getElementById("table-outer-row");
     
     table.innerHTML="";
     for (let index = 0; index < membershiptypesdata.length; index++) {
       var row = ` 
                   <div class="table-inner-row">
                        <div class="table-cell activecheckbox">
                            <div class="mem-active">
                                <input type="checkbox" id="mem-active"/>
                                <label for="mem-active">
                                    <ion-icon class="ion-icons" name=""></ion-icon>
                                </label>
                            </div>
                        </div>
                        <div class="table-cell categoryid">
                            <p>${membershiptypesdata[index].memcategory_id}</p>
                        </div>
                        <div class="table-cell categoryname">
                            <p>${membershiptypesdata[index].memcategory_name}</p>
                        </div>                                   
                        <div class="table-cell action-btn">
                            <button class="edit-btn">
                                <span class="oi oi-icon-person"></span>
                            </button>
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


