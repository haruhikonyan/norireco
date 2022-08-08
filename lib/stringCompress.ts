import LZString from 'lz-string';

export const compress = (string: string) => {
  /// 必ず Uint8Array に変換すること
  return LZString.compressToEncodedURIComponent(string);
};

export const deCompress = (value: string) => {
  return LZString.decompressFromEncodedURIComponent(value);
};
