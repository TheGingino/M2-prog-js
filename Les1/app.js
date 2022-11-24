class App
{
    runApplication()
    {
        let appNaam ="Test"
        let versienummer = 1.0
        let versiedatum = "11.24.22"
        let autheur ="Gino"
        let copyright = "Gino"
        let distributeur = "Gino"
        let darkmode = true
        
        
        
        

        console.log("Hello World",'\n',appNaam,'\n',versienummer,'\n',versiedatum,'\n',autheur,'\n',copyright,'\n',distributeur,'\n',darkmode);
    }
}

let app = new App();
app.runApplication();