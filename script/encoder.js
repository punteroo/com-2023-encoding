/**
 * i hate javascript
 *
 * @returns {{ encodings: { [p: number]: number[] }}}
 */
function parse8B6TEncodingTable() {
  const encodingAsJsonString =
    '{"encodings":{"0":[-1,1,0,0,-1,1],"1":[0,-1,1,-1,1,0],"2":[0,-1,1,0,-1,1],"3":[0,-1,1,1,0,-1],"4":[-1,1,0,1,0,-1],"5":[1,0,-1,-1,1,0],"6":[1,0,-1,0,-1,1],"7":[1,0,-1,1,0,-1],"8":[-1,1,0,0,1,-1],"9":[0,-1,1,1,-1,0],"10":[0,-1,1,0,1,-1],"11":[0,-1,1,-1,0,1],"12":[-1,1,0,-1,0,1],"13":[1,0,-1,1,-1,0],"14":[1,0,-1,0,1,-1],"15":[1,0,-1,-1,0,1],"16":[0,-1,-1,1,0,1],"17":[-1,0,-1,0,1,1],"18":[-1,0,-1,1,0,1],"19":[-1,0,-1,1,1,0],"20":[0,-1,-1,1,1,0],"21":[-1,-1,0,0,1,1],"22":[-1,-1,0,1,0,1],"23":[-1,-1,0,1,1,0],"24":[-1,1,0,-1,1,0],"25":[1,-1,0,-1,1,0],"26":[-1,1,1,-1,1,0],"27":[1,0,0,-1,1,0],"28":[1,0,0,1,-1,0],"29":[-1,1,1,1,-1,0],"30":[1,-1,0,1,-1,0],"31":[-1,1,0,1,-1,0],"32":[-1,1,1,-1,0,0],"33":[1,0,0,1,-1,-1],"34":[-1,1,0,-1,1,1],"35":[1,-1,0,-1,1,1],"36":[1,-1,0,1,0,0],"37":[-1,1,0,1,0,0],"38":[1,0,0,-1,0,0],"39":[-1,1,1,1,-1,-1],"40":[0,1,1,-1,0,-1],"41":[1,0,1,0,-1,-1],"42":[1,0,1,-1,0,-1],"43":[1,0,1,-1,-1,0],"44":[0,1,1,-1,-1,0],"45":[1,1,0,0,-1,-1],"46":[1,1,0,-1,0,-1],"47":[1,1,0,-1,-1,0],"48":[1,-1,0,0,-1,1],"49":[0,1,-1,-1,1,0],"50":[0,1,-1,0,-1,1],"51":[0,1,-1,1,0,-1],"52":[1,-1,0,1,0,-1],"53":[-1,0,1,-1,1,0],"54":[-1,0,1,0,-1,1],"55":[-1,0,1,1,0,-1],"56":[1,-1,0,0,1,-1],"57":[0,1,-1,1,-1,0],"58":[0,1,-1,0,1,-1],"59":[0,1,-1,-1,0,1],"60":[1,-1,0,-1,0,1],"61":[-1,0,1,1,-1,0],"62":[-1,0,1,0,1,-1],"63":[-1,0,1,-1,0,1],"64":[-1,0,0,1,0,1],"65":[0,-1,0,0,1,1],"66":[0,-1,0,1,0,1],"67":[0,-1,0,1,1,0],"68":[-1,0,0,1,1,0],"69":[0,0,-1,0,1,1],"70":[0,0,-1,1,0,1],"71":[0,0,-1,1,1,0],"72":[0,0,1,0,0,0],"73":[1,1,-1,0,0,0],"74":[1,-1,1,0,0,0],"75":[-1,1,1,0,0,0],"76":[0,1,-1,0,0,0],"77":[1,0,-1,0,0,0],"78":[0,-1,1,0,0,0],"79":[-1,0,1,0,0,0],"80":[1,-1,-1,1,0,1],"81":[-1,1,-1,0,1,1],"82":[-1,1,-1,1,0,1],"83":[-1,1,-1,1,1,0],"84":[1,-1,-1,1,1,0],"85":[-1,-1,1,0,1,1],"86":[-1,-1,1,1,0,1],"87":[-1,-1,1,1,1,0],"88":[-1,-1,0,1,1,1],"89":[-1,0,-1,1,1,1],"90":[0,-1,-1,1,1,1],"91":[0,-1,-1,0,1,1],"92":[1,-1,-1,0,1,1],"93":[-1,0,0,0,1,1],"94":[0,1,1,1,-1,-1],"95":[0,1,1,-1,0,0],"96":[0,1,1,0,-1,0],"97":[1,0,1,-1,0,0],"98":[1,0,1,0,-1,0],"99":[1,0,1,0,0,-1],"100":[0,1,1,0,0,-1],"101":[1,1,0,-1,0,0],"102":[1,1,0,0,-1,0],"103":[1,1,0,0,0,-1],"104":[0,1,1,-1,1,-1],"105":[1,0,1,1,-1,-1],"106":[1,0,1,-1,1,-1],"107":[1,0,1,-1,-1,1],"108":[0,1,1,-1,-1,1],"109":[1,1,0,1,-1,-1],"110":[1,1,0,-1,1,-1],"111":[1,1,0,-1,-1,1],"112":[0,0,0,1,1,-1],"113":[0,0,0,1,-1,1],"114":[0,0,0,-1,1,1],"115":[0,0,0,1,0,0],"116":[0,0,0,1,0,-1],"117":[0,0,0,1,-1,0],"118":[0,0,0,-1,0,1],"119":[0,0,0,-1,1,0],"120":[1,1,1,-1,-1,0],"121":[1,1,1,-1,0,-1],"122":[1,1,1,0,-1,-1],"123":[0,1,1,0,-1,-1],"124":[-1,0,0,-1,1,1],"125":[-1,0,0,1,0,0],"126":[1,-1,-1,-1,1,1],"127":[1,-1,-1,1,0,0],"128":[-1,0,0,1,-1,1],"129":[0,-1,0,-1,1,1],"130":[0,-1,0,1,-1,1],"131":[0,-1,0,1,1,-1],"132":[-1,0,0,1,1,-1],"133":[0,0,-1,-1,1,1],"134":[0,0,-1,1,-1,1],"135":[0,0,-1,1,1,-1],"136":[-1,0,0,0,1,0],"137":[0,-1,0,1,0,0],"138":[0,-1,0,0,1,0],"139":[0,-1,0,0,0,1],"140":[-1,0,0,0,0,1],"141":[0,0,-1,1,0,0],"142":[0,0,-1,0,1,0],"143":[0,0,-1,0,0,1],"144":[1,-1,-1,1,-1,1],"145":[-1,1,-1,-1,1,1],"146":[-1,1,-1,1,-1,1],"147":[-1,1,-1,1,1,-1],"148":[1,-1,-1,1,1,-1],"149":[-1,-1,1,-1,1,1],"150":[-1,-1,1,1,-1,1],"151":[-1,-1,1,1,1,-1],"152":[1,-1,-1,0,1,0],"153":[-1,1,-1,1,0,0],"154":[-1,1,-1,0,1,0],"155":[-1,1,-1,0,0,1],"156":[1,-1,-1,0,0,1],"157":[-1,-1,1,1,0,0],"158":[-1,-1,1,0,1,0],"159":[-1,-1,1,0,0,1],"160":[-1,1,1,0,-1,0],"161":[1,-1,1,-1,0,0],"162":[1,-1,1,0,-1,0],"163":[1,-1,1,0,0,-1],"164":[-1,1,1,0,0,-1],"165":[1,1,-1,-1,0,0],"166":[1,1,-1,0,-1,0],"167":[1,1,-1,0,0,-1],"168":[-1,1,1,-1,1,-1],"169":[1,-1,1,1,-1,-1],"170":[1,-1,1,-1,1,-1],"171":[1,-1,1,-1,-1,1],"172":[-1,1,1,-1,-1,1],"173":[1,1,-1,1,-1,-1],"174":[1,1,-1,-1,1,-1],"175":[1,1,-1,-1,-1,1],"176":[1,0,0,0,-1,0],"177":[0,1,0,-1,0,0],"178":[0,1,0,0,-1,0],"179":[0,1,0,0,0,-1],"180":[1,0,0,0,0,-1],"181":[0,0,1,-1,0,0],"182":[0,0,1,0,-1,0],"183":[0,0,1,0,0,-1],"184":[1,0,0,-1,1,-1],"185":[0,1,0,1,-1,-1],"186":[0,1,0,-1,1,-1],"187":[0,1,0,-1,-1,1],"188":[1,0,0,-1,-1,1],"189":[0,0,1,1,-1,-1],"190":[0,0,1,-1,1,-1],"191":[0,0,1,-1,-1,1],"192":[-1,1,0,1,-1,1],"193":[0,-1,1,-1,1,1],"194":[0,-1,1,1,-1,1],"195":[0,-1,1,1,1,-1],"196":[-1,1,0,1,1,-1],"197":[1,0,-1,-1,1,1],"198":[1,0,-1,1,-1,1],"199":[1,0,-1,1,1,-1],"200":[-1,1,0,0,1,0],"201":[0,-1,1,1,0,0],"202":[0,-1,1,0,1,0],"203":[0,-1,1,0,0,1],"204":[-1,1,0,0,0,1],"205":[1,0,-1,1,0,0],"206":[1,0,-1,0,1,0],"207":[1,0,-1,0,0,1],"208":[1,-1,0,1,-1,1],"209":[0,1,-1,-1,1,1],"210":[0,1,-1,1,-1,1],"211":[0,1,-1,1,1,-1],"212":[1,-1,0,1,1,-1],"213":[-1,0,1,-1,1,1],"214":[-1,0,1,1,-1,1],"215":[-1,0,1,1,1,-1],"216":[1,-1,0,0,1,0],"217":[0,1,-1,1,0,0],"218":[0,1,-1,0,1,0],"219":[0,1,-1,0,0,1],"220":[1,-1,0,0,0,1],"221":[-1,0,1,1,0,0],"222":[-1,0,1,0,1,0],"223":[-1,0,1,0,0,1],"224":[-1,1,1,0,-1,1],"225":[1,-1,1,1,0],"226":[1,-1,1,0,-1,1],"227":[1,-1,1,1,0,-1],"228":[-1,1,1,1,0,-1],"229":[1,1,-1,-1,1,0],"230":[1,1,-1,0,-1,1],"231":[1,1,-1,1,0,-1],"232":[-1,1,1,0,1,-1],"233":[1,-1,1,1,-1,0],"234":[1,-1,1,0,1,-1],"235":[1,-1,1,-1,0,1],"236":[-1,1,1,-1,0,1],"237":[1,1,-1,1,-1,0],"238":[1,1,-1,0,1,-1],"239":[1,1,-1,-1,0,1],"240":[1,0,0,0,-1,1],"241":[0,1,0,-1,1,0],"242":[0,1,0,0,-1,1],"243":[0,1,0,1,0,-1],"244":[1,0,0,1,0,-1],"245":[0,0,1,-1,1,0],"246":[0,0,1,0,-1,1],"247":[0,0,1,1,0,-1],"248":[1,0,0,0,1,-1],"249":[0,1,0,1,-1,0],"250":[0,1,0,0,1,-1],"251":[0,1,0,-1,0,1],"252":[1,0,0,-1,0,1],"253":[0,0,1,1,-1,0],"254":[0,0,1,0,1,-1],"255":[0,0,1,-1,0,1]}}';

  // Now parse it into an object.
  return JSON.parse(encodingAsJsonString);
}

