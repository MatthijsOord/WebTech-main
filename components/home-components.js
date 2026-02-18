// Custom element for hero section
class HeroSection extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Danish Handball Team';
        const subtitle = this.getAttribute('subtitle') || 'Representing Denmark at the highest level of international handball';

        this.innerHTML = `
            <section class="hero-section">
                <div class="hero-overlay"></div>
                <div class="hero-content">
                    <h1 class="hero-title">${title}</h1>
                    <p class="hero-subtitle">${subtitle}</p>
                    <div class="hero-cta">
                        <a href="team.html" class="cta-button cta-button--primary">Meet Our Team</a>
                        <a href="#featured" class="cta-button cta-button--secondary">Learn More</a>
                    </div>
                </div>
            </section>
        `;
    }
}

// Custom element for feature card
class FeatureCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Feature';
        const description = this.getAttribute('description') || 'Feature description';
        const link = this.getAttribute('link') || '#';

        this.innerHTML = `
            <div class="feature-card">
                <h3 class="feature-title">${title}</h3>
                <p class="feature-description">${description}</p>
                <a href="${link}" class="feature-link">Explore →</a>
            </div>
        `;
    }
}

// Custom element for featured section
class FeaturedSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="featured-section" id="featured">
                <div class="featured-container">
                    <h2 class="section-title">Explore Our Content</h2>
                    <div class="features-grid">
                        <feature-card
                            title="Our Team"
                            description="Meet Denmark’s new era of handball excellence. A world-class squad led by young stars like Gidsel, Pytlick, and Nielsen, guided by head coach Nikolaj Jacobsen."
                            link="team.html">
                        </feature-card>
                        <feature-card
                            title="Handball History"
                            description="Denmark is one of the most successful nations in European handball, with two EHF EURO titles and multiple podium finishes across two decades."
                            link="history.html">
                        </feature-card>
                        <feature-card
                            title="Latest Results"
                            description="Fresh off a silver medal at EHF EURO 2024, Denmark enters EURO 2026 as reigning world and Olympic champions."
                            link="results.html">
                        </feature-card>
                        <feature-card
                            title="Upcoming Games"
                            description="Denmark co-hosts EHF EURO 2026 and begins the tournament in Group B, aiming to reclaim the European crown on home soil."
                            link="upcoming.html">
                        </feature-card>
                    </div>
                </div>
            </section>
        `;
    }
}

// Register all custom elements
customElements.define('hero-section', HeroSection);
customElements.define('feature-card', FeatureCard);
customElements.define('featured-section', FeaturedSection);
