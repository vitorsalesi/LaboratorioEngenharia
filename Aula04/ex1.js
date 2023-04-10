function tipoCadastroOnChange() {
    let tipoCadastro = document.querySelector('input[name="tipoCadastro"]:checked').value;
    let camposExtras = document.getElementById("camposExtras");
    camposExtras.innerHTML = "";
  
    if (tipoCadastro === "aluno") {
      let cursoLabel = document.createElement("label");
      cursoLabel.setAttribute("for", "curso");
      cursoLabel.innerHTML = "Curso:";
      let cursoInput = document.createElement("input");
      cursoInput.setAttribute("type", "text");
      cursoInput.setAttribute("id", "curso");
      cursoInput.setAttribute("name", "curso");
      cursoInput.placeholder = "Digite seu curso";
      camposExtras.appendChild(cursoLabel);
      camposExtras.appendChild(cursoInput);
  
      let matriculaLabel = document.createElement("label");
      matriculaLabel.setAttribute("for", "matricula");
      matriculaLabel.innerHTML = "Matrícula:";
      let matriculaInput = document.createElement("input");
      matriculaInput.setAttribute("type", "text");
      matriculaInput.setAttribute("id", "matricula");
      matriculaInput.setAttribute("name", "matricula");
      matriculaInput.placeholder ="Digite sua matrícula";
      camposExtras.appendChild(matriculaLabel);
      camposExtras.appendChild(matriculaInput);
    }
  
    if (tipoCadastro === "professor") {
        let areaLabel = document.createElement("label");
        areaLabel.setAttribute("for", "areaAtuacao");
        areaLabel.innerHTML = "Área:";
        let areaInput = document.createElement("input");
        areaInput.setAttribute("type", "text");
        areaInput.setAttribute("id", "areaAtuação");
        areaInput.setAttribute("name", "areaAtuacao");
        areaInput.placeholder ="Digite sua área de atuação";
        camposExtras.appendChild(areaLabel);
        camposExtras.appendChild(areaInput);
    
        let matriculaLabel = document.createElement("label");
        matriculaLabel.setAttribute("for", "matricula");
        matriculaLabel.innerHTML = "Matrícula:";
        let matriculaInput = document.createElement("input");
        matriculaInput.setAttribute("type", "text");
        matriculaInput.setAttribute("id", "matricula");
        matriculaInput.setAttribute("name", "matricula");
        matriculaInput.placeholder ="Digite sua matrícula";
        camposExtras.appendChild(matriculaLabel);
        camposExtras.appendChild(matriculaInput);

        let lattesLabel = document.createElement("label");
        lattesLabel.setAttribute("for", "lattes");
        lattesLabel.innerHTML = "Lattes:";
        let lattesInput = document.createElement("input");
        lattesInput.setAttribute("type", "text");
        lattesInput.setAttribute("id", "lattes");
        lattesInput.setAttribute("name", "lattes");
        lattesInput.placeholder ="Digite aqui o endereço para seu Lattes";
        camposExtras.appendChild(lattesLabel);
        camposExtras.appendChild(lattesInput);
    }
  }
  