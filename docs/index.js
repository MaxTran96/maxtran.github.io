window.onload = function() {
	$('.websites').on("click", function() { 
		var url = $(this).attr("data-link");
    	window.open(url,'_blank');
    	return false;
	});
	$('.websites').hover(function() {
        $(this).css('cursor','pointer');
    });

	new Chart(document.getElementById("languages"), {
	    type: 'horizontalBar',
	    data: {
	      labels: ["Java", "Python", "Javascript", "HTML5", "CSS3", "C/C++", "SQL"],
	      datasets: [
	        {
	          label: "Expertise level (1-5)",
	          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#cc66ff", "#ff9933"],
	          data: [5,5,4,5,4,3,4]
	        }
	      ]
	    },
	    options: {
	    	legend: { display: false },
	        title: {
	        	display: true,
	        	text: 'Languages'
	      	}, 
		    scales: {
	        	xAxes: [{
	        		ticks: {
	            		beginAtZero: true,
	            		min: 0
	          		}    
	       		}]
	      	}

	    }
	});


	new Chart(document.getElementById("frameworks-libraries"), {
	    type: 'horizontalBar',
	    data: {
	      labels: ["Jquery", "Bootstraps", "ReactJS", "NodeJS", "AngularJS", "chartJS"],
	      datasets: [
	        {
	          label: "Expertise level (1-5)",
	          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#cc66ff"],
	          data: [4,4,2,2,2,3]
	        }
	      ]
	    },
	    options: {
	    	legend: { display: false },
	      	title: {
	        	display: true,
	        	text: 'Framework & Libraries'
	      	},
	      	scales: {
	        	xAxes: [{
	        		ticks: {
	            		beginAtZero: true,
	            		min: 0
	          		}    
	       		}]
	      	}
	    }
	});


	new Chart(document.getElementById("other-stuffs"), {
	    type: 'horizontalBar',
	    data: {
	      labels: ["AWS/Azure", "Bash", "Linux"],
	      datasets: [
	        {
	          label: "Expertise level (1-5)",
	          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
	          data: [2,4,3]
	        }
	      ]
	    },
	    options: {
	      	legend: { display: false },
	      	title: {
	        	display: true,
	        	text: 'Other stuffs'
	      	},
	      	scales: {
	        	xAxes: [{
	        		ticks: {
	            		beginAtZero: true,
	            		min: 0
	          		}    
	       		}]
	      	}
	    }
	});
	var x = window.matchMedia("(max-width: 600px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
};

function myFunction(x) {
    if (x.matches) { // If media query matches
        var btn = document.getElementById("button-skill");
		btn.onclick = function(){
		
    	var div = document.getElementById('myChart');
		    if (div.style.display === 'none') {
		        div.style.display = 'block';
		        div.style.visibility = 'visible';
		 
		    } else {
		        div.style.display = 'none';
		        div.style.visibility = 'hidden';
		 
		    }
		};	
    } else {
        var btn = document.getElementById("button-skill");
		btn.onclick = function(){
		
    	var div = document.getElementById('myChart');
		    if (div.style.display === 'none') {
		        div.style.display = 'flex';
		        div.style.visibility = 'visible';
		 
		    } else {
		        div.style.display = 'none';
		        div.style.visibility = 'hidden';
		 
		    }
		};
    }
}

