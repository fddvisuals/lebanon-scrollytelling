var config = {
  style: "mapbox://styles/fddvisuals/clzworm6q004s01qj50zfbajo",
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
          <div class="features-card-title">March 22, 2022</div>
          
          <p class="paragraph">Muhammad Galeb Ahmad Abu Alqian stabs and kills three Israelis, then rams and kills a fourth with his car in the southern Israeli city of Beersheba.</p>
        </div>`,
      location: {
        center: [35.3, 33.3], // flipped coordinates
        zoom: 5,
        pitch: 60,
        bearing: 0.0,
        speed: 2,
      },
      onChapterEnter: [
        {
          layer: "litani-source",
          opacity: 0,
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
      id: "chap-3",
      title: "",
      description: `<div class="features-card fourth">
        <div class="features-card-title">March 29, 2022</div>
        <p class="paragraph">Dia Hamarsheh, from the West Bank village of Ya’bad, enters Israel illegally and kills four civilians and a police officer in Bnei Brak.</p>
      </div>`,
      location: {
        center: [35.1672930827228, 32.44672068077165], // flipped coordinates
        zoom: 12,
        pitch: 0.0,
        bearing: 0.0,
        speed: 2,
      },
    },
  ],
};

var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
};

var alignments = {
  left: "lefty",
  center: "centered",
  right: "righty",
};

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function (prop) {
    map.setPaintProperty(layer.layer, prop, layer.opacity);
  });
}

var story = document.getElementById("story");
var features = document.createElement("div");
features.classList.add(alignments[config.alignment]);
features.setAttribute("id", "features");

var header = document.createElement("div");

if (config.title) {
  var titleText = document.createElement("h1");
  titleText.innerText = config.title;
  header.appendChild(titleText);
}

if (config.subtitle) {
  var subtitleText = document.createElement("h2");
  subtitleText.innerText = config.subtitle;
  header.appendChild(subtitleText);
}

if (config.byline) {
  var bylineText = document.createElement("p");
  bylineText.innerText = config.byline;
  header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute("id", "header");
  story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
  var container = document.createElement("div");
  var chapter = document.createElement("div");

  if (record.title) {
    var title = document.createElement("h3");
    title.innerText = record.title;
    chapter.appendChild(title);
  }

  if (record.image) {
    var image = new Image();
    image.src = record.image;
    chapter.appendChild(image);
  }

  if (record.description) {
    var story = document.createElement("p");
    story.innerHTML = record.description;
    chapter.appendChild(story);
  }

  container.setAttribute("id", record.id);
  container.classList.add("step");
  if (idx === 0) {
    container.classList.add("active");
  }

  chapter.classList.add(config.theme);
  container.appendChild(chapter);
  features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement("div");

if (config.footer) {
  var footerText = document.createElement("p");
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute("id", "footer");
  story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery
    ? "&pluginName=journalismScrollytelling"
    : "?pluginName=journalismScrollytelling";
  return {
    url: url + suffix,
  };
};

var map = new mapboxgl.Map({
  container: "map",
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: config.chapters[0].location.zoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  scrollZoom: false,
  transformRequest: transformRequest,
});

// instantiate the scrollama
var scroller = scrollama();

map.on("load", function () {
  // setup the instance, pass callback functions
  scroller
    .setup({
      step: ".step",
      offset: 0.8,
      progress: true,
    })
    .onStepEnter((response) => {
      console.log("chapter entered");
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      console.log(response.element.id);
      response.element.classList.add("active");
      //set filter in the mapbox layer "circle-layer"
      console.log(chapter.id);
      map.flyTo(chapter.location);
      if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
      }
      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
      }
    })
    .onStepExit((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.remove("active");
      // map.removeFilter("circle-layer");
      // Hide popups when a user exits a step
      popup.remove();

      if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach(setLayerOpacity);
      }
    });

  // Add a layer showing the places.
  d3.csv(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSkF92jXgM4RU21kuHY5qrXKOAbnhz33B3q1gkB-V2jxC51xzrwtJZJ4bw_0Vrk1r1XVYCgii2GUVSG/pub?gid=0&single=true&output=csv"
  )
    .then(function (data) {
      // Convert data to appropriate types
      data.forEach((d) => {
        d.Y = +d.Y;
        d.X = +d.X;
        d.Date = new Date(d.Date);
        return d;
      });

      const allPointsData = {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: data.map((d) => ({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [d.X, d.Y],
            },
            properties: {
              MainType: d.MainType,
            },
          })),
        },
      };
      map.addSource("allPointsSource", allPointsData);

      // Sort data by date
      data.sort((a, b) => a.Date - b.Date);

      let dates = [...new Set(data.map((d) => d.Date.toDateString()))]; // Extract unique dates
      let index = 0;

      // Date counter element
      const dateCounter = document.getElementById("date-counter");

      // Add an empty GeoJSON source and circle layer at the start
      map.addSource("points", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });

      map.loadImage("israel.png", function (error, image) {
        if (error) throw error;
        map.addImage("israel-icon", image);
      });

      map.loadImage("red.png", function (error, image) {
        if (error) throw error;
        map.addImage("red-icon", image);
      });

      map.addLayer({
        id: "points",
        type: "symbol",
        source: "points",
        layout: {
          "icon-image": [
            "match",
            ["get", "MainType"],
            "Israel",
            "israel-icon", // use israel.png when MainType is 'Israel'
            "red-icon", // use red.png otherwise
          ],
          "icon-size": 0.15,
          "icon-allow-overlap": true,
        },
      });

      map.addLayer({
        id: "allPointsLayer",
        type: "symbol",
        source: "allPointsSource",
        layout: {
          "icon-image": [
            "match",
            ["get", "MainType"],
            "Israel",
            "israel-icon", // use israel.png when MainType is 'Israel'
            "red-icon", // use red.png otherwise
          ],
          "icon-size": 0.15,
          "icon-allow-overlap": true,
        },
      });
      function updateMap() {
        const currentDate = dates[index];
        dateCounter.innerText = currentDate;

        // Filter data up to the current date
        const filteredData = data.filter(
          (d) => d.Date <= new Date(currentDate)
        );

        // Update the data for the points source
        map.getSource("points").setData({
          type: "FeatureCollection",
          features: filteredData.map((d) => ({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [d.X, d.Y],
            },
            properties: {
              MainType: d.MainType,
            },
          })),
        });

        index++;
        if (index >= dates.length) {
          index = 0; // Loop back to the start
        }
      }

      // Update the map every 2 seconds
      setInterval(updateMap, 50);
    })
    .catch(function (error) {
      console.error("Error loading the CSV data: ", error);
    });

  var popup = new mapboxgl.Popup({
    maxWidth: 300,
    backgroundColor: "rgba(0,0,0,0.1)",
    closeOnClick: false,
    closeButton: false,
    closeOnMove: true,
    offset: 25,
    className: "features-card-popup",
  });

  map.on("zoomend", function () {


    if (features.length) {
      var feature = features[0];

      // Remove any existing popups.
      popup.remove();

      // Set the coordinates of the pop-up to the clicked location.
      popup.setLngLat(feature.geometry.coordinates);

      // Set the HTML of the pop-up to the "description" property of the clicked feature.
      popup.setHTML(feature.properties.description);

      // Add the pop-up to the map.
      popup.addTo(map);
    }
  });
});

// setup resize event
window.addEventListener("resize", scroller.resize);
