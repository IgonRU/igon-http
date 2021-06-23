export class IgonHttpConfig {
  hostName: string =  null;
  debugMode = false;

  constructor(data: any = null) {
    if (data != null) {
      for (let key in data) {
        if (key in this) {
          if (Object.getOwnPropertyDescriptor(data, key)) {
            this[key] = data[key];
          }
        }
      }
    }
  }
}
