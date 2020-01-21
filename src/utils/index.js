const createEl = ({
  name, className, style, id, text,
}) => {
  const el = document.createElement(name);
  el.setAttribute('class', className);
  el.setAttribute('id', id);
  el.setAttribute('style', style);
  el.innerText = text;

  return el;
};

export default createEl;
