// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0x2779BF9a4681Ea7C6A7725fAC5DA5132cF05eAe4';//proxy address(TransparentUpgradeableProxy)
   
    const BoxV3 = await ethers.getContractFactory("BoxV3");
    console.log("Preparing upgrade...");
    const boxV3Address = await upgrades.prepareUpgrade(proxyAddress, BoxV3);
    console.log("BoxV3 at:", boxV3Address);
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });