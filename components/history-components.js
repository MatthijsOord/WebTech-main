// Custom element showcasing the history of handball
class HandballHistory extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'History of Handball';

        this.innerHTML = `
            <section class="handball-history">
                <h2>${title}</h2>
                <p class="lead">Handball is a dynamic team sport played by two teams of seven players, including a goalkeeper. The objective is to score goals by throwing the ball into the opposing team’s goal. The modern version of the sport is played indoors and is governed by standardized international rules.</p>

                <h3>Origins of the Sport</h3>
                <p>Games resembling handball have existed for centuries. Variations were played in Ancient Greece, medieval Europe, and other cultures, where players used their hands to pass or throw a ball. However, handball as it is known today originated in Northern Europe in the late 19th and early 20th centuries.</p>
                <p>One of the earliest formal rule sets was written in 1906 by Danish gym teacher Holger Nielsen, who played a key role in shaping the sport. Further development took place in Germany, where a standardized version of team handball was defined in 1917. These rules formed the foundation of modern handball.</p>

                <h3>International Development</h3>
                <p>Handball grew rapidly across Europe and later expanded globally. The International Handball Federation (IHF) was established in 1946 and is responsible for organizing international competitions and maintaining the rules of the sport.</p>
                <p>Handball was first included in the Olympic Games in 1936 as an outdoor sport. Indoor handball became an Olympic discipline in 1972 for men and in 1976 for women. Today, handball is especially popular in Europe and is played professionally and recreationally around the world.</p>

                <h3>History of Danish Handball</h3>
                <p>Denmark is widely regarded as one of the founding nations of modern handball. From the early codification of the rules to the development of strong club and youth systems, Denmark has played a central role in the sport’s evolution.</p>
                <p>Handball quickly became one of the most popular sports in Denmark. Its accessibility, fast pace, and strong club culture contributed to widespread participation across all age groups. Today, handball remains deeply rooted in Danish sporting culture.</p>

                <h3>Handball in Danish Society</h3>
                <p>Handball is among the most played team sports in Denmark, with a large number of registered players and clubs across the country. Youth development programs, local clubs, and school participation have helped maintain Denmark’s long-standing success at the international level.</p>
                <p>The Danish Handball Federation (Dansk Håndbold) oversees the organization and development of the sport nationally and works closely with clubs and national teams.</p>

                <h3>The Danish Men’s National Handball Team</h3>
                <p>The Danish men’s national handball team is one of the most successful teams in the history of the sport. Known for tactical discipline, teamwork, and high technical skill, Denmark has consistently competed at the highest international level.</p>

                <h3>International Success</h3>
                <p>Denmark has achieved significant success in major international tournaments, including the IHF World Championship, the EHF European Championship, and the Olympic Games. In recent years, the team has established a dominant era, winning multiple World Championship titles consecutively and securing Olympic gold medals.</p>

                <h3>Legacy and Identity</h3>
                <p>The Danish national team is recognized for its strong collective identity, emphasis on player development, and ability to perform consistently in high-pressure situations. Generations of talented players have contributed to Denmark’s reputation as a leading handball nation.</p>
            </section>
        `;
    }
}

customElements.define('handball-history', HandballHistory);
