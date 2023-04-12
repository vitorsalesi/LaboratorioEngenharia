class Pessoa {
  constructor(nome, email, dataNasc, telefoneFixo, telefoneCelular) {
    this.nome = nome;
    this.email = email;
    this.dataNasc = dataNasc;
    this.telefoneFixo = telefoneFixo;
    this.telefoneCelular = telefoneCelular;
  }
}

class Professor extends Pessoa {
  constructor(
    nome,
    email,
    dataNasc,
    telefoneFixo,
    telefoneCelular,
    area,
    lattes
  ) {
    super(nome, email, dataNasc, telefoneFixo, telefoneCelular);
    this.area = area;
    this.lattes = lattes;
  }
}

class Aluno extends Pessoa {
  constructor(
    nome,
    email,
    dataNasc,
    telefoneFixo,
    telefoneCelular,
    matricula,
    curso
  ) {
    super(nome, email, dataNasc, telefoneFixo, telefoneCelular);
    this.matricula = matricula;
    this.curso = curso;
  }
}

document.addEventListener("DOMContentLoaded", () => {

  const professorInputs = document.querySelectorAll(
    '[name="area"], [name="lattes"]'
  );
  const alunoInputs = document.querySelectorAll('[name="curso"]');

  alunoInputs.forEach(
    (alunoInput) => (alunoInput.style.display = "none")
  );
  professorInputs.forEach(
    (professorInput) => (professorInput.style.display = "none")
  );

  const tipoUsuarioInput = document.getElementsByName("tipoUsuario");

  tipoUsuarioInput.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.value === "professor") {
        professorInputs.forEach(
          (professorInput) => (professorInput.style.display = "block")
        );
        alunoInputs.forEach(
          (alunoInput) => (alunoInput.style.display = "none")
        );
      } else if (input.value === "aluno") {
        professorInputs.forEach(
          (professorInput) => (professorInput.style.display = "none")
        );
        alunoInputs.forEach(
          (alunoInput) => (alunoInput.style.display = "block")
        );
      }
    });
  });


  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const tipoUsuario = form.elements.tipoUsuario.value;
    const nome = form.elements.nome.value;
    const email = form.elements.email.value;
    const dataNasc = form.elements.dataNasc.value;
    const telefoneFixo = form.elements.telefoneFixo.value;
    const telefoneCelular = form.elements.telefoneCelular.value;

    let usuario;

    if (tipoUsuario === "aluno") {
      const curso = form.elements.curso.value;
      usuario = new Aluno(nome, email, dataNasc, telefoneFixo, telefoneCelular, tipoUsuario, curso);
    } else if (tipoUsuario === "professor") {
      const matricula = form.elements.matricula.value;
      const area = form.elements.area.value;
      const lattes = form.elements.lattes.value;
      usuario = new Professor(nome, email, dataNasc, telefoneFixo, telefoneCelular, tipoUsuario, matricula, area, lattes);
    }
  });
});
  
  