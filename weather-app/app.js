console.log('Starting');

// setTimeout(function(){},timer)
setTimeout(() => {
  console.log('2 Sec Timer');
}, 2000); // 2second = 2000 mili_sec

setTimeout(() => {
  console.log('0 Sec timer');
}, 0);

console.log('Stopping');
