//#region
for (let i = 0; i < 6; i++) {
   console.log("\n");
}
//#endregion









function Ha() { }
var obj = new Ha()


Ha.prototype // Ha {}
obj.prototype// undefined
Ha.__proto__ // Ha {}
obj.__proto__// undefined

Object.getPrototypeOf(obj) === obj.prototype // false
Object.getPrototypeOf(obj) === Ha.prototype // true
Ha.prototype.constructor === Ha  // true
Object.getPrototypeOf(Ha) === Function.prototype // true













//#region
const logTime = () => {
   const colors = {
      HEADER: "\033[95m",
      OKBLUE: "\033[94m",
      OKCYAN: "\033[96m",
      OKGREEN: "\033[92m",
      WARNING: "\033[93m",
      FAIL: "\033[91m",
      ENDC: "\033[0m",
      BOLD: "\033[1m",
      UNDERLINE: "\033[4m",
   };
   const date = new Date();
   const time = date.toLocaleString("en-CA", {
      hour12: false
   });
   console.log("\n" + colors.OKCYAN + `Logged Time: ${time}` + colors.ENDC);
};
logTime();
//#endregion
