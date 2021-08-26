let con;

const setupInput = function (connection) {
  con = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if(key === "\u0003") {
    return process.exit();
  }
  console.log(key);
  con.write("Say: Hello!");
  if(key === "w") {
    con.write("Move: up");
  }
  if(key === "s") {
    con.write("Move: down");
  }
  if(key === "a") {
    con.write("Move: left");
  }
  if(key === "d") {
    con.write("Move: right");
  }
}

module.exports = setupInput;