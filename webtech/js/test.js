let p1=new Promise((resolve, reject)=>{
	resolve("Resolved Message of Promise 1");
	reject("Rejected Message of Promise 1");
})
let p2=new Promise((resolve, reject)=>{
	resolve("Resolved Message of Promise 2");
	reject("Rejected Message of Promise 2");
})
let p3=new Promise((resolve, reject)=>{
	resolve("Resolved Message of Promise 3");
	reject("Rejected Message of Promise 3");
})
let p4=new Promise((resolve, reject)=>{
	// resolve("Resolved Message of Promise 4");
	reject("Rejected Message of Promise 4");
})

Promise.any([p1,p2,p3,p4])
.then((response)=>{console.log((response))})
.catch((err)=>{console.log((err))})

