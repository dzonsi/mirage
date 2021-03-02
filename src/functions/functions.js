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

// move focus to top element in list when bottom element tab key is pressed
// top is react ref object
export const moveFocusToTop = top => e => {
  if (e.key === 'Tab' && !e.shiftKey) {
    e.preventDefault();
    top.current.focus();
  }
}

// move focus to bottom element in list when top element tab key is pressed together with shift key
// bottom is react ref object
export const moveFocusToBottom = bottom => e => {
  if (e.key === 'Tab' && e.shiftKey) {
    e.preventDefault();
    bottom.current.focus();
  }
}

// close menu when keyboard escape is pressed
export const closeOnEsc = method => e => {
	if(e.key === 'Escape') method();
}