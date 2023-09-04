import ExpoSettingsModule from './ExpoMultiplayModule';

export function hello(): string {
  return ExpoSettingsModule.hello();
}
export function init(): string {
  return ExpoSettingsModule.init();
}
export function play(path:string): string {
  return ExpoSettingsModule.play(path);
}

