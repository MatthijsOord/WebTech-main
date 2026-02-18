// Custom element showcasing Denmark national team match results
class HandballResults extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Match Results';
        this.innerHTML = `
            <section class="handball-results">
                <h2>${title}</h2>
                <p class="lead">
                    Overview of recent international matches played by the Danish men’s national handball team
                    in major tournaments and competitive fixtures.
                </p>

                <div class="table-wrap">
                    <table class="results-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Competition</th>
                                <th>Opponent</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody id="resultsBody">
                            <tr><td colspan="4">Loading results…</td></tr>
                        </tbody>
                    </table>
                </div>

                <p class="note">
                    Results shown represent a selection of competitive matches and highlight Denmark’s
                    performance in recent fixtures.
                </p>
            </section>
        `;

        this.loadResults();
    }

    async loadResults(){
        try{
            const resp = await fetch('../assets/data/results.json');
            if(!resp.ok) throw new Error(`HTTP ${resp.status}`);
            const data = await resp.json();
            const matches = Array.isArray(data.matches) ? data.matches.slice() : [];

            // Sort descending by date
            matches.sort((a,b)=> new Date(b.date) - new Date(a.date));

            const tbody = this.querySelector('#resultsBody');
            if(!tbody) return;

            if(matches.length === 0){
                tbody.innerHTML = '<tr><td colspan="4">No results available.</td></tr>';
                return;
            }

            const rows = matches.map(m => {
                const dateObj = m.date ? new Date(m.date) : null;
                const dateStr = dateObj ? dateObj.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }) : (m.date || '');
                const timeStr = m.time ? ` ${m.time}` : '';
                const competition = m.competition || '';
                const stage = m.stage ? ` — ${m.stage}` : '';
                const opponent = m.opponent || '';
                const score = m.score || '';
                const result = m.result || '';

                // Determine outcome class (prefer explicit result, fallback to score parsing)
                let outcome = (result || '').toString().trim().toLowerCase();
                if(!outcome && score){
                    const sc = score.match(/(\d+)\s*-\s*(\d+)/);
                    if(sc){
                        const a = parseInt(sc[1],10), b = parseInt(sc[2],10);
                        if(a > b) outcome = 'win';
                        else if(a < b) outcome = 'loss';
                        else outcome = 'draw';
                    }
                }

                const outcomeClass = outcome === 'win' ? 'result--win' : (outcome === 'loss' ? 'result--loss' : 'result--neutral');

                const resultDisplay = score ? `${score} ${result ? '— ' + result : ''}` : (result || '');

                return `
                    <tr>
                        <td data-label="Date">${dateStr}${timeStr}</td>
                        <td data-label="Competition">${competition}${stage}</td>
                        <td data-label="Opponent">${opponent}</td>
                        <td data-label="Result"><strong class="${outcomeClass}">${resultDisplay}</strong></td>
                    </tr>
                `;
            }).join('');

            tbody.innerHTML = rows;
        }catch(err){
            console.error('Error loading results:', err);
            const tbody = this.querySelector('#resultsBody');
            if(tbody) tbody.innerHTML = '<tr><td colspan="4">Unable to load results.</td></tr>';
        }
    }
}

customElements.define('handball-results', HandballResults);
