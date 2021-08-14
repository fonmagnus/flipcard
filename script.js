
const cards = [
    {
      front: 'Anjing',
      back: 'Tirukan suara hewan kesukaanmu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22214-dog-face-icon.png'
    },
    {
      front: 'Kucing',
      back: 'Sekolah / Bekerja / Kuliah dimana kamu?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22220-cat-face-icon.png'
    },
    {
      front: 'Singa',
      back: 'Status Relationship Kamu?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22222-lion-face-icon.png'
    },
    {
      front: 'Macan',
      back: 'Sebutkan kriteria pacar idaman kamu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22223-tiger-face-icon.png'
    },
    {
      front: 'Monyet',
      back: 'Apa sih harapan terbesar dalam hidup kamu?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22211-monkey-face-icon.png'
    },
    {
      front: 'Kuda',
      back: 'Apa passion kamu?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22226-horse-face-icon.png'
    },
    {
      front: 'Sapi',
      back: 'WILDCARD',
      extra: 'Kamu boleh menanyakan apapun pada temanmu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22231-cow-face-icon.png'
    },
    {
      front: 'Babi',
      back: 'TRAP',
      extra: 'Salah seorang mentor akan menanyai kamu.',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22235-pig-face-icon.png'
    },
    {
      front: 'Hamster',
      back: 'Ayat Alkitab yang paling menjadi pegangan kamu?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22252-hamster-face-icon.png'
    },
    {
      front: 'Panda',
      back: 'Siapa tokoh idola kamu?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22261-panda-face-icon.png'
    },
    {
      front: 'Kelinci',
      back: '3 sifat dalam dirimu yang paling khas',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22254-rabbit-icon.png'
    },
    {
      front: 'Koala',
      back: '3 kekurangan dalam dirimu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22260-koala-icon.png'
    },
    {
      front: 'Tikus',
      back: '3 kelebihan dalam dirimu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22250-mouse-icon.png'
    },
    {
      front: 'Gajah',
      back: 'Hal yang paling kamu takuti',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22246-elephant-icon.png'
    },
    {
      front: 'Badak',
      back: 'Teman yang baik itu teman yang seperti apa?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22247-rhinoceros-icon.png'
    },
    {
      front: 'Domba',
      back: 'Genre film kesukaan kamu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22240-ewe-icon.png'
    },
    {
      front: 'Zebra',
      back: 'WILDCARD',
      extra: 'Kamu boleh menanyakan apapun pada temanmu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22229-zebra-icon.png'
    },
    {
      front: 'Ayam',
      back: 'TRAP',
      extra: 'Salah seorang mentor akan menanyai kamu.',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22266-chicken-icon.png'
    },
    {
      front: 'Buaya',
      back: 'Hal apa yang menjadi struggle dalam hidup kamu sekarang?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22282-crocodile-icon.png'
    },
    {
      front: 'Lumba Lumba',
      back: 'Jika kamu diberi kesempatan untuk kembali ke masa lalu, hal apa yang mau kamu ubah?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22292-dolphin-icon.png'
    },
    {
      front: 'Kepiting',
      back: 'Siapakah tokoh idola kamu di dalam Alkitab? Kenapa?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22299-crab-icon.png'
    },
    {
      front: 'Gurita',
      back: 'WILDCARD',
      extra: 'Kamu boleh menanyakan apapun pada temanmu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22297-octopus-icon.png'
    },
    {
      front: 'Kupu Kupu',
      back: 'Harapan dalam hidup kamu yang belum terwujud?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22304-butterfly-icon.png'
    },
    {
      front: 'Lebah',
      back: 'Bagaimana kamu memanage hidupmu selama pandemi ini?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22307-honeybee-icon.png'
    },
    {
      front: 'Hiu',
      back: 'Ceritakan salah satu suka / duka yang berkesan selama pelayanan',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22296-shark-icon.png'
    },
    {
      front: 'Naga',
      back: 'TRAP',
      flipped: false,
      extra: 'Salah seorang mentor akan menanyai kamu.',
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22287-dragon-icon.png'
    },
    {
      front: 'Jerapah',
      back: 'TRAP',
      flipped: false,
      extra: 'Salah seorang mentor akan menanyai kamu.',
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22245-giraffe-icon.png'
    },
    {
      front: 'Penguin',
      back: 'TRAP',
      flipped: false,
      extra: 'Salah seorang mentor akan menanyai kamu.',
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22272-penguin-icon.png'
    },
    {
      front: 'Landak',
      back: 'TRAP',
      flipped: false,
      extra: 'Salah seorang mentor akan menanyai kamu.',
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22257-hedgehog-icon.png'
    },
    {
      front: 'Rubah',
      back: 'TRAP',
      flipped: false,
      extra: 'Salah seorang mentor akan menanyai kamu.',
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22218-fox-face-icon.png'
    },
]; 

new Vue ({
  el: '#flashcard-app',
  data: {
    cards: cards,
    newFront: '',
    newBack: '',
    error: false,
    bgColor: [
      '#e65f51',
      '#a17de9',
      '#feca34',
      '#51aae5',
      '#88e789',
      '#e09151',
      '#ef565f',
      '#fbc41b',
      '#09b490',
      '#3cc2d9'
    ]
  },
  created() {
    this.cards = this.shuffle(this.cards);
    cards.forEach(card => {
      card['color'] = this.bgColor[Math.floor(Math.random() * (this.bgColor.length + 1))];
    })
  },
  methods: {
    toggleCard: function(card) {
      card.flipped = !card.flipped;
    },
    addNew: function() {
      if(!this.newFront || !this.newBack) {
        this.error = true;
      } else {
        this.cards.push({
          front: this.newFront,
          back: this.newBack,
          flipped: false
        });
        // set the field empty
        this.newFront = '';
        this.newBack = '';
        // Make the warning go away
        this.error= false;
      }
    },
    shuffle: function(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      console.log(a);
      return a;
    }
  }
});