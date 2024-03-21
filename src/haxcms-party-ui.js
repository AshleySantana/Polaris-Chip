import { LitElement, html, css } from 'lit';
import { ConfirmationMessage } from './confirmation-message';

export class HaxcmsPartyUi extends LitElement {

  static get tag() {
    return 'haxcms-party-ui';
  }

  constructor() {
    super();
      this.delete = false;
      this.submit = false;

    }

  static get styles() {
    return css`

    `;
    }

  render() {
    return html`
      <div class="user">
        <div class="add-user">
          <input type="text" id="input-user">
          <button>+</button>
        </div class="user-actions">
          <button class="${this.delete}">delete</button>
          <button class="${this.submit}">submit</button>
        </div>
        <confirmation-message></confirmation-message>
      </div>
    `;
    }

  static get properties() {
    return {
      delete: {type: Boolean, reflect: true},
      submit: {type: Boolean, reflect: true},
      
    };
  }
}

globalThis.customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);
