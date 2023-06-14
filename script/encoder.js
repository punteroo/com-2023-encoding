/** Encoding type names to match against. */
const ENCODING_NAMES = {
  NRZ: {},
  NRZL: {},
  NRZI: {},
  RZ: {},
  MANCH: {},
  MANCHD: {},
  AMI: {},
  PSEUDO: {},
  B8ZS: {},
  HDB3: {},
  MLT3: {},
};

/** god, js sucks so much, get me on typescript pls */
/** Posdata: Si, escribo todo mi código en inglés por costumbre, lo siento si parece raro pero es conveniencia, chau "ñ" */
class Encoder {
  encoding = "";
  bitDurationSeconds = 1.0;

  constructor(encoding, bitDurationSeconds = 1.0) {
    // Is it a valid encoding?
    if (!Object.keys(ENCODING_NAMES).includes(encoding))
      throw Error(`INVALID ENCODING TYPE ${encoding}!`);

    this.encoding = encoding;
    this.bitDurationSeconds = bitDurationSeconds;
  }

  /**
   * Uses the set encoding to encode a bit sequence.
   *
   * @param {string} bitSequence The bit sequence to encode.
   *
   * @returns {{ x: number[], y: number[]}} An array of plot points to graph.
   */
  encode(bitSequence) {
    switch (this.encoding) {
      case "NRZ":
        return this.generateNRZPlotPoints(bitSequence);
      case "NRZL":
        return this.generateNRZLPlotPoints(bitSequence);
      case "NRZI":
        return this.generateNRZIPlotPoints(bitSequence);
      case "RZ":
        return this.generateRZPlotPoints(bitSequence);
      case "MANCH":
        return this.generateMANCHPlotPoints(bitSequence);
      case "MANCHD":
        return this.generateMANCHDPlotPoints(bitSequence);
      case "AMI":
        return this.generateAMIPlotPoints(bitSequence);
      case "PSEUDO":
        return this.generatePSEUDOPlotPoints(bitSequence);
      case "B8ZS":
        return this.generateB8ZSPlotPoints(bitSequence);
      case "HDB3":
        return this.generateHDB3PlotPoints(bitSequence);
      case "MLT3":
        return this.generateMLT3PlotPoints(bitSequence);
    }

    return null;
  }

  /**
   * Method that generates an encoded bit sequence (in NRZ) in the form of plot points.
   *
   * @param {string} bitSequence The bit sequence to encode.
   *
   * @returns {{ x: number[], y: number[]}} An array of plot points.
   */
  generateNRZPlotPoints(bitSequence) {
    const x = [],
      y = [];

    // Iterate over the bit sequence.
    for (let i = 0; i < bitSequence.length; i++) {
      // Obtain the bit.
      const bit = +bitSequence[i];

      // NRZ simply encodes a 1 as a high voltage and a 0 as no voltage.
      x.push(i, i + this.bitDurationSeconds);
      y.push(bit ? 1 : 0, bit ? 1 : 0);
    }

    return { x, y };
  }

  /**
   * Method that generates an encoded bit sequence (in NRZL) in the form of plot points.
   *
   * @param {string} bitSequence The bit sequence to encode.
   *
   * @returns {{ x: number[], y: number[]}} An array of plot points.
   */
  generateNRZLPlotPoints(bitSequence) {
    const x = [],
      y = [];

    // Iterate over the bit sequence.
    for (let i = 0; i < bitSequence.length; i++) {
      // Obtain the bit.
      const bit = +bitSequence[i];

      // NRZL encodes a 1 as a high voltage and a 0 as a low voltage.
      // The voltage is held for the duration of the bit.
      x.push(i, i + this.bitDurationSeconds);
      y.push(bit ? bit : -1, bit ? bit : -1);
    }

    return { x, y };
  }

