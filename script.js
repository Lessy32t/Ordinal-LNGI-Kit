var t = 0;
var final = "φ(1,0,0,0)";

if(localStorage.getItem("ordkit") != "null"{
  t = localStorage.getItem("ordkit");
}

var bits = [
  [[""],[""]],
  [["ω+"],[""]],
  [["ω<sup>2</sup>+"],[""]],
  [["ω<sup>3</sup>+"],[""]],
  [["ω<sup>"],["</sup>"]],
  [["ε<sub>0</sub>+"],[""]],
  [["ε<sub>0</sub>*("],[")"]],
  [["ε<sub>0</sub><sup>"],["</sup>"]],
  [["ε<sub>1</sub>*("],[")"]],
  [["ε<sub>1</sub><sup>"],["</sup>"]],
  [["ε<sub>2</sub><sup>"],["</sup>"]],
  [["ε<sub>"],["</sub>"]],
  [["ζ<sub>0</sub>+"],[""]],
  [["ζ<sub>0</sub>*("],[")"]],
  [["ζ<sub>0</sub><sup>"],["</sup>"]],
  [["ε<sub>"],["</sub>"]],
  [["ζ<sub>1</sub><sup>"],["</sup>"]],
  [["ε<sub>"],["</sub>"]],
  [["ζ<sub>"],["</sub>"]],
  [["η<sub>"],["</sub>"]],
  [["φ<sub>4</sub>("],[")"]],
  [["φ<sub>5</sub>("],[")"]],
  [["φ<sub>"],["</sub>(0)"]],
  [["Γ<sub>0</sub>+"],[""]],
  [["Γ<sub>0</sub>*("],[")"]],
  [["Γ<sub>0</sub><sup>"],["</sup>"]],
  [["ε<sub>"],["</sub>"]],
  [["ζ<sub>"],["</sub>"]],
  [["η<sub>"],["</sub>"]],
  [["φ<sub>"],["</sub>(Γ<sub>0</sub>+1)"]],
  [["φ<sub>"],["</sub>(Γ<sub>1</sub>+1)"]],
  [["Γ<sub>"],["</sub>"]],
  [["φ(1,1,"],[")"]],
  [["φ(1,2,"],[")"]],
  [["φ(1,"],[",0)"]],
  [["φ<sub>"],["</sub>(φ(2,0,0)+1)"]],
  [["Γ<sub>"],["</sub>"]],
  [["φ(1,"],[",φ(2,0,0)+1)"]],
  [["φ(2,0,"],[")"]],
  [["φ(2,"],[",0)"]],
  [["φ(3,0,"],[")"]],
  [["φ(3,"],[",0)"]],
  [["φ("],[",0,0)"]]
];

var limits = [
  0,
  2000,
  5000,
  10000,
  15000,
  30000,
  40000,
  50000,
  70000,
  80000,
  100000,
  120000,
  175000,
  185000,
  195000,
  210000,
  240000,
  250000,
  270000,
  320000,
  350000,
  360000,
  365000,
  500000,
  510000,
  520000,
  530000,
  540000,
  550000,
  560000,
  640000,
  700000,
  750000,
  790000,
  820000,
  900000,
  910000,
  920000,
  950000,
  980000,
  1020000,
  1040000,
  1060000,
  1100000
];
var offsets = [
  0,
  0,
  0,
  0,
  1600, // Starts at 4
  0,
  2000, // Starts at omega
  2000, // Starts at omega
  1333.3334, // Starts at 2
  2000, // Starts at omega
  1333.3334, // Starts at 2
  1500, // Starts at 3
  0,
  2000, // Starts at omega
  2000, // Starts at omega
  175054.0541, // Starts at z0+1
  1000, // Starts at 1
  240013.3869, // Starts at n0+1
  1500, // Starts at 3
  0,
  0,
  0,
  1714.2857, // Starts at 6
  0,
  2000, // Starts at omega
  2000, // Starts at omega
  500019.6078, // Starts at G0+1
  500019.6078, // Starts at G0+1
  500019.6078, // Starts at G0+1
  1600, // Starts at 4
  0,
  1333.3334, // Starts at 2
  0,
  0,
  1500, // Starts at 3
  0,
  900000, // Starts above p(2,0,0)
  1000, // Starts at 1
  1000, // Starts at 1
  1000, // Starts at 1
  0,
  1000, // Starts at 1
  1600, // Starts at 4
];

function findLimit(n){
  var i = 0;
  while(limits[i] <= n){
    i++;
  }
  return i-1;
}

function LRemainder(n){
  var i = 0;
  while(limits[i] <= n){
    i++;
  }
  return ((n-limits[i-1])/(limits[i]-limits[i-1]))*(limits[i]-offsets[i-1])+offsets[i-1];
}

function parse(n){
  if(findLimit(n) == 0){
    return Math.floor(1/(1-(n/2000)))-1;
  } else if(n < limits[limits.length-1]) {
    return bits[findLimit(n)][0] + parse(LRemainder(n)) + bits[findLimit(n)][1];
  } else {
    return final;
  }
}

setInterval(function(){
  t++;
  document.getElementById("num").innerHTML = parse(t);
  localStorage.setItem("ordkit",t);
},10);
