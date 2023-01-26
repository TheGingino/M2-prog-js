class Kaart
{
    constructor()
    {
        this.c = document.getElementById("myCanvas");
        this.ctx = this.c.getContext("2d");
        this.newCord = 0
    }

    Achtergrond()
    {
        let ctx = this.ctx
        ctx.fillStyle = "#283474";
        ctx.fillRect(0,0,1200,800);

        ctx.fillStyle = "white";
        ctx.fillRect(25,20,1150,550);

        ctx.fillStyle = "green";
        ctx.fillRect(20,650,1150,125);
    }

    Dorp( x,y)
    {
        let g = this.ctx
        let randomgetal =  Math.random(0,1);

        g.strokeStyle = "black"

        //dak
        g.beginPath();
        g.fillStyle = "lime"
        g.moveTo(x+150,y+50);
        g.lineTo(x+100,y+150);
        g.lineTo(x+300,y+200);
        g.lineTo(x+350,y+100);
        g.closePath();
        g.stroke();
        g.fill();

        //muren
        g.beginPath();
        g.fillStyle = "firebrick"
        g.moveTo(x+300,y+200);
        g.lineTo(x+100,y+150);
        g.lineTo(x+100,y+250);
        g.lineTo(x+300,y+300);
        g.lineTo(x+400,y+250);
        g.lineTo(x+400,y+150);
        g.lineTo(x+350,y+100);
        g.lineTo(x+300,y+200);
        g.closePath();
        g.stroke();
        g.fill();

        //raam
        g.beginPath();
        if (randomgetal < 0.15)
        {
            g.fillStyle = "black"
        }
        else if (randomgetal > 0.3)
        {
            g.fillStyle = "yellow"
        }
        else
        {
            g.fillStyle = "black"
        }
        g.moveTo(x+250,y+215);
        g.lineTo(x+150,y+190);
        g.lineTo(x+150,y+240);
        g.lineTo(x+250,y+265);
        g.closePath();
        g.stroke();
        g.fill();
    }

    Boom(x, y) {
        let ctx = this.ctx
        // Draw the trunk
        ctx.fillStyle = "brown";
        ctx.fillRect(x-10, y, 20, 100);
      
        // Draw the tree
        ctx.beginPath();
        ctx.moveTo(x - 50, y+75);
        ctx.lineTo(x + 50, y+75);
        ctx.lineTo(x, y - 75);
        ctx.lineTo(x - 50, y+75);
        ctx.fillStyle = "green";
        ctx.strokeStyle = "black";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "blue"
        ctx.arc(y+50, x-90, 10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "red"
        ctx.arc(y+70, x-15, 10, 0, 2 * Math.PI);
        ctx.arc(y+35, x-50, 10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "lime"
        ctx.arc(y+50, x, 10, 0, 2 * Math.PI);
        ctx.arc(y+60, x-60, 10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "yellow"
        ctx.arc(y+70, x+10, 12, 0, 2 * Math.PI);
        ctx.arc(y+40, x-25, 10, 0, 2 * Math.PI);
        ctx.fill();
      
        // Draw the star
        ctx.beginPath();
        ctx.moveTo(x, y - 80);
        ctx.lineTo(x - 10, y - 70);
        ctx.lineTo(x, y - 60);
        ctx.lineTo(x + 10, y - 70);
        ctx.lineTo(x, y - 80);
        ctx.fillStyle = "Gold";
        ctx.fill();

        
    }
    Boom2(x,y){
        let ctx = this.ctx
        // Draw the trunk
        ctx.fillStyle = "brown";
        ctx.fillRect(x-10, y, 20, 100);
      
        // Draw the tree
        ctx.beginPath();
        ctx.moveTo(x - 50, y+75);
        ctx.lineTo(x + 50, y+75);
        ctx.lineTo(x, y - 75);
        ctx.lineTo(x - 50, y+75);
        ctx.fillStyle = "#006400";
        ctx.strokeStyle = "black";
        ctx.fill();
        ctx.stroke();

    }
    tekst()
    {
        let ctx = this.ctx

        ctx.fillStyle = "#D36363"

        ctx.font = "36px Christmas Bell";
        ctx.fillText("Merry Christmas   -from Santa!", 50, 100);
    }

    Frame()
    {
        let scope = this
        setInterval(function () { scope.KerstKaart() }, 350)
    }

    KerstKaart()
    {
        this.Achtergrond();
        this.Dorp(-40,100);
        this.Dorp(500,250);
        this.Dorp(500,250);
        this.Dorp(200,475);
        this.tekst(1000,800);
        this.Boom(450,400);
        this.Boom2(200,450);
        this.Boom2(900,150);
        this.Boom2(650,550);
        this.Boom2(800,160);
        this.Boom(1000,100);
        this.Boom(1100,200);
        this.Boom2(100,660);
        this.Boom2(150,680);
    }

}


let kaart = new Kaart;
kaart.Frame();
