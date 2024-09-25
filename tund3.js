const firstName = "Karl";
const lastName = "Ventsel";
    console.log("Autoriks on " + firstName + " " + lastName);

    function dateEt() {
      const dayNamesEt = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
      const monthNamesEt = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
      let timeNow = new Date();
      let dayNow = timeNow.getDay();
      let dateNow = timeNow.getDate();
      let monthNow = timeNow.getMonth();
      let yearNow = timeNow.getFullYear();
      let dateNowEt = dayNamesEt[dayNow] + ", " + dateNow + " " + monthNamesEt[monthNow] + " " + yearNow;

      let tervitus;
      if (dayNamesEt[dayNow] === "laupäev" || dayNamesEt[dayNow] === "pühapäev") {
        tervitus = "Praegu on nädalavahetus, lae akud täis endal!";
      } else {
        tervitus = "Argipäev on, mis passid?";
      }

      console.log(tervitus); 
      return dateNowEt;
    }

    let dateToOutput = dateEt();
    console.log("Täna on " + dateToOutput);


    function aeg() {
      let timeNow = new Date();
      let hours = timeNow.getHours();
      let minutes = timeNow.getMinutes();
      let seconds = timeNow.getSeconds();
      let kell = hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

      let tervitus;
      if (hours < 9) {
        tervitus = "Tere hommikust! Aeg saia teenida.";
      } else if (hours < 19) {
        tervitus = "Töötame, töötame!";
      } else {
        tervitus = "Lõbutsen ja chillan!";
      }

      document.getElementById("kiri").innerHTML = tervitus;
      return kell;
    }

    let timeToOutput = aeg();
    console.log("Kell on: " + timeToOutput);