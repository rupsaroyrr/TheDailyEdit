// All sample articles are stored in one simple array of objects.
var articles = [
  {
    id: 1,
    title: "New Urban Ideas Put Cities and Communities First",
    category: "World",
    summary: "Designers and local leaders are exploring parks, public spaces and safer streets as cities plan for a changing future.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    url: "https://www.un.org/en/climatechange"
  },
  {
    id: 2,
    title: "India Expands the Reach of Clean Energy",
    category: "India",
    summary: "A college project demonstration inspired by India's growing investment in renewable power and sustainable infrastructure.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80",
    url: "https://www.pib.gov.in/PressReleseDetail.aspx?PRID=1976581"
  },
  {
    id: 3,
    title: "Artificial Intelligence Moves into Everyday Classrooms",
    category: "Technology",
    summary: "Schools are testing responsible ways to use digital tools while keeping critical thinking and human guidance at the center.",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=900&q=80",
    url: "https://www.unesco.org/en/digital-education/artificial-intelligence"
  },
  {
    id: 4,
    title: "Small Businesses Find New Routes to Global Markets",
    category: "Business",
    summary: "Online platforms help local makers and entrepreneurs reach customers beyond their hometowns.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    url: "https://www.wto.org/english/tratop_e/msmes_e/msmes_e.htm"
  },
  {
    id: 5,
    title: "A New Generation Redefines the Sporting Calendar",
    category: "Sports",
    summary: "Young athletes, accessible training and growing fan communities are changing how people watch and play sport.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
    url: "https://olympics.com/"
  },
  {
    id: 6,
    title: "Independent Cinema Draws Attention Back to the Big Screen",
    category: "Entertainment",
    summary: "Film festivals and neighborhood theaters are creating fresh spaces for distinctive stories and emerging voices.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
    url: "https://www.festival-cannes.com/en/"
  },
  {
    id: 7,
    title: "The Quiet Work Behind More Livable Public Spaces",
    category: "World",
    summary: "Urban planners are combining shade, seating, walking routes and local history to make neighborhoods more welcoming.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80",
    url: "https://www.unhabitat.org/"
  },
  {
    id: 8,
    title: "Indian Railways Looks Ahead to Cleaner Journeys",
    category: "India",
    summary: "Energy projects and modern stations are part of the wider effort to improve travel while reducing emissions.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=900&q=80",
    url: "https://indianrailways.gov.in/"
  },
  {
    id: 9,
    title: "Inside the Race to Build More Secure Digital Services",
    category: "Technology",
    summary: "Technology teams are putting privacy, safer passwords and better data protection at the center of product design.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
    url: "https://www.cisa.gov/cybersecurity"
  },
  {
    id: 10,
    title: "Markets Watch the Changing Shape of Global Trade",
    category: "Business",
    summary: "Businesses are adapting supply chains as consumer demand and transport routes evolve across regions.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80",
    url: "https://www.worldbank.org/en/topic/trade"
  },
  {
    id: 11,
    title: "Community Sports Create Space for Every Participant",
    category: "Sports",
    summary: "Local clubs are helping wider groups of people take part, from beginners discovering a sport to seasoned volunteers.",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=80",
    url: "https://www.un.org/en/observances/sport-day"
  },
  {
    id: 12,
    title: "Streaming Platforms Invest in Stories With a Local Voice",
    category: "Entertainment",
    summary: "Regional music, film and television are finding larger audiences across borders and languages.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80",
    url: "https://www.netflix.com/tudum/articles"
  },
  {
    id: 13,
    title: "Coastal Communities Share Lessons on Climate Resilience",
    category: "World",
    summary: "Residents, scientists and local governments are testing practical plans for stronger homes and natural defenses.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    url: "https://news.un.org/en/tags/climate-change"
  },
  {
    id: 14,
    title: "India's Digital Libraries Make Knowledge Easier to Reach",
    category: "India",
    summary: "Students and researchers are benefiting from wider access to archives, learning resources and public collections.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
    url: "https://ndl.iitkgp.ac.in/"
  }
];

