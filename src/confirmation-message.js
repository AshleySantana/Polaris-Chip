import { LitElement, html, css } from 'lit';

export class ConfirmationMessage extends LitElement {

  static get tag() {
    return 'confirmation-message';
  }

  constructor() {
    super();
     
     }

  static get styles() {
    return css`

    
    `;
    }

  render() {
    return html`
        <div class="confirmation-message">
                <button class="exit-message">x</button>
            <div class="message-wrapper">
                <p>You have added this person to the group.</p>
                <button>Yes</button>
                <button>No</button>
            </div>
        </div>
      `;
    }

  static get properties() {
    return {
     
    };
  }
}

globalThis.customElements.define(ConfirmationMessage.tag, ConfirmationMessage);
