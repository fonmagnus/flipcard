
const cards = [
    {
      front: 'Anjing',
      back: 'Tirukan suara hewan kesukaanmu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22214-dog-face-icon.png'
    },
    {
      front: 'Kucing',
      back: 'Tunjukkan senyum termanismu 🙂',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22220-cat-face-icon.png'
    },
    {
      front: 'Singa',
      back: 'Katakan “Aku Suka Sekolah Minggu” dengan mulut tertutup',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22222-lion-face-icon.png'
    },
    {
      front: 'Macan',
      back: 'Peragakan hobimu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22223-tiger-face-icon.png'
    },
    {
      front: 'Monyet',
      back: 'Ambil barang yang warnanya sama dengan warna favoritmu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22211-monkey-face-icon.png'
    },
    {
      front: 'Kuda',
      back: 'Sebutkan nama 3 jenis bunga',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22226-horse-face-icon.png'
    },
    {
      front: 'Sapi',
      back: 'Eja nama panggilanmu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22231-cow-face-icon.png'
    },
    {
      front: 'Babi',
      back: 'Buatlah tanda salib',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22235-pig-face-icon.png'
    },
    {
      front: 'Hamster',
      back: 'Peragakan ekspresi yang tidak kamu sukai',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22252-hamster-face-icon.png'
    },
    {
      front: 'Panda',
      back: 'Tirukan gerakan hewan favoritmu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22261-panda-face-icon.png'
    },
    {
      front: 'Kelinci',
      back: 'Ambil mainan favoritmu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22254-rabbit-icon.png'
    },
    {
      front: 'Koala',
      back: 'Tunjukkan pose & ekspresi foto terbaikmu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22260-koala-icon.png'
    },
    {
      front: 'Tikus',
      back: 'Apa makanan favoritmu?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22250-mouse-icon.png'
    },
    {
      front: 'Gajah',
      back: 'Tunjukkan mata, hidung, mulut, dan telingamu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22246-elephant-icon.png'
    },
    {
      front: 'Badak',
      back: 'Tunjukkan angka dua dengan jarimu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22247-rhinoceros-icon.png'
    },
    {
      front: 'Domba',
      back: 'Peragakan cita-citamu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22240-ewe-icon.png'
    },
    {
      front: 'Zebra',
      back: 'Beri tahu kami tempat dan tanggal lahirmu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22229-zebra-icon.png'
    },
    {
      front: 'Ayam',
      back: 'Hal apa yang paling kamu takuti?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/512/22266-chicken-icon.png'
    },
    {
      front: 'Buaya',
      back: 'Ada berapa orang di rumahmu?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22282-crocodile-icon.png'
    },
    {
      front: 'Lumba Lumba',
      back: 'Ambil satu pensil warna yang menjadi warna favoritmu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22292-dolphin-icon.png'
    },
    {
      front: 'Kepiting',
      back: 'Apa minuman favoritmu?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22299-crab-icon.png'
    },
    {
      front: 'Gurita',
      back: 'Sebutkan 3 nama hewan yang bisa terbang',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22297-octopus-icon.png'
    },
    {
      front: 'Kupu Kupu',
      back: 'Senandungkan lagu favoritmu',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22304-butterfly-icon.png'
    },
    {
      front: 'Lebah',
      back: 'Tiru & bunyikan suara kereta api “tutt tutt tutt”',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22307-honeybee-icon.png'
    },
    {
      front: 'Hiu',
      back: 'Sebutkan nama 3 hewan yang hidup di air',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22296-shark-icon.png'
    },
    {
      front: 'Naga',
      back: 'Apa film favoritmu?',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22287-dragon-icon.png'
    },
    {
      front: 'Jerapah',
      back: 'Nyanyikan satu lagu sekolah minggu yang kamu ketahui',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22245-giraffe-icon.png'
    },
    {
      front: 'Penguin',
      back: 'Sebutkan tiga nama kakak pendamping BIA HSPMTB',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22272-penguin-icon.png'
    },
    {
      front: 'Landak',
      back: 'Katakan “Aku Siap Sekolah Minggu” dengan semangat',
      flipped: false,
      image: 'https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22257-hedgehog-icon.png'
    },
    {
      front: 'Rubah',
      back: 'Lakukan tepuk Yesus',
      flipped: false,
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