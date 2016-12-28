QUnit.test( "a test", function( assert ) {
 
  function square( x ) {
    return x * x;
  }
 
  var result = square( 3 );
 
  assert.equal( result, 9, "square(2) equals 4" );
});
QUnit.test( "a Promise-returning test", function( assert ) {
  assert.expect( 0 );
 
  var thenable = new Promise(function( resolve, reject ) {
    setTimeout(function() {
      resolve( "result" );
    }, 500 );
  });
  return thenable;
});
QUnit.test( "deepEqual test", function( assert ) {
  var obj = { foo: "bar" };
 
  assert.deepEqual( obj, { foo: "bar" }, "Two objects can be the same in value" );
});

QUnit.test( "deepEqual test", function( assert ) {
  var obj = { foo: "bar" };
 
  assert.deepEqual( obj, { foo: "bar2" }, "Two objects can be the same in value" );
});
QUnit.test( "a test", function( assert ) {
  assert.expect( 2 );
 
  function calc( x, operation ) {
    return operation( x );
  }
 
  var result = calc( 2, function( x ) {
    assert.ok( true, "calc() calls operation function" );
    return x * x;
  });
 
  assert.equal( result, 4, "2 squared equals 4" );
});