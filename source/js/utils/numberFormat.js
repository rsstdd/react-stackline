const format = (n) => {
  return n.toFixed(2).replace(/./g, (c, i, a) => {
    return i && c !== '.' && ((a.length - i) % 3 === 0) ? `,${ c }` : c;
  });
};

export default format;
