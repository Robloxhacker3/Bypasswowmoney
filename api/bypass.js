// Alert to notify the user if the script doesn't work
alert("script doesn't work, please wait for an update (disable the script if you wanna)");
return;

// Checking if the page title is 'Just a moment...'
if (document.title == 'Just a moment...') {
    return;
}

// Fetch the bypass API link from your Vercel API
fetch('https://robloxhacker3s-projects.vercel.app/api/byPassApi')  // Replace with your Vercel endpoint
  .then(response => response.json())
  .then(data => {
    const bypassAPI = data.bypassLink;
    if (!bypassAPI) {
      alert("No link provided! Using default link.");
      window.location.href = 'https://raw.githubusercontent.com/your-repo/default-link';
      return;
    }

    // Process the current URL
    var currentURL = window.location.href;
    var newerURL = currentURL.replace('https://spdmteam.com/key-system-1?hwid=', 'https://spdmteam.com/api/keysystem?hwid=').replace('&zone=Europe/Rome', '&zone=Europe/Rome&advertiser=lootlabs&OS=ios');
    var pageTitle = document.title;
    var API = "https://spdmteam.com/api/keysystem?step=";

    // Handle redirection and API link processing
    if (currentURL.includes("https://spdmteam.com/key-system-1?hwid=")) {
      window.location.replace(newerURL); 
    } else if (pageTitle.includes("NEO") && pageTitle.includes("1")) {
      window.location.href = API + "1&advertiser=linkvertise&OS=ios";
    } else if (currentURL.includes("https://spdmteam.com/key-system-2?hwid=")) {
      window.location.replace("https://loot-link.com/s?mYit");
    } else if (pageTitle.includes("NEO") && pageTitle.includes("2")) {
      window.location.replace("https://spdmteam.com/api/keysystem?step=2&advertiser=linkvertise&OS=ios");
    } else if (currentURL.includes("https://spdmteam.com/key-system-3?hwid=")) {
      window.location.replace("https://loot-link.com/s?qlbU");
    } else if (pageTitle.includes("NEO") && pageTitle.includes("3")) {
      window.location.replace("https://spdmteam.com/api/keysystem?step=3&advertiser=linkvertise&OS=ios");
    }
  })
  .catch(error => {
      console.error("Error fetching the bypass link:", error);
  });
