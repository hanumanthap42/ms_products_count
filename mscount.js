// Initialize counts from localStorage or default to 0
let counts = {
  office: { lan: parseInt(localStorage.getItem("office-lan")) || 0,
            standalone: parseInt(localStorage.getItem("office-standalone")) || 0 },
  visio: { lan: parseInt(localStorage.getItem("visio-lan")) || 0,
           standalone: parseInt(localStorage.getItem("visio-standalone")) || 0 },
  project: { lan: parseInt(localStorage.getItem("project-lan")) || 0,
             standalone: parseInt(localStorage.getItem("project-standalone")) || 0 },
  vs: { lan: parseInt(localStorage.getItem("vs-lan")) || 0,
        standalone: parseInt(localStorage.getItem("vs-standalone")) || 0 }
};

// Update UI
function updateUI() {
  document.getElementById("office-lan").innerText = counts.office.lan;
  document.getElementById("office-standalone").innerText = counts.office.standalone;
  document.getElementById("visio-lan").innerText = counts.visio.lan;
  document.getElementById("visio-standalone").innerText = counts.visio.standalone;
  document.getElementById("project-lan").innerText = counts.project.lan;
  document.getElementById("project-standalone").innerText = counts.project.standalone;
  document.getElementById("vs-lan").innerText = counts.vs.lan;
  document.getElementById("vs-standalone").innerText = counts.vs.standalone;
}

// Add count
function addCount(product, type) {
  counts[product][type]++;
  localStorage.setItem(`${product}-${type}`, counts[product][type]);
  updateUI();
}

// Remove count (not below 0)
function removeCount(product, type) {
  if (counts[product][type] > 0) {
    counts[product][type]--;
    localStorage.setItem(`${product}-${type}`, counts[product][type]);
    updateUI();
  }
}

// On page load
updateUI();
