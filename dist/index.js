/* IMPORT */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
/* STRIP KEYS */
function stripKeys(obj, keys, deep) {
    if (deep === void 0) { deep = true; }
    keys = _.castArray(keys);
    return _.transform(obj, function (acc, value, key) {
        if (keys.includes(key))
            return;
        if (deep && _.isPlainObject(value)) {
            acc[key] = stripKeys(value, keys, deep);
        }
        else {
            acc[key] = value;
        }
    }, {});
}
/* EXPORT */
exports.default = stripKeys;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsWUFBWTs7O0FBRVosMEJBQTRCO0FBRTVCLGdCQUFnQjtBQUVoQixtQkFBcUIsR0FBTyxFQUFFLElBQXVCLEVBQUUsSUFBb0I7SUFBcEIscUJBQUEsRUFBQSxXQUFvQjtJQUV6RSxJQUFJLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBRyxJQUFJLENBQUUsQ0FBQztJQUU1QixNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBRyxHQUFHLEVBQUUsVUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQVc7UUFFakQsRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBRyxHQUFHLENBQUcsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUVwQyxFQUFFLENBQUMsQ0FBRSxJQUFJLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBRyxLQUFLLENBQUcsQ0FBQyxDQUFDLENBQUM7WUFFeEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBRyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDO1FBRTdDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUVOLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFbkIsQ0FBQztJQUVILENBQUMsRUFBRSxFQUFFLENBQUUsQ0FBQztBQUVWLENBQUM7QUFFRCxZQUFZO0FBRVosa0JBQWUsU0FBUyxDQUFDIn0=