const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Enchilada Einstein", "Frito Feynman", "Curie con queso"],
    ["https://i.imgur.com/XmBd7VI.png",
    "https://i.imgur.com/zYGHciR.png",
    "https://i.imgur.com/dS6nrS7.png"],
    [120, 240, 540],
    [101, 55, 24],
    "Illuninacho",
    "https://i.imgur.com/32YXYba.jpg",
    10000,
    50
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();