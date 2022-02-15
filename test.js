const people = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bob', 'Tiff', 'Bruce'];

const turkeys = new Intl.ListFormat('en-EN', { }).format(people);

console.log(turkeys);