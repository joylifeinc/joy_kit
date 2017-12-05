class Colors {
  private static hexToRgb = (hex: string) => {
    const hexVals = hex.split('');
    const rHex = hexVals[1] + hexVals[2];
    const gHex = hexVals[3] + hexVals[4];
    const bHex = hexVals[5] + hexVals[6];
    const r = parseInt(rHex, 16);
    const g = parseInt(gHex, 16);
    const b = parseInt(bHex, 16);
    return [r, g, b];
  };

  private static hex3to6 = hex3 => {
    const hex6 = hex3.split('');
    for (let i = 1; i < hex6.length; i += 2) {
      hex6.splice(i, hex6[i]);
    }
    return hex6;
  };

  private static rgbaStringToArray = rgbaString => {
    var temp = rgbaString.slice(
      rgbaString.indexOf('(') + 1,
      rgbaString.indexOf(')')
    );
    rgbaString = temp.split(',').map(function(ele) {
      return parseFloat(ele);
    });
    return rgbaString;
  };

  public static findRgb = colorString => {
    let rgbArray;
    if (colorString.split('')[0] === '#') {
      rgbArray =
        colorString.length == 7
          ? Colors.hexToRgb(colorString)
          : colorString.length == 4
            ? Colors.hexToRgb(Colors.hex3to6(colorString))
            : [];
      // telemetry.debug('returned rgb array' + rgbArray.toString());
      return rgbArray;
    } else if (colorString.split('(')[0] == 'rgb' || 'rgba') {
      // colorString == ('rgb()' || 'rgba()'
      rgbArray = Colors.rgbaStringToArray(colorString);
      // telemetry.debug('returned rgb array' + rgbArray.toString());
      // remove to allow alpha returned
      rgbArray.pop();
      return rgbArray;
      // } else telemetry.debug('bad color:' + colorString);
    }
  };
}

export { Colors };
