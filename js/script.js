var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var scriptURL = "https://script.google.com/macros/s/AKfycbyPMR-lSqrbGtOTCiymHyX14Uro2gVID3EzGPdwhF6_1aIIdK28HKR9cdDw09AGRF4/exec";
var form = document.getElementById("applicationForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form.checkValidity()) {
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
            .then(function (response) {
            // alert("Thank you! your form is submitted successfully.");
        })
            .then(function () {
            window.location.reload();
        })
            .catch(function (error) { return console.error("Error!", error.message); });
        form.reset();
        $("#applicationModal").modal("hide");
    }
    else {
        form.classList.add("was-validated");
    }
});
// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://api-generator.retool.com/Z4W4JZ/data"
//     );
//     if (!response.ok) {
//       throw new Error(`API request failed with status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//     const course = data;
//     let randomId: number[] = [];
//     const coursesContainer = document.getElementById(
//       "coursesContainer"
//     ) as HTMLDivElement;
//     const row = document.createElement("div");
//     row.className = "row justify-content-center";
//     for (let i = 0; i < 10; i++) {
//       randomId[i] = Math.floor(Math.random() * course.length);
//       const courseElement = document.createElement("div");
//       courseElement.className = "courseElement col-md-5 mb-4 mx-3";
//       const jobTitle = document.createElement("h2");
//       jobTitle.textContent = `${course[randomId[i]].Jobs}`;
//       const jobDesc = document.createElement("p");
//       jobDesc.textContent = `${course[randomId[i]].Description}`;
//       const salary = document.createElement("p");
//       salary.textContent = `₹ ${course[randomId[i]].Salary}`;
//       const applyNow = document.createElement("button");
//       if (applyNow) {
//         applyNow.className =
//           "applyNow section-btn btn btn-primary btn-block";
//         applyNow.setAttribute("data-toggle", "modal");
//         applyNow.setAttribute("data-target", "#applicationModal");
//       }
//       applyNow.textContent = "Apply Now";
//       courseElement.appendChild(jobTitle);
//       courseElement.appendChild(jobDesc);
//       courseElement.appendChild(salary);
//       courseElement.appendChild(applyNow);
//       row.appendChild(courseElement);
//     }
//     coursesContainer.appendChild(row);
//   } catch (error) {
//     console.error("error:", error);
//   }
// }
// fetchData();
// Modify the fetchData function to accept a callback function
function fetchData(callback) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, course, randomId, coursesContainer, row, i, courseElement, jobTitle, jobDesc, salary, applyNow, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://api-generator.retool.com/Z4W4JZ/data")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("API request failed with status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    course = data;
                    randomId = [];
                    coursesContainer = document.getElementById("coursesContainer");
                    row = document.createElement("div");
                    row.className = "row justify-content-center";
                    for (i = 0; i < 10; i++) {
                        randomId[i] = Math.floor(Math.random() * course.length);
                        courseElement = document.createElement("div");
                        courseElement.className = "courseElement col-md-5 mb-4 mx-3";
                        jobTitle = document.createElement("h2");
                        jobTitle.textContent = "".concat(course[randomId[i]].Jobs);
                        jobDesc = document.createElement("p");
                        jobDesc.textContent = "".concat(course[randomId[i]].Description);
                        salary = document.createElement("p");
                        salary.textContent = "\u20B9 ".concat(course[randomId[i]].Salary);
                        applyNow = document.createElement("button");
                        if (applyNow) {
                            applyNow.className =
                                "applyNow section-btn btn btn-primary btn-block";
                            applyNow.setAttribute("data-toggle", "modal");
                            applyNow.setAttribute("data-target", "#applicationModal");
                        }
                        applyNow.textContent = "Apply Now";
                        courseElement.appendChild(jobTitle);
                        courseElement.appendChild(jobDesc);
                        courseElement.appendChild(salary);
                        courseElement.appendChild(applyNow);
                        row.appendChild(courseElement);
                    }
                    coursesContainer.appendChild(row);
                    // Execute the callback function after fetching data
                    if (callback) {
                        callback();
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("error:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Pass the callback function when calling fetchData
fetchData(function () {
    // This is your callback function, you can do something after fetching data here
    console.log("Data fetched successfully!");
});