import { LitElement, html, css } from 'lit';
import { ConfirmationMessage } from './confirmation-message';
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class HaxcmsPartyUi extends LitElement {

  static get tag() {
    return 'haxcms-party-ui';
  }

  constructor() {
    super();
      this.delete = false;
      this.character = [""];

    }

  static get styles() {
    return css`
      .delete{
        display: none;
      }
      .user-name{
        text-align:center;
      }
      
    `;
    }

  render() {
    return html`
      <div class="user">
        <div class="character-list">
            ${this.character.map(item => html`
                <rpg-character seed="${item}"></rpg-character>
            `)}
        </div>
        <div class="add-user">
                <div class="user-display"></div>
                  <p class="user-name">Name</p>
                </div>
            <input type="text" id="input-user">
            <button>+</button>
        </div class="user-actions">
            <button class="button">delete</button>
            <button class="button">submit</button>
        </div>
        <confirmation-message class="confirmation-message ${this.delete == true ? "delete": ""}"></confirmation-message>
      </div>
    `;
    }

  static get properties() {
    return {
      delete: {type: Boolean, reflect: true},
      character: {type: Array},
    };
  }
}

globalThis.customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);