var featuredStory = document.getElementById("featuredStory");
var headlineGrid = document.getElementById("headlineGrid");
var moreList = document.getElementById("moreList");
var searchInput = document.getElementById("searchInput");
var filterMessage = document.getElementById("filterMessage");
var currentCategory = "All";

// Show the featured article in the large section at the top.
function showFeaturedArticle(article) {
  featuredStory.innerHTML =
    '<img src="' + article.image + '" alt="Editorial image for ' + article.title + '">' +
    '<div class="featured-text">' +
      '<span class="category">' + article.category + '</span>' +
      '<h1>' + article.title + '</h1>' +
      '<p>' + article.summary + '</p>' +
      '<a class="read-button" href="' + article.url + '" target="_blank" rel="noopener noreferrer">Read More</a>' +
    '</div>';
}

// Display matching articles as newspaper grid cards.
function showHeadlines(articleList) {
  headlineGrid.innerHTML = "";

  if (articleList.length === 0) {
    headlineGrid.innerHTML = '<p>No headlines match your search.</p>';
    return;
  }

  for (var i = 0; i < articleList.length; i++) {
    var article = articleList[i];
    headlineGrid.innerHTML +=
      '<article class="news-card">' +
        '<img src="' + article.image + '" alt="News image about ' + article.category + '">' +
        '<span class="category">' + article.category + '</span>' +
        '<h3>' + article.title + '</h3>' +
        '<p>' + article.summary + '</p>' +
        '<a class="text-link" href="' + article.url + '" target="_blank" rel="noopener noreferrer">Read More</a>' +
      '</article>';
  }
}

// Show remaining stories in the simple list below the grid.
function showMoreHeadlines(articleList) {
  moreList.innerHTML = "";

  for (var i = 0; i < articleList.length; i++) {
    var article = articleList[i];
    moreList.innerHTML +=
      '<article class="more-item">' +
        '<img src="' + article.image + '" alt="">' +
        '<span class="category">' + article.category + '</span>' +
        '<h3>' + article.title + '</h3>' +
        '<a class="text-link" href="' + article.url + '" target="_blank" rel="noopener noreferrer">Read More</a>' +
      '</article>';
  }
}

// Apply both the category filter and the typed search.
function filterArticles() {
  var searchText = searchInput.value.toLowerCase();
  var results = [];

  for (var i = 0; i < articles.length; i++) {
    var article = articles[i];
    var matchesCategory = currentCategory === "All" || article.category === currentCategory;
    var matchesSearch = article.title.toLowerCase().indexOf(searchText) !== -1 ||
      article.summary.toLowerCase().indexOf(searchText) !== -1;

    if (matchesCategory && matchesSearch) {
      results.push(article);
    }
  }

  showHeadlines(results);
  showMoreHeadlines(results.slice(9));

  filterMessage.textContent = results.length + " headline(s) found" +
    (currentCategory === "All" ? "" : " in " + currentCategory) +
    (searchText === "" ? "." : " for \"" + searchInput.value + "\".");
}

// Change the active category when a navigation button is clicked.
var navButtons = document.querySelectorAll(".nav-button");
for (var i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener("click", function () {
    currentCategory = this.getAttribute("data-category");
    searchInput.value = "";

    for (var j = 0; j < navButtons.length; j++) {
      navButtons[j].classList.remove("active");
    }
    this.classList.add("active");
    filterArticles();

    document.getElementById("navLinks").classList.remove("open");
    document.getElementById("menuButton").setAttribute("aria-expanded", "false");
    document.getElementById("headlinesHeading").scrollIntoView({ behavior: "smooth" });
  });
}

searchInput.addEventListener("input", filterArticles);

// Open and close the navigation on small screens.
var menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", function () {
  var navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("open");

  var isOpen = navLinks.classList.contains("open");
  menuButton.setAttribute("aria-expanded", isOpen.toString());
});

// Display today's date in the edition bar.
function showCurrentDate() {
  var today = new Date();
  var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  document.getElementById("currentDate").textContent = today.toLocaleDateString("en-US", options);
}

// Initial page setup.
showFeaturedArticle(articles[0]);
showCurrentDate();
filterArticles();
