// http://www.codewars.com/kata/befunge-interpreter/solutions/javascript/me

'use strict';

class Befunge {

  constructor (code) {
    this.pointer = { x: 0, y: 0 };
    this.stack = [];
    this.movement = { x: 1, y: 0 };
    this.running = false;
    this.code = code.split('\n').map(v => v.split(''));
    this.stringMode = false;
    this.jump = false;
    this.output = '';

    this.up = { x: 0, y: -1 };
    this.down = { x: 0, y: 1 };
    this.right = { x: 1, y: 0 };
    this.left = { x: -1, y: 0 };
  }

  command (cmd) {
    if (this.jump) {
      this.jump = false;
      return;
    }

    if (this.stringMode) {
      if (cmd === '"') {
        this.stringMode = false;
      } else {
        this.stack.push(cmd.charCodeAt(0));
      }
      return;
    }

    let a,b,x,y,v;

    switch (cmd) {
      case '+':
        a = this.stack.pop();
        b = this.stack.pop();
        this.stack.push(a + (b || 0));
        break;
      case '-':
        a = this.stack.pop();
        b = this.stack.pop();
        this.stack.push((b || 0) - a);
        break;
      case '*':
        this.stack.push(this.stack.pop() * this.stack.pop());
        break;
      case '/':
        a = this.stack.pop();
        b = this.stack.pop();
        this.stack.push(a === 0 ? 0 : Math.floor(b/a));
        break;
      case '%':
        a = this.stack.pop();
        b = this.stack.pop();
        this.stack.push(a === 0 ? 0 : b%a);
        break;
      case '!':
        this.stack.push(this.stack.pop() === 0 ? 1 : 0);
        break;
      case '`':
        a = this.stack.pop();
        b = this.stack.pop();
        this.stack.push(b>a ? 1 : 0);
        break;
      case '^':
        this.movement = this.up;
        break;
      case 'v':
        this.movement = this.down;
        break;
      case '>':
        this.movement = this.right;
        break;
      case '<':
        this.movement = this.left;
        break;
      case '?':
        this.movement = [this.up,this.down,this.left,this.right][Math.floor(Math.random() * 4)];
        break;
      case '_':
        this.movement = this.stack.pop() === 0 ? this.right : this.left;
        break;
      case '|':
        this.movement = this.stack.pop() === 0 ? this.down : this.up;
        break;
      case '"':
        this.stringMode = true;
        break;
      case ':':
        a = this.stack.pop();
        if (a === undefined) {
          this.stack.push(0);
        } else {
          this.stack.push(a);
          this.stack.push(a);
        }
        break;
      case '\\':
        a = this.stack.pop();
        b = this.stack.pop();

        this.stack.push(a);
        this.stack.push(b === undefined ? 0 : b);
        break;
      case '$':
        this.stack.pop();
        break;
      case '.':
        this.output += this.stack.pop();
        break;
      case ',':
        a = this.stack.pop();
        this.output += String.fromCharCode(a);
        break;
      case '#':
        this.jump = true;
        break;
      case 'p':
        y = this.stack.pop();
        x = this.stack.pop();
        v = this.stack.pop();

        this.code[y][x] = v;
        break;
      case 'g':
        y = this.stack.pop();
        x = this.stack.pop();

        this.stack.push(this.code[y][x].charCodeAt ? this.code[y][x].charCodeAt(0) : this.code[y][x]);
        break;
      case '@':
        this.running = false;
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.stack.push(+cmd);
        break;
      case ' ':
        break;
      default:
        throw `${cmd} not recognized.`;
    }
  }

  move () {
    if (this.pointer.y+this.movement.y > this.code.length-1) {
      this.pointer.y = 0;
    } else if (this.pointer.y + this.movement.y < 0) {
      this.pointer.y = this.code.length-1;
    } else if (this.pointer.x + this.movement.x > this.code[this.pointer.y].length-1) {
      this.pointer.x = 0;
    } else if (this.pointer.x + this.movement.x < 0) {
      this.pointer.x = this.code[this.pointer.y].length-1;
    } else {
      this.pointer.y = this.pointer.y + this.movement.y;
      this.pointer.x = this.pointer.x + this.movement.x;
    }
  }

  run () {
    this.running = true;

    while (this.running) {
      this.command(this.code[this.pointer.y][this.pointer.x]);
      this.move();
    }

    return this.output;
  }
}

const interpret = code => {
  let interpreter = new Befunge(code);
  return interpreter.run();
};

let i;