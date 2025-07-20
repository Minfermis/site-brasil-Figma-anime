// 🌟 Animação do texto rotativo dentro da .roler
const roler = document.querySelector(".roler");
const words = Array.from(roler.children);
const inner = document.createElement('div');
let current = 0;

inner.style.transition = 'transform 0.5s ease-in-out';
inner.style.display = 'flex';
inner.style.flexDirection = 'column';

// Prepara palavras dentro do container rotativo
while (roler.firstChild) {
  inner.appendChild(roler.firstChild);
}
inner.appendChild(inner.children[0].cloneNode(true));
roler.appendChild(inner);

const total = inner.children.length;

setInterval(() => {
  current++;
  inner.style.transform = `translateY(-${current * 1.2}em)`;

  if (current === total - 1) {
    setTimeout(() => {
      inner.style.transition = 'none';
      inner.style.transform = 'translateY(0)';
      current = 0;
      setTimeout(() => {
        inner.style.transition = 'transform 0.5s ease-in-out';
      }, 50);
    }, 500);
  }
}, 1500);



// 🌍 Referências dos elementos principais
const textoPrincipal = document.querySelector('.headline');
const textoSecundario = document.getElementById('frase');
const botaoComecar = document.getElementById('btn-fechar-brasil');
const cortina = document.getElementById('cortina-magica');
const cortinaImagem = cortina.querySelector('img'); // Alvo da animação visual

// 🎬 Evento de clique que ativa a animação
botaoComecar.addEventListener('click', () => {
  const tl = gsap.timeline();

  // 🔹 Etapa 1: mostra a cortina e prepara o estado inicial da imagem
  tl.set(cortina, { display: 'block' });
  tl.set(cortinaImagem, {
    scale: 500,
    transformOrigin: 'center',
  });

  // 🔹 Etapa 2: some com os textos e o botão
  tl.to([textoPrincipal, textoSecundario, botaoComecar], {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: 'power2.in',
  });

  // 🔹 Etapa 3: encolhe a imagem do mapa centralmente
  tl.to(cortinaImagem, {
    duration: 2.5,
    scale: 1,
    ease: 'power2.inOut',
  }, '<'); // começa junto com a etapa anterior

  // 🔹 Etapa 4 (opcional): pulse leve no final
  tl.to(cortinaImagem, {
    duration: 0.5,
    scale: 1.05,
    repeat: 2,
    yoyo: true,
    ease: 'sine.inOut',
  });

  // 🔹 Etapa 5 (opcional): desaparecer suavemente
  tl.to(cortinaImagem, {
    duration: 1,
    opacity: 0,
    ease: 'power1.out',
  });
});
