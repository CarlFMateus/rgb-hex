/**
 * Converts numerical decimal color values (RGB) into its hexadecimal equivalent.
 *
 * @param r - The decimal value of the R channel.
 * @param g - The decimal value of the B channel.
 * @param b - The decimal value of the G channel.
 * @returns A stringified hexadecimal color value.
 */
export const rgbToHex = (r = 0, g = 0, b = 0): string =>
  `#${[r, g, b]
    .map((decimalChannel) =>
      Math.max(0, Math.min(255, decimalChannel)).toString(16)
    )
    .map((hexChannel) =>
      (hexChannel.length === 1 ? `0${hexChannel}` : hexChannel).toUpperCase()
    )
    .join("")}`;

/**
 * Converts a stringified hexadecimal color value into its decimal equivalent.
 *
 * @param hex - The hexadecimal color value.
 * @returns An array of RGB decimal values.
 */
export const hexToRgb = (hex: string): number[] => {
  const hexWithoutHash = hex.match(/^#([0-9a-fA-F]{3,6})/);

  if (!hexWithoutHash) {
    throw new Error(
      `"${hex}" is an incorrectly formatted hexadecimal color value. It must begin with a '#' followed by 3 to 6 characters (0-9, a-f or A-F).`
    );
  }

  return hexWithoutHash[1]
    .split(hexWithoutHash[1].length === 6 ? /(.{2})/ : /(.{1})/)
    .filter((hexChannel) => hexChannel)
    .map((hexChannel) =>
      parseInt(hexChannel.repeat(hexChannel.length ^ 3), 16)
    );
};
