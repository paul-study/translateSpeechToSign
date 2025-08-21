// Sign Language Dictionary - Using actual fingerspelling images
// Images for fingerspelling are located in public/signs/

const SignDictionary = {
  // Common greetings and social words
  hello: {
    display: "👋 HELLO",
    description: "Wave hand with open palm"
  },
  hi: {
    display: "👋 HI", 
    description: "Quick wave"
  },
  goodbye: {
    display: "👋 BYE",
    description: "Wave farewell"
  },
  bye: {
    display: "👋 BYE",
    description: "Wave farewell"
  },
  please: {
    display: "🙏 PLEASE",
    description: "Flat hand on chest, circular motion"
  },
  "thank you": {
    display: "🙏 THANK-YOU",
    description: "Hand from lips outward"
  },
  thanks: {
    display: "🙏 THANKS",
    description: "Hand from lips outward"
  },
  sorry: {
    display: "✊ SORRY",
    description: "Fist on chest, circular motion"
  },
  
  // Personal pronouns
  i: {
    display: "👆 I",
    description: "Point to self"
  },
  me: {
    display: "👆 ME", 
    description: "Point to self"
  },
  you: {
    display: "👉 YOU",
    description: "Point to person"
  },
  we: {
    display: "👥 WE",
    description: "Point to self then sweep to include others"
  },
  
  // Family members
  mother: {
    display: "👩 MOTHER",
    description: "Open hand touches chin"
  },
  mom: {
    display: "👩 MOM",
    description: "Open hand touches chin"
  },
  father: {
    display: "👨 FATHER", 
    description: "Open hand touches forehead"
  },
  dad: {
    display: "👨 DAD",
    description: "Open hand touches forehead"
  },
  sister: {
    display: "👭 SISTER",
    description: "Thumbs on chin, then index fingers together"
  },
  brother: {
    display: "👬 BROTHER",
    description: "Thumbs on forehead, then index fingers together"
  },
  family: {
    display: "👨‍👩‍👧‍👦 FAMILY",
    description: "F handshapes in circle"
  },
  
  // Common verbs
  go: {
    display: "➡️ GO",
    description: "Index fingers point forward and move away"
  },
  come: {
    display: "👋 COME",
    description: "Beckoning motion with hand"
  },
  eat: {
    display: "🍽️ EAT",
    description: "Fingers to mouth"
  },
  drink: {
    display: "🥤 DRINK", 
    description: "C hand to mouth, tipping motion"
  },
  sleep: {
    display: "😴 SLEEP",
    description: "Hand beside head, closing eyes"
  },
  work: {
    display: "💼 WORK",
    description: "S hands, one hits the other"
  },
  play: {
    display: "🎮 PLAY",
    description: "Y hands shake back and forth"
  },
  learn: {
    display: "📚 LEARN",
    description: "Fingers grab from palm, move to forehead"
  },
  teach: {
    display: "👨‍🏫 TEACH",
    description: "Flat hands at temples, move forward"
  },
  
  // Common nouns
  house: {
    display: "🏠 HOUSE",
    description: "Flat hands form roof and walls"
  },
  home: {
    display: "🏠 HOME",
    description: "Fingers to mouth, then to cheek"
  },
  school: {
    display: "🏫 SCHOOL",
    description: "Flat hands clap twice"
  },
  car: {
    display: "🚗 CAR",
    description: "Hands grip steering wheel"
  },
  food: {
    display: "🍎 FOOD",
    description: "Fingers to mouth repeatedly"
  },
  water: {
    display: "💧 WATER",
    description: "W handshape at mouth"
  },
  book: {
    display: "📖 BOOK",
    description: "Palms together, open like book"
  },
  computer: {
    display: "💻 COMPUTER",
    description: "C handshape on forearm"
  },
  phone: {
    display: "📱 PHONE",
    description: "Y handshape at ear"
  },
  
  // Colors
  red: {
    display: "🔴 RED",
    description: "Index finger on lips, downward"
  },
  blue: {
    display: "🔵 BLUE", 
    description: "B handshape shakes"
  },
  green: {
    display: "🟢 GREEN",
    description: "G handshape shakes"
  },
  yellow: {
    display: "🟡 YELLOW",
    description: "Y handshape shakes"
  },
  black: {
    display: "⚫ BLACK",
    description: "Index finger across forehead"
  },
  white: {
    display: "⚪ WHITE",
    description: "Flat hand on chest, pull away"
  },
  
  // Numbers (1-10)
  one: {
    display: "1️⃣ ONE",
    description: "Index finger up"
  },
  two: {
    display: "2️⃣ TWO", 
    description: "Index and middle finger up"
  },
  three: {
    display: "3️⃣ THREE",
    description: "Thumb, index, and middle finger up"
  },
  four: {
    display: "4️⃣ FOUR",
    description: "Four fingers up, thumb tucked"
  },
  five: {
    display: "5️⃣ FIVE",
    description: "All five fingers up"
  },
  six: {
    display: "6️⃣ SIX",
    description: "Thumb and pinky up"
  },
  seven: {
    display: "7️⃣ SEVEN",
    description: "Thumb and index finger up"
  },
  eight: {
    display: "8️⃣ EIGHT",
    description: "Thumb, index, and middle finger up"
  },
  nine: {
    display: "9️⃣ NINE",
    description: "Thumb and all fingers except index up"
  },
  ten: {
    display: "🔟 TEN",
    description: "Thumb up, shaking"
  },
  
  // Common adjectives
  good: {
    display: "👍 GOOD",
    description: "Flat hand at mouth, move to other palm"
  },
  bad: {
    display: "👎 BAD",
    description: "Flat hand at mouth, flip down"
  },
  big: {
    display: "📏 BIG",
    description: "L handshapes move apart"
  },
  small: {
    display: "🤏 SMALL",
    description: "Flat hands close together"
  },
  hot: {
    display: "🔥 HOT",
    description: "Claw hand at mouth, quickly away"
  },
  cold: {
    display: "🧊 COLD",
    description: "S handshapes shake (shivering)"
  },
  happy: {
    display: "😊 HAPPY",
    description: "Flat hands brush up chest repeatedly"
  },
  sad: {
    display: "😢 SAD",
    description: "Open hands slide down face"
  },
  
  // Question words
  what: {
    display: "❓ WHAT",
    description: "Index finger shakes side to side"
  },
  where: {
    display: "📍 WHERE",
    description: "Index finger points and shakes"
  },
  when: {
    display: "⏰ WHEN",
    description: "Index finger circles other index finger"
  },
  why: {
    display: "🤔 WHY",
    description: "Middle finger touches forehead, then Y shape"
  },
  how: {
    display: "🤷 HOW",
    description: "Curved hands, knuckles together, turn up"
  },
  who: {
    display: "👤 WHO",
    description: "Index finger circles lips"
  },
  
  // Time related
  today: {
    display: "📅 TODAY",
    description: "NOW + DAY signs"
  },
  tomorrow: {
    display: "📅 TOMORROW",
    description: "A handshape on cheek, forward"
  },
  yesterday: {
    display: "📅 YESTERDAY",
    description: "A handshape on cheek, backward"
  },
  time: {
    display: "⏰ TIME",
    description: "Index finger taps wrist"
  },
  
  // Basic emotions and states
  love: {
    display: "❤️ LOVE",
    description: "S handshapes cross over heart"
  },
  like: {
    display: "👍 LIKE",
    description: "Thumb and middle finger from chest"
  },
  want: {
    display: "🙋 WANT",
    description: "Claw hands pull toward body"
  },
  need: {
    display: "⚡ NEED",
    description: "X handshape moves down forcefully"
  },
  help: {
    display: "🤝 HELP",
    description: "S hand on flat palm, lift up"
  },
  
  // Fingerspelling with actual images
  fingerspelling: {
    a: "/signs/a.jpg",
    b: "/signs/b.jpg", 
    c: "/signs/c.jpg",
    d: "/signs/d.jpg",
    e: "/signs/e.jpg",
    f: "/signs/f.jpg",
    g: "/signs/g.jpg",
    h: "/signs/h.jpg",
    i: "/signs/i.jpg",
    j: "/signs/j.jpg",
    k: "/signs/k.jpg",
    l: "/signs/l.jpg",
    m: "/signs/m.jpg",
    n: "/signs/n.jpg",
    o: "/signs/o.jpg",
    p: "/signs/p.jpg",
    q: "/signs/q.jpg",
    r: "/signs/r.jpg",
    s: "/signs/s.jpg",
    t: "/signs/t.jpg",
    u: "/signs/u.jpg",
    v: "/signs/v.jpg",
    w: "/signs/w.jpg",
    x: "/signs/x.jpg",
    y: "/signs/y.jpg",
    z: "/signs/z.jpg"
  }
};

export default SignDictionary;
