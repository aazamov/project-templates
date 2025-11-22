#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(chalk.cyan("\n🚀 Добро пожаловать в Intersoft Project Creator!\n"));

// 1️⃣ — спрашиваем тип проекта
const { type } = await inquirer.prompt([
  {
    type: "list",
    name: "type",
    message: "Какой проект создать?",
    choices: ["React (Vite)", "Next.js", "React (TanStack)"],
  },
]);

// 2️⃣ — спрашиваем имя проекта
const { projectName } = await inquirer.prompt([
  {
    type: "input",
    name: "projectName",
    message: "Введите имя проекта (или . для текущей папки):",
    validate: (input) =>
      input.trim() === "" ? "Имя проекта не может быть пустым!" : true,
  },
]);

// 3️⃣ — выбираем шаблон
const template = type.includes("React (Vite)")
  ? "react"
  : type.includes("Next.js")
  ? "next"
  : type.includes("React (TanStack)")
  ? "react-tanstack"
  : "";
const templatePath = path.join(__dirname, "../templates", template);

// 🧭 Определяем путь, куда копировать
const targetPath =
  projectName === "."
    ? process.cwd()
    : path.resolve(process.cwd(), projectName);

// Проверяем, существует ли папка
if (fs.existsSync(targetPath) && projectName !== ".") {
  console.log(chalk.red(`❌ Папка "${projectName}" уже существует!`));
  process.exit(1);
}

// 4️⃣ — копируем шаблон
console.log(chalk.cyan(`\n📦 Создаю ${type} проект...\n`));
await fs.copy(templatePath, targetPath);

// 5️⃣ — обновляем package.json
const pkgPath = path.join(targetPath, "package.json");
const pkg = JSON.parse(await fs.readFile(pkgPath, "utf-8"));

// Если проект создаётся в текущей папке — имя возьмём из последней части пути
pkg.name = projectName === "." ? path.basename(process.cwd()) : projectName;

await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2));

console.log(chalk.green(`✅ Проект ${pkg.name} успешно создан!`));
console.log(chalk.yellow(`\n👉 Дальше запусти команды:`));
if (projectName !== ".") console.log(`cd ${projectName}`);
console.log(`npm install`);
console.log(`npm run dev\n`);
