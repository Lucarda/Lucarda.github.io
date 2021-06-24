

function doDark () {
  document.body.classList.add("dark-theme");
  var i; 
  var x = document.getElementsByTagName("P");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("dark-theme");
	}
	
  var x = document.getElementsByTagName("h1");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("dark-theme");
	}
	
  var x = document.getElementsByTagName("h2");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("dark-theme");
	}
	
  var x = document.getElementsByTagName("h3");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("dark-theme");
	}
	
  var x = document.getElementsByTagName("h4");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("dark-theme");
	}
	
  var x = document.getElementsByTagName("h5");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("dark-theme");
	}

  var x = document.getElementsByTagName("h6");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("dark-theme");
	}
	
  var x = document.getElementsByTagName("ol");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("dark-theme");
	}
	
  var x = document.getElementsByTagName("ul");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("dark-theme");
	}
	
  var x = document.getElementsByTagName("mark");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("dark-theme");
	}
	
  var x = document.getElementsByTagName("PRE");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("dark-theme");
	}
	
  var x = document.getElementsByTagName("IMG");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("dark-theme");
	}
	
  var x = document.getElementsByTagName("a");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("dark-theme");
	}
	
}

function doLight () {
  document.body.classList.remove("dark-theme");
  
  var x = document.getElementsByTagName("P");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("dark-theme");
	}
	
  var x = document.getElementsByTagName("h1");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("dark-theme");
	}
	
  var x = document.getElementsByTagName("h2");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("dark-theme");
	}
	
  var x = document.getElementsByTagName("h3");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("dark-theme");
	}
	
  var x = document.getElementsByTagName("h4");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("dark-theme");
	}
	
  var x = document.getElementsByTagName("h5");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("dark-theme");
	}

  var x = document.getElementsByTagName("h6");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("dark-theme");
	}
	
  var x = document.getElementsByTagName("ol");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("dark-theme");
	}
	
  var x = document.getElementsByTagName("ul");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("dark-theme");
	}
	
  var x = document.getElementsByTagName("mark");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("dark-theme");
	}
	
  var x = document.getElementsByTagName("PRE");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("dark-theme");
	}
	
  var x = document.getElementsByTagName("IMG");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("dark-theme");
	}
	
  var x = document.getElementsByTagName("a");  
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("dark-theme");
	}
}




const btn = document.querySelector(".btn-toggle");

const currentTheme = localStorage.getItem("theme");

console.log(currentTheme);

if (currentTheme == "dark") {
  doDark();	
  } else {
	  doLight();
  }
 


btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme"); 

  let theme = "light";

  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
	doDark();
	} else {
		doLight(); 
  }
  localStorage.setItem("theme", theme);
});

