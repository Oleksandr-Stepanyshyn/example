const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      console.log(potion.name);
      console.log(newPotion.name);
      if (potion.name === newPotion.name) {
        console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
      }
     
   }
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};


// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// // atTheOldToad.addPotion({ name: "Power potion", price: 270 });
atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
