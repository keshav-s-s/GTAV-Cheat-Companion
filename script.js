
/* =====================================
   LOS SANTOS - CHEAT COMPANION
   Main JavaScript
===================================== */

// 1. CHEAT DATABASE

const cheats = [
  // PLAYER
  {
    name: "Invincibility",
    code: "PAINKILLER",
    category: "Player",
    description: "Become invincible for 5 minutes."
  },
  {
    name: "Max Health & Armour",
    code: "TURTLE",
    category: "Player",
    description: "Restores full health and armour."
  },
  {
    name: "Recharge Special Ability",
    code: "POWERUP",
    category: "Player",
    description: "Fully recharges your special ability."
  },
  {
    name: "Fast Run",
    code: "CATCHME",
    category: "Player",
    description: "Increases your running speed."
  },
  {
    name: "Fast Swim",
    code: "GOTGILLS",
    category: "Player",
    description: "Increases your swimming speed."
  },
  {
    name: "Super Jump",
    code: "HOPTOIT",
    category: "Player",
    description: "Allows you to jump extremely high."
  },
  {
    name: "Parachute",
    code: "SKYDIVE",
    category: "Player",
    description: "Gives you a parachute."
  },
  {
    name: "Skyfall",
    code: "SKYFALL",
    category: "Player",
    description: "Drops you from the sky."
  },
  {
    name: "Drunk Mode",
    code: "LIQUOR",
    category: "Player",
    description: "Makes your character drunk."
  },

  // WEAPONS
  {
    name: "All Weapons & Ammo",
    code: "TOOLUP",
    category: "Weapons",
    description: "Gives you the available weapons and ammunition."
  },
  {
    name: "Explosive Melee",
    code: "HOTHANDS",
    category: "Weapons",
    description: "Your punches and melee attacks cause explosions."
  },
  {
    name: "Explosive Bullets",
    code: "HIGHEX",
    category: "Weapons",
    description: "Bullets explode on impact."
  },
  {
    name: "Flaming Bullets",
    code: "INCENDIARY",
    category: "Weapons",
    description: "Bullets set targets on fire."
  },
  {
    name: "Slow Motion Aim",
    code: "DEADEYE",
    category: "Weapons",
    description: "Slows down time while aiming."
  },

  // POLICE
  {
    name: "Increase Wanted Level",
    code: "FUGITIVE",
    category: "Police",
    description: "Adds one wanted star."
  },
  {
    name: "Decrease Wanted Level",
    code: "LAWYERUP",
    category: "Police",
    description: "Removes one wanted star."
  },

  // WORLD
  {
    name: "Change Weather",
    code: "MAKEITRAIN",
    category: "World",
    description: "Cycles through weather conditions."
  },
  {
    name: "Moon Gravity",
    code: "FLOATER",
    category: "World",
    description: "Reduces gravity throughout the game."
  },
  {
    name: "Slippery Cars",
    code: "SNOWDAY",
    category: "World",
    description: "Makes vehicles lose traction."
  },
  {
    name: "Slow Motion",
    code: "SLOWMO",
    category: "World",
    description: "Slows down the entire game."
  },

  // VEHICLES
  {
    name: "Buzzard Attack Helicopter",
    code: "BUZZOFF",
    category: "Vehicles",
    description: "Spawns a Buzzard attack helicopter."
  },
  {
    name: "Comet Sports Car",
    code: "COMET",
    category: "Vehicles",
    description: "Spawns a Comet sports car."
  },
  {
    name: "Rapid GT Sports Car",
    code: "RAPIDGT",
    category: "Vehicles",
    description: "Spawns a Rapid GT sports car."
  },
  {
    name: "Duke O'Death",
    code: "DEATHCAR",
    category: "Vehicles",
    description: "Spawns an armoured muscle car.",
    unlock: "Requires the Duel Random Event to be completed."
  },
  {
    name: "BMX Bicycle",
    code: "BANDIT",
    category: "Vehicles",
    description: "Spawns a BMX bicycle."
  },
  {
    name: "Sanchez Dirt Bike",
    code: "OFFROAD",
    category: "Vehicles",
    description: "Spawns a Sanchez dirt bike."
  },
  {
    name: "PCJ-600 Motorcycle",
    code: "ROCKET",
    category: "Vehicles",
    description: "Spawns a PCJ-600 motorcycle."
  },
  {
    name: "Caddy Golf Cart",
    code: "HOLEIN1",
    category: "Vehicles",
    description: "Spawns a golf cart."
  },
  {
    name: "Stretch Limousine",
    code: "VINEWOOD",
    category: "Vehicles",
    description: "Spawns a Stretch limousine."
  },
  {
    name: "Trashmaster",
    code: "TRASHED",
    category: "Vehicles",
    description: "Spawns a garbage truck."
  },
  {
    name: "Duster Aircraft",
    code: "FLYSPRAY",
    category: "Vehicles",
    description: "Spawns a crop-duster aircraft."
  },
  {
    name: "Mallard Stunt Plane",
    code: "BARNSTORM",
    category: "Vehicles",
    description: "Spawns a Mallard stunt plane."
  },
  {
    name: "Dodo Seaplane",
    code: "EXTINCT",
    category: "Vehicles",
    description: "Spawns a Dodo seaplane.",
    unlock: "Requires completing the Sea Plane Random Event."
  },
  {
    name: "Kraken Submarine",
    code: "BUBBLES",
    category: "Vehicles",
    description: "Spawns a Kraken submarine.",
    unlock: "Requires completing the Wildlife Photography Challenge."
  },

  // MISCELLANEOUS
  {
    name: "Director Mode",
    code: "JRTALENT",
    category: "Misc",
    description: "Opens Director Mode."
  }
];


