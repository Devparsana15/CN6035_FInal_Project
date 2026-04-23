module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Ganache local host
      port: 7545,            // Ganache GUI port
      network_id: "*",       // Match any network id
    }
  },

  mocha: {
    timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.5.0", // Match older contract (IMPORTANT)
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};