var box
function setup () {
box = new Box(50) 
}

function draw () {
background(15)
box.display()
box.changeWidth()
}
class Box {
    constructor(w) {
        //properties
        this.x = 50 
        this.y = 350 
        this.w = w
    }
    changeWidth() {
        this.w = this.w + 0.001
        console.log(this.w)
    }
    display() {
        rect (this.x,this.y,this.w,20)
    }

}