flatpickr("#date", {});
flatpickr("#time", {});

  function button() {
   // console.log('hello');

    let arr = JSON.parse(localStorage.getItem("reservation"));
    let name= document.getElementById('name');
    let persons= document.getElementById('persons');
    let date= document.getElementById('date');
    let time= document.getElementById('time');
    // console.log('name : '+ name +' ,pesrons : ' + persons + ' ,date : ' + date + 'time : ' +time);

    if(localStorage.getItem("reservation") == null){
      localStorage.setItem("reservation",'[]');
    }
    let arrData = {
      name:name.value,
      persons:persons.value,
      date:date.value,
      time: time.value            
  }
  
  arr.push(arrData);
  alert(name.value+'  your table is booked at  '+date.value);
  localStorage.setItem("reservation",JSON.stringify(arr));
  name.value = '';
  persons.value = '';
  date.value = '';
  time.value = '';
  showData(); 
  }

  function showData(e){
    let  details = new Array();
    details = JSON.parse(localStorage.getItem("reservation"));
    let table = document.querySelector('tbody');
    let html =''
      for(let i=0;i<details.length ; i++){
       html +=`
       <tr>
            <td>${details[i].name}</td>
            <td>${details[i].persons}</td>
            <td>@${details[i].date}</td>
            <td>@${details[i].time}</td>
          </tr>
       `;
      }
      table.innerHTML= html;
}
// window.onload = function(){
//   console.log('hi');
//   showData();
// }

setTimeout(()=>{
  showData()
},2);


  



































// if(name.value || persons.value || date.value || time.value == ''){
//   alert('enter all details');
//   return;
// }
// else
 
