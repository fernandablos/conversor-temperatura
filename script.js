function converter() {
  const celsius = document.getElementById("celsius").value;
  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("resultado").textContent = 
    `${celsius}°C equivalem a ${fahrenheit.toFixed(2)}°F`;
}
