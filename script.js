const events = [
  {
    id: 'birth',
    title: 'Birth in Calamba',
    date: 'June 19, 1861',
    img: 'images/JOSERIZAL.jpg',
    body: 'José Protacio Rizal was born in Calamba, Laguna, to Francisco Mercado and Teodora Alonso. His childhood in a loving, principled family shaped his values and outlook.'
  },
  {
    id: 'early-studies',
    title: 'Early Education',
    date: '1869 - 1877',
    img: 'images/TEODORA.jpg',
    body: 'Rizal first studied under his mother, Teodora, before attending a local school in Biñan. His early training in reading, writing, and religion laid the foundation of his intellectual growth.'
  },
  {
    id: 'ateneo',
    title: 'Ateneo de Manila',
    date: '1877 - 1882',
    img: 'images/JOSERIZAL.jpg',
    body: 'At Ateneo Municipal de Manila, Rizal excelled academically, graduating with high honors. He developed his artistic talents and deepened his Catholic faith.'
  },
  {
    id: 'ust',
    title: 'University of Santo Tomas',
    date: '1878 - 1882',
    img: 'images/JOSERIZAL.jpg',
    body: 'Rizal studied medicine at the University of Santo Tomas, but transferred to Spain due to discrimination against Filipinos. His frustrations at UST intensified his desire for reform.'
  },
  {
    id: 'madrid',
    title: 'Studies in Spain',
    date: '1882 - 1885',
    img: 'images/JOSERIZAL.jpg',
    body: 'In Madrid, Rizal earned degrees in Medicine and Philosophy at Universidad Central de Madrid. He also joined Filipino reformists and broadened his political views.'
  },
  {
    id: 'europe',
    title: 'Travels in Europe',
    date: '1885 - 1887',
    img: 'images/JOSERIZAL.jpg',
    body: 'Rizal continued studies in Paris and Heidelberg, honing his medical skills. His exposure to European culture, sciences, and nationalist movements influenced his ideas.'
  },
  {
    id: 'noli',
    title: 'Noli Me Tangere Published',
    date: '1887',
    img: 'images/JOSERIZAL.jpg',
    body: 'Rizal published his first novel Noli Me Tangere in Berlin. It exposed abuses of Spanish friars and sparked debate among Filipinos and Spaniards alike.'
  },
  {
    id: 'fili',
    title: 'El Filibusterismo Published',
    date: '1891',
    img: 'images/JOSERIZAL.jpg',
    body: 'In Ghent, Rizal published El Filibusterismo, a darker sequel to Noli. It reflected his growing frustration with colonial injustices and inspired revolutionaries.'
  },
  {
    id: 'dapitan',
    title: 'Exile in Dapitan',
    date: '1892 - 1896',
    img: 'images/JOSERIZAL.jpg',
    body: 'Deported to Dapitan, Rizal lived as a doctor, teacher, and community leader. He improved education, agriculture, and health, demonstrating his dedication to civic duty.'
  },
  {
    id: 'trial',
    title: 'Trial and Conviction',
    date: 'December 1896',
    img: 'images/JOSERIZAL.jpg',
    body: 'Arrested and accused of sedition, Rizal stood trial in Manila. Despite lack of evidence, he was convicted due to his writings and reformist influence.'
  },
  {
    id: 'execution',
    title: 'Execution at Bagumbayan',
    date: 'December 30, 1896',
    img: 'images/JOSERIZAL.jpg',
    body: 'Rizal was executed by firing squad at Bagumbayan (Luneta). His death shocked the nation and transformed him into a martyr whose sacrifice ignited the Philippine Revolution.'
  }
];

function buildTimeline(){
  const timeline = document.getElementById('timeline');
  const totalWidth = 2400;
  const startX = 80;
  const endX = totalWidth - 80;
  const step = (endX - startX) / (events.length - 1);
  events.forEach((ev, i) => {
    const x = startX + step * i;
    const marker = document.createElement('div');
    marker.className = 'marker';
    marker.style.left = x + 'px';
    marker.dataset.id = ev.id;
    marker.title = ev.title;
    marker.onclick = () => openModal(ev);
    const label = document.createElement('div');
    label.className = 'marker-label';
    label.style.left = x + 'px';
    label.innerHTML = '<strong>' + ev.date + '</strong><br>' + ev.title;
    timeline.appendChild(marker);
    timeline.appendChild(label);
  });
}

function openModal(ev){
  const modal = document.getElementById('modal');
  document.getElementById('modalTitle').innerHTML = ev.title;
  document.getElementById('modalDate').innerHTML = ev.date;
  document.getElementById('modalImg').src = ev.img;
  document.getElementById('modalBody').innerHTML = ev.body;
  modal.setAttribute('aria-hidden','false');
}

function closeModal(){
  const modal = document.getElementById('modal');
  modal.setAttribute('aria-hidden','true');
}

document.addEventListener('DOMContentLoaded', ()=>{
  buildTimeline();
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', (e)=>{
    if(e.target.id === 'modal') closeModal();
  });
});
