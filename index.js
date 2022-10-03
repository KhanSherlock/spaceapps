
//slider to adjust temperature
const tempSlider = document.getElementById("tempSlider");
tempSlider.addEventListener("input", changeTemp);


//the bubble
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach((wrap) => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

//slider to adjust size
const sizeSlider = document.getElementById("sizeSlider");
sizeSlider.addEventListener("input", changeTemp);

const checkStarType = document.getElementById("checkStarType");
checkStarType.addEventListener("click", showStarProperties);


//change the color of star
function changeTemp(e) {
  //get the slider value
	const star = document.getElementById("star");
	const {value, max} = e.target;
	
	let red = 255;
	let green = 0;
	let blue = 0;
	console.log(value);
	
	//color should be mostly red
	if(value <= 3500)
	{
		green = 0 + value/40;
		console.log("Current value" + value);
		console.log("Red" + red);
		console.log("Green" + green);
		console.log("Blue" + blue);
		let color  = 'rgb(' + red + ',' + green + ',' + blue + ')';
		star.style.backgroundColor = color;
		// console.log('This is star type M');
		// commentary.innerHTML = "Spectral Type M";
		// commentary.style.display = "block";

	}

	//color should be orange
	else if(value > 3500 && value <= 5000)
	{
		green = 70 + value/60;
		let color  = 'rgb(' + red + ',' + green + ',' + blue + ')';
		console.log("Current value" + value);
		console.log("Red" + red);
		console.log("Green" + green);
		console.log("Blue" + blue);
		star.style.backgroundColor = color;
		// star.style.backgroundColor = "orange";
		// console.log('This is star type K');
		// commentary.innerHTML = "Spectral Type K";
		// commentary.style.display = "block";
	}

	//color should be yellow
	else if(value > 5000 && value <= 6000)
	{
		green = 150 + value/100;
		// blue = 100 + value/150;
		console.log("Current value" + value);
		console.log("Red" + red);
		console.log("Green" + green);
		console.log("Blue" + blue);
		let color  = 'rgb(' + red + ',' + green + ',' + blue + ')';
		star.style.backgroundColor = color;
		// console.log('This is star type G');
		// commentary.innerHTML = "Spectral Type G";
		// commentary.style.display = "block";
	}

	//color should be yellow-white
	else if(value > 6000 && value <= 7500)
	{
		green = 250;
		blue = 140 + value/100;
		// blue = 180;
		// green = 210 + value/500;
		// blue = 0 + value/80;
		console.log("Current value" + value);
		console.log("Red" + red);
		console.log("Green" + green);
		console.log("Blue" + blue);
		let color  = 'rgb(' + red + ',' + green + ',' + blue + ')';
		star.style.backgroundColor = color;
		// console.log('This is star type F');
		// commentary.innerHTML = "Spectral Type F";
		// commentary.style.display = "block";
	}

	//color should be white
	else if(value > 7500 && value <= 10000)
	{
		green = 250;
		blue = 220 + value/700;
		console.log("Current value" + value);
		console.log("Red" + red);
		console.log("Green" + green);
		console.log("Blue" + blue);
		let color  = 'rgb(' + red + ',' + green + ',' + blue + ')';
		star.style.backgroundColor = color;
		// console.log('This is star type A');
		// commentary.innerHTML = "Spectral Type A";
		// commentary.style.display = "block";
		
	}

	//color should be blue-white
	else if(value > 10000 && value <= 30000)
	{
		red = 255 - value/600;
		green = 255 - value/4000;
		blue = 255;
		console.log("Current value" + value);
		console.log("Red" + red);
		console.log("Green" + green);
		console.log("Blue" + blue);
		let color  = 'rgb(' + red + ',' + green + ',' + blue + ')';
		star.style.backgroundColor = color;
		// console.log('This is star type B');
		// commentary.innerHTML = "Spectral Type B";
		// commentary.style.display = "block";
	}

	//color should be blue
	else if(value > 30000)
	{
		red = 205;
		blue = 255;
		green = 247 - value/4000;
		console.log("Current value" + value);
		console.log("Red" + red);
		console.log("Green" + green);
		console.log("Blue" + blue);
		let color  = 'rgb(' + red + ',' + green + ',' + blue + ')';
		star.style.backgroundColor = color;
		//here we should call the category
		// console.log('This is star type O');
		// commentary.innerHTML = "Spectral Type O";
		// commentary.style.display = "block";
	}


}

//show the properties of star - called on click
function showStarProperties(e)
{
	const temp = document.getElementById("tempSlider").value;
	const size = document.getElementById("sizeSlider").value;

	console.log("Temp:" + temp);
	console.log("Size:" + size);

	//Blue Stars - O, B
	if(temp > 30000  && (size > 2.7 && size <= 10)){
		commentary.innerHTML = "<h3>About Blue Stars</h3>";
		commentary.inerHTML += "<ul>";
		commentary.innerHTML += "<li>Spectral Type: O,B</li>";
		commentary.innerHTML += "<li>Prevalence: ~0.00003%</li>";
		commentary.innerHTML += "<li>Typical temperature: ~30,000K</li>";
		commentary.innerHTML += "<li>Typical luminosity: ~100 to ~1,000,000</li>";
		commentary.innerHTML += "<li>Typical mass: ~2.5 to ~90</li>";
		commentary.innerHTML += "<li>Typical age: < ~40 million years</li>";
		commentary.innerHTML += "</ul>";
		commentary.innerHTML += "<h4>Examples of blue stars</h4>";
		commentary.innerHTML += "<p>Examples of blue stars include 10 Lacertae, AE Aurigae, Delta Circini, V560 Carinae, Mu Columbae, Sigma Orionis, Theta1 Orionis C, Zeta Ophiuchi.</p>"
		commentary.style.display = "block";

	}

	//Yellow Dwarfs
	if((temp > 5200 && temp <= 7500) && ( size > 0.96 && size <= 1.4))
	{
		commentary.innerHTML = "<h3>About Yellow Dwarfs</h3>";
		commentary.inerHTML += "<ul>";
		commentary.innerHTML += "<li>Spectral Type: G</li>";
		commentary.innerHTML += "<li>Prevalence: ~10%</li>";
		commentary.innerHTML += "<li>Typical Temperature: ~5,200K to ~7,500K</li>";
		commentary.innerHTML += "<li>Typical Luminosity: ~0.6 to ~5.0</li>";
		commentary.innerHTML += "<li>Typical Mass: ~0.8 to ~1.4</li>";
		commentary.innerHTML += "<li>Typical Age: ~4 to ~17 billion years</li>";
		commentary.innerHTML += "</ul>";
		commentary.innerHTML += "<h4>Examples of yellow dwarf</h4>";
		commentary.innerHTML += "<p>Examples of yellow dwarf stars include Alpha Centauri A, Tau Ceti, 51 Pegasi.</p>"
		commentary.style.display = "block";

	}

	//Orange Dwarfs
	if((temp > 3700 && temp <= 5200) && (size > 0.7 && size <= 0.96))
	{
		commentary.innerHTML = "<h3>About Orange Dwarfs</h3>";
		commentary.inerHTML += "<ul>";
		commentary.innerHTML += "<li>Spectral Type: K</li>";
		commentary.innerHTML += "<li>Prevalence: ~10%</li>";
		commentary.innerHTML += "<li>Typical Temperature: ~3,700K to ~5,200K</li>";
		commentary.innerHTML += "<li>Typical Luminosity:~0.08 to ~0.6</li>";
		commentary.innerHTML += "<li>Typical Radius: ~0.7 to ~0.96</li>";
		commentary.innerHTML += "<li>Typical Mass: ~0.45 to ~0.8</li>";
		commentary.innerHTML += "<li>-Typical Age:  ~15 to ~30 billion years</li>";
		commentary.innerHTML += "</ul>";
		commentary.innerHTML += "<h4>Examples of orange dwarf</h4>";
		commentary.innerHTML += "<p>Examples of orange dwarf stars include Alpha Centauri B, Epsilon Indi.</p>"

		// commentary.innerHTML += "<br>";

		// commentary.innerHTML += "<h3>About Red Supergiants</h3>";
		// commentary.inerHTML += "<ul>";
		// commentary.innerHTML += "<li>Spectral Type: K, M</li>";
		// commentary.innerHTML += "<li>Prevalence: ~ 0.0001%</li>";
		// commentary.innerHTML += "<li>Typical Temperature: ~3,500 to ~4,500K</li>";
		// commentary.innerHTML += "<li>Typical Luminosity: ~1,000 to ~800,000</li>";
		// commentary.innerHTML += "<li>Typical Radius: ~100 to ~1650</li>";
		// commentary.innerHTML += "<li>Typical Mass: ~10 to ~40</li>";
		// commentary.innerHTML += "<li>-Typical Age: ~3 million to ~100 million years</li>";
		// commentary.innerHTML += "</ul>";
		// commentary.innerHTML += "<h4>Examples of red supergiants</h4>";
		// commentary.innerHTML += "<p>Examples of red supergiants include Alpha Herculis (Rasalgethi), Psi1 Aurigae, 119 Tauri, Antares, Betelgeuse, Mu Cephei, VV Cephei A.</p>"
		commentary.style.display = "block";

	}

	if((temp > 4000) && (size > 0.7))
	{
		commentary.innerHTML += "<h3>About Red Dwarfs</h3>";
		commentary.inerHTML += "<ul>";
		commentary.innerHTML += "<li>Spectral Type: K, M</li>";
		commentary.innerHTML += "<li>Prevalence: ~ ~73%</li>";
		commentary.innerHTML += "<li>Typical Temperature: ~4,000K</li>";
		commentary.innerHTML += "<li>Typical Luminosity: ~0.0001 to ~0.08</li>";
		commentary.innerHTML += "<li>Typical Radius: ~0.7</li>";
		commentary.innerHTML += "<li>Typical Mass: ~0.08 to ~0.45</li>";
		commentary.innerHTML += "<li>-Typical Age: Undetermined, but expected to be several trillion years</li>";
		commentary.innerHTML += "</ul>";
		commentary.innerHTML += "<h4>Examples of red dwarf</h4>";
		commentary.innerHTML += "<p>Examples of red dwarf stars include Proxima Centauri, TRAPPIST-1.</p>"
		commentary.style.display = "block";
	}
	else
	{
		commentary.innerHTML = "<h3>Such star does not exist</h3>"
		commentary.style.display = "block";
	}


}


//for the tooltip of the slider
function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;
  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
//   bubble.style.left = '0 px';
}
