const allSections = [...document.querySelectorAll("section")].map(item => item.className.substring(8));

const getSection = (input) => document.querySelector(`.section-${allSections.includes(input) ? input : "home"}`);
const getNavBtn = (input) => document.querySelector(`.btn-nav-${allSections.includes(input) ? input : "home"}`);

const changeSection = (name) => {
  const nodes = document.querySelectorAll("section");
  const input = allSections.includes(name) ? name : "home";

  for (let i = 0; i < nodes.length; i++) {
    const section = nodes[i].className.substring(8);

    document.title = `ExtraorDesign - ${getNavBtn(input).textContent}`
    
    getSection(section).style.opacity = section === input ? "1" : "0";
    getSection(section).style.zIndex = section === input ? "1" : "0";
    getNavBtn(section).style.fontWeight = section === input ? "500" : "300";
  }
}

document.querySelectorAll("button").forEach(item => {
  if (item.className.includes("btn-nav-")) {
    const btn = item.className.split(" ")[1].substring(8);
    item.addEventListener("click", () => changeSection(btn))
  }
})

changeSection("home")