/**
 * Turns a sequence of bytes into a sequence of bits.
 *
 * @param {string[]} bytes The bytes to convert.
 *
 * @returns {string} The bit sequence.
 */
function bytesToBits(bytes = ["1B", "1D", "03", "1A"]) {
  return bytes
    .map((byte) => parseInt(byte, 16).toString(2).padStart(8, "0"))
    .join("");
}

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
  "2B1Q": {
    encodings: {
      // Assuming all values are for previous POSITIVE voltages.
      0: [1, 1],
      1: [3, 3],
      2: [-1, -1],
      3: [-3, -3],
    },
  },
  "8B6T": parse8B6TEncodingTable(),
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
      case "2B1Q":
      case "8B6T":
        return this.generatemBnLPlotPoints(
          bitSequence,
          +this.encoding[0],
          +this.encoding[2],
          this.encoding[3]
        );
    }

    return null;
  }

  /**
   * Method that encodes a bit sequence based on the mBnL scheming principle.
   *
   * @param {string} bitSequence The bit sequence to encode.
   * @param {number} m The total amount of data elements (bits)
   * @param {number} n The amount of signal symbols (bauds).
   * @param {char} L The amount of signal symbols per signal element (B, T or Q)
   *
   * @returns {{ x: number[], y: number[]}} An array of plot points.
   */
  generatemBnLPlotPoints(bitSequence, m, n, L) {
    // Define the encoding scheme.
    const totalPatterns = Math.pow(L, n),
      totalValues = Math.pow(2, m);

    // Is the mBnL scheme valid?
    if (totalValues > totalPatterns) {
      alert(
        `The amount of possible values (${totalValues}) is greater than the amount of patterns (${totalPatterns})!`
      );
      return null;
    }

    // Is the bit sequence according to the rules?
    if (bitSequence.length % m != 0) {
      alert(`Bit elements should be a multiple of ${m}!`);
      return null;
    }

    if (m == 2 && n == 1 && L == "Q")
      return this.generate2B1QPlotPoints(bitSequence);
    if (m == 8 && n == 6 && L == "T")
      return this.generate8B6TPlotPoints(bitSequence);

    alert("mBnL scheme not implemented!");
    return null;
  }

  /**
   * Encodes a bit sequence in 2B1Q.
   *
   * @param {string} bitSequence The bit sequence to encode.
   *
   * @returns {{ x: number[], y: number[], dtick: number }} An array of plot points.
   */
  generate2B1QPlotPoints(bitSequence) {
    const x = [],
      y = [];

    // The thing with mBnL schemes:
    //  Weights are considered for each bit sequence encoded. Should be considered depending on the last bit weight.
    //  In this case we only have positive or negative data elements, so we only need to consider the last bit. 1 is positive, 0 is negative.
    let lastBitWeight = 1;
    for (let i = 0; i < bitSequence.length; i += 2) {
      // Obtain the bits in that range and parse them as a number.
      const bits = parseInt(bitSequence.slice(i, i + 2), 2);

      // Invert the bit weight.
      lastBitWeight = lastBitWeight ? 0 : 1;

      // Obtain the encoding.
      const encoding = ENCODING_NAMES["2B1Q"].encodings[bits];

      // Add the plot points.
      x.push(i, i + 2 * this.bitDurationSeconds);

      const encoded = lastBitWeight ? encoding.map((v) => -v) : encoding;

      y.push(...encoded);
    }

    return { x, y, dtick: 2 };
  }

  /**
   * Encodes a bit sequence in 8B6T.
   *
   * @param {string} bitSequence The bit sequence to encode.
   *
   * @returns {{ x: number[], y: number[], dtick: number }} An array of plot points.
   */
  generate8B6TPlotPoints(bitSequence) {
    const x = [],
      y = [];

    // Same as 2B1Q, but with 8 bits.
    //  8B6T uses a lookup table to reference the voltage values for each 8 bit sequence, they cannot be calculated.
    //  The lookup table is defined in the ENCODING_NAMES constant.
    let lastBitWeight = 0, loops = 0;
    for (let i = 0; i < bitSequence.length; i += 8) {
      // Obtain the bits in that range and parse them as a number.
      const bits = parseInt(bitSequence.slice(i, i + 8), 2);

      // Obtain the encoding.
      let encoding = ENCODING_NAMES["8B6T"].encodings[bits];

      // Calculate the bit weight based on the encoding (positive or negative).
      const elementWeight = encoding.reduce((a, b) => a + b, 0);

      console.log(lastBitWeight, elementWeight, encoding);

      // If the element weight is 0 or opposite, then no effect is applied.
      const needsInversion = elementWeight === lastBitWeight && lastBitWeight !== 0;
      if (needsInversion)
        encoding = encoding.map((e) => -e);

      // Declare the last bit weight (can be 0, -1 or 1)
      lastBitWeight = needsInversion ? -elementWeight : elementWeight;

      // Add the plot points.
      for (let j = 0; j < encoding.length; j++) {
        // Hacky way to avoid the overflow in "i" for the x axis.
        const offset = i != 0 ? (2 ** loops) : 0;

        x.push((i - offset) + j, (i - offset) + j + this.bitDurationSeconds);
        y.push(encoding[j], encoding[j]);
      }
      loops++;
    }

    return { x, y, dtick: 6 };
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
      flag = bit ? (flag == 1 ? -1 : 1) : flag;

      // NRZI encodes a 1 as an alternating sequence, whereas 0 is a low voltage.
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
    const pattern1 = [1, 1, -1, -1],
      pattern0 = [-1, -1, 1, 1];

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
    const pattern = [-1, -1, 1, 1];

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
