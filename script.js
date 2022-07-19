window.onload=()=>{
    const apiKey='74ccac4c4ac87ecd4f7c90674e2399aa';
    const button =document.getElementById("Button");
    button.onclick=()=>{
        let city=document.getElementById("textBox").value;
        console.log(city);
        document.getElementById("area").innerHTML=city.toUpperCase()+":";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>{
        console.log(data);
        document.getElementById("weather").innerHTML=(data.main.temp-273).toFixed(2)+"&#8451";
    })
    
    }
   
}
