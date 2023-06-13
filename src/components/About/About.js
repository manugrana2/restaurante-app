import "./About.css"
export default function About() {
    return (
        <section className="about">
            <div className="info">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p className="history">
                    Situated in Chicago's dynamic center, Little Lemon is a family-run haven offering an enticing fusion of traditional Mediterranean cuisine with a contemporary touch. The Savvidis family, with their deep-rooted love for Mediterranean cooking, opened Little Lemon in 2015, aiming to create a serene dining environment away from the city's hustle. The menu features a unique blend of family recipes and modern techniques, ensuring a genuinely Mediterranean culinary experience. </p>
                <p>
                    From delicious lamb kebabs to creamy hummus with homemade pita bread, every dish is prepared with fresh, locally-sourced ingredients. Little Lemon is more than a restaurant—it's a delightful gastronomic adventure that encapsulates the essence of the Mediterranean in the heart of Chicago. The Savvidis family warmly invites you to join their culinary journey at Little Lemon.
                </p>
            </div>
            <div className="photos">
                <img alt="person smiling siting in a table with Mediterranean food at little lemon restaurant" src="https://th.bing.com/th/id/OIG.CoqMLiA_SpWD.DuZKYEG?pid=ImgGn" />
                <img src="https://th.bing.com/th/id/OIG.8ZcVLW9Ma.ZVYJ29fp6N?pid=ImgGn" alt="interior view of little lemon with no crown" />
                <img src="https://th.bing.com/th/id/OIG.60mUMrMUd3VzOrjK6Ikq?pid=ImgGn" alt="A side view of a Mediterranean dish main frame elegant and clean" />
            </div>
        </section>
    )
}