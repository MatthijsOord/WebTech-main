class HandballUpcoming extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Upcoming Matches';
        this.innerHTML = `
            <section class="handball-upcoming">
                <h2>${title}</h2>
                <p class="lead">
                    There are currently no upcoming matches scheduled for the Danish men’s national handball team. Please check back later for updates on future fixtures and tournaments.
                </p>
            </section>
        `;
    }
}

customElements.define('handball-upcoming', HandballUpcoming);