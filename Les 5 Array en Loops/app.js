class App{

    Run()
    {
        let arr = ["Breaking Benjamin", "ImJakeHill", "Billy Joel", 
        "New West", "Cody Simpson"];
        console.log(arr);
        
        let headers = document.getElementsByClassName("ja");

        headers[0] .innerHTML = "Breaking Benjamin";

        headers[0].innerHTML = arr[0];
        headers[1].innerHTML = arr[1];
        headers[2].innerHTML = arr[2];
        headers[3].innerHTML = arr[3];
        headers[4].innerHTML = arr[4];

        for (let i = 0; i < headers.length; i++) 
        {
            headers[i].innerHTML = arr[i];
            
        }
        
    }


}




let app = new App();
app.Run();
