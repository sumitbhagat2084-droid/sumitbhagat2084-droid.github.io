function openProject(project) {
  const modal = document.getElementById("modal");
  const title = document.getElementById("modalTitle");
  const desc = document.getElementById("modalDesc");
  const link = document.getElementById("modalLink");

  if (project === "steam") {
    title.innerText = "Steam Data Analysis";
    desc.innerText =
      "Analyzed Steam game data using Python to identify trends in pricing, genres, and popularity.";
    link.href = "https://github.com/sumitbhagat2084-droid";
  }

  if (project === "imdb") {
    title.innerText = "IMDB Dashboard";
    desc.innerText =
      "Built an interactive Power BI dashboard analyzing IMDB ratings, genres, and trends.";
    link.href = "https://github.com/sumitbhagat2084-droid";
  }

  modal.style.display = "flex";
}

function closeProject() {
  document.getElementById("modal").style.display = "none";
}
