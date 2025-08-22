// Sign Language Dictionary - Using actual fingerspelling images
// Images for fingerspelling are located in public/signs/

const SignDictionary = {
  // Common greetings and social words
  hello: {
    display: "👋 HELLO",
    description: "Wave hand with open palm",
    video: "/signs/nzVideo/hello.mp4"
  },
  hi: {
    display: "👋 HI", 
    description: "Quick wave",
    video: "/signs/nzVideo/hello.mp4"
  },
  goodbye: {
    display: "👋 BYE",
    description: "Wave farewell",
    video: "/signs/nzVideo/goodbye.mp4"
  },
  bye: {
    display: "👋 BYE",
    description: "Wave farewell",
    video: "/signs/nzVideo/bye.mp4"
  },
  please: {
    display: "🙏 PLEASE",
    description: "Flat hand on chest, circular motion",
    video: "/signs/nzVideo/please.mp4"
  },
  "thank you": {
    display: "🙏 THANK-YOU",
    description: "Hand from lips outward",
    video: "/signs/nzVideo/thanks.mp4"
  },
  thanks: {
    display: "🙏 THANKS",
    description: "Hand from lips outward",
    video: "/signs/nzVideo/thanks.mp4"
  },
  sorry: {
    display: "✊ SORRY",
    description: "Fist on chest, circular motion",
    video: "/signs/nzVideo/sorry.mp4"
  },
  
  // Personal pronouns
  i: {
    display: "👆 I",
    description: "Point to self",
    video: "/signs/nzVideo/i.mp4"
  },
  me: {
    display: "👆 ME", 
    description: "Point to self",
    video: "/signs/nzVideo/me.mp4"
  },
  you: {
    display: "👉 YOU",
    description: "Point to person",
    video: "/signs/nzVideo/you.mp4"
  },
  we: {
    display: "👥 WE",
    description: "Point to self then sweep to include others",
    video: "/signs/nzVideo/we.mp4"
  },
  they: {
    display: "👥 THEY",
    description: "Point to others",
    video: "/signs/nzVideo/they.mp4"
  },
  other: {
    display: "👉 OTHER",
    description: "Point to alternative",
    video: "/signs/nzVideo/other.mp4"
  },
  another: {
    display: "➕ ANOTHER",
    description: "One more/different one",
    video: "/signs/nzVideo/another.mp4"
  },
  
  // Family members
  mother: {
    display: "👩 MOTHER",
    description: "Open hand touches chin",
    video: "/signs/nzVideo/mother.mp4"
  },
  mom: {
    display: "👩 MOM",
    description: "Open hand touches chin",
    video: "/signs/nzVideo/mother.mp4"
  },
  father: {
    display: "👨 FATHER", 
    description: "Open hand touches forehead",
    video: "/signs/nzVideo/father.mp4"
  },
  dad: {
    display: "👨 DAD",
    description: "Open hand touches forehead",
    video: "/signs/nzVideo/dad.mp4"
  },
  sister: {
    display: "👭 SISTER",
    description: "Thumbs on chin, then index fingers together",
    video: "/signs/nzVideo/sister.mp4"
  },
  brother: {
    display: "👬 BROTHER",
    description: "Thumbs on forehead, then index fingers together",
    video: "/signs/nzVideo/brother.mp4"
  },
  
  // Common verbs
  go: {
    display: "➡️ GO",
    description: "Index fingers point forward and move away",
    video: "/signs/nzVideo/go.mp4"
  },
  come: {
    display: "👋 COME",
    description: "Beckoning motion with hand",
    video: "/signs/nzVideo/come.mp4"
  },
  eat: {
    display: "🍽️ EAT",
    description: "Fingers to mouth",
    video: "/signs/nzVideo/eat.mp4"
  },
  drink: {
    display: "🥤 DRINK", 
    description: "C hand to mouth, tipping motion",
    video: "/signs/nzVideo/drink.mp4"
  },
  sleep: {
    display: "😴 SLEEP",
    description: "Hand beside head, closing eyes",
    video: "/signs/nzVideo/sleep.mp4"
  },
  play: {
    display: "🎮 PLAY",
    description: "Y hands shake back and forth",
    video: "/signs/nzVideo/play.mp4"
  },
  learn: {
    display: "📚 LEARN",
    description: "Fingers grab from palm, move to forehead",
    video: "/signs/nzVideo/learn.mp4"
  },
  teach: {
    display: "👨‍🏫 TEACH",
    description: "Flat hands at temples, move forward",
    video: "/signs/nzVideo/teach.mp4"
  },
  walk: {
    display: "🚶 WALK",
    description: "Alternating hands moving forward",
    video: "/signs/nzVideo/walk.mp4"
  },
  study: {
    display: "📖 STUDY",
    description: "Learning/reading gesture",
    video: "/signs/nzVideo/study.mp4"
  },
  
  // Common nouns
  house: {
    display: "🏠 HOUSE",
    description: "Flat hands form roof and walls",
    video: "/signs/nzVideo/house.mp4"
  },
  home: {
    display: "🏠 HOME",
    description: "Fingers to mouth, then to cheek",
    video: "/signs/nzVideo/home.mp4"
  },
  school: {
    display: "🏫 SCHOOL",
    description: "Flat hands clap twice",
    video: "/signs/nzVideo/school.mp4"
  },
  car: {
    display: "🚗 CAR",
    description: "Hands grip steering wheel",
    video: "/signs/nzVideo/car.mp4"
  },
  bike: {
    display: "🚲 BIKE",
    description: "Pedaling motion",
    video: "/signs/nzVideo/bike.mp4"
  },
  room: {
    display: "🏠 ROOM",
    description: "Space/area gesture",
    video: "/signs/nzVideo/room.mp4"
  },
  "dining room": {
    display: "🍽️ DINING-ROOM",
    description: "Eating space",
    video: "/signs/nzVideo/dining room.mp4"
  },
  space: {
    display: "🌌 SPACE",
    description: "Area/room",
    video: "/signs/nzVideo/space.mp4"
  },
  class: {
    display: "🎓 CLASS",
    description: "Group learning",
    video: "/signs/nzVideo/class.mp4"
  },
  food: {
    display: "🍎 FOOD",
    description: "Fingers to mouth repeatedly",
    video: "/signs/nzVideo/food.mp4"
  },
  furniture: {
    display: "🪑 FURNITURE",
    description: "Household items",
    video: "/signs/nzVideo/furniture.mp4"
  },
  tie: {
    display: "👔 TIE",
    description: "Necktie accessory",
    video: "/signs/nzVideo/tie.mp4"
  },
  word: {
    display: "📝 WORD",
    description: "Single vocabulary item",
    video: "/signs/nzVideo/word.mp4"
  },
  words: {
    display: "📝 WORDS",
    description: "Multiple vocabulary items",
    video: "/signs/nzVideo/words.mp4"
  },
  computer: {
    display: "💻 COMPUTER",
    description: "C handshape on forearm",
    video: "/signs/nzVideo/computer.mp4"
  },
  phone: {
    display: "📱 PHONE",
    description: "Y handshape at ear",
    video: "/signs/nzVideo/phone.mp4"
  },
  telephone: {
    display: "☎️ TELEPHONE",
    description: "Hand to ear",
    video: "/signs/nzVideo/telephone.mp4"
  },
  
  // Colors
  red: {
    display: "🔴 RED",
    description: "Index finger on lips, downward",
    video: "/signs/nzVideo/red.mp4"
  },
  blue: {
    display: "🔵 BLUE", 
    description: "B handshape shakes",
    video: "/signs/nzVideo/blue.mp4"
  },
  green: {
    display: "🟢 GREEN",
    description: "G handshape shakes",
    video: "/signs/nzVideo/green.mp4"
  },
  yellow: {
    display: "🟡 YELLOW",
    description: "Y handshape shakes",
    video: "/signs/nzVideo/yellow.mp4"
  },
  black: {
    display: "⚫ BLACK",
    description: "Index finger across forehead",
    video: "/signs/nzVideo/black.mp4"
  },
  white: {
    display: "⚪ WHITE",
    description: "Flat hand on chest, pull away",
    video: "/signs/nzVideo/white.mp4"
  },
  colour: {
    display: "🌈 COLOUR",
    description: "Fingers wiggle at chin",
    video: "/signs/nzVideo/colour.mp4"
  },
  
  // Numbers (1-10)
  zero: {
    display: "0️⃣ ZERO",
    description: "O handshape",
    video: "/signs/nzVideo/zero.mp4"
  },
  one: {
    display: "1️⃣ ONE",
    description: "Index finger up",
    video: "/signs/nzVideo/one.mp4"
  },
  two: {
    display: "2️⃣ TWO", 
    description: "Index and middle finger up",
    video: "/signs/nzVideo/two.mp4"
  },
  three: {
    display: "3️⃣ THREE",
    description: "Thumb, index, and middle finger up",
    video: "/signs/nzVideo/three.mp4"
  },
  four: {
    display: "4️⃣ FOUR",
    description: "Four fingers up, thumb tucked",
    video: "/signs/nzVideo/four.mp4"
  },
  five: {
    display: "5️⃣ FIVE",
    description: "All five fingers up",
    video: "/signs/nzVideo/five.mp4"
  },
  six: {
    display: "6️⃣ SIX",
    description: "Thumb and pinky up",
    video: "/signs/nzVideo/six.mp4"
  },
  seven: {
    display: "7️⃣ SEVEN",
    description: "Thumb and index finger up",
    video: "/signs/nzVideo/seven.mp4"
  },
  eight: {
    display: "8️⃣ EIGHT",
    description: "Thumb, index, and middle finger up",
    video: "/signs/nzVideo/eight.mp4"
  },
  nine: {
    display: "9️⃣ NINE",
    description: "Thumb and all fingers except index up",
    video: "/signs/nzVideo/nine.mp4"
  },
  ten: {
    display: "🔟 TEN",
    description: "Thumb up, shaking",
    video: "/signs/nzVideo/ten.mp4"
  },
  twenty: {
    display: "2️⃣0️⃣ TWENTY",
    description: "Two then zero",
    video: "/signs/nzVideo/twenty.mp4"
  },
  thirty: {
    display: "3️⃣0️⃣ THIRTY",
    description: "Three then zero",
    video: "/signs/nzVideo/thirty.mp4"
  },
  
  // Common adjectives
  good: {
    display: "👍 GOOD",
    description: "Flat hand at mouth, move to other palm",
    video: "/signs/nzVideo/good.mp4"
  },
  bad: {
    display: "👎 BAD",
    description: "Flat hand at mouth, flip down",
    video: "/signs/nzVideo/bad.mp4"
  },
  big: {
    display: "📏 BIG",
    description: "L handshapes move apart",
    video: "/signs/nzVideo/big.mp4"
  },
  small: {
    display: "🤏 SMALL",
    description: "Flat hands close together",
    video: "/signs/nzVideo/small.mp4"
  },
  hot: {
    display: "🔥 HOT",
    description: "Claw hand at mouth, quickly away",
    video: "/signs/nzVideo/hot.mp4"
  },
  cold: {
    display: "🧊 COLD",
    description: "S handshapes shake (shivering)",
    video: "/signs/nzVideo/cold.mp4"
  },
  happy: {
    display: "😊 HAPPY",
    description: "Flat hands brush up chest repeatedly",
    video: "/signs/nzVideo/happy.mp4"
  },
  fine: {
    display: "👌 FINE",
    description: "OK handshape",
    video: "/signs/nzVideo/fine.mp4"
  },
  great: {
    display: "⭐ GREAT",
    description: "Excellent gesture",
    video: "/signs/nzVideo/great.mp4"
  },
  excellent: {
    display: "🌟 EXCELLENT",
    description: "Outstanding gesture",
    video: "/signs/nzVideo/excellent.mp4"
  },
  tired: {
    display: "😴 TIRED",
    description: "Exhausted feeling",
    video: "/signs/nzVideo/tired.mp4"
  },
  sleepy: {
    display: "😪 SLEEPY",
    description: "Need to sleep",
    video: "/signs/nzVideo/sleepy.mp4"
  },
  weak: {
    display: "💪❌ WEAK",
    description: "Lacking strength",
    video: "/signs/nzVideo/weak.mp4"
  },
  posh: {
    display: "💎 POSH",
    description: "Fancy/upper class",
    video: "/signs/nzVideo/posh.mp4"
  },
  // People and groups
  people: {
    display: "👥 PEOPLE",
    description: "Multiple individuals",
    video: "/signs/nzVideo/people.mp4"
  },
  group: {
    display: "👫 GROUP",
    description: "Collection of people",
    video: "/signs/nzVideo/group.mp4"
  },
  "each other": {
    display: "↔️ EACH-OTHER",
    description: "Mutual interaction",
    video: "/signs/nzVideo/each other.mp4"
  },
  
  // Prepositions and connectors
  to: {
    display: "➡️ TO",
    description: "Direction/destination",
    video: "/signs/nzVideo/to.mp4"
  },
  
  // Evidence and proof
  proof: {
    display: "📋 PROOF",
    description: "Evidence/verification",
    video: "/signs/nzVideo/proof.mp4"
  },
  witness: {
    display: "👁️ WITNESS",
    description: "See/observe event",
    video: "/signs/nzVideo/witness.mp4"
  },
  
  // Basic emotions and states
  love: {
    display: "❤️ LOVE",
    description: "S handshapes cross over heart",
    video: "/signs/nzVideo/love.mp4"
  },
  like: {
    display: "👍 LIKE",
    description: "Thumb and middle finger from chest",
    video: "/signs/nzVideo/like.mp4"
  },
  want: {
    display: "🙋 WANT",
    description: "Claw hands pull toward body",
    video: "/signs/nzVideo/want.mp4"
  },
  need: {
    display: "⚡ NEED",
    description: "X handshape moves down forcefully",
    video: "/signs/nzVideo/need.mp4"
  },
  help: {
    display: "🤝 HELP",
    description: "S hand on flat palm, lift up",
    video: "/signs/nzVideo/help.mp4"
  },
  can: {
    display: "💪 CAN",
    description: "Strong ability gesture",
    video: "/signs/nzVideo/can.mp4"
  },
  "can't": {
    display: "🚫 CAN'T",
    description: "Cannot gesture",
    video: "/signs/nzVideo/can't.mp4"
  },
  
  // Question words
  what: {
    display: "❓ WHAT",
    description: "Index finger shakes side to side",
    video: "/signs/nzVideo/what.mp4"
  },
  "what is it": {
    display: "❓ WHAT-IS-IT",
    description: "Question about something",
    video: "/signs/nzVideo/what is it.mp4"
  },
  "what for": {
    display: "❓ WHAT-FOR",
    description: "Purpose question",
    video: "/signs/nzVideo/what for.mp4"
  },
  "what the hell": {
    display: "😡 WHAT-THE-HELL",
    description: "Strong surprise/anger",
    video: "/signs/nzVideo/what the hell.mp4"
  },
  where: {
    display: "📍 WHERE",
    description: "Index finger points and shakes",
    video: "/signs/nzVideo/where.mp4"
  },
  when: {
    display: "⏰ WHEN",
    description: "Index finger circles other index finger",
    video: "/signs/nzVideo/when.mp4"
  },
  why: {
    display: "🤔 WHY",
    description: "Middle finger touches forehead, then Y shape",
    video: "/signs/nzVideo/why.mp4"
  },
  how: {
    display: "🤷 HOW",
    description: "Curved hands, knuckles together, turn up",
    video: "/signs/nzVideo/how.mp4"
  },
  "how much": {
    display: "💰 HOW-MUCH",
    description: "Cost/amount question",
    video: "/signs/nzVideo/how much.mp4"
  },
  "how often": {
    display: "🔄 HOW-OFTEN",
    description: "Frequency question",
    video: "/signs/nzVideo/how often.mp4"
  },
  "how old": {
    display: "👴 HOW-OLD",
    description: "Age question",
    video: "/signs/nzVideo/how old.mp4"
  },
  who: {
    display: "👥 WHO",
    description: "Index finger around lips",
    video: "/signs/nzVideo/who.mp4"
  },
  
  // Time-related words
  today: {
    display: "📅 TODAY",
    description: "Now/present time",
    video: "/signs/nzVideo/today.mp4"
  },
  tomorrow: {
    display: "📅 TOMORROW",
    description: "Next day",
    video: "/signs/nzVideo/tomorrow.mp4"
  },
  yesterday: {
    display: "📅 YESTERDAY",
    description: "Previous day",
    video: "/signs/nzVideo/yesterday.mp4"
  },
  time: {
    display: "⏰ TIME",
    description: "Index finger taps wrist",
    video: "/signs/nzVideo/time.mp4"
  },
  "time out": {
    display: "⏸️ TIME-OUT",
    description: "Break/pause",
    video: "/signs/nzVideo/time out.mp4"
  },
  
  // Family additions
  family: {
    display: "👨‍👩‍👧‍👦 FAMILY",
    description: "F handshapes in circle",
    video: "/signs/nzVideo/family.mp4"
  },
  child: {
    display: "👶 CHILD",
    description: "Small person gesture",
    video: "/signs/nzVideo/child.mp4"
  },
  
  // Activities and actions
  move: {
    display: "🚚 MOVE",
    description: "Change location",
    video: "/signs/nzVideo/move.mp4"
  },
  fly: {
    display: "✈️ FLY",
    description: "Air travel",
    video: "/signs/nzVideo/fly.mp4"
  },
  party: {
    display: "🎉 PARTY",
    description: "Celebration",
    video: "/signs/nzVideo/party.mp4"
  },
  fun: {
    display: "🎊 FUN",
    description: "Enjoyment",
    video: "/signs/nzVideo/fun.mp4"
  },
  
  // Descriptive words
  huge: {
    display: "🦣 HUGE",
    description: "Very large",
    video: "/signs/nzVideo/huge.mp4"
  },
  attractive: {
    display: "😍 ATTRACTIVE",
    description: "Good looking",
    video: "/signs/nzVideo/attractive.mp4"
  },
  handsome: {
    display: "😎 HANDSOME",
    description: "Good looking (masculine)",
    video: "/signs/nzVideo/handsome.mp4"
  },
  lucky: {
    display: "🍀 LUCKY",
    description: "Fortunate",
    video: "/signs/nzVideo/lucky.mp4"
  },
  poor: {
    display: "💸 POOR",
    description: "Without money",
    video: "/signs/nzVideo/poor.mp4"
  },
  serious: {
    display: "😐 SERIOUS",
    description: "Not joking",
    video: "/signs/nzVideo/serious.mp4"
  },
  polite: {
    display: "😇 POLITE",
    description: "Well-mannered",
    video: "/signs/nzVideo/polite.mp4"
  },
  satisfied: {
    display: "😌 SATISFIED",
    description: "Content/pleased",
    video: "/signs/nzVideo/satisfied.mp4"
  },
  terrible: {
    display: "😱 TERRIBLE",
    description: "Very bad",
    video: "/signs/nzVideo/terrible.mp4"
  },
  sunny: {
    display: "☀️ SUNNY",
    description: "Bright weather",
    video: "/signs/nzVideo/sunny.mp4"
  },
  unexpected: {
    display: "😲 UNEXPECTED",
    description: "Surprising",
    video: "/signs/nzVideo/unexpected.mp4"
  },
  
  // Common expressions and responses
  "all of you": {
    display: "👥 ALL-OF-YOU",
    description: "Everyone present",
    video: "/signs/nzVideo/all of you.mp4"
  },
  "not me": {
    display: "🙅 NOT-ME",
    description: "Denial of involvement",
    video: "/signs/nzVideo/not me.mp4"
  },
  "really like": {
    display: "😍 REALLY-LIKE",
    description: "Strong preference",
    video: "/signs/nzVideo/really like.mp4"
  },
  "serves you right": {
    display: "🤷 SERVES-YOU-RIGHT",
    description: "Deserved consequence",
    video: "/signs/nzVideo/serves you right.mp4"
  },
  "go for it": {
    display: "💪 GO-FOR-IT",
    description: "Encouragement",
    video: "/signs/nzVideo/go for it.mp4"
  },
  "get out": {
    display: "👉🚪 GET-OUT",
    description: "Leave command",
    video: "/signs/nzVideo/get out.mp4"
  },
  "can't be bothered": {
    display: "🤷 CAN'T-BE-BOTHERED",
    description: "Don't want to do it",
    video: "/signs/nzVideo/can't be bothered.mp4"
  },
  "behave yourself": {
    display: "🤐 BEHAVE-YOURSELF",
    description: "Act properly",
    video: "/signs/nzVideo/behave yourself.mp4"
  },
  "big mouth": {
    display: "🗣️ BIG-MOUTH",
    description: "Talks too much",
    video: "/signs/nzVideo/big mouth.mp4"
  },
  "forget it": {
    display: "🙄 FORGET-IT",
    description: "Dismissal",
    video: "/signs/nzVideo/forget it.mp4"
  },
  "fall in love": {
    display: "💕 FALL-IN-LOVE",
    description: "Romantic attraction",
    video: "/signs/nzVideo/fall in love.mp4"
  },
  
  // Special occasions and events
  birthday: {
    display: "🎂 BIRTHDAY",
    description: "Annual celebration",
    video: "/signs/nzVideo/birthday.mp4"
  },
  congratulate: {
    display: "🎉 CONGRATULATE",
    description: "Celebrate achievement",
    video: "/signs/nzVideo/congratulate.mp4"
  },
  
  // Technology and communication
  dial: {
    display: "📞 DIAL",
    description: "Make phone call",
    video: "/signs/nzVideo/dial.mp4"
  },
  "hang up": {
    display: "📞❌ HANG-UP",
    description: "End phone call",
    video: "/signs/nzVideo/hang up.mp4"
  },
  battery: {
    display: "🔋 BATTERY",
    description: "Power source",
    video: "/signs/nzVideo/battery.mp4"
  },
  programme: {
    display: "📺 PROGRAMME",
    description: "TV show/software",
    video: "/signs/nzVideo/programme.mp4"
  },
  
  // Health and body
  flu: {
    display: "🤧 FLU",
    description: "Illness",
    video: "/signs/nzVideo/flu.mp4"
  },
  pee: {
    display: "🚽 PEE",
    description: "Urinate",
    video: "/signs/nzVideo/pee.mp4"
  },
  
  // Places and objects  
  gym: {
    display: "🏋️ GYM",
    description: "Exercise facility",
    video: "/signs/nzVideo/gym.mp4"
  },
  fountain: {
    display: "⛲ FOUNTAIN",
    description: "Water feature",
    video: "/signs/nzVideo/fountain.mp4"
  },
  stone: {
    display: "🪨 STONE",
    description: "Rock",
    video: "/signs/nzVideo/stone.mp4"
  },
  cards: {
    display: "🃏 CARDS",
    description: "Playing cards",
    video: "/signs/nzVideo/cards.mp4"
  },
  wharenui: {
    display: "🏛️ WHARENUI",
    description: "Maori meeting house",
    video: "/signs/nzVideo/wharenui.mp4"
  },
  parliment: {
    display: "🏛️ PARLIAMENT",
    description: "Government building",
    video: "/signs/nzVideo/parliment.mp4"
  },
  
  // Actions and activities
  avoid: {
    display: "🚫 AVOID",
    description: "Stay away from",
    video: "/signs/nzVideo/avoid.mp4"
  },
  crave: {
    display: "😋 CRAVE",
    description: "Strong desire for",
    video: "/signs/nzVideo/crave.mp4"
  },
  deteriorate: {
    display: "📉 DETERIORATE",
    description: "Get worse",
    video: "/signs/nzVideo/deteriorate.mp4"
  },
  humiliated: {
    display: "😳 HUMILIATED",
    description: "Embarrassed",
    video: "/signs/nzVideo/humiliated.mp4"
  },
  maintenance: {
    display: "🔧 MAINTENANCE",
    description: "Upkeep/repair",
    video: "/signs/nzVideo/maintenance.mp4"
  },
  skill: {
    display: "🎯 SKILL",
    description: "Ability/talent",
    video: "/signs/nzVideo/skill.mp4"
  },
  swear: {
    display: "🤬 SWEAR",
    description: "Use bad language",
    video: "/signs/nzVideo/swear.mp4"
  },
  "try to get something done": {
    display: "💪 TRY-TO-GET-SOMETHING-DONE",
    description: "Attempt to complete task",
    video: "/signs/nzVideo/try to get something done.mp4"
  },
  "work hard": {
    display: "💼💪 WORK-HARD",
    description: "Put in effort",
    video: "/signs/nzVideo/work hard.mp4"
  },
  
  // Emotions and feelings
  damn: {
    display: "😤 DAMN",
    description: "Frustration",
    video: "/signs/nzVideo/damn.mp4"
  },
  unfortunately: {
    display: "😔 UNFORTUNATELY",
    description: "Sadly",
    video: "/signs/nzVideo/unfortunately.mp4"
  },
  
  // Education-related
  education: {
    display: "🎓 EDUCATION",
    description: "Learning/schooling",
    video: "/signs/nzVideo/education.mp4"
  },
  ancestor: {
    display: "👴👵 ANCESTOR",
    description: "Family heritage",
    video: "/signs/nzVideo/ancestor.mp4"
  },
  
  // Additional NZ Sign Language words with videos
  accompany: {
    display: "🚶‍♂️🚶‍♀️ ACCOMPANY",
    description: "Two hands move together",
    video: "/signs/nzVideo/accompany.mp4"
  },
  addicted: {
    display: "🎯 ADDICTED", 
    description: "Strong attachment gesture",
    video: "/signs/nzVideo/addicted.mp4"
  },
  after: {
    display: "⏭️ AFTER",
    description: "One hand follows the other",
    video: "/signs/nzVideo/after.mp4"
  },
  alcohol: {
    display: "🍺 ALCOHOL",
    description: "Drinking motion with emphasis",
    video: "/signs/nzVideo/alcohol.mp4"
  },
  and: {
    display: "➕ AND",
    description: "Connecting gesture",
    video: "/signs/nzVideo/and.mp4"
  },
  arrive: {
    display: "📍 ARRIVE",
    description: "Hand comes to rest",
    video: "/signs/nzVideo/arrive.mp4"
  },
  "as well": {
    display: "➕ AS-WELL",
    description: "Additional gesture",
    video: "/signs/nzVideo/as well.mp4"
  },
  "catch up": {
    display: "🏃‍♂️ CATCH-UP",
    description: "One hand catches another",
    video: "/signs/nzVideo/catch up.mp4"
  },
  "come back": {
    display: "🔄 COME-BACK",
    description: "Returning motion",
    video: "/signs/nzVideo/come back.mp4"
  },
  "come on": {
    display: "👋 COME-ON",
    description: "Encouraging gesture",
    video: "/signs/nzVideo/come on.mp4"
  },
  cry: {
    display: "😢 CRY",
    description: "Tears falling motion",
    video: "/signs/nzVideo/cry.mp4"
  },
  cup: {
    display: "☕ CUP",
    description: "C handshape holding cup",
    video: "/signs/nzVideo/cup.mp4"
  },
  dash: {
    display: "💨 DASH",
    description: "Quick movement",
    video: "/signs/nzVideo/dash.mp4"
  },
  deafblind: {
    display: "👁️‍🗨️ DEAFBLIND",
    description: "Combined deaf and blind signs",
    video: "/signs/nzVideo/deafblind.mp4"
  },
  "don't tell": {
    display: "🤫 DON'T-TELL",
    description: "Secrecy gesture",
    video: "/signs/nzVideo/don't tell.mp4"
  },
  "dont care about": {
    display: "🤷 DON'T-CARE",
    description: "Dismissive gesture",
    video: "/signs/nzVideo/dont care about.mp4"
  },
  each: {
    display: "👥 EACH",
    description: "Individual pointing",
    video: "/signs/nzVideo/each.mp4"
  },
  "every day": {
    display: "📅 EVERY-DAY",
    description: "Daily repetition",
    video: "/signs/nzVideo/every day.mp4"
  },
  "excuse me": {
    display: "🙏 EXCUSE-ME",
    description: "Polite attention request",
    video: "/signs/nzVideo/excuse me.mp4"
  },
  exit: {
    display: "🚪 EXIT",
    description: "Leaving motion",
    video: "/signs/nzVideo/exit.mp4"
  },
  "fish and chips": {
    display: "🐟🍟 FISH-AND-CHIPS",
    description: "Traditional meal sign",
    video: "/signs/nzVideo/fish and chips.mp4"
  },
  flirt: {
    display: "😘 FLIRT",
    description: "Playful romantic gesture",
    video: "/signs/nzVideo/flirt.mp4"
  },
  follow: {
    display: "👣 FOLLOW",
    description: "One hand follows another",
    video: "/signs/nzVideo/follow.mp4"
  },
  fortnightly: {
    display: "📅 FORTNIGHTLY",
    description: "Two week period",
    video: "/signs/nzVideo/fortnightly.mp4"
  },
  from: {
    display: "⬅️ FROM",
    description: "Starting point gesture",
    video: "/signs/nzVideo/from.mp4"
  },
  "get intimate": {
    display: "💕 GET-INTIMATE",
    description: "Close relationship gesture",
    video: "/signs/nzVideo/get intimate.mp4"
  },
  "get the impression": {
    display: "💭 GET-IMPRESSION",
    description: "Understanding gesture",
    video: "/signs/nzVideo/get the impression.mp4"
  },
  "go away": {
    display: "👋 GO-AWAY",
    description: "Dismissal gesture",
    video: "/signs/nzVideo/go away.mp4"
  },
  "go to bed": {
    display: "🛏️ GO-TO-BED",
    description: "Sleep preparation",
    video: "/signs/nzVideo/go to bed.mp4"
  },
  "go wild": {
    display: "🎉 GO-WILD",
    description: "Excitement gesture",
    video: "/signs/nzVideo/go wild.mp4"
  },
  gosh: {
    display: "😮 GOSH",
    description: "Surprise expression",
    video: "/signs/nzVideo/gosh.mp4"
  },
  happen: {
    display: "⚡ HAPPEN",
    description: "Event occurrence",
    video: "/signs/nzVideo/happen.mp4"
  },
  "i haven't": {
    display: "🙅 I-HAVEN'T",
    description: "Negative past action",
    video: "/signs/nzVideo/i haven't.mp4"
  },
  "jump for joy": {
    display: "🎊 JUMP-FOR-JOY",
    description: "Extreme happiness",
    video: "/signs/nzVideo/jump for joy.mp4"
  },
  "last name": {
    display: "👥 LAST-NAME",
    description: "Family name reference",
    video: "/signs/nzVideo/last name.mp4"
  },
  later: {
    display: "⏰ LATER",
    description: "Future time",
    video: "/signs/nzVideo/later.mp4"
  },
  "let me know": {
    display: "💬 LET-ME-KNOW",
    description: "Information request",
    video: "/signs/nzVideo/let me know.mp4"
  },
  "let's": {
    display: "👥 LET'S",
    description: "Group invitation",
    video: "/signs/nzVideo/let's.mp4"
  },
  "live together": {
    display: "🏠 LIVE-TOGETHER",
    description: "Cohabitation sign",
    video: "/signs/nzVideo/live together.mp4"
  },
  "me too": {
    display: "👆 ME-TOO",
    description: "Agreement gesture",
    video: "/signs/nzVideo/me too.mp4"
  },
  miscommunicate: {
    display: "❌💬 MISCOMMUNICATE",
    description: "Communication failure",
    video: "/signs/nzVideo/miscommunicate.mp4"
  },
  must: {
    display: "❗ MUST",
    description: "Strong obligation",
    video: "/signs/nzVideo/must.mp4"
  },
  "my turn": {
    display: "👆 MY-TURN",
    description: "Personal opportunity",
    video: "/signs/nzVideo/my turn.mp4"
  },
  neutral: {
    display: "⚖️ NEUTRAL",
    description: "Balanced position",
    video: "/signs/nzVideo/neutral.mp4"
  },
  "no good": {
    display: "👎 NO-GOOD",
    description: "Negative quality",
    video: "/signs/nzVideo/no good.mp4"
  },
  "no more": {
    display: "🚫 NO-MORE",
    description: "Finished/ended",
    video: "/signs/nzVideo/no more.mp4"
  },
  no: {
    display: "❌ NO",
    description: "Negative response",
    video: "/signs/nzVideo/no.mp4"
  },
  "not enough": {
    display: "📉 NOT-ENOUGH",
    description: "Insufficient amount",
    video: "/signs/nzVideo/not enough.mp4"
  },
  oops: {
    display: "😬 OOPS",
    description: "Mistake acknowledgment",
    video: "/signs/nzVideo/oops.mp4"
  },
  orgasm: {
    display: "💥 ORGASM",
    description: "Intimate expression",
    video: "/signs/nzVideo/orgasm.mp4"
  },
  parents: {
    display: "👨‍👩‍👧‍👦 PARENTS",
    description: "Mother and father combined",
    video: "/signs/nzVideo/parents.mp4"
  },
  "put up with": {
    display: "😤 PUT-UP-WITH",
    description: "Tolerance gesture",
    video: "/signs/nzVideo/put up with.mp4"
  },
  really: {
    display: "❗ REALLY",
    description: "Emphasis gesture",
    video: "/signs/nzVideo/really.mp4"
  },
  return: {
    display: "🔄 RETURN",
    description: "Coming back",
    video: "/signs/nzVideo/return.mp4"
  },
  safe: {
    display: "🛡️ SAFE",
    description: "Security gesture",
    video: "/signs/nzVideo/safe.mp4"
  },
  "shame on you": {
    display: "😤 SHAME-ON-YOU",
    description: "Disapproval expression",
    video: "/signs/nzVideo/shame on you.mp4"
  },
  should: {
    display: "👉 SHOULD",
    description: "Recommendation gesture",
    video: "/signs/nzVideo/should.mp4"
  },
  sibling: {
    display: "👫 SIBLING",
    description: "Brother or sister",
    video: "/signs/nzVideo/sibling.mp4"
  },
  "sick of it": {
    display: "😠 SICK-OF-IT",
    description: "Fed up expression",
    video: "/signs/nzVideo/sick of it.mp4"
  },
  sleepless: {
    display: "😴❌ SLEEPLESS",
    description: "Cannot sleep",
    video: "/signs/nzVideo/sleepless.mp4"
  },
  subtract: {
    display: "➖ SUBTRACT",
    description: "Removal/reduction",
    video: "/signs/nzVideo/subtract.mp4"
  },
  sympathise: {
    display: "💝 SYMPATHISE",
    description: "Emotional support",
    video: "/signs/nzVideo/sympathise.mp4"
  },
  "tell me": {
    display: "💬 TELL-ME",
    description: "Information request",
    video: "/signs/nzVideo/tell me.mp4"
  },
  than: {
    display: "⚖️ THAN",
    description: "Comparison gesture",
    video: "/signs/nzVideo/than.mp4"
  },
  "to have": {
    display: "🤲 TO-HAVE",
    description: "Possession gesture",
    video: "/signs/nzVideo/to have.mp4"
  },
  underground: {
    display: "⬇️ UNDERGROUND",
    description: "Below ground level",
    video: "/signs/nzVideo/underground.mp4"
  },
  water: {
    display: "💧 WATER",
    description: "W handshape at mouth",
    video: "/signs/nzVideo/water.mp4"
  },
  whoops: {
    display: "😅 WHOOPS",
    description: "Mistake expression",
    video: "/signs/nzVideo/whoops.mp4"
  },
  wine: {
    display: "🍷 WINE",
    description: "W handshape at cheek",
    video: "/signs/nzVideo/wine.mp4"
  },
  with: {
    display: "🤝 WITH",
    description: "Together gesture",
    video: "/signs/nzVideo/with.mp4"
  },
  
  // Fingerspelling with actual images
  fingerspelling: {
    a: "/signs/nz/a.jpg",
    b: "/signs/nz/b.jpg", 
    c: "/signs/nz/c.jpg",
    d: "/signs/nz/d.jpg",
    e: "/signs/nz/e.jpg",
    f: "/signs/nz/f.jpg",
    g: "/signs/nz/g.jpg",
    h: "/signs/nz/h.jpg",
    i: "/signs/nz/i.jpg",
    j: "/signs/nz/j.jpg",
    k: "/signs/nz/k.jpg",
    l: "/signs/nz/l.jpg",
    m: "/signs/nz/m.jpg",
    n: "/signs/nz/n.jpg",
    o: "/signs/nz/o.jpg",
    p: "/signs/nz/p.jpg",
    q: "/signs/nz/q.jpg",
    r: "/signs/nz/r.jpg",
    s: "/signs/nz/s.jpg",
    t: "/signs/nz/t.jpg",
    u: "/signs/nz/u.jpg",
    v: "/signs/nz/v.jpg",
    w: "/signs/nz/w.jpg",
    x: "/signs/nz/x.jpg",
    y: "/signs/nz/y.jpg",
    z: "/signs/nz/z.jpg"
  }
};

export default SignDictionary;
