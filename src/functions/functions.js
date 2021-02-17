// HELPER FUNCTIONS

// capitalize first letter
export const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

// import all images as object
export const importAll = r => {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// math random between to numbers
export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;