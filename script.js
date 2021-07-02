
const cards = [
    {
      front: 'Anjing',
      back: 'Sebutkan Makanan Favorit Kamu',
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
      back: 'Status Relationship Kamu? (Single / In Relationship)',
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
      '#e09151'
    ]
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
    }
  }
});