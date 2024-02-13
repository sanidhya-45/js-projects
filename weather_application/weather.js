async function fun()
{
    const inputElement = document.getElementById("cityname");
    const cityName = encodeURIComponent(inputElement.value);
    const baseUrl1=  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=50f6467ac2d6f15ebf783d2dd7136e48`
    const baseUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=5&units=metric&appid=50f6467ac2d6f15ebf783d2dd7136e48`;
    // Get the value of the input element and encode it

    // Construct the complete URL
    // const apiUrl = baseUrl + cityName;

    // data.then((value)=>{
    //     console.log(value.status)
    //     console.log(value.ok)
    //     if(value.ok)
    //         return value.json()
    //     else throw new Error("Denied")
    // }).then((value)=>{
    //     console.log(value)
    // }).catch((error)=> console.log(error))
   try {
    const p1= await fetch(baseUrl1)
    const data1= await p1.json();
    console.log("completed fetching1")
    console.log(data1)
    
    
    const p2= await fetch(baseUrl2)
    const data2=await  p2.json();
    console.log("completed fetching2")
    console.log(data2)
    // https://openweathermap.org/img/wn/10d@2x.png

        
        document.getElementById("description").textContent = data1.weather[0].description;
        document.querySelector(".mainIcon").src= `https://openweathermap.org/img/wn/${data1.weather[0].icon}.png `
        document.getElementById("temp").textContent =` ${data1.main.temp} °C`;
        document.getElementById("date").textContent = new Date(data1.dt * 1000).toDateString();
        document.getElementById("location").textContent =data1.name
        // document.getElementById("MyElement").className = "fa-solid fa-location-dot";
        document.getElementById("humidity").textContent = `Humidity: ${data1.main.humidity}%`;
        document.getElementById("wind-speed").textContent = `Wind Speed: ${data1.wind.speed} m/s`;
        document.getElementById("min-temp").textContent = `Min Temp: ${data1.main.temp_min} °C`;
        document.getElementById("max-temp").textContent = `Max Temp: ${data1.main.temp_max} °C`;

        // let a= data2.list
        // console.log(a[0])
        // const headstring="Weather forecast 3 hrs intervals";
        // const 
        document.querySelector(".heading-section2").textContent=`Weather forecast for ${data1.name} 3 hrs intervals`
        for (let i = 1; i <= 5; i++) {
            const pp = document.getElementById(`${i}`);
            pp.querySelector(".icon").textContent = data2.list[i-1].weather[0].description;
            pp.querySelector(".temp-minmax").textContent = data2.list[i-1].main.temp;
            // pp.querySelector(".time").textContent = new Date(data2.list[i-1].dt * 1000).toLocaleTimeString('en-US', {hour12: false});
            const timetoshow=data2.list[i-1].dt_txt.substring(11,19);
            const datetoshow=data2.list[i-1].dt_txt.substring(0,10);
            pp.querySelector(".time").textContent = timetoshow;
            pp.querySelector(".intervaldate").textContent = datetoshow;
            pp.querySelector(".subIcon").src= `https://openweathermap.org/img/wn/${data2.list[i-1].weather[0].icon}.png `
        }
        
    } catch(err){
        console.error("Error in fetching data:", err)
    }


}