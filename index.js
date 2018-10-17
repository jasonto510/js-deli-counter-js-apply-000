function takeANumber(line, name){
    line.push(name)
    var placement = line.length
  return (`Welcome, ${name}. You are number ${placement} in line.`)
}

function nowServing(line){
  if (line.length > 0){
    return "Currently serving " + line.shift() + ".";
  } else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  if (line.length < 1){
    return ("The line is currently empty.")
  } else{
    var lineOrder = []
    for (var i = 0; i < line.length; i++){
      lineOrder.push(i + 1 + ". " + line[i]);
    }
    var stringOrder = lineOrder.join(", ")
    return (`The line is currently: ${stringOrder}`)
  }
}
