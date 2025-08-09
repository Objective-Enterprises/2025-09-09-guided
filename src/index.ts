// 1. Interface for Magical Item
interface IMagicalItem {
  name: string
  type: string
  powerLevel: number
  isRare: boolean
}

// 2. Class implementing IMagicalItem
class MagicalItem implements IMagicalItem {
  name: string
  type: string
  powerLevel: number
  isRare: boolean

  constructor (name: string, type: string, powerLevel: number, isRare: boolean) {
    this.name = name
    this.type = type
    this.powerLevel = powerLevel
    this.isRare = isRare
  }

  displayInfo () {
    const rarity = this.isRare ? 'rare' : 'common'
    const message = `${this.name} is a ${rarity} ${this.type} whose power level is ${this.powerLevel}`
    console.log(message)
  }
}

// Function to compare power levels of two items
function comparePower (item1: MagicalItem, item2: MagicalItem) {
  const item1MorePowerful = item1.powerLevel > item2.powerLevel
  if (item1MorePowerful) {
    return item1.name
  }
  return item2.name
}


// Generic class for inventory
class Inventory <T> {
  items: T[] = []

  add (item: T) {
    this.items.push(item)
  }

  getAll () {
    return this.items
  }

  // getProperty <K extends keyof T> (item: T, key: K): T[K] {
  getProperty<T, K extends keyof T> (item: T, key: K): T[K] {
    const value = item[key]
    return value
  }
}


// Example items
const beltOfSpeed = new MagicalItem('The Belt of Speed', 'armor', 9003, true)
const bootsOfStrength = new MagicalItem(
  'The Boots of Strength', 'armor', 9005, false
)
const swordOfWisdom = new MagicalItem(
  'The Sword of Wisdom', 'weapon', 9001, true
)
const helmetOfPower = new MagicalItem(
  'The Helmet of Power', 'armor', 9009, false
)

// Create inventory and add items
const inventory = new Inventory<MagicalItem>()
inventory.add(swordOfWisdom)
inventory.add(beltOfSpeed)
inventory.add(bootsOfStrength)
inventory.add(helmetOfPower)

// Display all item info
const items = inventory.getAll()
for (const item of items) {
  item.displayInfo()
}

// Compare power levels
const morePowerfulName = comparePower(items[0], items[1])
console.log('morePowerfulName', morePowerfulName)

// Access property using keyof
const helmetPowerLevel = inventory.getProperty(helmetOfPower, 'powerLevel')
console.log('helmetPowerLevel', helmetPowerLevel)