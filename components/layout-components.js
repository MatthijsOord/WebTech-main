// Custom element for navigation menu
class NavMenu extends HTMLElement {
    connectedCallback() {
        const activePage = this.getAttribute('active') || 'home';
        
        this.innerHTML = `
            <nav class="nav-menu">
                <div class="nav-container">
                    <div class="nav-logo">
                        <a href="index.html">Danish Handball</a>
                    </div>
                    <ul class="nav-links">
                        <li><a href="index.html" class="nav-link ${activePage === 'home' ? 'nav-link--active' : ''}">Home</a></li>
                        <li><a href="team.html" class="nav-link ${activePage === 'team' ? 'nav-link--active' : ''}">Team</a></li>
                        <li><a href="history.html" class="nav-link ${activePage === 'history' ? 'nav-link--active' : ''}">History</a></li>
                        <li><a href="results.html" class="nav-link ${activePage === 'results' ? 'nav-link--active' : ''}">Results</a></li>
                        <li><a href="upcoming.html" class="nav-link ${activePage === 'upcoming' ? 'nav-link--active' : ''}">Upcoming Games</a></li>
                    </ul>
                </div>
            </nav>
        `;
    }
}

// Custom element for footer
class PageFooter extends HTMLElement {
    connectedCallback() {
        const year = new Date().getFullYear();
        this.innerHTML = `
            <footer class="page-footer">
                <div class="footer-container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3 class="footer-title">Danish Handball</h3>
                            <p class="footer-text">Representing Denmark at the highest level of international handball</p>
                        </div>
                        <div class="footer-section">
                            <h4 class="footer-subtitle">Quick Links</h4>
                            <ul class="footer-links">
                                <li><a href="index.html" class="footer-link">Home</a></li>
                                <li><a href="team.html" class="footer-link">Team</a></li>
                                <li><a href="history.html" class="footer-link">History</a></li>
                                <li><a href="results.html" class="footer-link">Results</a></li>
                                <li><a href="upcoming.html" class="footer-link">Upcoming Games</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h4 class="footer-subtitle">External Resources</h4>
                            <ul class="footer-links">
                                <li><a href="https://www.ihf.info/" class="footer-link" target="_blank" rel="noopener noreferrer">International Handball Federation</a></li>
                                <li><a href="https://ehfeuro.eurohandball.com/" class="footer-link" target="_blank" rel="noopener noreferrer">EHF EURO Official Site</a></li>
                                <li><a href="https://en.wikipedia.org/wiki/Handball" class="footer-link" target="_blank" rel="noopener noreferrer">Handball on Wikipedia</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Register the custom elements
customElements.define('nav-menu', NavMenu);
customElements.define('page-footer', PageFooter);
