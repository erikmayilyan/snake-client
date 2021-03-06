const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on('data', (data) => {
    console.log(data.toString());
  });
  conn.on('end', () => {
    console.log('disconnected from server');
  });
  conn.on('connect', () => {
    console.log("Connected!");
    conn.write("Name: snake");
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};

module.exports = connect;