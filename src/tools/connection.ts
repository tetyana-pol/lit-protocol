import { LitNodeClient } from "@lit-protocol/lit-node-client";
import { LitNetwork } from "@lit-protocol/constants";

export const connectLit = async () => {
  try {
    const litNodeClient = new LitNodeClient({
      litNetwork: LitNetwork.DatilDev,
    });
    await litNodeClient.connect();
    console.log("You are connected to lit network");
  } catch (e) {
    console.log(
      `Something go wrong, you are not connected to lit network ${e}`
    );
  }
};
