const EventEmiter = require("events");
// Event Class Instance or Object 
const events = new EventEmiter();

    // Register the Event Listener
    // events.on("doorbell", ()=>{
    //     console.log("Darwaje pe kon hai");
    // })

    // Event Fire

    // events.emit("doorbell")

    // Event Parameter as a argument

// Event Listen
// events.on("doorbell", (val) => {
//   if (val=="Addy") {
//     console.log("Just wait im coming!!!");
//   }
// });
// events.on("doorbell", (val) => {
//     console.log("This is my another person!!!");
// });

// Event Fire

// events.emit("doorbell", "Addy");


//File system example

let fs = require("fs")

// File Emit
let rs = fs.createReadStream("./adi.txt")
// File Listen
rs.on("open", ()=>{
    console.log("My File adi.txt is open");
})
