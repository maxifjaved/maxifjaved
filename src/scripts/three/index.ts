// Lazy entry: MainLayout dynamic-imports this after load when guards pass.
import { registerScene, startEngine } from "./engine";
import { createAurora } from "./scenes/aurora";
import { createHero } from "./scenes/hero";
import { createNetwork } from "./scenes/network";

registerScene("hero", createHero);
registerScene("network", createNetwork);

try {
  startEngine(createAurora);
} catch (err) {
  console.warn("three.engine.start_failed", err);
}
