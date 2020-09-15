import { Hooks } from "@yarnpkg/core";
import { config } from "dotenv";

export const hooks: Hooks = {
  async setupScriptEnvironment(_project, scriptEnv) {
    const env = config();
    Object.assign(scriptEnv, env.parsed);
  },
};
