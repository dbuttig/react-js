//function greeting(message) {
  //return alert(`${message}, everyone!`)
//}

let noParamFunction = () => alert('This is only a test.');

noParamFunction();

let greeting = message => alert(`${message}, everyone!`);

greeting('Good morning');

let createBlog = (title, body) => {
  if (!title) {
    throw new Error('A title is required');
  }

  if (!body) {
    throw new Error('Body cannot be empty');
  }

  return alert(`${title} - ${body}`);
}

createBlog('My title', 'Blog body');