  /**
   * Method that generates an encoded bit sequence (in NRZI) in the form of plot points.
   *
   * @param {string} bitSequence The bit sequence to encode.
   *
   * @returns {{ x: number[], y: number[]}} An array of plot points.
   */
  generateNRZIPlotPoints(bitSequence) {
    const x = [],
      y = [];

    // Create a flag that keeps track of the last bit voltage.
    let flag = 1;

    // Iterate over the bit sequence.
    for (let i = 0; i < bitSequence.length; i++) {
      // Obtain the bit.
      const bit = +bitSequence[i];

      // Alternate the flag value based on memory.
      flag = bit ? (flag ? 0 : 1) : flag;

      // NRZI encodes a 1 as an alternating sequence, whereas 0 is the constant voltage.
      // The voltage is held for the duration of the bit.
      x.push(i, i + this.bitDurationSeconds);

      y.push(flag, flag);
    }

    return { x, y };
  }

  /**
   * Method that generates an encoded bit sequence (in RZ) in the form of plot points.
   *
   * @param {string} bitSequence The bit sequence to encode.
   *
   * @returns {{ x: number[], y: number[]}} An array of plot points.
   */
  generateRZPlotPoints(bitSequence) {
    const x = [],
      y = [];

    // Iterate over the bit sequence.
    for (let i = 0; i < bitSequence.length; i++) {
      // Obtain the bit.
      const bit = +bitSequence[i];

      // RZ encodes all 1s as a low voltage and a high voltage for half the duration of the bit. 0s are the opposite.
      // The voltage is held for half the duration of the bit.
      x.push(
        i,
        i + this.bitDurationSeconds / 2,
        i + this.bitDurationSeconds / 2,
        i + this.bitDurationSeconds
      );
      y.push(...(bit ? [-1, -1, 0, 0] : [1, 1, 0, 0]));
    }

    return { x, y };
  }

  /**
   * Method that generates an encoded bit sequence (in Manchester) in the form of plot points.
   *
   * @param {string} bitSequence The bit sequence to encode.
   *
   * @returns {{ x: number[], y: number[]}} An array of plot points.
   */
  generateMANCHPlotPoints(bitSequence) {
    const x = [],
      y = [];

    // Manchester takes a pattern for a bit, and inverts the pattern for the other bit.
    // The voltage is held for the duration of the bit. Let's define the pattern for a 1.
    const pattern1 = [1, 1, 0, 0],
      pattern0 = [0, 0, 1, 1];

    // Iterate over the bit sequence.
    for (let i = 0; i < bitSequence.length; i++) {
      // Obtain the bit.
      const bit = +bitSequence[i];
      // Push the plot points.
      x.push(
        i,
        i + this.bitDurationSeconds / 2,
        i + this.bitDurationSeconds / 2,
        i + this.bitDurationSeconds
      );
      y.push(...(bit ? pattern1 : pattern0));
    }

    return { x, y };
  }

  /**
   * Method that generates an encoded bit sequence (in Differential Manchester) in the form of plot points.
   *
   * @param {string} bitSequence The bit sequence to encode.
   *
   * @returns {{ x: number[], y: number[]}} An array of plot points.
   */
  generateMANCHDPlotPoints(bitSequence) {
    const x = [],
      y = [];

    // Differential Manchester is similar to Manchester, however it implements inversion.
    // If we have a 1, we invert the pattern. If we have a 0, we keep the pattern.
    // We implement the usage then of a flag pattern.
    const pattern = [0, 0, 1, 1];

    // Create a flag that keeps track of the last bit voltage.
    let flag = 1;

    // Iterate over the bit sequence.
    for (let i = 0; i < bitSequence.length; i++) {
      // Obtain the bit.
      const bit = +bitSequence[i];

      // If the bit is 1, invert the flag.
      flag = bit ? (flag ? 0 : 1) : flag;

      // Push the plot points.
      x.push(
        i,
        i + this.bitDurationSeconds / 2,
        i + this.bitDurationSeconds / 2,
        i + this.bitDurationSeconds
      );
      y.push(...(flag ? pattern : pattern.slice().reverse()));
    }

    return { x, y };
  }

