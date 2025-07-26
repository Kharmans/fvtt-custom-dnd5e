import { CONSTANTS, JOURNAL_HELP_BUTTON, MODULE } from "../constants.js";
import { ConfigEditForm } from "./config-edit-form.js";
import { getSettingDefault, resetConfigSetting, setConfig } from "../configurations/armor-calculations.js";

const constants = CONSTANTS.ARMOR_CALCULATIONS;
const configKey = "armorClasses";

/**
 * Class representing a form to edit armor calculations.
 * Extends the ConfigEditForm class.
 *
 * @class
 * @extends ConfigEditForm
 */
export class ArmorCalculationsEditForm extends ConfigEditForm {
  /**
   * Constructor for ArmorCalculationsEditForm.
   *
   * @param {object} args The arguments to initialize the form.
   */
  constructor(args) {
    super(args);
    this.configKey = configKey;
    this.settingKey = constants.SETTING.CONFIG.KEY;
    this.getSettingDefault = getSettingDefault;
    this.resetConfigSetting = resetConfigSetting;
    this.setConfig = setConfig;
    this.headerButton = JOURNAL_HELP_BUTTON;
    this.headerButton.uuid = constants.UUID;
    this.requiresReload = true;
  }

  /* -------------------------------------------- */

  /**
   * Default options for the form.
   *
   * @type {object}
   */
  static DEFAULT_OPTIONS = {
    id: `${MODULE.ID}-armor-calculations-edit-form`,
    position: {
      height: 260
    },
    window: {
      title: `CUSTOM_DND5E.form.${configKey}.edit.title`
    }
  };

  /* -------------------------------------------- */

  /**
   * Parts of the form.
   *
   * @type {object}
   */
  static PARTS = {
    form: {
      template: constants.TEMPLATE.EDIT
    }
  };
}
