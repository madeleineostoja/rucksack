/**
 * Popup window helper
 * @param  {String} url     URL to load in the popup
 * @param  {String} title   Window title of the popup
 * @param  {String} w       Width of the popup
 * @param  {String} h       Height of the popup
 * @return {Funciton}       Native Window open function with params
 */
function popup(url, title, w, h) {
  var left,
      top;

  left = ($(window).width() / 2) - (w / 2);
  top = ($(window).height() / 2) - (h / 2);

  return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}

/**
 * Encodes string as URI param
 * @param  {String} string Input string
 * @return {String}        Encoded string
 */
function encode(string){
  return encodeURIComponent(string);
}
