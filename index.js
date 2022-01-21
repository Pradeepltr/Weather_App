const show=document.getElementById('show');
const search=document.getElementById('search')
var weather_list=[];
function City_Handle(city){
    
fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city}`)
.then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
    // weather_list.push(data);
    localStorage.setItem(city,JSON.stringify(data));
    Show_Data(data,city);
})
}
function Delete_Handle(val){
    console.log(val)
//     show.innerHTML="";
//  var newList=weather_list.filter((data)=>{data!=val})
show.innerHTML=""
var arr=["London","New York","Los Angeles","Las Vegas"];
arr.map(e=>{
    if(e!=val)
    fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${e}`)
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        // weather_list.push(data);
       
    })  
})


}



search.addEventListener('submit',e=>{
    e.preventDefault();
    show.innerHTML=""
    const val=document.getElementById('search_value').value;
    fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${val}`)
.then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
   
    Show_Data(data,val)
})

})
function Show_Data(data,val){
   
    const HTML=document.createElement('div')
    console.log(data.description)
    HTML.className="container"
    HTML.innerHTML=`
    <table class="tab">
    <tr>
    <td> ${val}</td>
    <td> ${data.description}</td>
    <td> ${data.temp_in_celsius}</td>
    <td> ${data.pressure_in_hPa}</td>
    <td> ${data.humidity_in_percent}</td>
    <td><button onclick="Delete_Handle(this.value)" value="${val}">Delete</button></td>
    </tr>
    </table>
    `
    show.appendChild(HTML);
}