  /**
   * Method that generates an encoded bit sequence (in AMI) in the form of plot points.
   *
   * @param {string} bitSequence The bit sequence to encode.
   *
   * @returns {{ x: number[], y: number[]}} An array of plot points.
   */
  generateAMIPlotPoints(bitSequence) {
    const x = [],
      y = [];

    // AMI encodes a 1 as a high voltage, but inverts the voltage value for every 1 read. 0s just maintain no voltage.
    let flag = 1;

    // Iterate over the bit sequence.
    for (let i = 0; i < bitSequence.length; i++) {
      // Obtain the bit.
      const bit = +bitSequence[i];

      // If the bit is 1, invert the flag.
      flag = bit ? (flag != -1 ? -1 : 1) : flag;

      // Push the plot points.
      x.push(i, i + this.bitDurationSeconds);
      y.push(bit ? flag : 0, bit ? flag : 0);
    }

    return { x, y };
  }

  /**
   * Method that generates an encoded bit sequence (in Pseudoternary) in the form of plot points.
   *
   * @param {string} bitSequence The bit sequence to encode.
   *
   * @returns {{ x: number[], y: number[]}} An array of plot points.
   */
  generatePSEUDOPlotPoints(bitSequence) {
    const x = [],
      y = [];

    // Pseudoternary encodes a 0 as a high voltage, but inverts the voltage value for every 0 read. 1s just maintain no voltage.
    let flag = 1;

    // Iterate over the bit sequence.
    for (let i = 0; i < bitSequence.length; i++) {
      // Obtain the bit.
      const bit = +bitSequence[i];

      // If the bit is 0, invert the flag.
      flag = bit ? flag : flag != -1 ? -1 : 1;

      // Push the plot points.
      x.push(i, i + this.bitDurationSeconds);
      y.push(bit ? 0 : flag, bit ? 0 : flag);
    }

    return { x, y };
  }

  /**
   * Method that generates an encoded bit sequence (in B8ZS) in the form of plot points.
   *
   * @param {string} bitSequence The bit sequence to encode.
   *
   * @returns {{ x: number[], y: number[]}} An array of plot points.
   */
  generateB8ZSPlotPoints(bitSequence) {
    const x = [],
      y = [];

    // B8ZS is a sub-type for AMI. Since AMI does nothing about 0s, this method provides some extra alternance guarantees.
    // Whenever there are 8 0s in a row, we replace them with a special pattern known as 000VB0VB, where V is a code violation, and B a correct bit alternance.
    // The voltage is held for the duration of the bit.
    let flag = 1;

    // Iterate over the bit sequence.
    for (let i = 0; i < bitSequence.length; i++) {
      // Do a bitwise lookup for the 8 0s (only if we have at least 8 bits)
      const bit8 =
        bitSequence.slice(i, i + 8).length == 8
          ? parseInt(bitSequence.slice(i, i + 8)) == 0
          : false;

      // Do we have to introduce a code violation?
      if (bit8) {
        // Introduce the violation pattern corresponding to the active flag and skip the next 7 bits.
        for (let j = 0; j < 8; j++)
          x.push(i + j, i + j + this.bitDurationSeconds);

        // When j % 3 = 0 that means a violation must be introduced, so we negate our current flag value.
        // If that is not the case, we just use the flag value for indexes 4 and 7.
        // Otherwise, we just use 0 (no voltage)
        // const bit = j % 3 == 0 && j > 0 ? -flag : [4, 7].includes(j) ? flag : 0;

        // Ignore what's above (sorry pato :(, couldn't provide a high IQ dynamic solution, we're going static)
        // We're just going to generate manually the plot points for the violation pattern.
        y.push(
          0,
          0,
          0,
          0,
          0,
          0,
          flag,
          flag,
          -flag,
          -flag,
          0,
          0,
          -flag,
          -flag,
          flag,
          flag
        );

        // Skip the next 8 bits.
        i += 8;
      }

      // Obtain the bit.
      const bit = +bitSequence[i];

      // If the bit is 1, invert the flag.
      flag = bit ? (flag != -1 ? -1 : 1) : flag;

      // Push the plot points.
      x.push(i, i + this.bitDurationSeconds);
      y.push(bit ? flag : 0, bit ? flag : 0);
    }

    return { x, y };
  }

