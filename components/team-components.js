// Custom element for a single team member card
class TeamMemberCard extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name') || 'Player Name';
        const position = this.getAttribute('position') || 'Position';
        const club = this.getAttribute('club') || 'Club';
        const image = this.getAttribute('image') || '../assets/player-placeholder.jpg';

        this.innerHTML = `
            <div class="team-member-card">
                <img src="${image}" alt="${name}" class="player-image">
                <div class="player-info">
                    <h3 class="player-name">${name}</h3>
                    <div class="player-details">
                        <p class="player-position">Position: ${position}</p>
                        <p class="player-number">Club: ${club}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

// Custom element for team overview
class TeamOverview extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = `
            <div class="team-overview">
                <h2 class="team-title">Our Team</h2>
                <div class="team-grid" id="teamGrid">
                    <!-- Player cards will be dynamically loaded here -->
                </div>
            </div>
        `;

        await this.loadTeamMembers();
    }

    async loadTeamMembers() {
        try {
            // Fetch team data from JSON file
            const response = await fetch('../assets/data/team.json');
            const teamMembers = await response.json();
            
            const teamGrid = this.querySelector('#teamGrid');
            
            // Create a custom element for each team member
            teamMembers.forEach(member => {
                const card = document.createElement('team-member-card');
                card.setAttribute('name', member.name);
                card.setAttribute('position', member.position);
                card.setAttribute('club', member.club);
                card.setAttribute('image', member.image);
                teamGrid.appendChild(card);
            });
        } catch (error) {
            console.error('Error loading team members:', error);
        }
    }
}

// Register the custom elements
customElements.define('team-member-card', TeamMemberCard);
customElements.define('team-overview', TeamOverview);
