export const MODULE = {
  ID: "custom-dnd5e",
  NAME: "Custom D&D 5e"
};

export const CONSTANTS = {
  CONFIG: {
    TEMPLATE: {
      FORM: "modules/custom-dnd5e/templates/config-form.hbs",
      EDIT_IN_LIST: "modules/custom-dnd5e/templates/config-edit-in-list.hbs",
      LIST: "modules/custom-dnd5e/templates/config-list.hbs"
    }
  },
  ABILITIES: {
    ID: "abilities",
    MENU: {
      KEY: "abilities-menu",
      HINT: "CUSTOM_DND5E.menu.abilities.hint",
      ICON: "fas fa-head-side-brain",
      LABEL: "CUSTOM_DND5E.menu.abilities.label",
      NAME: "CUSTOM_DND5E.menu.abilities.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-abilities"
      },
      CONFIG: {
        KEY: "abilities"
      }
    },
    TEMPLATE: {
      EDIT: "modules/custom-dnd5e/templates/abilities-edit.hbs",
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.tVG6b7kBJUOVvpwP"
  },
  ACTIVATION_COSTS: {
    ID: "activation-costs",
    MENU: {
      KEY: "activation-costs-menu",
      HINT: "CUSTOM_DND5E.menu.activityActivationTypes.hint",
      ICON: "fas fa-clock",
      LABEL: "CUSTOM_DND5E.menu.activityActivationTypes.label",
      NAME: "CUSTOM_DND5E.menu.activityActivationTypes.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-activation-costs"
      },
      CONFIG: {
        KEY: "activation-costs"
      }
    },
    TEMPLATE: {
      EDIT: "modules/custom-dnd5e/templates/activation-costs-edit.hbs",
      FORM: "modules/custom-dnd5e/templates/config-form.hbs",
      LIST: "modules/custom-dnd5e/templates/config-list.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.LehHpGOmEbRQ4day"
  },
  ACTOR_SHEET: {
    ID: "actor-sheet",
    MENU: {
      KEY: "actor-sheet-menu",
      HINT: "CUSTOM_DND5E.menu.actorSheet.hint",
      ICON: "fas fa-scroll",
      LABEL: "CUSTOM_DND5E.menu.actorSheet.label",
      NAME: "CUSTOM_DND5E.menu.actorSheet.name"
    },
    SETTING: {
      AUTO_FADE_SHEET: { KEY: "auto-fade-sheet" },
      AUTO_MINIMISE_SHEET: { KEY: "auto-minimise-sheet" },
      BANNER_IMAGE: { KEY: "banner-image" },
      SHEET_SCALE: { KEY: "sheet-scale" },
      SHOW_DEATH_SAVES: { KEY: "show-death-saves" },
      SHOW_ENCUMBRANCE: { KEY: "show-encumbrance" },
      SHOW_EXHAUSTION: { KEY: "show-exhaustion" },
      SHOW_INSPIRATION: { KEY: "show-inspiration" },
      SHOW_LEGENDARY_ACTIONS: { KEY: "show-legendary-actions" },
      SHOW_LEGENDARY_RESISTANCE: { KEY: "show-legendary-resistance" },
      SHOW_MANAGE_CURRENCY: { KEY: "show-manage-currency" },
      SHOW_USE_LAIR_ACTION: { KEY: "show-use-lair-action" }
    },
    TEMPLATE: {
      FORM: "modules/custom-dnd5e/templates/actor-sheet-form.hbs",
      CHARACTER_SHEET_2: "modules/custom-dnd5e/templates/sheet/character-sheet-2.hbs",
      CHARACTER_DETAILS: "modules/custom-dnd5e/templates/sheet/character-details.hbs"
    }
  },
  ACTOR_SIZES: {
    ID: "actor-sizes",
    MENU: {
      KEY: "actor-sizes-menu",
      HINT: "CUSTOM_DND5E.menu.actorSizes.hint",
      ICON: "fas fa-arrow-up-big-small",
      LABEL: "CUSTOM_DND5E.menu.actorSizes.label",
      NAME: "CUSTOM_DND5E.menu.actorSizes.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-actor-sizes"
      },
      CONFIG: {
        KEY: "actor-sizes"
      }
    },
    TEMPLATE: {
      EDIT: "modules/custom-dnd5e/templates/actor-sizes-edit.hbs",
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.V3QbxNviHsZd8Ssb"
  },
  ARMOR_CALCULATIONS: {
    ID: "armor-calculations",
    MENU: {
      KEY: "armor-calculations-menu",
      HINT: "CUSTOM_DND5E.menu.armorClasses.hint",
      ICON: "fas fa-abacus",
      LABEL: "CUSTOM_DND5E.menu.armorClasses.label",
      NAME: "CUSTOM_DND5E.menu.armorClasses.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-armor-calculations"
      },
      CONFIG: {
        KEY: "armor-calculations"
      }
    },
    TEMPLATE: {
      EDIT: "modules/custom-dnd5e/templates/armor-calculations-edit.hbs",
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.bjFllCYYW9paPCNG"
  },
  ARMOR_IDS: {
    MENU: {
      KEY: "armor-ids-menu",
      HINT: "CUSTOM_DND5E.menu.armorIds.hint",
      ICON: "fas fa-shield-halved",
      LABEL: "CUSTOM_DND5E.menu.armorIds.label",
      NAME: "CUSTOM_DND5E.menu.armorIds.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-armor-ids"
      },
      CONFIG: {
        KEY: "armor-ids"
      }
    },
    TEMPLATE: {
      FORM: "modules/custom-dnd5e/templates/config-form.hbs",
      LIST: "modules/custom-dnd5e/templates/config-edit-in-list.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.ehZqnZslXx3cknv9"
  },
  ARMOR_PROFICIENCIES: {
    MENU: {
      KEY: "armor-proficiencies-menu",
      HINT: "CUSTOM_DND5E.menu.armorProficiencies.hint",
      ICON: "fas fa-user-shield",
      LABEL: "CUSTOM_DND5E.menu.armorProficiencies.label",
      NAME: "CUSTOM_DND5E.menu.armorProficiencies.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-armor-proficiencies"
      },
      CONFIG: {
        KEY: "armor-proficiencies"
      }
    },
    TEMPLATE: {
      FORM: "modules/custom-dnd5e/templates/config-form.hbs",
      LIST: "modules/custom-dnd5e/templates/config-edit-in-list.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.mTVSShsLO960Kmrk"
  },
  BLOODIED: {
    MENU: {
      KEY: "bloodied-menu",
      HINT: "CUSTOM_DND5E.menu.bloodied.hint",
      ICON: "fas fa-droplet",
      LABEL: "CUSTOM_DND5E.menu.bloodied.label",
      NAME: "CUSTOM_DND5E.menu.bloodied.name"
    },
    SETTING: {
      APPLY_BLOODIED: {
        KEY: "apply-bloodied"
      },
      BLOODIED_ICON: {
        KEY: "bloodied-icon"
      },
      BLOODIED_STATUS: {
        KEY: "bloodied-status"
      },
      BLOODIED_TINT: {
        KEY: "bloodied-tint"
      },
      CONFIG: {
        KEY: "bloodied"
      },
      ENABLE: {
        KEY: "enable-bloodied"
      },
      REMOVE_BLOODIED_ON_DEAD: {
        KEY: "remove-bloodied-on-dead"
      }
    },
    TEMPLATE: {
      FORM: "modules/custom-dnd5e/templates/bloodied-form.hbs",
    },
    ICON: "modules/custom-dnd5e/media/icons/bloodied.svg",
    CONDITION_UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.ngr8w6WBycK59brj.JournalEntryPage.sV0ZCKxwh4n4ZU1P",
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.GjOBdXwapcYvUihc"
  },
  CHAT_COMMANDS: {
    SETTING: {
      KEY: "chat-commands",
      NAME: "CUSTOM_DND5E.setting.chatCommands.name",
      HINT: "CUSTOM_DND5E.setting.chatCommands.hint"
    }
  },
  CONDITIONS: {
    MENU: {
      KEY: "conditions-menu",
      HINT: "CUSTOM_DND5E.menu.conditions.hint",
      ICON: "fas fa-skull",
      LABEL: "CUSTOM_DND5E.menu.conditions.label",
      NAME: "CUSTOM_DND5E.menu.conditions.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-conditions"
      },
      CONFIG: {
        KEY: "conditions"
      }
    },
    TEMPLATE: {
      EDIT: "modules/custom-dnd5e/templates/conditions-edit.hbs",
      FORM: "modules/custom-dnd5e/templates/config-form.hbs",
      LIST: "modules/custom-dnd5e/templates/config-list.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.DOx3PrYi19dFzcA1"
  },
  CONSUMABLE_TYPES: {
    ID: "consumable-types",
    MENU: {
      KEY: "consumable-types-menu",
      HINT: "CUSTOM_DND5E.menu.consumableTypes.hint",
      ICON: "fas fa-flask-round-potion",
      LABEL: "CUSTOM_DND5E.menu.consumableTypes.label",
      NAME: "CUSTOM_DND5E.menu.consumableTypes.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-consumable-types"
      },
      CONFIG: {
        KEY: "consumable-types"
      }
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.OgMhctYM5NFh8neL"
  },
  COUNTERS: {
    ID: "counters",
    MENU: {
      KEY: "counters-menu",
      HINT: "CUSTOM_DND5E.menu.counters.hint",
      ICON: "fas fa-tally",
      LABEL: "CUSTOM_DND5E.menu.counters.label",
      NAME: "CUSTOM_DND5E.menu.counters.name"
    },
    SETTING: {
      COUNTERS: {
        KEY: "counters",
        HINT: "CUSTOM_DND5E.setting.counters.hint",
        NAME: "CUSTOM_DND5E.setting.counters.name"
      },
      CHARACTER_COUNTERS: {
        KEY: "character-counters"
      },
      GROUP_COUNTERS: {
        KEY: "group-counters"
      },
      ITEM_COUNTERS: {
        KEY: "item-counters"
      },
      NPC_COUNTERS: {
        KEY: "npc-counters"
      }
    },
    SYSTEM_PROPERTY: {
      "death-saves": "@attributes.death.success",
      exhaustion: "@attributes.exhaustion",
      inspiration: "@attributes.inspiration",
      legact: "@resources.legact.value",
      legres: "@resources.legres.value",
      lair: "@resources.lair.value"
    },
    TEMPLATE: {
      FORM: "modules/custom-dnd5e/templates/counters-form.hbs",
      FORM_INDIVIDUAL: "modules/custom-dnd5e/templates/counters-form-individual.hbs",
      LIST: "modules/custom-dnd5e/templates/counters-list.hbs",
      EDIT: "modules/custom-dnd5e/templates/counters-edit.hbs",
      TRIGGERS_LIST: "modules/custom-dnd5e/templates/counters-triggers-list.hbs",
      DND5E_ACTOR: "modules/custom-dnd5e/templates/counters/dnd5e/counters-actor.hbs",
      DND5E_ITEM_GROUP_LEGACY: "modules/custom-dnd5e/templates/counters/dnd5e/counters-item-group-legacy.hbs"
    }
  },
  CURRENCY: {
    ID: "currency",
    MENU: {
      KEY: "currency-menu",
      HINT: "CUSTOM_DND5E.menu.currencies.hint",
      ICON: "fas fa-coin",
      LABEL: "CUSTOM_DND5E.menu.currencies.label",
      NAME: "CUSTOM_DND5E.menu.currencies.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-currency"
      },
      CONFIG: {
        KEY: "currency"
      }
    },
    TEMPLATE: {
      EDIT: "modules/custom-dnd5e/templates/currency-edit.hbs",
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.dmzCGf2LPoBlfu9m"
  },
  DAMAGE_TYPES: {
    ID: "damage-types",
    MENU: {
      KEY: "damage-types-menu",
      HINT: "CUSTOM_DND5E.menu.damageTypes.hint",
      ICON: "fas fa-face-head-bandage",
      LABEL: "CUSTOM_DND5E.menu.damageTypes.label",
      NAME: "CUSTOM_DND5E.menu.damageTypes.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-damage-types"
      },
      CONFIG: {
        KEY: "damage-types"
      }
    },
    TEMPLATE: {
      EDIT: "modules/custom-dnd5e/templates/damage-types-edit.hbs",
      FORM: "modules/custom-dnd5e/templates/config-form.hbs",
      LIST: "modules/custom-dnd5e/templates/config-list.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.qkB3382uO7YUUApw"
  },
  DEAD: {
    SETTING: {
      APPLY_DEAD: {
        KEY: "apply-dead"
      },
      APPLY_INSTANT_DEATH: {
        KEY: "apply-instant-death"
      },
      DEAD_ROTATION: {
        KEY: "dead-rotation"
      },
      DEAD_TINT: {
        KEY: "dead-tint"
      }
    }
  },
  DEATH_SAVES: {
    SETTING: {
      DEATH_SAVES_ROLL_MODE: {
        KEY: "death-saves-roll-mode"
      },
      REMOVE_DEATH_SAVES: {
        KEY: "remove-death-saves"
      },
      DEATH_SAVES_TARGET_VALUE: {
        KEY: "death-saves-target-value"
      }
    }
  },
  DEBUG: {
    MENU: {
      KEY: "debug-menu",
      HINT: "CUSTOM_DND5E.menu.debug.hint",
      ICON: "fas fa-bug",
      LABEL: "CUSTOM_DND5E.menu.debug.label",
      NAME: "CUSTOM_DND5E.menu.debug.name"
    },
    FORM: {
      TITLE: "CUSTOM_DND5E.form.debug.title"
    },
    SETTING: {
      KEY: "debug"
    },
    TEMPLATE: {
      FORM: "modules/custom-dnd5e/templates/debug-form.hbs",
      IMPORT_DIALOG: "modules/custom-dnd5e/templates/import-dialog.hbs"
    }
  },
  ENCUMBRANCE: {
    EQUIPPED_ITEM_WEIGHT_MODIFIER: {
      SETTING: {
        KEY: "equipped-item-weight-modifier"
      }
    },
    PROFICIENT_EQUIPPED_ITEM_WEIGHT_MODIFIER: {
      SETTING: { KEY: "proficient-equipped-item-weight-modifier"}
    },
    UNEQUIPPED_ITEM_WEIGHT_MODIFIER: {
      SETTING: {
        KEY: "unequipped-item-weight-modifier"
      }
    },
    ID: "encumbrance",
    MENU: {
      KEY: "encumbrance-menu",
      HINT: "CUSTOM_DND5E.menu.encumbrance.hint",
      ICON: "fas fa-weight-hanging",
      LABEL: "CUSTOM_DND5E.menu.encumbrance.label",
      NAME: "CUSTOM_DND5E.menu.encumbrance.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-encumbrance"
      },
      CONFIG: {
        KEY: "encumbrance"
      }
    },
    TEMPLATE: {
      FORM: "modules/custom-dnd5e/templates/encumbrance-form.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.QK8bAMxx9x9IaTHl"
  },
  EXHAUSTION: {
    SETTING: {
      APPLY_EXHAUSTION_ON_ZERO_HP: {
        KEY: "apply-exhaustion-on-zero-hp"
      },
      APPLY_EXHAUSTION_ON_COMBAT_END: {
        KEY: "apply-exhaustion-on-combat-end"
      },
      EXHAUSTION_REQUEST_SAVING_THROW: {
        KEY: "exhaustion-request-saving-throw"
      },
      EXHAUSTION_SAVING_THROW_DC: {
        KEY: "exhaustion-saving-throw-dc"
      }
    }
  },
  HIT_POINTS: {
    SETTING: {
      APPLY_MASSIVE_DAMAGE: {
        KEY: "apply-massive-damage"
      },
      APPLY_NEGATIVE_HP: {
        KEY: "apply-negative-hp"
      },
      NEGATIVE_HP_HEAL_FROM_ZERO: {
        KEY: "negative-hp-heal-from-zero"
      },
      ROLL_NPC_HP: {
        KEY: "roll-npc-hp"
      }
    }
  },
  HOUSE_RULES: {
    MENU: {
      KEY: "house-rules-menu",
      HINT: "CUSTOM_DND5E.menu.houseRules.hint",
      ICON: "fas fa-house-chimney",
      LABEL: "CUSTOM_DND5E.menu.houseRules.label",
      NAME: "CUSTOM_DND5E.menu.houseRules.name"
    },
    TEMPLATE: {
      FORM: "modules/custom-dnd5e/templates/house-rules-form.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.ngr8w6WBycK59brj"
  },
  INITIATIVE: {
    SETTING: {
      REROLL_INITIATIVE_EACH_ROUND: {
        KEY: "reroll-initiative-each-round"
      }
    }
  },
  INSPIRATION: {
    SETTING: {
      AWARD_INSPIRATION_DICE_VALUE: {
        KEY: "award-inspiration-d20-value"
      },
      AWARD_INSPIRATION_ROLL_TYPES: {
        KEY: "award-inspiration-roll-types"
      }
    }
  },
  ITEM_ACTION_TYPES: {
    ID: "item-action-types",
    MENU: {
      KEY: "item-action-types-menu",
      HINT: "CUSTOM_DND5E.menu.itemActionTypes.hint",
      ICON: "fas fa-pen-to-square",
      LABEL: "CUSTOM_DND5E.menu.itemActionTypes.label",
      NAME: "CUSTOM_DND5E.menu.itemActionTypes.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-item-actions-types"
      },
      CONFIG: {
        KEY: "item-action-types"
      }
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.Ubzow5wKgOUEXYJw"
  },
  ITEM_ACTIVATION_COST_TYPES: {
    ID: "item-activation-cost-types",
    MENU: {
      KEY: "item-activation-cost-types-menu",
      HINT: "CUSTOM_DND5E.menu.itemActivationCostTypes.hint",
      ICON: "fas fa-pen-to-square",
      LABEL: "CUSTOM_DND5E.menu.itemActivationCostTypes.label",
      NAME: "CUSTOM_DND5E.menu.itemActivationCostTypes.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-item-activation-cost-types"
      },
      CONFIG: {
        KEY: "item-activation-cost-types"
      }
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.uFxtCCVz8Ow95cUL"
  },
  ITEM_PROPERTIES: {
    ID: "item-properties",
    MENU: {
      KEY: "item-properties-menu",
      HINT: "CUSTOM_DND5E.menu.itemProperties.hint",
      ICON: "fas fa-sparkles",
      LABEL: "CUSTOM_DND5E.menu.itemProperties.label",
      NAME: "CUSTOM_DND5E.menu.itemProperties.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-item-properties"
      },
      CONFIG: {
        KEY: "item-properties"
      }
    },
    TEMPLATE: {
      EDIT: "modules/custom-dnd5e/templates/item-properties-edit.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.dM6sUm93mUi9oeBo"
  },
  ITEM_RARITY: {
    ID: "itemRarity",
    MENU: {
      KEY: "item-rarity-menu",
      HINT: "CUSTOM_DND5E.menu.itemRarity.hint",
      ICON: "fas fa-treasure-chest",
      LABEL: "CUSTOM_DND5E.menu.itemRarity.label",
      NAME: "CUSTOM_DND5E.menu.itemRarity.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-item-rarity"
      },
      CONFIG: {
        KEY: "item-rarity"
      }
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.FIMLwqJ6ACWHbuDJ"
  },
  LANGUAGES: {
    ID: "languages",
    MENU: {
      KEY: "languages-menu",
      HINT: "CUSTOM_DND5E.menu.languages.hint",
      ICON: "fas fa-comment",
      LABEL: "CUSTOM_DND5E.menu.languages.label",
      NAME: "CUSTOM_DND5E.menu.languages.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-languages"
      },
      CONFIG: {
        KEY: "languages"
      }
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.UHurkLgqKecvpq2S"
  },
  LEVEL_UP: {
    HIT_POINTS: {
      REROLL: {
        DIALOG: {
          NOTE: "CUSTOM_DND5E.dialog.levelUpHitPointsRerollMinimumValue.note"
        },
        MINIMUM_VALUE: {
          SETTING: {
            KEY: "level-up-hit-points-reroll-minimum-value"
          }
        },
        ONCE: {
          SETTING: {
            KEY: "level-up-hit-points-reroll-once"
          }
        }
      },
      SHOW_TAKE_AVERAGE: {
        SETTING: {
          KEY: "level-up-hit-points-show-take-average"
        }
      }
    }
  },
  MAX_ABILITY_SCORE: {
    SETTING: {
      KEY: "max-ability-score",
      NAME: "CUSTOM_DND5E.setting.maxAbilityScore.name"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.decV7ZeYLc045SuZ"
  },
  MAX_LEVEL: {
    SETTING: {
      KEY: "max-level",
      NAME: "CUSTOM_DND5E.setting.maxLevel.name"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.4h10hYx01hjbUQL6"
  },
  MESSAGE: {
    TEMPLATE: {
      ROLL_REQUEST_CARD: "modules/custom-dnd5e/templates/roll-request-card.hbs"
    }
  },
  MIGRATION: {
    VERSION: {
      SETTING: {
        KEY: "migration-version"
      }
    }
  },
  PRONE: {
    SETTING: {
      PRONE_ROTATION: {
        KEY: "prone-rotation"
      }
    }
  },
  RADIAL_STATUS_EFFECTS: {
    SETTING: {
      KEY: "radial-status-effects"
    }
  },
  RESTING: {
    SETTING: {
      USE_CAMP_SUPPLIES: {
        KEY: "use-camp-supplies"
      }
    },
    TEMPLATE: {
      LONG_REST: "modules/custom-dnd5e/templates/long-rest.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.ngr8w6WBycK59brj.JournalEntryPage.lR4mGZPNE02Lbe6t"
  },
  ROLLS: {
    ID: "rolls",
    MENU: {
      KEY: "rolls-menu",
      HINT: "CUSTOM_DND5E.menu.rolls.hint",
      ICON: "fas fa-dice-d20",
      LABEL: "CUSTOM_DND5E.menu.rolls.label",
      NAME: "CUSTOM_DND5E.menu.rolls.name"
    },
    SETTING: {
      ROLLS: {
        KEY: "rolls"
      }
    },
    TEMPLATE: {
      FORM: "modules/custom-dnd5e/templates/rolls-form.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.eIWacCPaiwpIZCBL"
  },
  SENSES: {
    ID: "senses",
    MENU: {
      KEY: "senses-menu",
      HINT: "CUSTOM_DND5E.menu.senses.hint",
      ICON: "fas fa-eye",
      LABEL: "CUSTOM_DND5E.menu.senses.label",
      NAME: "CUSTOM_DND5E.menu.senses.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-senses"
      },
      CONFIG: {
        KEY: "senses"
      }
    },
    TEMPLATE: {
      CONFIG_FORM_GROUP: "modules/custom-dnd5e/templates/movement-senses-config-form-group.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.UC0cWoAGMtU6yISR"
  },
  SHOW_PRESSED_KEYS: {
    SETTING: {
      KEY: "show-pressed-keys",
      NAME: "CUSTOM_DND5E.setting.showPressedKeys.name",
      HINT: "CUSTOM_DND5E.setting.showPressedKeys.hint"
    }
  },
  SKILLS: {
    ID: "skills",
    MENU: {
      KEY: "skills-menu",
      HINT: "CUSTOM_DND5E.menu.skills.hint",
      ICON: "fas fa-person-running-fast",
      LABEL: "CUSTOM_DND5E.menu.skills.label",
      NAME: "CUSTOM_DND5E.menu.skills.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-skills"
      },
      CONFIG: {
        KEY: "skills"
      }
    },
    TEMPLATE: {
      EDIT: "modules/custom-dnd5e/templates/skills-edit.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.0SCQdu9sYAjcDqAk"
  },
  SPELL_SCHOOLS: {
    ID: "spell-schools",
    MENU: {
      KEY: "spell-schools-menu",
      HINT: "CUSTOM_DND5E.menu.spellSchools.hint",
      ICON: "fas fa-book-sparkles",
      LABEL: "CUSTOM_DND5E.menu.spellSchools.label",
      NAME: "CUSTOM_DND5E.menu.spellSchools.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-spell-schools"
      },
      CONFIG: {
        KEY: "spell-schools"
      }
    },
    TEMPLATE: {
      EDIT: "modules/custom-dnd5e/templates/spell-schools-edit.hbs",
      FORM: "modules/custom-dnd5e/templates/config-form.hbs",
      LIST: "modules/custom-dnd5e/templates/config-list.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.PlVATLzmAndA0gfR"
  },
  TOKEN: {
    SETTING: {
      APPLY_ELEVATION_TO_SELECTED_TOKENS: {
        KEY: "apply-elevation-to-selected-tokens",
        HINT: "CUSTOM_DND5E.setting.applyElevationToSelectedTokens.hint",
        NAME: "CUSTOM_DND5E.setting.applyElevationToSelectedTokens.name"
      },
      TOGGLE_STATUS_EFFECT_ON_SELECTED_TOKENS: {
        KEY: "toggle-status-effect-on-selected-tokens",
        HINT: "CUSTOM_DND5E.setting.toggleStatusEffectOnSelectedTokens.hint",
        NAME: "CUSTOM_DND5E.setting.toggleStatusEffectOnSelectedTokens.name"
      },
      BORDER_SHAPE: {
        KEY: "token-border-shape",
        HINT: "CUSTOM_DND5E.setting.tokenBorderShape.hint",
        NAME: "CUSTOM_DND5E.setting.tokenBorderShape.name"
      }
    }
  },
  TOOLS: {
    MENU: {
      KEY: "tool-ids-menu",
      HINT: "CUSTOM_DND5E.menu.tools.hint",
      ICON: "fas fa-trowel",
      LABEL: "CUSTOM_DND5E.menu.tools.label",
      NAME: "CUSTOM_DND5E.menu.tools.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-tools-ids"
      },
      CONFIG: {
        KEY: "tool-ids"
      }
    },
    TEMPLATE: {
      EDIT: "modules/custom-dnd5e/templates/tools-edit.hbs",
      FORM: "modules/custom-dnd5e/templates/config-form.hbs",
      LIST: "modules/custom-dnd5e/templates/config-edit-in-list.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.mBgCguO7mTNQuPtz"
  },
  TOOL_PROFICIENCIES: {
    MENU: {
      KEY: "tool-proficiencies-menu",
      HINT: "CUSTOM_DND5E.menu.toolProficiencies.hint",
      ICON: "fas fa-trowel-bricks",
      LABEL: "CUSTOM_DND5E.menu.toolProficiencies.label",
      NAME: "CUSTOM_DND5E.menu.toolProficiencies.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-tool-proficiencies"
      },
      CONFIG: {
        KEY: "tool-proficiencies"
      }
    },
    TEMPLATE: {
      FORM: "modules/custom-dnd5e/templates/config-form.hbs",
      LIST: "modules/custom-dnd5e/templates/config-edit-in-list.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.Ls4Rn45UNhTBagHD"
  },
  UNCONSCIOUS: {
    SETTING: {
      APPLY_UNCONSCIOUS: {
        KEY: "apply-unconscious"
      }
    }
  },
  UUID: {
    TEMPLATE: {
      FORM: "modules/custom-dnd5e/templates/config-form.hbs",
      LIST: "modules/custom-dnd5e/templates/config-edit-in-list.hbs"
    }
  },
  WEAPON_IDS: {
    MENU: {
      KEY: "weapon-ids-menu",
      HINT: "CUSTOM_DND5E.menu.weaponIds.hint",
      ICON: "fas fa-sword",
      LABEL: "CUSTOM_DND5E.menu.weaponIds.label",
      NAME: "CUSTOM_DND5E.menu.weaponIds.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-weapon-ids"
      },
      CONFIG: {
        KEY: "weapon-ids"
      }
    },
    TEMPLATE: {
      FORM: "modules/custom-dnd5e/templates/config-form.hbs",
      LIST: "modules/custom-dnd5e/templates/config-edit-in-list.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.CeUiNZoH8giNsqNR"
  },
  WEAPON_PROFICIENCIES: {
    MENU: {
      KEY: "weapon-proficiencies-menu",
      HINT: "CUSTOM_DND5E.menu.weaponProficiencies.hint",
      ICON: "fas fa-swords",
      LABEL: "CUSTOM_DND5E.menu.weaponProficiencies.label",
      NAME: "CUSTOM_DND5E.menu.weaponProficiencies.name"
    },
    SETTING: {
      ENABLE: {
        KEY: "enable-weapon-proficiencies"
      },
      CONFIG: {
        KEY: "weapon-proficiencies"
      }
    },
    TEMPLATE: {
      FORM: "modules/custom-dnd5e/templates/config-form.hbs",
      LIST: "modules/custom-dnd5e/templates/config-edit-in-list.hbs"
    },
    UUID: "Compendium.custom-dnd5e.custom-dnd5e-journals.JournalEntry.B48iqFBddUikMMer.JournalEntryPage.Cy09wdPVi8XrkjJ2"
  }
};

export const JOURNAL_HELP_BUTTON = {
  icon: "fa-regular fa-circle-info",
  tooltip: "CUSTOM_DND5E.openGuide",
  action: "help",
  uuid: null
};

export const SETTING_BY_ENTITY_TYPE = {
  COUNTERS: {
    character: CONSTANTS.COUNTERS.SETTING.CHARACTER_COUNTERS.KEY,
    group: CONSTANTS.COUNTERS.SETTING.GROUP_COUNTERS.KEY,
    item: CONSTANTS.COUNTERS.SETTING.ITEM_COUNTERS.KEY,
    npc: CONSTANTS.COUNTERS.SETTING.NPC_COUNTERS.KEY
  }
};

export const SHEET_TYPE = {
  ActorSheet5eCharacter2: {
    countersSetting: CONSTANTS.COUNTERS.SETTING.CHARACTER_COUNTERS.KEY,
    character: true,
    custom: false,
    group: false,
    item: false,
    legacy: false,
    npc: true,
    template: CONSTANTS.COUNTERS.TEMPLATE.DND5E_ACTOR,
    insert: {
      class: ".tab.details > .right .top",
      position: "beforeend"
    }
  },
  CharacterActorSheet: {
    countersSetting: CONSTANTS.COUNTERS.SETTING.CHARACTER_COUNTERS.KEY,
    character: true,
    custom: false,
    group: false,
    item: false,
    legacy: false,
    npc: true,
    template: CONSTANTS.COUNTERS.TEMPLATE.DND5E_ACTOR,
    insert: {
      class: ".tab[data-application-part='details'] > .right .top",
      position: "beforeend"
    }
  },
  NPCActorSheet: {
    countersSetting: CONSTANTS.COUNTERS.SETTING.NPC_COUNTERS.KEY,
    character: false,
    custom: false,
    group: false,
    item: false,
    legacy: false,
    npc: true,
    template: CONSTANTS.COUNTERS.TEMPLATE.DND5E_ACTOR,
    insert: {
      class: ".sidebar",
      position: "afterbegin"
    }
  },
  CustomDnd5eSheetCharacter2: {
    countersSetting: CONSTANTS.COUNTERS.SETTING.CHARACTER_COUNTERS.KEY,
    character: true,
    custom: true,
    group: false,
    item: false,
    legacy: false,
    npc: false,
    template: CONSTANTS.COUNTERS.TEMPLATE.DND5E_ACTOR,
    insert: {
      class: ".tab.details > .right .top",
      position: "beforeend"
    }
  },
  ActorSheet5eNPC2: {
    countersSetting: CONSTANTS.COUNTERS.SETTING.NPC_COUNTERS.KEY,
    character: false,
    custom: false,
    group: false,
    item: false,
    legacy: false,
    npc: true,
    template: CONSTANTS.COUNTERS.TEMPLATE.DND5E_ACTOR,
    insert: {
      class: ".sidebar",
      position: "afterbegin"
    }
  },
  GroupActorSheet: {
    countersSetting: CONSTANTS.COUNTERS.SETTING.GROUP_COUNTERS.KEY,
    character: false,
    custom: false,
    group: true,
    item: false,
    legacy: true,
    npc: false,
    template: CONSTANTS.COUNTERS.TEMPLATE.DND5E_ITEM_GROUP_LEGACY,
    insert: {
      class: "section.sheet-body",
      position: "beforeend"
    }
  },
  ItemSheet5e: {
    countersSetting: CONSTANTS.COUNTERS.SETTING.ITEM_COUNTERS.KEY,
    character: false,
    custom: false,
    group: false,
    item: true,
    legacy: true,
    npc: false,
    template: CONSTANTS.COUNTERS.TEMPLATE.DND5E_ITEM_GROUP_LEGACY,
    insert: {
      class: "section.sheet-body",
      position: "beforeend"
    }
  },
  ItemSheet5e2: {
    countersSetting: CONSTANTS.COUNTERS.SETTING.ITEM_COUNTERS.KEY,
    character: false,
    custom: false,
    group: false,
    item: true,
    legacy: false,
    npc: false,
    template: CONSTANTS.COUNTERS.TEMPLATE.DND5E_ITEM_GROUP_LEGACY,
    insert: {
      class: "section.sheet-body",
      position: "beforeend"
    }
  }
};
