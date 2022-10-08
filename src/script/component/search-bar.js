class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    
    render(){
        this.innerHTML = `
        <div class="input-group">
            <input type="text" class="form-control input-keyword" placeholder="Enter movie title ...">
            <div class="input-group-append">
                <button class="btn btn-primary search-button" type="button">Search</button>
            </div>
        </div>
        `;
    }
}

customElements.define("search-bar", SearchBar);