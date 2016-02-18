// http://www.codewars.com/kata/my-smallest-code-interpreter-aka-brainf-star-star-k/solutions/javascript/me

class Memory {
  constructor (size) {
    this.data = Array(size+1).join(0).split('').map(v => +v);
    this.size = size;
    this.pointer = 0;
  }

  increment () {
    if (this.data[this.pointer]+1 > this.size) {
      this.data[this.pointer] = 0;
    } else {
      this.data[this.pointer]++;
    }
  }

  decrement () {
    if (this.data[this.pointer]-1 < 0) {
      this.data[this.pointer] = this.size;
    } else {
      this.data[this.pointer]--;
    }
  }

  input (byte) {
    if (byte) {
      this.data[this.pointer] = byte ;
    }
  }

  incrementPointer () {
    if (this.pointer+1 > this.size) {
      this.pointer = 0;
    } else {
      this.pointer++;
    }
  }

  decrementPointer () {
    if (this.pointer-1 < 0) {
      this.pointer = this.size;
    } else {
      this.pointer--;
    }
  }

  output () {
    return this.data[this.pointer];
  }
}

class Interpreter {
  constructor (code, input) {
    this.code = code;
    this.codeSize = code.length;
    this.codePointer = 0;
    this.input = input;
    this.inputSize = input.length;
    this.inputPointer = 0;
    this.memory = new Memory(255);
    this.output = '';
  }

  run () {
    while(this.codePointer < this.codeSize) {
      switch(this.code[this.codePointer]) {
        case '+':
          this.memory.increment();
          this.codePointer++;
          break;
        case '-':
          this.memory.decrement();
          this.codePointer++;
          break;
        case '>':
          this.memory.incrementPointer();
          this.codePointer++;
          break;
        case '<':
          this.memory.decrementPointer();
          this.codePointer++;
          break;
        case '.':
          this.output += String.fromCharCode(this.memory.output());
          this.codePointer++;
          break;
        case ',':
          if(this.inputPointer <= this.inputSize) {
            this.memory.input(this.input[this.inputPointer].charCodeAt(0));
          }
          this.inputPointer++;
          this.codePointer++;
          break;
        case '[':
          this.startLoop();
          break;
        case ']':
          this.endLoop();
          break;
      }
    }

    return this.output;
  }

  startLoop () {
    if (this.memory.output() === 0) {
      let insideLoops = 0;
      this.codePointer++;
      while (this.code[this.codePointer] !== ']' || insideLoops) {
        if (this.code[this.codePointer] === '[') {
          insideLoops++;
        } else if (this.code[this.codePointer] === ']') {
          insideLoops--;
        }
        
        this.codePointer++;
      }
    } 

    this.codePointer++;
  }

  endLoop () {
    if (this.memory.output() !== 0) {
      let insideLoops = 0;
      this.codePointer--;
      while (this.code[this.codePointer] !== '[' || insideLoops) {
        if (this.code[this.codePointer] === '[') {
          insideLoops--;
        } else if (this.code[this.codePointer] === ']') {
          insideLoops++;
        }

        this.codePointer--;
      }
    }
    
    this.codePointer++;
  }
}


const brainLuck = (code, input) => {
  const bf = new Interpreter(code, input);
  let a = bf.run();
  console.log(bf.memory.data[0]);
  return a;
};