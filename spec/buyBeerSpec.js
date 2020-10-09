describe('canBuyBeer', () => {
    describe('when age is over 17', () => {
        it('should return true', () => {
            const result = canBuyBeer(18);

            expect(result).toBe(true);
        });
    });


    describe('when age is 17 or less', () => {
        it('should return false', () => {
            const result17 = canBuyBeer(17);
            const result10 = canBuyBeer(10);
            
            expect(result17).toBe(false);
            expect(result10).toBe(false);
        });
    });
});


describe('canGregBuyBeer', () => {
    describe('when Greg\'s age is over 17', () => {
        it('should return Greg is 18, he can buy beer!', () => {
            const originalAge = greg.age;
            greg.age = 18;

            const result = canGregBuyBeer();
            expect(result).toBe('Greg is 18, he can buy beer!');
            greg.age = originalAge;
        });
    });


    describe('when Greg\'s age is under 18', () => {
        it('should return Greg is under 18', () => {
            const originalAge = greg.age;
            greg.age = 17;

            const result = canGregBuyBeer();
            expect(result).toBe('Greg is '+greg.age+', he can\'t buy beer :(');
        
        })
    })
});