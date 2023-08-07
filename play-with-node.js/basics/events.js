
import { EventEmitter } from "events";

//----------------------------------------------------------------
// Door
//----------------------------------------------------------------

class Door extends EventEmitter {
    open() {
        console.log("Door open");
        this.emit("open", { floor: 4, room: 3 });
    }
    close() {
        console.log("Door close");
        this.emit("close", { floor: 4, room: 3 });
    }
}

const door = new Door();
setTimeout(() => {
    door.open();
    setTimeout(() => {
        door.close()
    }, 2000);
}, 2000);

//----------------------------------------------------------------
// Light
//----------------------------------------------------------------

door.on("open", (e) => {
    console.log("Light ON - ", e.floor, e.room);
})

door.on("close", (e) => {
    console.log("Light OFF - ", e.floor, e.room);
})

//----------------------------------------------------------------
// Fan
//----------------------------------------------------------------

door.on("open", () => {
    console.log("Fan ON");
})

door.on("close", () => {
    console.log("Fan OFF");
})


//----------------------------------------------------------------


