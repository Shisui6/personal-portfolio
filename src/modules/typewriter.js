let i = 0;
const content = ['Software Developer.', 'Student.', 'Traveler.', 'Remote Professional.', 'Micronaut.'];
let part = 0;
let interval;
const element = document.getElementById('type');

const type = () => {
  // Get substring with 1 character added
  const text = content[part].substring(0, i + 1);
  element.innerHTML = text;
  i += 1;

  // If full sentence has been displayed then start to delete the sentence after some time
  if (text === content[part]) {
    clearInterval(interval);
    setTimeout(() => {
      // eslint-disable-next-line no-use-before-define
      interval = setInterval(backspace, 100);
    }, 3000);
  }
};

const backspace = () => {
  // Get substring with 1 character deleted
  const text = content[part].substring(0, i - 1);
  element.innerHTML = text;
  i -= 1;

  // If sentence has been deleted then start to display the next sentence
  if (text === '') {
    clearInterval(interval);

    // If current sentence was last then display the first one, else move to the next
    if (part === (content.length - 1)) part = 0;
    else part += 1;

    i = 0;

    // Start to display the next sentence after some time
    setTimeout(() => {
      interval = setInterval(type, 100);
    }, 200);
  }
};

window.onload = () => {
  interval = setInterval(type, 100);
};