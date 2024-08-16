export const config = {
  style: "mapbox://styles/fddvisuals/clzk8cz5v001k01nvahfrgcqg",
  accessToken:
    "pk.eyJ1IjoiZmRkdmlzdWFscyIsImEiOiJjbGZyODY1dncwMWNlM3pvdTNxNjF4dG1rIn0.wX4YYvWhm5W-5t8y5pp95w",
  showMarkers: false,
  theme: "dark",
  alignment: "left",
  // title: "PLA's military bases outside China",
  // byline: "By XXX",
  // footer: "",

  chapters: [
    {
      id: "chap-0",
      title: "The War in Lebanon",
      description:
        "After the 2006 war between Hezbollah and Israel, the UN Security Council passed Resolution 1701. The Resolution obligated Lebanon to eject Hezbollah from south Lebanon to north of the Litani River – or approximately 40km from the Blue Line, the de facto frontier line with Israel – as a preliminary step to disarming the group. This never happened. Then, on October 8, 2023 Hezbollah launched an ongoing war of attrition against Israel in support of Palestinian militant factions in the Gaza Strip. What follows below is a map and timeline of that war of attrition.",
      location: {
        //coordinates of Israel
        center: [35.3, 33.3], // flipped coordinates
        zoom: 9,
        pitch: 0.0,
        bearing: 0.0,
        speed: 2,
      },
      onChapterEnter: [
        {
          layer: "allPointsLayer",
          opacity: 1,
        },
        {
          layer: "litani-source",
          opacity: 0,
        },
        {
          layer: "litani-river-layer",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "allPointsLayer",
          opacity: 0,
        },
      ],
    },
    {
      id: "chap-1",
      title: "",
      description: `<div class="features-card">
        <div class="features-card-title">A Clear Escalation</div>
        <p class="paragraph">Since October 8, the Israeli-Lebanese frontier has witnessed a gradual escalation in the quantity and quality of attacks by Hezbollah, and an expansion of their territorial footprint. Hezbollah’s Secretary-General Hassan Nasrallah stressed in his November 3, 2023 speech that when Hezbollah “entered the battle on October 8….our operations…began in the area of the Shebaa Farms, and after that spreading to the entire Lebanese border with Occupied Palestine.” In his January 3, 2024 speech Nasrallah again boasted that “On October 8, Hezbollah entered the battle on the northern border of occupied Palestine” which came to spread “…across a 100km battlefront.”</p>
      </div>`,
      location: {
        center: [35.3, 33.3],
        zoom: 10,
        pitch: 0.0,
        bearing: 0.0,
        speed: 2,
      },
      onChapterEnter: [
        {
          layer: "points",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "points",
          opacity: 0,
        },
      ],
    },
    {
      id: "chap-2",
      title: "",
      description: `<div class="features-card second" style="will-change: filter, transform; filter: brightness(100%); transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
          <div class="features-card-title">For the South of Litani</div>
          
          <p class="paragraph">Resolution 1701 called upon Lebanon to “establish[…] between the Blue Line and the Litani river of an area free of any armed personnel, assets and weapons other than those of the Government of Lebanon and of UNIFIL.” 

</p>
        </div>`,
      location: {
        center: [35.42274, 33.25448],
        zoom: 9.89,
        pitch: 0.0,
        bearing: 0.0,
        speed: 2,
      },

      onChapterEnter: [
        {
          layer: "allPointsLayer",
          opacity: 1,
        },
        {
          //make this satellite layer
          layer: "litani-river-layer",
          opacity: 1,
        },
        {
          //set timelout to show the river

          layer: "litani-source",
          opacity: 1,
        },
        {
          layer: "mapbox-satellite",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "litani-river-layer",
          opacity: 0,
        },
      ],
    },
    {
      id: "chap-3",
      title: "",
      description: `<div class="features-card fourth">
        <div class="features-card-title">For the rest of Lebanon</div>
        <p class="paragraph">Resolution 1701: “require[s] the disarmament of all armed groups in Lebanon, so that… there will be no weapons or authority in Lebanon other than that of the Lebanese State.” Prohibits the presence of “foreign forces in Lebanon without the consent of its Government.” Prohibits “sales or supply of arms and related materiel to Lebanon except as authorized by its Government.” Lebanon has failed to fulfill this obligation. Beirut’s government and apparatuses have failed to restrain Hezbollah in any manner or halt the flow of weapons to the group, let alone made any move toward disarming it.
</p>
      </div>`,
      location: {
        center: [35.82921, 33.9117], // flipped coordinates
        zoom: 8.32,
        pitch: 48,
        bearing: 16.8,
        speed: 2,
      },
      onChapterEnter: [
        {
          layer: "litani-source",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "litani-source",
          opacity: 0,
        },
      ],
    },
    {
      id: "chap-4",
      title: "",
      description: `<div class="features-card fourth">
        <div class="features-card-title">Munitions over time breakdown</div>
        <p class="paragraph">Hezbollah has yet to introduce the most sophisticated of its weapons into the battle that it began on October 8. However, the months since have seen the steady introduction of increasingly destructive and advanced projectiles from the group’s arsenal. 
•	The group has introduced new rockets/missiles over the past few months, primarily the Jihad Mughniyeh and Wasel rockets.
•	Hezbollah’s operational use of anti-tank missiles has shifted over the past 10 months, with the group utilizing longer-range Almas ATGMs in their recent attacks.
•	The group has also relied heavily on Falaq-1 rockets, using them extensively since October 8. Additionally, they introduced the longer-range and more destructive Falaq-2 rocket system at least once, targeting Beit Hillel on June 8.


</p>
      </div>`,
      location: {
        center: [35.82921, 33.9117], // flipped coordinates
        zoom: 8.32,
        pitch: 48,
        bearing: 16.8,
        speed: 2,
      },
    },
  ],
};
