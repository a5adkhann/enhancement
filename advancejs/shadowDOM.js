customElements.define("cust-tag", 
    class extends HTMLElement{
        connectedCallback(){
            const temp = this.attachShadow({mode: 'open'});
            temp.innerHTML = `<p class="error">
            ${this.getAttribute('data')}
            </p>`;
        }

    }
)