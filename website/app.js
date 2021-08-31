      //here the data and time 
const date = new Date();
const iDate = date.toISOString().slice(0, 10);;

//console.log(iDate) //for check 
document.querySelector("#date").innerHTML=iDate; //save data in html node
        //make the varibel for html element will ues
const temprture=document.querySelector("#temp"); 
const content=document.querySelector("#content");
var btn = document.querySelector("#generate");
        //fuction to post data in y server.js 
const postData = async ( url = '', data = {})=>{
//    console.log(data) //for check data
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),  //to return data in jason form 
    });
  
      try {
        const newData = await response.json();
        return newData  // here the data go to server to every think was fine
      }catch(error) {// here if there error
      console.log("error", error);
      }
  }

  const basseURL="http://api.openweathermap.org/data/2.5/weather?&zip="; // url form the web
  const key =",us&units=metric&appid=8e0cc8a54b68dae06bf0fda771b41471";//the api + unit 
  btn.addEventListener ("click" ,() =>{      // event
    const code=document.querySelector("#zip").value;  //zip cod from user
      trry(basseURL,code,key)     
})
  

function updateUI(){  
  get_dat(url="/all")
}          //get data function here 
const get_dat = async (url)=>{
    const res = await fetch(url) // fetch data from route all in server
    try {
      const data = await res.json(); 
      //get data from server and put it in html element
      temprture.innerHTML =`${data.temp} celsius`;  
      content.innerHTML= data.content;
        //console.log(data.temp) //forcheck
       
    }  catch(error) {
      console.log("error", error);
    }
  } 
 function trry (basseURL,code,key ){
   getDat(urll=basseURL+code+key )
 }
  const getDat = async (urll )=>{
    const res = await fetch(urll) // featch data from weather web
    try {
      const text = document.getElementById("feelings").value; // feeling
      var ndata = await res.json(); 
  //    console.log(ndata) //for check
      postData('/temp', { temp:ndata.main.temp , content:text}) //post the data in rout temp in server 
     .then(updateUI())
      //get data from server and put it in html element
        //console.log(data.temp) //forcheck      
    }  catch(error) {
      console.log("error", error)//if type wrong zip cod 
      temprture.innerHTML = `error ${ndata.cod}`;  
      content.innerHTML= `${ndata.message} try agine`;
      
    }
  } 
 