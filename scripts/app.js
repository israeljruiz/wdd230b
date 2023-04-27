const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(now);

datefield.innerHTML = `<em>${fulldate}`;

document.querySelector(".lastModified").textContent = `Last Modification: ${document.lastModified}`;