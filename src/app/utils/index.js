import _ from 'lodash';
import worksData from '../data/works.json'

export const getSiteMap = () => {
  let results = _.map(worksData.works, w => `https://wonyoung.so/?/${w.permalink}`);
  console.log(results.join("\n"));
}

export const getMetaContent = (name) => {
  var metas = document.getElementsByTagName('meta');
  let result = ""
  _.each(metas, (meta) => {
    if (meta.getAttribute("name") == name) {
      result = meta.getAttribute("content");
    }
  });

  return result;
}

export const detectURLType = (url) => {  
  if (url == "/"){
    return "first";
  } else if (url == "/edit") {
    return "second";
  } else if (url == "/trees/new") {
    return "second";
  } else if (url.indexOf("/trees/") > -1 && url.indexOf("edit") == -1) { // /trees/:id
    return "first";
  } else if (url.indexOf("/trees/") > -1 && url.indexOf("edit") > -1) { // /trees/:id/edit
    return "second";
  } else if (url.indexOf("/greenindex/") > -1) { // /greenindex/:cityname/:panoid
    return "first"
  } else {
    return null;
  }
}

export const numberWithDelimiter = (number, delimiter, separator) => {
  try {
    var delimiter = delimiter || ",";
    var separator = separator || ".";
    
    var parts = number.toString().split('.');
    parts[0] = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + delimiter);
    return parts.join(separator);
  } catch(e) {
    return number
  }
};

export const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

export const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

