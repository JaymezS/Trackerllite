import { IPManager } from "./IPManager.js"

class Client {
  private static _instance: Client | undefined
  readonly IP_MANAGER: IPManager = IPManager.instance

  private constructor() {
  }

  public static get instance(): Client {
    if (Client._instance === undefined) {
      Client._instance = new Client()
      console.log("instantiated Client")
    }
    return Client._instance
  }
}


export { Client }