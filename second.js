
const text1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

const reversedText = text1.split(". ").reverse().join(" . ");

const reversedWords = reversedText.split(" ").map(word => word.split("").reverse().join("")).join(" ") + " .";

console.log(reversedWords);


