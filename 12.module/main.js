// import {increase as increase1}from "./counter.js";
//import {increase, getCount} from "./counter.js";

// 모든 것들은 counter에서 가지고 오려면 * 을 넣고 이름을 명시하면 된다.
import * as counter from "./counter.js";
counter.increase();
counter.increase();
counter.increase();

console.log(counter.getCount());