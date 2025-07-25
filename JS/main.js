//                                           =======[THREE]=======                                                      
// Main Variables
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () {
  getRepos();
};

// Get Repos Function
function getRepos() {

  if (theInput.value == "") {

    reposData.innerHTML = "<sapn>Please Write Github Username</span>"

  } else {

    fetch(`https://api.github.com/users/${theInput.value}/repos`)

    .then((response) => response.json())

    .then((repositories) => {

      // Empty The Container
      reposData.innerHTML = "";

      repositories.forEach(repo => {

        // Create The Main Div Element
        let mainDiv = document.createElement("div");

        // Create Repo Name Text
        let repoName = document.createTextNode(repo.name);

        // Appen The Text To Main Div
        mainDiv.appendChild(repoName);

        // Create Repo URL Anchor
        let theUrl = document.createElement("a");

        // Create Repo URL Text
        let theUrlText = document.createTextNode("Visit");

        // Append The Repo Url Text Anchor Tag
        theUrl.appendChild(theUrlText);

        // Add The Hypertext Reference "href"
        theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

        // Set Attribute Blank
        theUrl.setAttribute("target", "_blank");

        // Append Url Anchor To Main Div
        mainDiv.appendChild(theUrl);

        // Add Stars Count Text
        let starsSpan = document.createElement("span");

        // Create The Stars Count Text
        let starsText = document.createTextNode(` Stars ${repo.stargazers_count}`);

        // Add Stars Count Text To Stars Span
        starsSpan.appendChild(starsText);

        // Append Stars Div To Main Div
        mainDiv.appendChild(starsSpan)

        // Add Class On Main Div
        mainDiv.className = "repo-box"

        // Appen The Main Div To Container
        reposData.appendChild(mainDiv);

      });

    });

  }

}