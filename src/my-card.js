import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.cloneCard = "Default";
    this.altText = "A picture of a pitbull mix dog, with short spine syndrome.";
    this.cardTitle = "ivy";
    this.paragraphText = "...";
    this.changeBackground = "Change Background";
    this.fancy = false;
    this.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mleh6JmdZBATgzxJOP4FPF6BAeV67YpF7A&usqp=CAU";
  }

  static get styles() {
    return css`
      // me or default styles
      :host {
        display: inline-flex;
      } 
      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
      h1{
        text-align:center;
        color:purple;
        background-color:pink;
        margin-left: 20%;
        margin-right: 20%;
        margin-bottom: 0%;
      }
      .my-card.change-color {
        background-color: green;
      }
      .my-card{
        background-color: orange;
        padding: 8px;
        margin: 50px;
      }
      .card-image {
        width: 200px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      a{
        text-decoration: none;
      }
      .paragraph-text{
        font-size: 20px;
        
      }
      .my-button{
        background-color: white;
        color: purple;
        font-size: 15px;
        padding: 16px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .my-button:focus,
      .my-button:hover{
        background-color:pink;
      }

      .change-bg{
        background-color: green;
      }

      @media screen and (max-width:500px){
        .my-button{
          display:none;
        }
      }
      @media screen and (min-width:800px){
        .my-button{
          display:none;
        }
      }
      @media screen and (max-width:500px){
        .card-image{
          width: 100px;
        }
      }
    `;
        }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div id="card-list">
        <div class="my-card">
          <h1 id="card-title">${this.cardTitle}</h1>
          <!-- <img class="card-image" alt="${this.altText}" src="${this.image}"/> -->
          <meme-maker alt="${this.altText}" image-url="${this.image}" top-text="I bring you" bottom-text="the death">
          </meme-maker>
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div> 
              <slot>${this.description}</slot>
            </div>
          </details>
        </div>
      </div>`;

    }

  static get properties() {
    return {
      title: { type: String },
      cloneCard: { type: String },
      altText: {type: String},
      cardTitle: {type: String},
      paragraphText: {type: String},
      changeBackground: {type: String},
      fancy: { type: Boolean, reflect: true }, 
      image: { type: String},
      
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
