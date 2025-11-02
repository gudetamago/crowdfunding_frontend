import { useAuth } from "../hooks/use-auth.js";

function AboutPage() {

    const { auth, setAuth } = useAuth();

    // Not implemented for now
    // if (isLoading) {
    //     return (<p>loading...</p>)
    // }
    // if (error) {
    //     return (<p>{error.message}</p>)
    // }

    return (
        <div>
            <h2>About</h2>
            {auth.token ? (
                  <>
                    <p>Welcome to <strong>Lair Starter</strong> — <em>because even villains need a little support sometimes.</em> 😈💰</p>
                    <p>Running a lair isn't easy. Between feeding mutant guard beasts, paying off mad-science lab invoices, and keeping the lava moat at just the right temperature, the costs of evil can really add up. That's where we come in!</p>
                    <p>At <strong>Lair Starter</strong>, aspiring overlords, mad scientists, and misunderstood geniuses can showcase their most diabolical projects and rally support from fans, minions, and fellow evildoers alike. Need a new shark tank? Upgrading to a volcano base? Or simply paying off your henchmen's dental plan? Whether you're building your first secret volcano base, expanding your underwater fortress, or simply replacing all those mysteriously exploded control panels, we're here to help fund your next big scheme.</p>
                    <p>But <strong>Lair Starter</strong> isn't just for villains — oh no! Loyal henchmen, sidekicks, and admirers can finally give back to the bosses who've inspired (or terrified) them. Back your favorite villain's campaign, unlock exclusive rewards (like <em>"I survived the laser test range"</em> T-shirts), and take pride in knowing your hard-earned minion wages are fueling truly glorious chaos.</p>
                    <p>So sharpen those pitchforks, polish your ray guns, and grab your wallet — it's time to make evil happen, one contribution at a time. 🦹‍♀️💸</p>
                  </>
                ) : (
                  <>
                    <p>Welcome to <strong>Yarnarchy</strong> — where every stitch tells a story! 🧶✨</p>
                    <p>We're a cozy corner of the internet where knitters, makers, and big-hearted supporters come together to do what they love <em>and</em> make a difference. Think of us as a giant virtual knitting circle — one where every project you back helps wrap the world in a little more warmth.</p>
                    <p>From soft baby hats for newborns to bright blankets for shelters and creative community yarn-bomb projects, each campaign starts with a simple idea: that handmade care can change lives.</p>
                    <p>So grab your needles, pick a project that tugs at your heartstrings, and let's knit some kindness together — one loop, one laugh, and one good cause at a time. 💛</p>
                  </>
                )}

        </div>
    );
}

export default AboutPage;