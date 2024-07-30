#! /usr/bin/env node
import { input, number, select } from "@inquirer/prompts";

async function ATM() {
  console.log("Welcome to the AtM");
  const id = await input({
    message: `Please enter you id`,
    required: true,
  });
  const pin = await number({
    message: `Please Enter Your pin`,
    required: true,
  });
}
async function options() {
  const option = await select({
    message: "Welcome please select an option from below",
    choices: [
      {
        name: "Withdraw",
        value: "Withdraw",
        description: "Used to withdraw a cash from your account",
      },
      {
        name: "Deposit",
        value: "Deposit",
        description: "Used to deposit cash in your account",
      },
      {
        name: "Check Balance",
        value: "Check Balance",
        description: "Used to check your account cash",
      },
      { name: "Loan", value: "Loan", description: "To take loan from Bank" },
    ],
  });
  if (option === "Withdraw") {
    await number({
      message: "Enter the amount you want to withdraw",
      required: true,
    });
    console.log("Thank you, your money will be withdrawn soon...");
  } else if (option === "Deposit") {
    await number({
      message: "Enter the amount you want to deposit",
      required: true,
    });
    console.log(
      "Thank you, your current account balance will be updated soon..."
    );
  } else if (option === "Check Balance") {
    const SysgenAmnt: number = Math.floor(Math.random() * 10000);
    console.log(`your current balance is, ${SysgenAmnt}`);
  } else if (option === "Loan") {
    await number({
      message: "enter the amount of loan you want",
      required: true,
    });
    console.log(
      "Thank you, your request is in process you will soon receive a notification about your request"
    );
  }
}
async function start() {
  await ATM();
  await options();
}
start();