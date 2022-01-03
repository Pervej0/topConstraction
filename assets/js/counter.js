const counterData = {
  project: 598,
  clients: 128,
  success: 114,
  awards: 109,
};

// get element
const projectsCount = document.getElementById("projects-count");
const clientsCount = document.getElementById("clients-count");
const successCount = document.getElementById("success-count");
const awardsCount = document.getElementById("awards-count");

// increasing counter number
const counterIncrease = (element) => {
  if (element.id === "projects-count") {
    element.innerText++;
  }
  if (element.id === "clients-count") {
    element.innerText++;
  }
  if (element.id === "success-count") {
    element.innerText++;
  }
  if (element.id === "awards-count") {
    element.innerText++;
  }
};

const handleInterval = (element, counter) => {
  const limitedInterval = setInterval(() => {
    counterIncrease(element);
    if (element.innerText == counter) {
      clearInterval(limitedInterval);
    }
  }, 5);
};

handleInterval(projectsCount, counterData.project);
handleInterval(clientsCount, counterData.clients);
handleInterval(successCount, counterData.success);
handleInterval(awardsCount, counterData.awards);
