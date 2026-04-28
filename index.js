// import gradient from "gradient-string";
// console.log("working...");
// console.log(gradient(["cyan", "pink"])("working..."));
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import inquirer from "inquirer";

// import _ from "lodash";
// const answers = await inquirer.prompt({
//   name: "name",
//   type: "input",
//   message: "neree bichne uu",
// });
// console.log(answers);
const data = await inquirer.prompt({
  name: "username",
  type: "input",
  message: "tanii neriig hen gedeg ve ?",
});
const q1 = await inquirer.prompt({
  name: "answer",
  type: "rawlist",
  message: `${data.username} 1. Нарны аймаг дахь хамгийн том гараг аль нь вэ?`,
  choices: ["Angarag", "Sugar", "Barhasbadi", "Sanchir"],
});
const q2 = await inquirer.prompt({
  name: "answer",
  type: "rawlist",
  message: `${data.username} 2. Нарны аймгийн "Улаан гараг" гэж нэрлэгддэг гараг аль нь вэ?`,
  choices: ["Bud", "Angarag", "Tengeriin Van", "Sanchir"],
});
const q3 = await inquirer.prompt({
  name: "answer",
  type: "rawlist",
  message: `${data.username} 3. Наранд хамгийн ойр орших гараг аль нь вэ?`,
  choices: ["Bud", "Sugar", "Delkhii", "Angarag"],
});
const q4 = await inquirer.prompt({
  name: "answer",
  type: "rawlist",
  message: `${data.username} 9. Сүүлчийн од буюу "Алтан гадас" од аль зүгийг заадаг вэ?`,
  choices: ["Umnu", "Baruun", "Zuun", "Hoid"],
});
const q5 = await inquirer.prompt({
  name: "answer",
  type: "rawlist",
  message: `${data.username} 9. 8. Аль гарагийг "Дэлхийн ихэр" гэж нэрлэдэг вэ? (Хэмжээ болон бүтцээрээ төстэй тул)`,
  choices: ["Sugar", "Angarag", "Bud", "Tengeriin Van"],
});

let score = 0;

if (q1.answer === "Barhasbadi") {
  score++;
}
if (q2.answer === "Angarag") {
  score++;
}
if (q3.answer === "Bud") {
  score++;
}
if (q4.answer === "Hoid") {
  score++;
}
if (q5.answer === "Angarag") {
  score++;
}

console.log(`${data.username}, та 5 асуултаас ${score}-д нь зөв хариуллаа!`);
// let array = [1, 2, 3, 4];

// const result = _.remove(array, (n) => {
//   if (n % 2 === 0) {
//     return true;
//   }
// });
// console.log(array);
// console.log(result);
