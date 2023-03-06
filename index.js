function destructivelyAppendCat(name) {
    cats.push(name);
  }
  
  const cats = ["Milo", "Otis", "Garfield"];
  
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  function appendCat(name) {
    return [...cats, name];
  }
  
  
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  
  function prependCat(name) {
    return [name, ...cats];
  }
   
  
  function removeFirstCat() {
    return cats.slice(1);
  }