var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");


function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
    //fetch  class from css
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }
}
//dark mode light mode changes through local storage
if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme")
}else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme")
}
else{
    localStorage.setItem("theme","light");
}