
export class Command {
  constructor(public name: string, public chars: string, public melding: Array<Melding>) { }
}

export class Melding {
  constructor(
    public firstItem: string,
    public secondItem: string,
    public group: string,
    public percent: string,
    public crystalEffect: Array<CrystalEffect>
  ) { }
}

export class CrystalEffect {
  constructor(public crystal: string, public effect: string) { }
}

export class AppData {

  static effects: Array<string> = ['Air Combo Plus', 'Attack Haste', 'Blizzard Boost', 'Blizzard Screen', 'Combo F Boost', 'Combo Plus', 'Cure Boost', 'Damage Syphon', 'Dark Screen', 'Defender', 'EXP Chance', 'EXP Walker', 'Finish Boost', 'Fire Boost', 'Fire Screen', 'HP Boost', 'HP Prize Plus', 'Item Boost', 'Leaf Bracer', 'Link Prize Plus', 'Lucky Strike', 'Magic Haste', 'Once More', 'Reload Boost', 'Second Chance', 'Thunder Boost', 'Thunder Screen', 'Treasure Magnet'];

  static commands: Array<Command> = [
    {
      name: 'Blitz',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Slot Edge',
          group: 'o',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Barrier Surge',
          secondItem: 'Wishing Edge',
          group: 'p',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Stun Edge',
          secondItem: 'Slot Edge',
          group: 'k',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Slot Edge',
      chars: 'A',
      melding: [
        {
          firstItem: 'Wishing Edge',
          secondItem: 'Cure',
          group: 'o',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Poison Edge',
          secondItem: 'Cura',
          group: 'p',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Blizzard Edge',
          secondItem: 'Cura',
          group: 'g',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Curaga',
          secondItem: 'Renewal Block',
          group: 'n',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Curaga',
          secondItem: 'Focus Block',
          group: 'p',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Curaga',
          secondItem: 'Renewal Barrier',
          group: 'n',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Curaga',
          secondItem: 'Focus Barrier',
          group: 'p',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        }
      ]
    },
    {
      name: 'Barrier Surge',
      chars: 'A',
      melding: [
        {
          firstItem: 'Fire Dash',
          secondItem: 'Barrier',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Stun Edge',
          secondItem: 'Barrier',
          group: 'k',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Wishing Edge',
      chars: 'A',
      melding: [
        {
          firstItem: 'Strike Raid',
          secondItem: 'Barrier Surge',
          group: 'o',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Barrier Surge',
          secondItem: 'Stun Edge',
          group: 'k',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Stun Edge',
          secondItem: 'Binding Strike',
          group: 'j',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        }
      ]
    },
    {
      name: 'Stun Edge',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Thunder',
          group: 'k',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Strike Raid',
          secondItem: 'Thunder',
          group: 'l',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Strike Raid',
          secondItem: 'Thundara',
          group: 'k',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Meteor Crash',
      chars: 'T',
      melding: [
        {
          firstItem: 'Blitz',
          secondItem: 'Quake',
          group: 'n',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Fire Strike',
          secondItem: 'Brutal Blast',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Quake',
      chars: 'T',
      melding: [
        {
          firstItem: 'Brutal Blast',
          secondItem: 'Zero Graviga',
          group: 'b',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Brutal Blast',
          secondItem: 'Magnega',
          group: 'c',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Stun Edge',
          secondItem: 'Mine Shield',
          group: 'o',
          percent: '30',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Binding Strike',
          secondItem: 'Mine Square',
          group: 'l',
          percent: '30',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Brutal Blast',
          secondItem: 'Brutal Blast',
          group: 'n',
          percent: '30',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Fire Strike',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Poison Edge',
          secondItem: 'Fira',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Wishing Edge',
          secondItem: 'Ignite',
          group: 'a',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Stun Edge',
          secondItem: 'Fire',
          group: 'k',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Brutal Blast',
      chars: 'T',
      melding: [
        {
          firstItem: 'Stun Edge',
          secondItem: 'Mine Shield',
          group: 'o',
          percent: '70',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Binding Strike',
          secondItem: 'Mine Square',
          group: 'l',
          percent: '70',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Magic Hour',
      chars: 'A',
      melding: [
        {
          firstItem: 'Blitz',
          secondItem: 'Zero Graviga',
          group: 'o',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Barrier Surge',
          secondItem: 'Aeroga',
          group: 'n',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Zero Graviga',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Thundara',
          secondItem: 'Zero Gravira',
          group: 'i',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Zero Gravity',
          secondItem: 'Zero Gravira',
          group: 'm',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Zero Gravira',
          secondItem: 'Zero Gravira',
          group: 'n',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Aeroga',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Aerora',
          group: 'o',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Aero',
          secondItem: 'Aerora',
          group: 'm',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Aerora',
          secondItem: 'Aerora',
          group: 'n',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Fire Dash',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Fire',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Fira',
          group: 'c',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Confusion Strike',
          secondItem: 'Fire',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Fira',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Fire Dash',
          secondItem: 'Fire',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fire Strike',
          secondItem: 'Fire',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fire',
          secondItem: 'Fire',
          group: 'a',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fire',
          secondItem: 'Ignite',
          group: 'c',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Confusion Strike',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Confuse',
          group: 'o',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Zero Gravity',
          group: 'k',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Strike Raid',
          secondItem: 'Confuse',
          group: 'g',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Dark Haze',
      chars: 'T',
      melding: [
        {
          firstItem: 'Fire Dash',
          secondItem: 'Zero Gravira',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fire Dash',
          secondItem: 'Blackout',
          group: 'a',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fire Surge',
          secondItem: 'Zero Gravity',
          group: 'c',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Zero Gravira',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Thunder',
          secondItem: 'Zero Gravity',
          group: 'i',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Zero Gravity',
          secondItem: 'Zero Gravity',
          group: 'm',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Magnet',
          secondItem: 'Aero',
          group: 'p',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        }
      ]
    },
    {
      name: 'Blackout',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Zero Gravity',
          secondItem: 'Confuse',
          group: 'm',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Zero Gravira',
          secondItem: 'Confuse',
          group: 'n',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Zero Gravira',
          secondItem: 'Poison',
          group: 'p',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        }
      ]
    },
    {
      name: 'Fire Surge',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Fire Dash',
          secondItem: 'Ignite',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fire Strike',
          secondItem: 'Fira',
          group: 'a',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Confusion Strike',
          secondItem: 'Fira',
          group: 'o',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Binding Strike',
          secondItem: 'Fira',
          group: 'k',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Sonic Blade',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Blitz',
          secondItem: 'Dark Haze',
          group: 'd',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Blitz',
          secondItem: 'Air Slide',
          group: 'n',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Fire Dash',
          secondItem: 'Thunder Surge',
          group: 'k',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Thunder Surge',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Fire Dash',
          secondItem: 'Thundara',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Freeze Raid',
          secondItem: 'Thundara',
          group: 'g',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Stun Edge',
          secondItem: 'Thundara',
          group: 'i',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Confusion Strike',
          secondItem: 'Thundara',
          group: 'i',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Chaos Blade',
      chars: 'T',
      melding: [
        {
          firstItem: 'Dark Haze',
          secondItem: 'Sonic Blade',
          group: 'b',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        }
      ]
    },
    {
      name: 'Zantetsuken',
      chars: 'T',
      melding: [
        {
          firstItem: 'Dark Haze',
          secondItem: 'Stopga',
          group: 'b',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Sonic Blade',
          secondItem: 'Stopga',
          group: 'f',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Stopga',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Stop',
          secondItem: 'Stopra',
          group: 'i',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Stopra',
          secondItem: 'Stopra',
          group: 'j',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        }
      ]
    },
    {
      name: 'Strike Raid',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Sliding Dash',
          group: 'o',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Freeze Raid',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Strike Raid',
          secondItem: 'Blizzara',
          group: 'i',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Blizzard Edge',
          secondItem: 'Binding Strike',
          group: 'k',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Blizzara',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Strike Raid',
          secondItem: 'Blizzard',
          group: 'g',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Blizzard Edge',
          secondItem: 'Blizzard',
          group: 'g',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Blizzard',
          secondItem: 'Blizzard',
          group: 'e',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Blizzard',
          secondItem: 'Aero',
          group: 'h',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        }
      ]
    },
    {
      name: 'Blizzard Edge',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Blizzard',
          group: 'g',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Blizzara',
          group: 'h',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Blizzard',
          group: 'e',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Blizzara',
          group: 'g',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Binding Strike',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Bind',
          group: 'k',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Strike Raid',
          secondItem: 'Bind',
          group: 'o',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Stun Edge',
          secondItem: 'Zero Gravity',
          group: 'i',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Treasure Raid',
      chars: 'V',
      melding: [
        {
          firstItem: 'Strike Raid',
          secondItem: 'Slot Edge',
          group: 'o',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Slot Edge',
          secondItem: 'Magnet',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Slot Edge',
          secondItem: 'Magnera',
          group: 'k',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Magnera',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Stun Edge',
          secondItem: 'Magnet',
          group: 'k',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Thunder',
          secondItem: 'Magnet',
          group: 'i',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Magnet',
          secondItem: 'Magnet',
          group: 'm',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Spark Raid',
      chars: 'V',
      melding: [
        {
          firstItem: 'Freeze Raid',
          secondItem: 'Magnega',
          group: 'j',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Treasure Raid',
          secondItem: 'Magnega',
          group: 'n',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Thunder Surge',
          secondItem: 'Dodge Roll',
          group: 'p',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Thundaga',
          secondItem: 'Dodge Roll',
          group: 'l',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Dodge Roll',
          secondItem: 'Stun Block',
          group: 'l',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Magnega',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Magnet',
          secondItem: 'Magnera',
          group: 'i',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Magnera',
          secondItem: 'Magnera',
          group: 'j',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        }
      ]
    },
    {
      name: 'Thundaga',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Binding Strike',
          secondItem: 'Thundara',
          group: 'k',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Thunder',
          secondItem: 'Thundara',
          group: 'i',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Thundara',
          secondItem: 'Thundara',
          group: 'j',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        }
      ]
    },
    {
      name: 'Stun Block',
      chars: 'TV',
      melding: [
        {
          firstItem: 'Stun Edge',
          secondItem: 'Block',
          group: 'l',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Thundaga',
          secondItem: 'Block',
          group: 'i',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Wind Raid',
      chars: 'V',
      melding: [
        {
          firstItem: 'Freeze Raid',
          secondItem: 'Aeroga',
          group: 'b',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Treasure Raid',
          secondItem: 'Aeroga',
          group: 'f',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Ignite',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Fire',
          secondItem: 'Bind',
          group: 'a',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fira',
          secondItem: 'Bind',
          group: 'c',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Thundara',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Stun Edge',
          secondItem: 'Thunder',
          group: 'k',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Thunder',
          secondItem: 'Thunder',
          group: 'i',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Zero Gravity',
          secondItem: 'Magnet',
          group: 'l',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Aerial Slam',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Fire Dash',
          secondItem: 'High Jump',
          group: 'a',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fire Surge',
          secondItem: 'Aero',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fire Strike',
          secondItem: 'Aerora',
          group: 'c',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Aerora',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Aero',
          group: 'g',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Thunder',
          secondItem: 'Aero',
          group: 'i',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Aero',
          secondItem: 'Aero',
          group: 'e',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Ars Solum',
      chars: 'T',
      melding: [
        {
          firstItem: 'Dark Haze',
          secondItem: 'Sonic Blade',
          group: 'b',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Dark Haze',
          secondItem: 'Stopga',
          group: 'b',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Sonic Blade',
          secondItem: 'Stopga',
          group: 'f',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Thunder',
          group: 'k',
          percent: '5',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Strike Raid',
          secondItem: 'Thunder',
          group: 'l',
          percent: '5',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Strike Raid',
          secondItem: 'Thundara',
          group: 'k',
          percent: '5',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Confusion Strike',
          secondItem: 'Thundara',
          group: 'i',
          percent: '5',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Ars Arcanum',
      chars: 'V',
      melding: [
        {
          firstItem: 'Blitz',
          secondItem: 'Aerial Slam',
          group: 'f',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Slot Edge',
          group: 'o',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Fire Strike',
          secondItem: 'Aerora',
          group: 'c',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Blizzard',
          group: 'g',
          percent: '5',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Blizzara',
          group: 'h',
          percent: '5',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Blizzard',
          group: 'e',
          percent: '5',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Blizzara',
          group: 'g',
          percent: '5',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Poison Edge',
          secondItem: 'Cura',
          group: 'p',
          percent: '5',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Blizzard Edge',
          secondItem: 'Cura',
          group: 'g',
          percent: '5',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Poison Edge',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Poison',
          group: 'o',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Poison',
          group: 'k',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Strike Raid',
          secondItem: 'Poison',
          group: 'd',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Cura',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Thunder',
          secondItem: 'Cure',
          group: 'i',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Cure',
          secondItem: 'Cure',
          group: 'm',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Cure',
          secondItem: 'Aero',
          group: 'o',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Time Splicer',
      chars: 'VA',
      melding: [
        {
          firstItem: 'Aerial Slam',
          secondItem: 'Stopga',
          group: 'f',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Stopga',
          secondItem: 'Barrier',
          group: 'c',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Barrier Surge',
          secondItem: 'Wishing Edge',
          group: 'p',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Stun Edge',
          secondItem: 'Slot Edge',
          group: 'k',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Curaga',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Cure',
          secondItem: 'Cura',
          group: 'm',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Cura',
          secondItem: 'Cura',
          group: 'n',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Renewal Block',
      chars: 'TV',
      melding: [
        {
          firstItem: 'Curaga',
          secondItem: 'Block',
          group: 'p',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Esuna',
          secondItem: 'Block',
          group: 'c',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Renewal Barrier',
      chars: 'A',
      melding: [
        {
          firstItem: 'Curaga',
          secondItem: 'Barrier',
          group: 'p',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Esuna',
          secondItem: 'Barrier',
          group: 'n',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Mine Shield',
      chars: 'TV',
      melding: [
        {
          firstItem: 'Fira',
          secondItem: 'Zero Gravity',
          group: 'a',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fira',
          secondItem: 'Block',
          group: 'c',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Ignite',
          secondItem: 'Stop',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Stopra',
          secondItem: 'Block',
          group: 'm',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Mine Square',
      chars: 'A',
      melding: [
        {
          firstItem: 'Fira',
          secondItem: 'Stop',
          group: 'a',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fira',
          secondItem: 'Barrier',
          group: 'c',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Aerora',
          secondItem: 'Ignite',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Stopra',
          secondItem: 'Barrier',
          group: 'm',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Tornado Strike',
      chars: 'V',
      melding: [
        {
          firstItem: 'Confusion Strike',
          secondItem: 'Aeroga',
          group: 'g',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Binding Strike',
          secondItem: 'Aeroga',
          group: 'f',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Magnet Spiral',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Binding Strike',
          secondItem: 'Collision Magnet',
          group: 'k',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Binding Strike',
          secondItem: 'Magnega',
          group: 'j',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Magnera',
          group: 'k',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Stun Edge',
          secondItem: 'Magnera',
          group: 'l',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Zero Gravira',
          secondItem: 'Magnet',
          group: 'i',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Collision Magnet',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Magnera',
          group: 'k',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Stun Edge',
          secondItem: 'Magnera',
          group: 'l',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Zero Gravira',
          secondItem: 'Magnet',
          group: 'i',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Windcutter',
      chars: 'T',
      melding: [
        {
          firstItem: 'Binding Strike',
          secondItem: 'Aeroga',
          group: 'f',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Confusion Strike',
          secondItem: 'Aeroga',
          group: 'g',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Limit Storm',
      chars: 'T',
      melding: [
        {
          firstItem: 'Brutal Blast',
          secondItem: 'Confusion Strike',
          group: 'g',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Brutal Blast',
          secondItem: 'Binding Strike',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Salvation',
      chars: 'V',
      melding: [
        {
          firstItem: 'Wind Raid',
          secondItem: 'Curaga',
          group: 'n',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Geo Impact',
      chars: 'T',
      melding: [
        {
          firstItem: 'Brutal Blast',
          secondItem: 'Brutal Blast',
          group: 'n',
          percent: '70',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Sacrifice',
      chars: 'T',
      melding: [
        {
          firstItem: 'Dark Haze',
          secondItem: 'Warp',
          group: 'b',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Poison Edge',
          secondItem: 'Warp',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Warp',
      chars: 'T',
      melding: [
        {
          firstItem: 'Thundara',
          secondItem: 'Zero Gravira',
          group: 'i',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Zero Gravity',
          secondItem: 'Zero Gravira',
          group: 'm',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Zero Gravira',
          secondItem: 'Zero Gravira',
          group: 'n',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Thunder',
          secondItem: 'Zero Gravity',
          group: 'i',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Magnet',
          secondItem: 'Aero',
          group: 'p',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Zero Gravity',
          secondItem: 'Zero Gravity',
          group: 'm',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Break Time',
      chars: 'A',
      melding: [
        {
          firstItem: 'Curaga',
          secondItem: 'Renewal Block',
          group: 'n',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Curaga',
          secondItem: 'Renewal Barrier',
          group: 'n',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Curaga',
          secondItem: 'Focus Block',
          group: 'p',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Curaga',
          secondItem: 'Focus Barrier',
          group: 'p',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        }
      ]
    },
    {
      name: 'Firaga',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Fire Dash',
          secondItem: 'Fira',
          group: 'd',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fire',
          secondItem: 'Fira',
          group: 'a',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fira',
          secondItem: 'Fira',
          group: 'b',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        }
      ]
    },
    {
      name: 'Dark Firaga',
      chars: 'T',
      melding: [
        {
          firstItem: 'Dark Haze',
          secondItem: 'Firaga',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Firaga',
          secondItem: 'Blackout',
          group: 'b',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        }
      ]
    },
    {
      name: 'Fission Firaga',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Fira',
          secondItem: 'Aeroga',
          group: 'a',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Firaga',
          secondItem: 'Aerora',
          group: 'a',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Firaga',
          secondItem: 'Aeroga',
          group: 'b',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        }
      ]
    },
    {
      name: 'Triple Firaga',
      chars: 'A',
      melding: [
        {
          firstItem: 'Fira',
          secondItem: 'Firaga',
          group: 'a',
          percent: '95',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Blitz',
          secondItem: 'Firaga',
          group: 'd',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Firaga',
          secondItem: 'Firaga',
          group: 'b',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        }
      ]
    },
    {
      name: 'Crawling Fire',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Firaga',
          secondItem: 'Slow',
          group: 'a',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Firaga',
          secondItem: 'Stopra',
          group: 'd',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Firaga',
          secondItem: 'Stopga',
          group: 'b',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        }
      ]
    },
    {
      name: 'Stopra',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Slow',
          secondItem: 'Slow',
          group: 'l',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Slow',
          secondItem: 'Stop',
          group: 'k',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Stop',
          secondItem: 'Stop',
          group: 'i',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Blizzaga',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Blizzard Edge',
          secondItem: 'Blizzara',
          group: 'g',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Blizzard',
          secondItem: 'Blizzara',
          group: 'e',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Blizzara',
          secondItem: 'Blizzara',
          group: 'f',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Triple Blizzaga',
      chars: 'A',
      melding: [
        {
          firstItem: 'Blitz',
          secondItem: 'Blizzaga',
          group: 'g',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Blizzara',
          secondItem: 'Blizzaga',
          group: 'e',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Blizzaga',
          secondItem: 'Blizzaga',
          group: 'f',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Thundaga Shot',
      chars: 'A',
      melding: [
        {
          firstItem: 'Strike Raid',
          secondItem: 'Thundaga',
          group: 'i',
          percent: '85',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Freeze Raid',
          secondItem: 'Thundaga',
          group: 'e',
          percent: '85',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Firaga',
          secondItem: 'Thundaga',
          group: 'a',
          percent: '85',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Seeker Mine',
      chars: 'A',
      melding: [
        {
          firstItem: 'Mine Shield',
          secondItem: 'Mine Square',
          group: 'b',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Mine Shield',
          secondItem: 'Magnega',
          group: 'c',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Mine Square',
          secondItem: 'Magnega',
          group: 'd',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Munny Magnet',
      chars: 'A',
      melding: [
        {
          firstItem: 'Wishing Edge',
          secondItem: 'Magnera',
          group: 'k',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Thundara',
          secondItem: 'Magnera',
          group: 'i',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Energy Magnet',
      chars: 'A',
      melding: [
        {
          firstItem: 'Cure',
          secondItem: 'Magnera',
          group: 'm',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Cura',
          secondItem: 'Magnera',
          group: 'n',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'D-Link Magnet',
      chars: 'A',
      melding: [
        {
          firstItem: 'Zero Gravira',
          secondItem: 'Magnera',
          group: 'l',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Magnera',
          secondItem: 'Stopra',
          group: 'i',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Faith',
      chars: 'V',
      melding: [
        {
          firstItem: 'Wind Raid',
          secondItem: 'Break Time',
          group: 'n',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Deep Freeze',
      chars: 'A',
      melding: [
        {
          firstItem: 'Freeze Raid',
          secondItem: 'Blizzaga',
          group: 'g',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Binding Strike',
          secondItem: 'Blizzaga',
          group: 'h',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Blizzaga',
          secondItem: 'Triple Blizzaga',
          group: 'f',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Glacier',
      chars: 'A',
      melding: [
        {
          firstItem: 'Blizzaga',
          secondItem: 'Deep Freeze',
          group: 'e',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Triple Blizzaga',
          secondItem: 'Deep Freeze',
          group: 'f',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Ice Barrage',
      chars: 'A',
      melding: [
        {
          firstItem: 'Blizzaga',
          secondItem: 'Mine Shield',
          group: 'f',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Blizzaga',
          secondItem: 'Mine Square',
          group: 'h',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        }
      ]
    },
    {
      name: 'Firaga Burst',
      chars: 'A',
      melding: [
        {
          firstItem: 'Fira',
          secondItem: 'Aeroga',
          group: 'a',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Firaga',
          secondItem: 'Aerora',
          group: 'a',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Firaga',
          secondItem: 'Aeroga',
          group: 'b',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Firaga',
          secondItem: 'Slow',
          group: 'a',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Firaga',
          secondItem: 'Stopra',
          group: 'd',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Firaga',
          secondItem: 'Stopga',
          group: 'b',
          percent: '20',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        }
      ]
    },
    {
      name: 'Raging Storm',
      chars: 'A',
      melding: [
        {
          firstItem: 'Fission Firaga',
          secondItem: 'Firaga Burst',
          group: 'b',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Blitz',
          secondItem: 'Firaga',
          group: 'd',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fire Dash',
          secondItem: 'Fira',
          group: 'd',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fire Surge',
          secondItem: 'Cartwheel',
          group: 'c',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fire',
          secondItem: 'Fira',
          group: 'a',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Fira',
          secondItem: 'Fira',
          group: 'b',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Fira',
          secondItem: 'Firaga',
          group: 'a',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Firaga',
          secondItem: 'Firaga',
          group: 'b',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        }
      ]
    },
    {
      name: 'Mega Flare',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Fission Firaga',
          secondItem: 'Crawling Fire',
          group: 'b',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        }
      ]
    },
    {
      name: 'Meteor',
      chars: 'T',
      melding: [
        {
          firstItem: 'Geo Impact',
          secondItem: 'Quake',
          group: 'b',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Brutal Blast',
          secondItem: 'Zero Graviga',
          group: 'b',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Brutal Blast',
          secondItem: 'Magnega',
          group: 'c',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Tornado',
      chars: 'V',
      melding: [
        {
          firstItem: 'Magnega',
          secondItem: 'Aeroga',
          group: 'n',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Aerora',
          group: 'o',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Aero',
          secondItem: 'Aerora',
          group: 'm',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Aerora',
          secondItem: 'Aerora',
          group: 'n',
          percent: '10',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Quick Blitz',
          secondItem: 'Aero',
          group: 'g',
          percent: '5',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Thunder',
          secondItem: 'Aero',
          group: 'i',
          percent: '5',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Aero',
          secondItem: 'Aero',
          group: 'e',
          percent: '5',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Leaf Bracer'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Transcendence',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Magnet Spiral',
          secondItem: 'Zero Graviga',
          group: 'j',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        }
      ]
    },
    {
      name: 'Mini',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Magnera',
          secondItem: 'Warp',
          group: 'n',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Cure Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Magnega',
          secondItem: 'Magnega',
          group: 'j',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Defender'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Magnega',
          secondItem: 'Bind',
          group: 'i',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Homing Slide',
      chars: 'VA',
      melding: [
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Magnera',
          group: 'p',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Air Slide',
          group: 'c',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Magnet',
          secondItem: 'Air Slide',
          group: 'l',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Thunder Roll',
      chars: 'V',
      melding: [
        {
          firstItem: 'Thunder Surge',
          secondItem: 'Dodge Roll',
          group: 'p',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Thundaga',
          secondItem: 'Dodge Roll',
          group: 'l',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Stun Block',
          secondItem: 'Dodge Roll',
          group: 'l',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Firewheel',
      chars: 'A',
      melding: [
        {
          firstItem: 'Firaga',
          secondItem: 'Cartwheel',
          group: 'b',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Fission Firaga',
          secondItem: 'Cartwheel',
          group: 'b',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        },
        {
          firstItem: 'Fire Surge',
          secondItem: 'Cartwheel',
          group: 'c',
          percent: '90',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Ice Slide',
      chars: 'TVA',
      melding: [
        {
          firstItem: 'Blizzard Edge',
          secondItem: 'Air Slide',
          group: 'f',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Second Chance'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        },
        {
          firstItem: 'Blizzaga',
          secondItem: 'Air Slide',
          group: 'h',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        }
      ]
    },
    {
      name: 'Fire Glide',
      chars: 'V',
      melding: [
        {
          firstItem: 'Fire Surge',
          secondItem: 'Glide',
          group: 'c',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Firaga',
          secondItem: 'Glide',
          group: 'b',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Boost'
            },
            {
              crystal: 'Fleeting',
              effect: 'Reload Boost'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Once More'
            },
            {
              crystal: 'Soothing',
              effect: 'Damage Syphon'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Chance'
            }
          ]
        }
      ]
    },
    {
      name: 'Poison Block',
      chars: 'TV',
      melding: [
        {
          firstItem: 'Poison Edge',
          secondItem: 'Block',
          group: 'h',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Blizzard Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        },
        {
          firstItem: 'Poison',
          secondItem: 'Block',
          group: 'p',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        }
      ]
    },
    {
      name: 'Confuse Barrier',
      chars: 'A',
      melding: [
        {
          firstItem: 'Confusion Strike',
          secondItem: 'Barrier',
          group: 'c',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Confuse',
          secondItem: 'Barrier',
          group: 'l',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    },
    {
      name: 'Stop Barrier',
      chars: 'A',
      melding: [
        {
          firstItem: 'Stopga',
          secondItem: 'Barrier',
          group: 'c',
          percent: '80',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        }
      ]
    },
    {
      name: 'Payback Fang',
      chars: 'T',
      melding: [
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Counter Hammer',
          group: 'p',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        }
      ]
    },
    {
      name: 'Payback Raid',
      chars: 'V',
      melding: [
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Strike Raid',
          group: 'p',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Dark Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Magic Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Combo F Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Air Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'Item Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'EXP Walker'
            }
          ]
        }
      ]
    },
    {
      name: 'Payback Surge',
      chars: 'A',
      melding: [
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Fire Surge',
          group: 'c',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Fire Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'HP Prize Plus'
            },
            {
              crystal: 'Abounding',
              effect: 'Link Prize Plus'
            }
          ]
        },
        {
          firstItem: 'Sliding Dash',
          secondItem: 'Thunder Surge',
          group: 'l',
          percent: '100',
          crystalEffect: [
            {
              crystal: 'Shimmering',
              effect: 'Thunder Screen'
            },
            {
              crystal: 'Fleeting',
              effect: 'Attack Haste'
            },
            {
              crystal: 'Pulsing',
              effect: 'Finish Boost'
            },
            {
              crystal: 'Wellspring',
              effect: 'Combo Plus'
            },
            {
              crystal: 'Soothing',
              effect: 'HP Boost'
            },
            {
              crystal: 'Hungry',
              effect: 'Treasure Magnet'
            },
            {
              crystal: 'Abounding',
              effect: 'Lucky Strike'
            }
          ]
        }
      ]
    }
  ];
}
