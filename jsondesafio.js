// Definindo a classe Heroi
class Heroi {
  // Construtor da classe, que recebe nome, idade e tipo do herói
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar que exibe uma mensagem baseada no tipo do herói
  atacar() {
    let ataque;

    // Condicional para definir o tipo de ataque baseado no tipo do herói
    if (this.tipo === "mago") {
      ataque = "usou magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "usou espada";
    } else if (this.tipo === "monge") {
      ataque = "usou artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "usou shuriken";
    } else {
      ataque = "não tem um ataque definido";
    }

    // Exibindo a mensagem conforme o tipo e o ataque do herói
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando instâncias de diferentes tipos de heróis
let heroi1 = new Heroi("Aragorn", 30, "guerreiro");
let heroi2 = new Heroi("Merlin", 50, "mago");
let heroi3 = new Heroi("Kung", 25, "monge");
let heroi4 = new Heroi("Hattori", 28, "ninja");

// Chamando o método atacar para cada herói
heroi1.atacar();  // Exibe: "O guerreiro atacou usando espada"
heroi2.atacar();  // Exibe: "O mago atacou usando magia"
heroi3.atacar();  // Exibe: "O monge atacou usando artes marciais"
heroi4.atacar();  // Exibe: "O ninja atacou usando shuriken"
