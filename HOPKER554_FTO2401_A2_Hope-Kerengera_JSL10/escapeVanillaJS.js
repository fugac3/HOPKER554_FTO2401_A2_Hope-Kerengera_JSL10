document.addEventListener("DOMContentLoaded", () => {
  // 🪲 Bug: Incorrect ID used for attaching the event listener - S
  document.getElementById("solveRoom1").addEventListener("click", () => {
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => {
        const mostRecentBook = findMostRecentBook(books);
        // 🪲 Bug: Incorrect element ID - S
        document.getElementById(
          "room1Result"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });

  document.getElementById("solveRoom2").addEventListener("click", () => {
    const jsConcepts = new Set(["closure", "scope", "hoisting", "async"]); //async was missing
    // 🪲 Bug: What's mssing from JS concepts? - S
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
    // 🪲 Bug: Incorrect function call - S
    const commonConcepts = findIntersection(jsConcepts, reactConcepts); //reactConcepts = setB
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

  // 🪲 Bug: Asynchronous function ?
  document.getElementById("solveRoom3").addEventListener("click", () => {
    fetch("directions.json")
      .then((response) => response.json())
      .then((directions) => {
        navigateLabyrinth(directions).then((message) => {
          // 🪲 Bug: Incorrect method
          document.getElementById("room3Result").innerHTML = message;
        });
      });
  });
});

function findMostRecentBook(books) {
  // 🪲 Bug: Logic error - S
  return books.reduce(
    (
      mostRecent,
      book //(accumulator, current value)
    ) =>
      new Date(book.published) > new Date(mostRecent.published) //greater than
        ? book
        : mostRecent
  );
}

function findIntersection(setA, setB) {
  // 🪲 Bug: Incorrect logic - S
  const intersection = new Set([...setA].filter((x) => setB.has(x))); //create a new set to show values that intersect. Create an array of set A's values then filter them to show values that are also present in setB
  return intersection;
}

async function navigateLabyrinth(directions) {
  for (let direction of directions) {
    // 🪲 Bug: No delay - S
    await new Promise((resolve) => setTimeout(resolve, 1000)); //await. Waits one second before showing next step
    console.log(`Navigating: ${direction.step}`);
  }
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
