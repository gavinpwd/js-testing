describe('Calculator', () => {
  describe('#add', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add('1', 2)).toThrow();
        expect(() => calculator.add(1, '2')).toThrow();
      });
    });

    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add(1, 2)).not.toThrow();
      });

      it('should add the numbers together', () => {
        const calculator = new Calculator();

        const result = calculator.add(1, 2);

        expect(result).toBe(3);
      });
    });
  });


  describe('#subtract', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.subtract('1', 2)).toThrow();
        expect(() => calculator.subtract(1, '2')).toThrow();
      });
    });

    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.subtract(2, 1)).not.toThrow();
      });

      it('should subtract the numbers together', () => {
        const calculator = new Calculator();

        const result = calculator.subtract(2, 1);

        expect(result).toBe(1);
      });
    });
  });


  describe('#multiply', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.multiply('1', 2)).toThrow();
        expect(() => calculator.multiply(1, '2')).toThrow();
      });
    });

    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.multiply(2, 1)).not.toThrow();
      });

      it('should multiply the numbers together', () => {
        const calculator = new Calculator();

        const result = calculator.multiply(2, 1);

        expect(result).toBe(2);
      });
    });
  });



  describe('#divide', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.divide('1', 2)).toThrow();
      });
    });

    describe('when passed y as the number 0', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.divide(1, 0)).toThrowError('Can not divide by zero.');
      });
    });

    describe('when passed two numbers', () => {
      it('should divide the first number by the second', () => {
        const calculator = new Calculator();
        const result = calculator.divide(4, 2)
        expect(result).toBe(2);
      });
    });
  });


});