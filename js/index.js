function abdo() {
  let quoteOutput = [
    "  You only live once, but if you do it right, once is enough.  ",

    "Be the change that you wish to see in the world.",

    "If you tell the truth, you don't have to remember anything. ",

    "A friend is someone who knows all about you and still loves you.",

    "Always forgive your enemies; nothing annoys them so much.",

    "Life with God is not immunity from difficulties, but peace in difficulties.",

    "Champions never complain, they are too busy getting better.",

    "Kesabaran adalah teman dari kebijaksanaan.",
  ];

  let authorOutput = [
    "Mae West",
    "Mahatma Gandhi",
    "Mark Twain",
    "Elbert Hubbard",
    "Oscar Wilde",
    "CS Lewis",
    "John Wooden",
    "Epichurus",
  ];

  let random = Math.floor(Math.random() * authorOutput.length);

  document.getElementById(
    "quoteOutput"
  ).innerHTML = `     " ${quoteOutput[random]} " `;
  document.getElementById(
    "authorOutput"
  ).innerHTML = ` -- ${authorOutput[random]} `;
}