  /**
   * Method that generates an encoded bit sequence (in HDB3) in the form of plot points.
   *
   * @param {string} bitSequence The bit sequence to encode.
   *
   * @returns {{ x: number[], y: number[]}} An array of plot points.
   */
  generateHDB3PlotPoints(bitSequence) {
    const x = [],
      y = [];

    // HDB3 is quite different, since it distinguishes between 2 subtypes: even or odd.
    // This parity is dictated by the amount of bits passed since the last violation ocurred.
    // If even, the pattern is B00V
    // If odd, the pattern is 000V
    //  - Note (thanks Pato, again): 0 is counted as even (ALTHOUGH PARITY OF 0 IS NOT LIKE THIS IN MATH)
    //
    // Otherwise it works the same exact way as B8ZS.
    let flag = 1,
      sinceLastViolation = 0;

    // Iterate over the bit sequence.
    for (let i = 0; i < bitSequence.length; i++) {
      // Do a bitwise lookup for the 4 0s (only if we have at least 4 bits)
      const bit4 =
        bitSequence.slice(i, i + 4).length == 4
          ? parseInt(bitSequence.slice(i, i + 4)) == 0
          : false;

      // Do we have to introduce a code violation?
      if (bit4) {
        // Introduce the violation pattern corresponding to the active flag and skip the next 3 bits.
        for (let j = 0; j < 4; j++)
          x.push(i + j, i + j + this.bitDurationSeconds);

        // Insert the pattern manually.
        const evenPattern = [-flag, -flag, 0, 0, 0, 0, -flag, -flag],
          oddPattern = [0, 0, 0, 0, 0, 0, flag, flag],
          isEven = sinceLastViolation % 2 == 0 || sinceLastViolation == 0;

        y.push(...(isEven ? evenPattern : oddPattern));

        // Invert the bit if it's even.
        flag = isEven ? -flag : flag;

        // Reset the violation counter.
        sinceLastViolation = 0;

        // Skip the next 4 bits.
        i += 3;
      } else {
        // Obtain the bit.
        const bit = +bitSequence[i];

        // If the bit is 1, invert the flag.
        flag = bit ? (flag != -1 ? -1 : 1) : flag;

        // Push the plot points.
        x.push(i, i + this.bitDurationSeconds);
        y.push(bit ? flag : 0, bit ? flag : 0);

        sinceLastViolation++;
      }
    }

    return { x, y };
  }

  /**
   * Method that generates an encoded bit sequence (in MLT-3) in the form of plot points.
   *
   * @param {string} bitSequence The bit sequence to encode.
   *
   * @returns {{ x: number[], y: number[]}} An array of plot points.
   */
  generateMLT3PlotPoints(bitSequence) {
    const x = [],
      y = [];

    // MLT-3 is kind of similar to NRZ-I. However, instead of using 2 levels for voltage, it uses 3.
    // Every time a 1 is found, the voltage is reduced by 1 level. Once the level reaches low voltage, it is inverted to go back up again. Basically an oscillation.
    // Every 0 however maintains the current voltage level.
    let flag = 1,
      direction = 0;

    // Iterate over the bit sequence.
    for (let i = 0; i < bitSequence.length; i++) {
      // Obtain the bit.
      const bit = +bitSequence[i];

      // If the bit is 1, either reduce the flag by 1 if the value is 1 or add 1 to it if already at the bottom.
      direction = bit
        ? flag == -1 || flag == 1
          ? !direction
          : direction
        : direction;
      flag = bit ? (direction ? flag - 1 : flag + 1) : flag;

      // Push the plot points.
      x.push(i, i + this.bitDurationSeconds);
      y.push(flag, flag);
    }

    return { x, y };
  }
}
