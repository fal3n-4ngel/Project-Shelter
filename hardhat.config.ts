import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv'
dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    matic: {
      url: process.env.POLYGON_RPC,
      accounts: [process.env.POLYGON_PRIVATE_KEY!]
    }
  },
  paths: {
    artifacts: "./src/artifacts"
  }
};

export default config;
