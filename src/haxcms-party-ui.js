import { LitElement, html, css } from 'lit';
import { ConfirmationMessage } from './confirmation-message';
import "@lrnwebcomponents/rpg-character/rpg-character.js";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class HaxcmsPartyUi extends DDD {
  static get tag() {
    return 'haxcms-party-ui';
  }

  constructor() {
    super();
      this.submitPartyButton = false;
      this.delete = false;
      this.userArray = [];
      this.selectedUser = "";
      this.inputEmtpy = false;
      this.handleKeyDown = this.keyDown.bind(this);
    }

  static get styles() {
    return css`
      .page-header{
        color: black;
        text-align: center;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: white;
      }
      h3{
        color: lime;
        text-align: center;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
      }
      .user-list{
        display: block;
      }
      .add-button{
        
        font-size: 30px;
        padding: 15px;
        background-color: lime;
        color: grey;
      }
      .submit-button{
        
        font-size: 30px;
        padding: 15px;
        background-color: lime;
        color: grey;
        text-align: center;
      }
      #confetti{
        text-align: center;
      }
      #input-user{
        background-color: white;
        box-shadow: none;
        border-radius: 4px;
      }
      #input-user:hover{
        border-color: blue;
      }
      #input-user:focus{
        border: blue;
      }
      
    `;
    }
  
  addUser(){
    const user = this.shadowRoot.querySelector("#input-user").value;
    const isValid = /^[a-z0-9]+$/.test(user); 
    if(!isValid){
      alert("lowercase letters and numbers only pwease?")
    } 
    if(user === null){
      alert("NO! Maybe you forgot, ADD A USER!")
    }
    if(this.userArray.includes(user)){
      alert("NO! Maybe you forgot, you already added this user.")
    }
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
      this.selectedUser = '';
      this.deleteUserPending = false;
      this.requestUpdate();
    }else{
      this.userToDelete = '';
      this.selectedUser = false;
      this.requestUpdate();
    }
    this.delete = false;
  }
  keyDown(event) {
    if (event.key === 'Enter' && event.target.id === 'input-user') {
      this.addUser();
    }
  }
  submitParty(e){
    this.submitPartyButton = true;
    this.makeItRain();
    const finalParty = this.user.toString();
    localStorage.setItem("party", finalParty);
  }

makeItRain() {
  import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
    (module) => {
      setTimeout(() => {
        this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
      }, 0);
    }
  );
}

  render() {
    return html`
    <confetti-container id="confetti">
      <h1 class="page-header"> CREATE YOUR PARTY </h1>
      <h3>Type in a username and add them to your party!</h3>
        <div class="user-list">
          <div class="user">
            ${this.userArray.map((name) => html`
              <rpg-character seed="${name}" ></rpg-character>
              <button class="delete-button" id="${name}" @click=${this.deleteUser}>delete</button> `)}
          </div>
        </div>
        <div class="user-actions">
              <input type="text" id="input-user" placeholder="Search party member...">
              <button class="add-button" @click="${this.addUser}">add</button>
        </div>
      <button class="submit-button" @click = "${this.submitParty}">submit</button>
    </confetti-container>

      ${this.delete ? html`<confirmation-message class="confirmation-message" @confirmationYes="${this.confirmation}" 
            @confirmationNo="${this.confirmation}"></confirmation-message> ` : ''}
      `;
    }

  static get properties() {
    return {
      delete: {type: Boolean, reflect: true},
      userArray: {type: Array},
      selectedUser: {type: String, reflect: true},
      inputEmtpy: {type: Boolean},
      submitPartyButton: {type: Boolean}, 
    };
  }
}

globalThis.customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);
