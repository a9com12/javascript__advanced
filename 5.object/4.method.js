const apple = {
    name: "apple",
    display: function() {
        console.log(`${this.name}: 🍎`);
    },
    
};

apple.display();

const orange = {
    name: "apple", 
    display: function() {
        console.log(`${this.name}: 🍊`);
    if (orange.name === "orange") {
        console.log("This is orange");
    }
    else {
        console.log("THis is not orange");
    }
    },
};

orange.display();