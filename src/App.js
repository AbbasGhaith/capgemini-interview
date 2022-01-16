import './App.css';

function App() {
  // Q1. Change the piece of code
  /*
    obj1 = { a: 10};
    const obj2 = obj1;
    obj2.a=20;
    console.log(obj1);
    console.log(obj2)
    let obj1;
  */

  /* Ans */

  const obj1 = { i: 10 };
  const obj2 = { ...obj1 };
  obj2.i = 20;
  console.log("obj 1:", obj1);
  console.log("obj 2:", obj2);

  /*
    Q2. 
      Explain Null and Undefined
      null === undefined // false
      null == undefined // true
  */

  /* Ans */

  /* 
    initialised : undefined
    currently unavailable: null
  */

  let a = null;
  let b = undefined;

  if (a === b) {
    console.log("a === b", true);
  } else {
    console.log("a === b", false);
  }

  let c = null;
  let d = undefined;

  if (c == d) {
    console.log("c == d", true);
  } else {
    console.log("c == d", false);
  }

  /*
    Q3. Write a mul func which will properly when invoked as below syntax 
	  console.log(mul(2)(3)(4)); // output : 24
	  console.log(mul(4)(3)(4)); // output : 48
  */

  /* Ans */

  /*
    function mul(a) {
      return function (b) {
        return function (c) {
          return a * b * c;
        };
      };
    }

    console.log("mul(2)(3)(4) = ", mul(2)(3)(4)); // output : 24
    console.log("mul(4)(3)(4) = ", mul(4)(3)(4)); // output : 48
  */

  const mul = (a) => {
    return (b) => {
      return (c) => {
        return a * b * c;
      };
    };
  };

  console.log("mul(2)(3)(4) =", mul(2)(3)(4)); // output : 24
  console.log("mul(4)(3)(4) =", mul(4)(3)(4)); // output : 48

  /*
    Q4. 
    Find '1' in the array below and return it in array 'ones' then find it's length. 
    arr = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1];
  */

  var arr = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1];

  var ones = arr.filter((val) => {
    return val === 1;
  });

  console.log("ones =", ones);
  console.log("ones length:", ones.length);

  return (
    <div className="App">
      <h1>ReactJs Interview Capgemini</h1>
    </div>
  );
}

export default App;
