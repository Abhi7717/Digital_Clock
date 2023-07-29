const hourE1=document.getElementById("hour")
const minE1=document.getElementById("minutes")
const secE1=document.getElementById("seconds")
const ampmE1=document.getElementById("ampm")

function updateclock()
{
let h=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();
let ampm="AM";

if(h>12)
{
    // h=h-12;
    ampm="PM"
}
h=h<10 ? "0" + h:h
m=m<10 ? "0" + m:m
s=s<10? "0" + s:s
    hourE1.innerText=h;
    minE1.innerText=m;
    secE1.innerText=s;
    ampmE1.innerText=ampm;
    setTimeout(()=>{
        updateclock()
    },1000)

}

updateclock();



document.addEventListener('DOMContentLoaded', function() {
    // Function to get the current time and change the background accordingly
    function changeBackgroundByTime() {
      const now = new Date();
      const hour = now.getHours();
      let background;
       if (hour >=1 && hour < 5) {
        background = 'mountains-starry-sky-milky-way-night-4k_1536017122.jpg.webp';
      }
      else if (hour >= 5 && hour < 12) {
        background = 'flowers-276014_1280.jpg';
      } else if (hour >= 12 && hour < 16) {
        background = 'beach-1751455_1280.jpg';
      } else if (hour >= 16 && hour < 18) {
          background = '1131169.jpg';
    }
    else if (hour >= 18 && hour < 22) {
        // background = 'tree-736885_1280.jpg';
        background = 'peakpx.jpg';
        }
        else{ //if (hour >= 22 && hour < 0) {
        background = 'pexels-shakhawat-shaon-6149690.jpg';
      }
      
  
      // Set the selected background as the body's background image
      document.body.style.backgroundImage = `url(${background})`;
    }
  
    // Call the function initially
    changeBackgroundByTime();
  
    // Optionally, update the background image every minute
    setInterval(changeBackgroundByTime, 60000); // 60,000 ms = 1 minute
  });
  
