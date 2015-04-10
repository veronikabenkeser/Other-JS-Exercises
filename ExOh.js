function ExOh(str) { 
  return str.match(/(?:x)/g).length == str.match(/(?:o)/g).length;
}
