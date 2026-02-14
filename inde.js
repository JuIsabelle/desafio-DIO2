class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'um ataque indefinido';
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

const heroi1 = new Heroi('Lucas', 19, 'mago');
const heroi2 = new Heroi('Leo', 87, 'guerreiro');
const heroi3 = new Heroi('ricardo', 30, 'monge');
const heroi4 = new Heroi('Joel', 25, 'ninja');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
