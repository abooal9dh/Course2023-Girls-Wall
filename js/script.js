window.addEventListener("load", function() {
	const heading = document.querySelector(".DeemaAllhaib");
	heading.style.opacity = "0";
	
	function fadeIn() {
	  let opacity = 0;
	  const interval = setInterval(function() {
		opacity += 0.05;
		heading.style.opacity = opacity;
		if (opacity >= 1) {
		  clearInterval(interval);
		}
	  }, 50);
	}
	
	fadeIn();
  });