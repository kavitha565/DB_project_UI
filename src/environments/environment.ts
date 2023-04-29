// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint : {
    customersUrl : "http://127.0.0.1:5000/customers",
    carsUrl : "http://127.0.0.1:5000/cars",
    availabilityUrl : "http://127.0.0.1:5000/availability",
    rentalUrl : "http://127.0.0.1:5000/rental",
    ownersUrl: "http://127.0.0.1:5000/owners",
    returnUrl: "http://127.0.0.1:5000/rentalAmount",
    updateRates: "http://127.0.0.1:5000/updateRates",
    weeklyReport: "http://127.0.0.1:5000/weeklyEarnings",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
