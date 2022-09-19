function calcular() {
    var temp = window.document.getElementById("temp");
    var res = window.document.getElementById("res");
    var escolha = window.document.getElementById("escolha").value;
    var escolha2 = window.document.getElementById("escolha2").value;
    var celsiusfaren = 0;
  
    if (escolha == "celsius" && escolha2 == "faren2") {
      celsiusfaren = (Number(temp.value) * 1.8 + 32).toFixed(2);
      res.innerHTML = `${temp.value} °C é igual a ${celsiusfaren} °F.`;
    } else if (escolha == "celsius" && escolha2 == "kelvin2") {
      celsiusfaren = (Number(temp.value) + 273.15).toFixed(2);
      res.innerHTML = `${temp.value} °C é igual a ${celsiusfaren} K.`;
    } else if (escolha == "faren" && escolha2 == "celsius2") {
      celsiusfaren = ((Number(temp.value) - 32) * (5 / 9)).toFixed(2);
      res.innerHTML = `${temp.value} °F é igual a ${celsiusfaren} °C.`;
    } else if (escolha == "faren" && escolha2 == "kelvin2") {
      celsiusfaren = ((Number(temp.value) - 32) * (5 / 9) + 273.15).toFixed(2);
      res.innerHTML = `${temp.value} °F é igual a ${celsiusfaren} K.`;
    } else if (escolha == "kelvin" && escolha2 == "celsius2") {
      celsiusfaren = (Number(temp.value) - 273.15).toFixed(2);
      res.innerHTML = `${temp.value} K é igual a ${celsiusfaren} °C.`;
    } else if (escolha == "kelvin" && escolha2 == "faren2") {
      celsiusfaren = ((Number(temp.value) - 273.15) * (9 / 5) + 32).toFixed(2);
      res.innerHTML = `${temp.value} K é igual a ${celsiusfaren} °F.`;
    } else {
      res.innerHTML = "Escolha Unidades de Temperaturas diferentes";
    }
}  