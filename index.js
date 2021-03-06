function takeANumber(katzDeli, name) {
// return their position in line
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}
function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeli.shift()}.`
  }
}
function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else {
    var line = "The line is currently: "
    for (var i = 0; i < katzDeli.length; i++) {
      if (i === katzDeli.length - 1) {
        line += (`${i + 1}. ${katzDeli[i]}`)
      } else {
        line += (`${i + 1}. ${katzDeli[i]}, `)
      }
    }
    return line
  }
}
