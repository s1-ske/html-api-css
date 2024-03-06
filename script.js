const main = document.getElementById("main");
const Api = "https://jsonplaceholder.typicode.com/todos";
async function fetchdata() {
  const a = await fetch(Api);
  const value = await a.json();
  console.log(value);
  value.map((e) => {
    const card = document.createElement("div");
    card.classList.add("flex");
    card.classList.add("flex-col");
    card.classList.add("bg-gray-100");
    card.classList.add("m-5");
    card.classList.add("w-[200px]");
    card.classList.add("h-[200px]");
    card.classList.add("gap-2");
    card.classList.add("justify-center");
    card.classList.add("items-center");
    card.classList.add("gap-2");
    card.classList.add("rounded-md");
    card.classList.add("shadow-lg");

    const span = document.createElement("span");
    span.innerText = e.userId;
    card.append(span);

    const span1 = document.createElement("span");
    span1.innerText = e.title;
    card.append(span1);

    const span2 = document.createElement("span");
    span2.innerText = e.completed;
    card.append(span2);

    main.append(card);
  });
}

fetchdata();
