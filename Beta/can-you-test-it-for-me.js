// http://www.codewars.com/kata/can-you-test-it-for-me/solutions/javascript/me

_describe('Foo', function() {
  it('instanceof', function() {
    Test.expect(foo instanceof Foo);
  });

  it('value should start at 0', function() {
    Test.assertEquals(foo.value, 0);
  });

  it('array should start with 1, 2, 3', function() {
    Test.assertSimilar(foo.array,[1,2,3])
  });

  it('foo.add throws for params that are not numbers', function() {
    Test.expectError('', () => foo.add('a'));
  });
  
  it('foo.add works for params that are numbers', function() {
    Test.expectNoError('', () => foo.add(1));
  });
  
  it('foo.value is the initial value plus what was added', function() {
    let f = new Foo();
    f.add(1)
    Test.assertEquals(f.value,1)
  });
  
  it('foo.push throws for params that are not numbers', function() {
    Test.expectError('', () => foo.push('a'));
  });
  

  it('foo.push works for params that are numbers', function() {
    Test.expectNoError('', () => foo.push(1));
  });
  
  it('', function() {
    let f = new Foo();
    f.push(789);
    Test.assertSimilar(f.array,[1,2,3,789])
  });
});