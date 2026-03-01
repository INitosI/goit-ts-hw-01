console.warn("Task 7: Async Function with Promise");async function n(){return await new Promise(s=>{setTimeout(()=>{s("Hello from TS")},1e3)})}n().then(e=>console.log(e));
