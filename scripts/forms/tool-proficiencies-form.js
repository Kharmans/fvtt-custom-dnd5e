import { CONSTANTS, JOURNAL_HELP_BUTTON, MODULE } from "../constants.js";
import { getSetting, setSetting } from "../utils.js";
import { ConfigForm } from "./config-form.js";
import { getSettingDefault, setConfig } from "../configurations/tool-proficiencies.js";

/**
 * Class representing the Tool Proficiencies Form.
 */
export class ToolProficienciesForm extends ConfigForm {
  /**
   * Constructor for ToolProficienciesForm.
   *
   * @param {...any} args The arguments for the form.
   */
  constructor(...args) {
    super(args);
    this.editInList = true;
    this.nestable = true;
    this.enableConfigKey = CONSTANTS.TOOL_PROFICIENCIES.SETTING.ENABLE.KEY;
    this.settingKey = CONSTANTS.TOOL_PROFICIENCIES.SETTING.CONFIG.KEY;
    this.settingDefault = getSettingDefault();
    this.setting = getSetting(this.settingKey) || this.settingDefault;
    this.setConfig = setConfig;
    this.headerButton = JOURNAL_HELP_BUTTON;
    this.headerButton.uuid = CONSTANTS.TOOL_PROFICIENCIES.UUID;
  }

  /* -------------------------------------------- */

  /**
   * Default options for the form.
   *
   * @type {object}
   */
  static DEFAULT_OPTIONS = {
    actions: {
      reset: ToolProficienciesForm.reset
    },
    id: `${MODULE.ID}-tool-proficiencies-form`,
    window: {
      title: "CUSTOM_DND5E.form.toolProficiencies.title"
    }
  };

  /* -------------------------------------------- */

  /**
   * Prepare the context for rendering the form.
   *
   * @returns {Promise<object>} The context data.
   */
  async _prepareContext() {
    this.setting = getSetting(this.settingKey) || this.settingDefault;

    const labelise = data => {
      Object.entries(data).forEach(([key, value]) => {
        if ( typeof value === "string" ) {
          data[key] = { label: value };
        }

        if ( value.children ) {
          labelise(value.children);
        }
      });
    };

    labelise(this.setting);

    return { editInList: this.editInList, label: this.label, items: this.setting };
  }

  /* -------------------------------------------- */

  /**
   * Reset the form to default settings.
   */
  static async reset() {
    const reset = async () => {
      await setSetting(this.settingKey, this.settingDefault);
      this.setConfig(this.settingDefault);
      this.render(true);
    };

    await foundry.applications.api.DialogV2.confirm({
      window: {
        title: game.i18n.localize("CUSTOM_DND5E.dialog.reset.title")
      },
      content: `<p>${game.i18n.localize("CUSTOM_DND5E.dialog.reset.content")}</p>`,
      modal: true,
      yes: {
        label: game.i18n.localize("CUSTOM_DND5E.yes"),
        callback: async () => {
          reset();
        }
      },
      no: {
        label: game.i18n.localize("CUSTOM_DND5E.no")
      }
    });
  }
}
