const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  conn.on('end', () => {
    console.log('disconnected from server');
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};

console.log("Connecting ...");
connect();