// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0x2779BF9a4681Ea7C6A7725fAC5DA5132cF05eAe4';//proxy address(TransparentUpgradeableProxy)
   
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Preparing upgrade...");
    const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
    console.log("BoxV2 at:", boxV2Address);
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });