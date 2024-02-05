import { LitElement, html, css } from 'lit';

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
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
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


  render() {
    return html`
      <div class="control-wrapper">
        <button class="duplicate">${this.cloneCard}</button>
        <button id="change-title">Change Title</button>
        <button id="change-image">Change image</button>
        <button id="change-background">${this.changeBackground}</button>
        <button id="delete-card">Delete Card</button>
      </div>
      
      <div id="card-list">
        <div class="my-card">
          <h1 id="card-title">${this.cardTitle}</h1>
          <img class="card-image" alt="${this.altText}" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mleh6JmdZBATgzxJOP4FPF6BAeV67YpF7A&usqp=CAU"/>
          <p class="paragraph-text">${this.paragraphText}</p>
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
      changeBackground: {type: String}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
