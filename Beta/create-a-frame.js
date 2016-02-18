// http://www.codewars.com/kata/create-a-frame/solutions/javascript/me

const frame = (text, char) => {
  let width = Math.max(...text.map(word => word.length));
  let border = Array(width+5).join(char);
  let output = `${border}\n`;

  for (let i = 0; i < text.length; i++) {
    output += `${char} ${text[i]+Array(width-text[i].length+1).join(' ')} ${char}\n`;
  }

  return output + border;
};