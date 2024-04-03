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
      this.userArray = [];
      this.selectedUser = "";
    }

  static get styles() {
    return css`
      .delete{
        display: none;
      }
      
      
    `;
    }

  addUser(){
    const user = this.shadowRoot.querySelector("#input-user").value;
    this.userArray.push(user);
    this.requestUpdate();
    console.log(this.userArray);
  }  
  deleteUser(e){
    const id = e.target.id;
    this.selectedUser = id;
    this.delete = true;
  }
  confirmation(e){
    const position = this.userArray.indexOf(this.selectedUser);
    if(e.type === "confirmationYes"){
      this.userArray.splice(position, 1);
      this.userToDelete = '';
      this.deleteUserPending = false;
      this.requestUpdate();
    }else{
      this.userToDelete = '';
      this.deleteUserPending = false;
      this.requestUpdate();
    }

  }

  render() {
    return html`
      <div class="user">
        <div class="user-list">
            ${this.userArray.map((name) => html`
                <rpg-character seed="${name}" ></rpg-character>
                <button id="${name}" @click = ${this.deleteUser}>delete</button>
                ${this.delete && name === this.selectedUser ?
                    html`
                    <confirmation-message class="confirmation-message" 
                      @confirmationYes="${this.confirmation}" 
                      @confirmationNo="${this.confirmation}"></confirmation-message>`
                    : ''}
                 `)}
        </div>
        <div class="add-user">
            <input type="text" id="input-user">
            <button @click = ${this.addUser}>+</button>
        </div class="user-actions">
            <!-- <button class="button">delete</button> -->
            <button class="button">submit</button>
        </div>
        <confirmation-message class="confirmation-message ${this.delete == true ? "delete": ""}"></confirmation-message>
      </div>
    `;
    }

  static get properties() {
    return {
      delete: {type: Boolean, reflect: true},
      userArray: {type: Array},
      selectedUser: {type: String},
    };
  }
}

globalThis.customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);
