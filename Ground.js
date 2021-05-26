class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = b.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      w.add(wo, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
