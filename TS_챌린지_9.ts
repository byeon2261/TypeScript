interface LocalStorageAPI<T> {
    [key:string]: T
  }
  
  abstract class LocalStorageImp<T>  {
    setItem(key:string, value: T) {}
    getItem(key:string) {}
    clearItem(key:string) {}
    clear() {}
  }
  
  class LocalStorage<T, V> extends LocalStorageImp<T> {
    storage: LocalStorageAPI<T> = {}
    setItem(key:string, value: T) {
      this.storage[key] = value;
    }
    getItem(key:string) {
      return this.storage[key];
    }
    clearItem(key:string) {
      delete this.storage[key];
    }
    clear() {
      this.storage = {}
    }
  }
  
  localStorage.setItem("byun", "gh")
  // localStorage.getItem("byun")
  // localStorage.clearItem("byun")
  // localStorage.clear()
  
  
  
  interface GeolocationAPI {
    (successFn: string): string
    (successFn: string, errorFn: string): string
    (successFn: string, errorFn: string, optionsObj: string): string
  }
  
  class geolocation{
    // 모르겠습니다요...ㅠㅠㅠ
    public getCurrentPosition: GeolocationAPI = {}
  
    var id, target, options;
  
    public optionsObj = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
  
    function successFn(pos) {
      var crd = pos.coords;
  
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }
  
    function errorFn(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  
    function success(pos) {
      var crd = pos.coords;
  
      if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
        console.log('Congratulations, you reached the target');
        navigator.geolocation.clearWatch(id);
      }
    }
  
    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }
  
    target = {
      latitude : 0,
      longitude: 0
    };
  
    options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    };
  }
  
  navigator.geolocation.getCurrentPosition(successFn, errorFn, optionsFn);
  
  // geolocation.getCurrentPosition(successFn);
  // geolocation.getCurrentPosition(successFn, errorFn);
  // geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
  // geolocation.watchPosition(success);
  // geolocation.watchPosition(success, error);
  // geolocation.watchPosition(success, error, options);
  // geolocation.clearWatch(id);