// 2. CATEGORY FILTERS

const categories = [
  "All",
  "Player",
  "Weapons",
  "Police",
  "World",
  "Vehicles",
  "Misc"
];

let activeCategory = "All";

const filters = document.getElementById("filters");
const cheatList = document.getElementById("cheat-list");
const searchInput = document.getElementById("search");
const count = document.getElementById("count");
const toast = document.getElementById("toast");


// 3. CREATE CATEGORY BUTTONS

function createFilters() {
  filters.innerHTML = "";

  categories.forEach(category => {
    const button = document.createElement("button");

    button.className = "filter-btn";
    button.textContent = category;

    if (category === activeCategory) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      activeCategory = category;
      createFilters();
      renderCheats();
    });

    filters.appendChild(button);
  });
}


// 4. RENDER CHEAT CARDS

function renderCheats() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  const filteredCheats = cheats.filter(cheat => {
    const matchesCategory =
      activeCategory === "All" ||
      cheat.category === activeCategory;

    const matchesSearch = [
      cheat.name,
      cheat.code,
      cheat.description,
      cheat.category,
      cheat.unlock || ""
    ].some(value => value.toLowerCase().includes(searchTerm));

    return matchesCategory && matchesSearch;
  });

  count.textContent = `${filteredCheats.length} cheats`;

  cheatList.innerHTML = "";

  if (filteredCheats.length === 0) {
    cheatList.innerHTML = `
      <div class="empty-state">
        <h4>No cheats found</h4>
        <p>Try another search or category.</p>
      </div>
    `;
    return;
  }

  filteredCheats.forEach(cheat => {
    const card = document.createElement("article");
    card.className = "cheat-card";

    card.innerHTML = `
      <div class="card-top">
        <h4>${cheat.name}</h4>
        <span class="category-tag">
          ${cheat.category}
        </span>
      </div>

      <div class="code-row">
        <code>${cheat.code}</code>

        <button
          class="copy-btn"
          type="button"
          data-code="${cheat.code}"
          aria-label="Copy ${cheat.code}"
        >
          COPY
        </button>
      </div>

      <p class="description">
        ${cheat.description}
      </p>

      ${
        cheat.unlock
          ? `<div class="unlock-note">
              🔒 ${cheat.unlock}
            </div>`
          : ""
      }
    `;

    cheatList.appendChild(card);
  });
}


// 5. COPY CHEAT CODE

async function copyCode(code) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(code);
    } else {
      const textarea = document.createElement("textarea");

      textarea.value = code;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";

      document.body.appendChild(textarea);
      textarea.select();

      const success = document.execCommand("copy");
      textarea.remove();

      if (!success) {
        throw new Error("Copy failed");
      }
    }

    showToast(`${code} COPIED!`);
  } catch (error) {
    showToast("Unable to copy code");
  }
}


// 6. TOAST NOTIFICATION

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}


// 7. EVENT LISTENERS

searchInput.addEventListener("input", renderCheats);

cheatList.addEventListener("click", event => {
  const button = event.target.closest(".copy-btn");

  if (!button) return;

  copyCode(button.dataset.code);
});


// 8. INITIALIZE WEBSITE

createFilters();
renderCheats();

console.log("Los Santos Cheat Companion loaded!");
console.log(`Total cheats: ${cheats.length}`);
