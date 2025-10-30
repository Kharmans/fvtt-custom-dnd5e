![Downloads](https://img.shields.io/github/downloads/Larkinabout/fvtt-custom-dnd5e/latest/module.zip?color=2b82fc&label=DOWNLOADS&style=for-the-badge) [![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fcustom-dnd5e&colorB=448d34&style=for-the-badge)](https://forge-vtt.com/bazaar#package=custom-dnd5e)

# Custom D&D 5e

A Foundry VTT module to customise the D&D 5e system.

![Custom D&D 5e Custom Banner](./.github/readme/custom-dnd5e-custom-banner.png)

# Gameplay
Configure game mechanics and automation of core rules, optional variants and house rules.

For help and advice on gameplay settings, either click the info buttons in the Gameplay window or open the Gameplay journal within the Custom D&D 5e compendium.

<details>
    <summary>See Image</summary>

![Custom D&D 5e Dead Journal](./.github/readme/custom-dnd5e-dead-journal.png)

</details>

## Bloodied
- Apply the Bloodied condition when a character or NPC is reduced to the threshold or lower.
- To stop a character or NPC from gaining the Bloodied condition, add Bloodied to their Condition Immunities.

<details>
    <summary>See Video</summary>

![Custom D&D 5e Bloodied](./.github/readme/custom-dnd5e-bloodied.gif)

</details>

## Instant Death
Apply Instant Death when a character suffers damage equal to or greater than their remaining HP plus their max HP.

<details>
    <summary>See Video</summary>

![Custom D&D 5e Instant Death](./.github/readme/custom-dnd5e-instant-death.gif)

</details>

## Dead
- Apply the Dead status effect when an NPC is reduced to zero HP.
- Tint and/or rotate the token when it gains the Dead status effect.

<details>
    <summary>See Video</summary>

![Custom D&D 5e Dead](./.github/readme/custom-dnd5e-dead.gif)

</details>

## Unconscious
Apply the Unconscious status effect when a PC is reduced to zero HP.

<details>
    <summary>See Video</summary>

![Custom D&D 5e Unconscious](./.github/readme/custom-dnd5e-unconscious.gif)

</details>

## Death Saving Throws
- Set the roll mode to Public Roll, Blind GM Roll or Private GM Roll. When using Blind GM Roll, successes and failures will not appear on the character sheet for the player.
- Set the target value required to succeed a death saving throw.
- Remove a number of successes or failures for each event: On Regaining HP from 0, On Short Rest and On Long Rest.

<details>
    <summary>See Image</summary>

![Custom D&D 5e Death Saves Target Value](./.github/readme/custom-dnd5e-death-saves-target-value.png)

</details>

## Hit Points
### Massive Damage
Apply Massive Damage as per the variant rule (DMG pg. 273).

<details>
    <summary>See Video</summary>

![Custom D&D 5e Massive Damage](./.github/readme/custom-dnd5e-massive-damage.gif)

</details>

### Rolling Hit Points
- When rolling for Hit Points, automatically reroll based on a minimum value.
- Reroll once or until the minimum value is met.
- Hide the Take Average option when rolling for Hit Points.
- Roll Hit Points for NPCs when dragging their token onto the canvas.

<details>
    <summary>See Image</summary>

![Custom D&D 5e Level Up Hit Points](./.github/readme/custom-dnd5e-level-up-hit-points.png)

</details>

### Negative Hit Points
- Apply negative hit points.
- Choose to heal from negative HP or from 0 HP.

<details>
    <summary>See Image</summary>

![Custom D&D 5e Negative Hit Points](./.github/readme/custom-dnd5e-negative-hit-points.png)

</details>

## Reroll Initiative Each Round
Reroll Initiative for all combatants at the start of each round.

<details>
    <summary>See Video</summary>

![Custom D&D 5e Reroll Initiative](./.github/readme/custom-dnd5e-reroll-initiative.gif)

</details>

## Award Inspiration
Award Inspiration when a set value is rolled for an ability check, attack roll, saving throw and/or skill check.

<details>
    <summary>See Image</summary>

![Custom D&D 5e Award Inspiration](./.github/readme/custom-dnd5e-award-inspiration.png)

</details>

## Average Damage
- When rolling damage, the average result is used.
- Enable per actor type (Player Characters, NPCs or both)
- When the associated attack roll is a critical hit, the average damage includes the critical damage.

<details>
    <summary>See Video</summary>

![Custom D&D Average Damage](./.github/readme/custom-dnd5e-average-damage.gif)

</details>

## Mob Damage
- When attacking a single token with four or more identical tokens selected, the attack roll is replaced with a damage roll based on the **Mobs Average Results** table (Dungeon Master's Guide (2024), page 82).
- Use average damage instead of rolling.

<details>
    <summary>See Video</summary>

![Custom D&D Mob Damage](./.github/readme/custom-dnd5e-mob-damage.gif)

</details>

## Probabilistic Damage
- When attacking a single token, the attack roll is replaced with a damage roll scaled by the chance to hit.
- Enable per activity and actor type (Player Characters, NPCs or both)
- Use average damage instead of rolling.

<details>
    <summary>See Video</summary>

![Custom D&D Probabilistic Damage](./.github/readme/custom-dnd5e-probabilistic-damage.gif)

</details>

<details>
    <summary>See Image</summary>

![Custom D&D 5e Use Probabilistic Damage](./.github/readme/custom-dnd5e-use-probabilistic-damage.png)

</details>

## Prone
Rotate the token when it gains the Prone status effect.

<details>
    <summary>See Video</summary>

![Custom D&D 5e Prone](./.github/readme/custom-dnd5e-prone-rotation.gif)

</details>

## Resting
### Use Camp Supplies
When taking a Long Rest, optionally requires spending Camp Supplies.

<details>
    <summary>See Image</summary>

![Custom D&D 5e Camp Supplies](./.github/readme/custom-dnd5e-camp-supplies.png)

</details>

## Counters
**Counter Types:** Add four types of counter to the character sheets: checkbox, fraction, number and success/failure.

**Triggers:** Set triggers to automatically change a counter value when an actor hits 0 HP, half HP, or when combat ends if they hit 0 HP any time during combat. Set a trigger to automatically make an actor dead when a counter hits a defined value.

<details>
    <summary>See Video</summary>

![Custom D&D 5e Counters](./.github/readme/custom-dnd5e-counters.gif)

</details>
<details>
    <summary>See Image</summary>

![Custom D&D 5e Counter Triggers](./.github/readme/custom-dnd5e-counter-triggers.png)

</details>

## Smaller Form Character Sheet
Select 'Custom D&D 5e Character Sheet' from the Sheet Configuration dialog (cog on the sheet's header) to enable a smaller form character sheet.

<details>
    <summary>See Image</summary>

![Custom D&D 5e Character Sheet](./.github/readme/custom-dnd5e-character-sheet.png)

</details>

## Configurations
For help and advice on modifying a configuration, either click the info button in the header of the configuration window or open the Configurations journal within the Custom D&D 5e compendium.

<details>
    <summary>See Image</summary>

![Custom D&D 5e Damage Types Journal](./.github/readme/custom-dnd5e-damage-types-journal.png)

</details>


- **Abilities**: Strength, Dexterity, Constitution, etc.
- **Activation costs**: Action, Bonus Action, Reaction, etc.
- **Actor sizes**: Tiny, Small, Medium, etc.
- **Armor**: Breastplate, Chain Mail, Leather, etc.
- **Armor calculations**: Flat, Mage Armor, Unarmored Defense, etc.
- **Armor proficiencies/types**: Light, Medium, Heavy, Shields, etc.
- **Conditions/Status Effects**: Blinded, Charmed, Dead, etc.
- **Consumable types**: Ammo, Food, Poison, etc.
- **Creature types**: Aberration, Beast, Celestial, etc.
- **Currencies**: Copper, Silver, Gold, etc.
- **Damage types**: Acid, Bludgeoning, Fire, etc.
- **Encumbrance**: Encumbrance labels, icons, thresholds, weight modifiers, etc.
- **Equipment types**: Clothing, Ring, Rod, etc.
- **Feature types**: Background, Class, Enchantment, etc.
- **Item properties**: Adamantine, Finesse, Heavy, etc.
- **Item rarity**: Common, Uncommon, Rare, etc.
- **Languages**: Common,  Dwarvish, Elvish, etc.
- **Loot types**: Art Object, Adventuring Gear, Gemstone, etc.
- **Senses**: Blindsight, Darkvision, Tremorsense, etc.
- **Skills**: Athletics, Acrobatics, Stealth, etc.
- **Spell schools**: Abjuration, Conjuration, Divination, etc.
- **Tools**: Alchemist's Supplies, Bagpipes, Brewer's Supplies, etc.
- **Tool proficiencies/types**: Artisan's Tools, Gaming Set, Musical Instrument, etc.
- **Weapons**: Dagger, Longsword, Shortbow, etc.
- **Weapon proficiencies/types**: Improvised, Simple, Martial, etc.
- **Max ability score**
- **Max level**

## Configure Encumbrance
<details>
    <summary>See Image</summary>

![Custom D&D 5e Configure Encumbrance](./.github/readme/custom-dnd5e-configure-encumbrance.png)

</details>

## Configure Rolls
Customize the base die and roll mode for Ability Checks, Attack Rolls, Concentration Saving Throws, Initiative Rolls, Saving Throws, Skills Checks and Tool Checks.
<details>
    <summary>See Video</summary>

![Custom D&D 5e Configure Rolls](./.github/readme/custom-dnd5e-configure-rolls.gif)

</details>

## Configure Actor Sheet
- Auto-fade or auto-minimise the sheet when it's not hovered over.
- Scale the new character sheet up or down.
- Change the banner at the top of the sheet.
- Hide death saves, encumbrance, exhaustion, inspiration, the Manage Currency button, Legendary Actions, Legendary Resistances and Use Lair Action.

<details>
    <summary>See Image</summary>

![Custom D&D 5e Configure Actor Sheet](./.github/readme/custom-dnd5e-configure-actor-sheet.png)

</details>

## Configure Item Sheet
- Set the minimum role required to toggle Identified/Unidentified on the item.

## Chat Commands
Enable additonal chat commands to roll an attack, roll damage or request checks and saving throws. For a list of available commands, view the **Chat Commands** journal within the **Custom D&D 5e** compendium.

<details>
    <summary>See Video</summary>

![Custom D&D 5e Chat Commanfs](./.github/readme/custom-dnd5e-chat-commands.gif)

</details>


## Show Pressed Keys
Display an icon near the cursor when the Skip Dialog, Advantage or Disadvantage keys are pressed.

<details>
    <summary>See Image</summary>

![Custom D&D 5e Show Pressed Keys - Skip Dialog](./.github/readme/custom-dnd5e-show-pressed-keys-skip-dialog.png)

![Custom D&D 5e Show Pressed Keys - Advantage](./.github/readme/custom-dnd5e-show-pressed-keys-advantage.png)

</details>

## Radial Status Effects
Display status effects in a circle around the token.

<details>
    <summary>See Image</summary>

![Custom D&D 5e Radial Status Effects](./.github/readme/custom-dnd5e-radial-status-effects.png)

</details>

## Token Border Shape
Choose the shape of the token's border when it is selected or hovered.

<details>
    <summary>See Image</summary>

![Custom D&D 5e Token Border Shape](./.github/readme/custom-dnd5e-token-border-shape.png)

</details>

## Apply Elevation to Selected Tokens
- Apply elevation to all selected tokens.

<details>
    <summary>See Video</summary>

![Custom D&D 5e Apply Elevation to Selected](./.github/readme/custom-dnd5e-apply-elevation-to-selected.gif)

</details>

## Toggle Status Effects on Selected Tokens
- Toggle status effects on all selected tokens.

<details>
    <summary>See Video</summary>

![Custom D&D 5e Toggle Status Effects on Selected](./.github/readme/custom-dnd5e-toggle-status-effects-on-selected.gif)

</details>

## Compatibility
### Variant Encumbrance + Midi
Custom D&D 5e will defer to the [Variant Encumbrance + Midi](https://foundryvtt.com/packages/variant-encumbrance-dnd5e) module for encumbrance configuration when it is active.

## Required Modules
### [libWrapper](https://foundryvtt.com/packages/lib-wrapper)
For developers, LibWrapper is used to patch:
- **`Application.prototype._render`:** Allows adding data to the character sheets without editing the HTML. This should no longer be required with the release of Application V2.
- **`CONFIG.Actor.documentClass.prototype._prepareEncumbrance`:** Patched when the D&D 5e's 'Encumbrance Tracking' setting is set to 'Variant'. Avoids recalculating encumbrance as well as issues with encumbrance active effects applied during item updates/deletions.
- **`CONFIG.Dice.D20Die.prototype.applyAdvantage`**: Patched when at least one roll is configured. Replaces roll formula to allow different numbers and faces of dice.
- **`CONFIG.Dice.D20Roll.fromConfig`**: Patched when at least one roll is configured. Replaces the d20 die formula with the custom die formula.
- **`CONFIG.Dice.D20Roll.prototype.configureModifiers`**: Patched when at least one roll is configured. Adds the custom die formula to the d20 options to make it available to `validD20Roll`.
- **`CONFIG.Dice.D20Roll.prototype.validD20Roll`**: Patched when at least one roll is configured. Additionally returns true when a custom die exists.
- **`Token.prototype._refreshEffects`:** Patched when Custom D&D 5e's 'Radial Status Effects' setting is enabled.
- **`Token.prototype._drawEffect`:** Patched when Custom D&D 5e's 'Radial Status Effects' setting is enabled.
- **`Token.prototype._drawOverlay`:** Patched when Custom D&D 5e's 'Radial Status Effects' setting is enabled.

## Credits
The Radial Status Effects feature is a modification of code developed by [Dorako](https://github.com/Dorako) under the MIT License, which is reproduced here: [Licence](./scripts/radial-status-effects.js)