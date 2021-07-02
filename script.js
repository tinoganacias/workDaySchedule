
function date_time() {
    now = moment().format('dddd MMMM Do, YYYY HH:mm:ss');
    document.getElementById('timer').innerHTML = now;
    setTimeout(function () { date_time(); }, 1000);
  }
  date_time();

  var myForm = document.querySelector("#myForm");
  var myInput = document.querySelector("#item");
  var myItem = doucment.querySelector("#lastItem")
  var saved = localStorage.getItem("saved")

  myForm.addEventListener("submit", function(event){
      event.preventDefault();
      localStorage.setItem("saved",item.value)
  })

  lastItem.textContent = saved
  

  
  

  