// Fetch the bit sequence input to disallow them from placing anything other than bits.
function validateBitSequenceInput(input) {
  const regex = new RegExp(/^[01]+$/);

  return regex.test(input);
}

/** Listener to inputs on the bit sequence to calculate their decimal and hex counterparts. */
document
  .getElementById("bit-sequence-input")
  .addEventListener("input", function (e) {
    // Obtain input event information.
    const { data, target } = e;

    // Validate.
    if (!validateBitSequenceInput(data))
      // Do not allow the input to be placed.
      target.value = target.value.slice(0, -1);

    // Set the element bit-sequence-decimal to the decimal value of the input.
    document.getElementById(
      "bit-sequence-decimal"
    ).innerHTML = `DEC: ${parseInt(target.value, 2).toString(10)}`;

    // Set the element bit-sequence-hex to the hexadecimal value of the input.
    document.getElementById("bit-sequence-hex").innerHTML = `HEX: ${parseInt(
      target.value,
      2
    )
      .toString(16)
      .toUpperCase()}`;

    document.getElementById(
      "bit-sequence-amount"
    ).innerHTML = `Amount Bits: ${target.value.length}`;

    return;
  });

/** Self-reviews for each encoding type on how I understand their inner workings. */
document
  .getElementById("bit-sequence-encoding")
  .addEventListener("change", function (e) {
    // Grab the DOM element with the description.
    const element = document.getElementById("encoding-desc");

    switch (e.target.value) {
      case "NRZ":
        return (element.innerHTML = `<b>NRZ (Non-Return to Zero)</b> es la forma más simple de implementar codificación. Cada bit positivo es un voltaje positivo (o negativo) y el bit 0 es ausencia de voltaje. Por esto es unipolar. Este esquema de codificación tiene <b>muchos problemas de componente continua</b> simplemente por su naturaleza de funcionamiento.`);
      case "NRZL":
        return (element.innerHTML = `El NRZL es el más simple de implementar, pero es también el que mayor problemas de continuidad tiene, debido a que no tiene mucha alternancia (manda todo como si fuera el binario lógico literal en la señal), lo que puede producir problemas de desync entre el emisor y el receptor.`);
      case "NRZI":
        return (element.innerHTML = `Este es una variación del <b>NRZL</b>, pero invertido. Para este caso lo que ocurre con la codificación es que, con tal de incluir un poco más de alternancia, cada valor de un bit 1 se invierte, mientras que los valores de un bit 0 se mantienen. Esto permite que la señal tenga un poco más de alternancia, pero igual presenta el mismo problema que el original (a menos que mande una cadena de puros 1s, los 0s siempre me introducen continuidad).<br>Hay 2 subgrupos de este, está el <b>NRZ-M</b> y el <b>NRZ-S</b>. Sus unicas diferencias son definir cual de los dos es el bit que alterna.`);
      case "RZ":
        return (element.innerHTML = `El primo hermano de los <b>NRZ</b>. Este se llama Return To Zero, y tiene una solución un poco más robusta para la solución de la continuidad. Hace que <i>cada bit tenga una alternancia de voltaje a la mitad de pulso</i>, es decir, el pulso dura la mitad de la duración del bit. Esto trae alternancia para todos los bits que se transmiten. El nombre justamente hace referencia a eso, hace mitad de pulso y luego vuelve a 0.`);
      case "MANCH":
        return (element.innerHTML = `Uno muy polenta, utilizado en las redes de hoy con el cable <b>Ethernet</b> (gracias Pato por el dato). Este método de codificación es el que <b>menos continuidad tiene</b>, y con mucha razón.<br/>Similar a como funciona el <b>RZ</b>, acá también el pulso durará la mitad del bit, pero introduciendo el uso de patrones y alternancia (como hace <b>NRZ-L</b>). En este caso, Manchester le asigna a todos los <b>1s</b> y <b>0s</b> un patrón de pulsos representativo, entonces podemos por ejemplo tener que el 1 es representado por medio pulso hacia arriba y medio hacia abajo, y el 0 es invertido a ese patrón.<img src="public/manchester-encoding-example.jpg"/>`);
      case "MANCHD":
        return (element.innerHTML = `Este también está muy bueno. Es muy, pero muy parecido a Manchester, con la diferencia que ahora no tienen patrones específicos cada bit. Existe un patrón global que se le asigna al comienzo de la comunicación a un bit, y luego existe un bit que alterna ese patrón (generalmente es el 1) como hace <b>NRZ-I</b>.<br/>Entonces, se comienza con un patrón, pero cada vez que se lee un bit <b>1</b>, se invierte y se alterna el patrón. Esto permite que la señal tenga mucha alternancia, y que no tenga problemas de continuidad.<img src="public/differential-manchester-encoding-example.jpg"/>`);
      case "AMI":
        return (element.innerHTML = `La codificación <b>AMI</b> plantea también una solución al problema de continuidad, pero de una forma distinta. En este caso, se utiliza un patrón de alternancia de voltaje para los bits 1, y se utiliza el 0 para representar un voltaje neutro.<br/>Entonces, si tenemos un bit 1, se alterna el voltaje (si antes el 1 se representaba con un voltaje positivo, ahora el siguiente 1 será un voltaje negativo), y si tenemos un bit 0, se mantiene el voltaje neutro.<br/>Este es un tipo de codificación <b>multipolar</b>, ya que permite tener <b>3 valores de voltaje</b> para representar cada bit.<img src="public/ami-encoding.png"/>`);
      case "PSEUDO":
        return (element.innerHTML = `Exactamente igual a <b>AMI</b>, solo que el bit que causa la alternancia entre voltajes altos y bajos es el 0 y no el 1.`);
      case "B8ZS":
        return (element.innerHTML = `Un sub-tipo validador de AMI. Introduce alternancia buscando la repetición de los bits nulos (0), y cuando encuentra una secuencia de 8 bits nulos, los reemplaza por una secuencia de 8 bits que alterna el voltaje.<br/>Esto permite que la señal tenga alternancia, pero también permite que se pueda detectar cuando se pierde la sincronización entre el emisor y el receptor, ya que si se pierde la sincronización, se pierde la secuencia de 8 bits nulos, y por ende se pierde la secuencia de 8 bits que alterna el voltaje.<br/>Al encontrar una secuencia consecutiva de 8 bits en 0, los reemplaza por el patrón <b>000VB0VB</b>, donde <b>V</b> es una violación de código (alternancia que no corresponde con las reglas de AMI) y <b>B</b> es un bit correcto con respecto al anterior.`);
      case "HDB3":
        return (element.innerHTML = `Un sub-tipo validador de AMI. Introduce alternancia buscando la repetición de los bits nulos (0), y cuando encuentra una secuencia de 4 bits nulos, los reemplaza por una secuencia de 4 bits en un patrón definido.<br/>Al encontrar 4 bits consecutivos en 0, aplica el patrón <b>000V</b>, donde <b>V</b> es una violación del código de AMI.<br/>Este tiene una particularidad, que es la distinción entre <b>par</b> e <b>impar</b>. Este conteo de paridad se da dependiendo de <i>cuantos pulsos pasaron desde la última vez que ocurrió una ruptura de código</i>. Dependiendo de este conteo:<ul><li>Si es par, el patrón es <b>B00V</b></li><li>Si es impar, el patrón es <b>000V</b></li></ul>`);
      case "MLT3":
        return (element.innerHTML = `Este tipo de codificación tiene problemas de continuidad, y se debe a que, si bien es algo extraño en comparación al resto de los otros tipos de codificación, este <b>oscila</b> entre 2 polaridades y no transmitir nada para representar los bits. Cada vez que existe un <b>1</b>, se oscilará a un valor de voltaje (V<sub>+</sub>, V<sub>0</sub> o V<sub>-</sub>) lo que lo transforma en una codificación <b>multi-polar</b>. Los bits en 0 mantendrán el último voltaje utilizado.`);
      case "2B1Q":
        return (element.innerHTML = `<b>2B1Q</b> forma parte de los esquemas de codificación más usados de <b>mBnL</b>. Es un esquema de codificación binario de 2 elementos de dato en 1 elemento de señal. Algo importante de los esquemas <b>mBnL</b> es la existencia del concepto de pesos; cada elemento de dato representado tiene un peso con respecto al voltaje (combinación de voltajes) que transmite, se debe <b>equilibrar</b> cada uno al momento de trascenderlos utilizando la <b>inversión</b> de sus componentes con respecto al peso anterior obtenido.<img src="public/table_2b1q.jpg" />`);
      case "8B6T":
        return (element.innerHTML = `<b>8B6T</b>... Este si que es jodido. De la misma forma que 2B1Q lo hace con 2 bits por 1 elemento de señal transmitido, este hace 8 bits (1 byte) en 6 elementos de señal. Los valores de voltaje asignados a cada uno de los elementos de dato <b>salen de una tabla</b>, no son calculables, por ende en esta solución tuve que manualmente portar la tabla al esquema de codificación para poder implementarlo. Tiene 256 elementos de datos y 729 patrones posibles, por lo tanto una redundancia de 473 elementos de señal que no se utilizan para representar información, si no sincronizar relojes o detección de errores. De la misma forma que los esquemas <b>mBnL</b>, los pesos de cada patrón de señal importan y deben tenerse en cuenta para poder invertir las polaridades para el balanceo y equilibrio de la señal.<br/>Acá un ejemplo de como se puede ver una secuencia de bits en este esquema de codificación (mostrando la inversión). Dejo la secuencia de bits acá para que se pueda copiar en la caja de texto y probarlo: <b>000100010101001101010000</b><br/><img src="public/8B6T-encoding.jpg" />`);
    }
  });
