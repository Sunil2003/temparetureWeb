function convertTemperature() {
	// Get the input temperature and scale
	var temperature = parseFloat(document.getElementById('inputTemp').value);
	var scale = document.getElementById('scale').value;
  
	// Perform the conversion
	var convertedTemp;
	if (scale === 'celsius') {
	  convertedTemp = celsiusToOtherScales(temperature);
	} else if (scale === 'fahrenheit') {
	  convertedTemp = fahrenheitToOtherScales(temperature);
	} else if (scale === 'kelvin') {
	  convertedTemp = kelvinToOtherScales(temperature);
	}
  
	// Display the converted temperature
	document.getElementById('outputTemp').textContent = convertedTemp;
  }
  
  // Conversion functions
  function celsiusToOtherScales(celsius) {
	var fahrenheit = (celsius * 9/5) + 32;
	var kelvin = celsius + 273.15;
	return "Fahrenheit: " + fahrenheit.toFixed(2) + "°F, Kelvin: " + kelvin.toFixed(2) + "K";
  }
  
  function fahrenheitToOtherScales(fahrenheit) {
	var celsius = (fahrenheit - 32) * 5/9;
	var kelvin = (fahrenheit + 459.67) * 5/9;
	return "Celsius: " + celsius.toFixed(2) + "°C, Kelvin: " + kelvin.toFixed(2) + "K";
  }
  
  function kelvinToOtherScales(kelvin) {
	var celsius = kelvin - 273.15;
	var fahrenheit = (kelvin * 9/5) - 459.67;
	return "Celsius: " + celsius.toFixed(2) + "°C, Fahrenheit: " + fahrenheit.toFixed(2) + "°F";
  }
  