// 1. Highlight words over 8 characters long
const paragraph = document.getElementById('text');
let textContent = paragraph.innerHTML;

paragraph.innerHTML = textContent.split(' ').map(word => {
  return word.length > 8 ? `<span class="highlight">${word}</span>` : word;
}).join(' ');

// 2. Add a link back to the source after the paragraph
const link = document.createElement('a');
link.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html";
link.textContent = "Source";
paragraph.insertAdjacentElement('afterend', link);

// 3. Split each sentence onto a new line
paragraph.innerHTML = paragraph.innerHTML.split('. ').map(sentence => {
  return `<span class="sentence">${sentence.trim()}.</span>`;
}).join(' ');

// 4. Count the number of words in the paragraph and display the count after the heading
const wordCount = paragraph.innerText.split(/\s+/).filter(word => word.length > 0).length;
document.getElementById('wordCount').textContent = `Word Count: ${wordCount}`;

// 5. Replace all ? with 🤔 and ! with 😲
paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, '🤔').replace(/\!/g, '😲');
