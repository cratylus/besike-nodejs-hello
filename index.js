var greet = function(name,drunk){
  if(drunk){
    return "hi "+name+",you look fat ahaha";
  }
  return "hi "+name;
}

module.exports = greet;
