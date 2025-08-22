// Sign Language Dictionary - Using actual fingerspelling images
// Images for fingerspelling are located in public/signs/

const SignDictionary = {
  // Common greetings and social words
  hello: {
    display: "👋 HELLO",
    video: "/signs/nzVideo/hello.mp4"
  },
  hi: {
    display: "👋 HI", 
    video: "/signs/nzVideo/hello.mp4"
  },
  goodbye: {
    display: "👋 BYE",
    video: "/signs/nzVideo/goodbye.mp4"
  },
  bye: {
    display: "👋 BYE",
    video: "/signs/nzVideo/bye.mp4"
  },
  please: {
    display: "🙏 PLEASE",
    video: "/signs/nzVideo/please.mp4"
  },
  "thank you": {
    display: "🙏 THANK-YOU",
    video: "/signs/nzVideo/thanks.mp4"
  },
  thanks: {
    display: "🙏 THANKS",
    video: "/signs/nzVideo/thanks.mp4"
  },
  sorry: {
    display: "✊ SORRY",
    video: "/signs/nzVideo/sorry.mp4"
  },
  
  // Personal pronouns
  i: {
    display: "👆 I",
    video: "/signs/nzVideo/i.mp4"
  },
  me: {
    display: "👆 ME", 
    video: "/signs/nzVideo/me.mp4"
  },
  you: {
    display: "👉 YOU",
    video: "/signs/nzVideo/you.mp4"
  },
  we: {
    display: "👥 WE",
    video: "/signs/nzVideo/we.mp4"
  },
  they: {
    display: "👥 THEY",
    video: "/signs/nzVideo/they.mp4"
  },
  other: {
    display: "👉 OTHER",
    video: "/signs/nzVideo/other.mp4"
  },
  another: {
    display: "➕ ANOTHER",
    video: "/signs/nzVideo/another.mp4"
  },
  
  // Family members
  mother: {
    display: "👩 MOTHER",
    video: "/signs/nzVideo/mother.mp4"
  },
  mom: {
    display: "👩 MOM",
    video: "/signs/nzVideo/mother.mp4"
  },
  father: {
    display: "👨 FATHER", 
    video: "/signs/nzVideo/father.mp4"
  },
  dad: {
    display: "👨 DAD",
    video: "/signs/nzVideo/dad.mp4"
  },
  sister: {
    display: "👭 SISTER",
    video: "/signs/nzVideo/sister.mp4"
  },
  brother: {
    display: "👬 BROTHER",
    video: "/signs/nzVideo/brother.mp4"
  },
  
  // Common verbs
  go: {
    display: "➡️ GO",
    video: "/signs/nzVideo/go.mp4"
  },
  come: {
    display: "👋 COME",
    video: "/signs/nzVideo/come.mp4"
  },
  eat: {
    display: "🍽️ EAT",
    video: "/signs/nzVideo/eat.mp4"
  },
  drink: {
    display: "🥤 DRINK", 
    video: "/signs/nzVideo/drink.mp4"
  },
  sleep: {
    display: "😴 SLEEP",
    video: "/signs/nzVideo/sleep.mp4"
  },
  play: {
    display: "🎮 PLAY",
    video: "/signs/nzVideo/play.mp4"
  },
  learn: {
    display: "📚 LEARN",
    video: "/signs/nzVideo/learn.mp4"
  },
  teach: {
    display: "👨‍🏫 TEACH",
    video: "/signs/nzVideo/teach.mp4"
  },
  walk: {
    display: "🚶 WALK",
    video: "/signs/nzVideo/walk.mp4"
  },
  study: {
    display: "📖 STUDY",
    video: "/signs/nzVideo/study.mp4"
  },
  
  // Common nouns
  house: {
    display: "🏠 HOUSE",
    video: "/signs/nzVideo/house.mp4"
  },
  home: {
    display: "🏠 HOME",
    video: "/signs/nzVideo/home.mp4"
  },
  school: {
    display: "🏫 SCHOOL",
    video: "/signs/nzVideo/school.mp4"
  },
  car: {
    display: "🚗 CAR",
    video: "/signs/nzVideo/car.mp4"
  },
  bike: {
    display: "🚲 BIKE",
    video: "/signs/nzVideo/bike.mp4"
  },
  room: {
    display: "🏠 ROOM",
    video: "/signs/nzVideo/room.mp4"
  },
  "dining room": {
    display: "🍽️ DINING-ROOM",
    video: "/signs/nzVideo/dining room.mp4"
  },
  space: {
    display: "🌌 SPACE",
    video: "/signs/nzVideo/space.mp4"
  },
  class: {
    display: "🎓 CLASS",
    video: "/signs/nzVideo/class.mp4"
  },
  food: {
    display: "🍎 FOOD",
    video: "/signs/nzVideo/food.mp4"
  },
  furniture: {
    display: "🪑 FURNITURE",
    video: "/signs/nzVideo/furniture.mp4"
  },
  tie: {
    display: "👔 TIE",
    video: "/signs/nzVideo/tie.mp4"
  },
  word: {
    display: "📝 WORD",
    video: "/signs/nzVideo/word.mp4"
  },
  words: {
    display: "📝 WORDS",
    video: "/signs/nzVideo/words.mp4"
  },
  computer: {
    display: "💻 COMPUTER",
    video: "/signs/nzVideo/computer.mp4"
  },
  phone: {
    display: "📱 PHONE",
    video: "/signs/nzVideo/phone.mp4"
  },
  telephone: {
    display: "☎️ TELEPHONE",
    video: "/signs/nzVideo/telephone.mp4"
  },
  
  // Colors
  red: {
    display: "🔴 RED",
    video: "/signs/nzVideo/red.mp4"
  },
  blue: {
    display: "🔵 BLUE", 
    video: "/signs/nzVideo/blue.mp4"
  },
  green: {
    display: "🟢 GREEN",
    video: "/signs/nzVideo/green.mp4"
  },
  yellow: {
    display: "🟡 YELLOW",
    video: "/signs/nzVideo/yellow.mp4"
  },
  black: {
    display: "⚫ BLACK",
    video: "/signs/nzVideo/black.mp4"
  },
  white: {
    display: "⚪ WHITE",
    video: "/signs/nzVideo/white.mp4"
  },
  colour: {
    display: "🌈 COLOUR",
    video: "/signs/nzVideo/colour.mp4"
  },
  
  // Numbers (1-10)
  zero: {
    display: "0️⃣ ZERO",
    video: "/signs/nzVideo/zero.mp4"
  },
  one: {
    display: "1️⃣ ONE",
    video: "/signs/nzVideo/one.mp4"
  },
  two: {
    display: "2️⃣ TWO", 
    video: "/signs/nzVideo/two.mp4"
  },
  three: {
    display: "3️⃣ THREE",
    video: "/signs/nzVideo/three.mp4"
  },
  four: {
    display: "4️⃣ FOUR",
    video: "/signs/nzVideo/four.mp4"
  },
  five: {
    display: "5️⃣ FIVE",
    video: "/signs/nzVideo/five.mp4"
  },
  six: {
    display: "6️⃣ SIX",
    video: "/signs/nzVideo/six.mp4"
  },
  seven: {
    display: "7️⃣ SEVEN",
    video: "/signs/nzVideo/seven.mp4"
  },
  eight: {
    display: "8️⃣ EIGHT",
    video: "/signs/nzVideo/eight.mp4"
  },
  nine: {
    display: "9️⃣ NINE",
    video: "/signs/nzVideo/nine.mp4"
  },
  ten: {
    display: "🔟 TEN",
    video: "/signs/nzVideo/ten.mp4"
  },
  twenty: {
    display: "2️⃣0️⃣ TWENTY",
    video: "/signs/nzVideo/twenty.mp4"
  },
  thirty: {
    display: "3️⃣0️⃣ THIRTY",
    video: "/signs/nzVideo/thirty.mp4"
  },
  
  // Common adjectives
  good: {
    display: "👍 GOOD",
    video: "/signs/nzVideo/good.mp4"
  },
  bad: {
    display: "👎 BAD",
    video: "/signs/nzVideo/bad.mp4"
  },
  big: {
    display: "📏 BIG",
    video: "/signs/nzVideo/big.mp4"
  },
  small: {
    display: "🤏 SMALL",
    video: "/signs/nzVideo/small.mp4"
  },
  hot: {
    display: "🔥 HOT",
    video: "/signs/nzVideo/hot.mp4"
  },
  cold: {
    display: "🧊 COLD",
    video: "/signs/nzVideo/cold.mp4"
  },
  happy: {
    display: "😊 HAPPY",
    video: "/signs/nzVideo/happy.mp4"
  },
  fine: {
    display: "👌 FINE",
    video: "/signs/nzVideo/fine.mp4"
  },
  great: {
    display: "⭐ GREAT",
    video: "/signs/nzVideo/great.mp4"
  },
  excellent: {
    display: "🌟 EXCELLENT",
    video: "/signs/nzVideo/excellent.mp4"
  },
  tired: {
    display: "😴 TIRED",
    video: "/signs/nzVideo/tired.mp4"
  },
  sleepy: {
    display: "😪 SLEEPY",
    video: "/signs/nzVideo/sleepy.mp4"
  },
  weak: {
    display: "💪❌ WEAK",
    video: "/signs/nzVideo/weak.mp4"
  },
  posh: {
    display: "💎 POSH",
    video: "/signs/nzVideo/posh.mp4"
  },
  // People and groups
  people: {
    display: "👥 PEOPLE",
    video: "/signs/nzVideo/people.mp4"
  },
  group: {
    display: "👫 GROUP",
    video: "/signs/nzVideo/group.mp4"
  },
  "each other": {
    display: "↔️ EACH-OTHER",
    video: "/signs/nzVideo/each other.mp4"
  },
  
  // Prepositions and connectors
  to: {
    display: "➡️ TO",
    video: "/signs/nzVideo/to.mp4"
  },
  
  // Evidence and proof
  proof: {
    display: "📋 PROOF",
    video: "/signs/nzVideo/proof.mp4"
  },
  witness: {
    display: "👁️ WITNESS",
    video: "/signs/nzVideo/witness.mp4"
  },
  
  // Basic emotions and states
  love: {
    display: "❤️ LOVE",
    video: "/signs/nzVideo/love.mp4"
  },
  like: {
    display: "👍 LIKE",
    video: "/signs/nzVideo/like.mp4"
  },
  want: {
    display: "🙋 WANT",
    video: "/signs/nzVideo/want.mp4"
  },
  need: {
    display: "⚡ NEED",
    video: "/signs/nzVideo/need.mp4"
  },
  help: {
    display: "🤝 HELP",
    video: "/signs/nzVideo/help.mp4"
  },
  can: {
    display: "💪 CAN",
    video: "/signs/nzVideo/can.mp4"
  },
  "can't": {
    display: "🚫 CAN'T",
    video: "/signs/nzVideo/can't.mp4"
  },
  
  // Question words
  what: {
    display: "❓ WHAT",
    video: "/signs/nzVideo/what.mp4"
  },
  "what is it": {
    display: "❓ WHAT-IS-IT",
    video: "/signs/nzVideo/what is it.mp4"
  },
  "what for": {
    display: "❓ WHAT-FOR",
    video: "/signs/nzVideo/what for.mp4"
  },
  "what the hell": {
    display: "😡 WHAT-THE-HELL",
    video: "/signs/nzVideo/what the hell.mp4"
  },
  where: {
    display: "📍 WHERE",
    video: "/signs/nzVideo/where.mp4"
  },
  when: {
    display: "⏰ WHEN",
    video: "/signs/nzVideo/when.mp4"
  },
  why: {
    display: "🤔 WHY",
    video: "/signs/nzVideo/why.mp4"
  },
  how: {
    display: "🤷 HOW",
    video: "/signs/nzVideo/how.mp4"
  },
  "how much": {
    display: "💰 HOW-MUCH",
    video: "/signs/nzVideo/how much.mp4"
  },
  "how often": {
    display: "🔄 HOW-OFTEN",
    video: "/signs/nzVideo/how often.mp4"
  },
  "how old": {
    display: "👴 HOW-OLD",
    video: "/signs/nzVideo/how old.mp4"
  },
  who: {
    display: "👥 WHO",
    video: "/signs/nzVideo/who.mp4"
  },
  
  // Time-related words
  today: {
    display: "📅 TODAY",
    video: "/signs/nzVideo/today.mp4"
  },
  tomorrow: {
    display: "📅 TOMORROW",
    video: "/signs/nzVideo/tomorrow.mp4"
  },
  yesterday: {
    display: "📅 YESTERDAY",
    video: "/signs/nzVideo/yesterday.mp4"
  },
  time: {
    display: "⏰ TIME",
    video: "/signs/nzVideo/time.mp4"
  },
  "time out": {
    display: "⏸️ TIME-OUT",
    video: "/signs/nzVideo/time out.mp4"
  },
  
  // Family additions
  family: {
    display: "👨‍👩‍👧‍👦 FAMILY",
    video: "/signs/nzVideo/family.mp4"
  },
  child: {
    display: "👶 CHILD",
    video: "/signs/nzVideo/child.mp4"
  },
  
  // Activities and actions
  move: {
    display: "🚚 MOVE",
    video: "/signs/nzVideo/move.mp4"
  },
  fly: {
    display: "✈️ FLY",
    video: "/signs/nzVideo/fly.mp4"
  },
  party: {
    display: "🎉 PARTY",
    video: "/signs/nzVideo/party.mp4"
  },
  fun: {
    display: "🎊 FUN",
    video: "/signs/nzVideo/fun.mp4"
  },
  
  // Descriptive words
  huge: {
    display: "🦣 HUGE",
    video: "/signs/nzVideo/huge.mp4"
  },
  attractive: {
    display: "😍 ATTRACTIVE",
    video: "/signs/nzVideo/attractive.mp4"
  },
  handsome: {
    display: "😎 HANDSOME",
    video: "/signs/nzVideo/handsome.mp4"
  },
  lucky: {
    display: "🍀 LUCKY",
    video: "/signs/nzVideo/lucky.mp4"
  },
  poor: {
    display: "💸 POOR",
    video: "/signs/nzVideo/poor.mp4"
  },
  serious: {
    display: "😐 SERIOUS",
    video: "/signs/nzVideo/serious.mp4"
  },
  polite: {
    display: "😇 POLITE",
    video: "/signs/nzVideo/polite.mp4"
  },
  satisfied: {
    display: "😌 SATISFIED",
    video: "/signs/nzVideo/satisfied.mp4"
  },
  terrible: {
    display: "😱 TERRIBLE",
    video: "/signs/nzVideo/terrible.mp4"
  },
  sunny: {
    display: "☀️ SUNNY",
    video: "/signs/nzVideo/sunny.mp4"
  },
  unexpected: {
    display: "😲 UNEXPECTED",
    video: "/signs/nzVideo/unexpected.mp4"
  },
  
  // Common expressions and responses
  "all of you": {
    display: "👥 ALL-OF-YOU",
    video: "/signs/nzVideo/all of you.mp4"
  },
  "not me": {
    display: "🙅 NOT-ME",
    video: "/signs/nzVideo/not me.mp4"
  },
  "really like": {
    display: "😍 REALLY-LIKE",
    video: "/signs/nzVideo/really like.mp4"
  },
  "serves you right": {
    display: "🤷 SERVES-YOU-RIGHT",
    video: "/signs/nzVideo/serves you right.mp4"
  },
  "go for it": {
    display: "💪 GO-FOR-IT",
    video: "/signs/nzVideo/go for it.mp4"
  },
  "get out": {
    display: "👉🚪 GET-OUT",
    video: "/signs/nzVideo/get out.mp4"
  },
  "can't be bothered": {
    display: "🤷 CAN'T-BE-BOTHERED",
    video: "/signs/nzVideo/can't be bothered.mp4"
  },
  "behave yourself": {
    display: "🤐 BEHAVE-YOURSELF",
    video: "/signs/nzVideo/behave yourself.mp4"
  },
  "big mouth": {
    display: "🗣️ BIG-MOUTH",
    video: "/signs/nzVideo/big mouth.mp4"
  },
  "forget it": {
    display: "🙄 FORGET-IT",
    video: "/signs/nzVideo/forget it.mp4"
  },
  "fall in love": {
    display: "💕 FALL-IN-LOVE",
    video: "/signs/nzVideo/fall in love.mp4"
  },
  
  // Special occasions and events
  birthday: {
    display: "🎂 BIRTHDAY",
    video: "/signs/nzVideo/birthday.mp4"
  },
  congratulate: {
    display: "🎉 CONGRATULATE",
    video: "/signs/nzVideo/congratulate.mp4"
  },
  
  // Technology and communication
  dial: {
    display: "📞 DIAL",
    video: "/signs/nzVideo/dial.mp4"
  },
  "hang up": {
    display: "📞❌ HANG-UP",
    video: "/signs/nzVideo/hang up.mp4"
  },
  battery: {
    display: "🔋 BATTERY",
    video: "/signs/nzVideo/battery.mp4"
  },
  programme: {
    display: "📺 PROGRAMME",
    video: "/signs/nzVideo/programme.mp4"
  },
  
  // Health and body
  flu: {
    display: "🤧 FLU",
    video: "/signs/nzVideo/flu.mp4"
  },
  pee: {
    display: "🚽 PEE",
    video: "/signs/nzVideo/pee.mp4"
  },
  
  // Places and objects  
  gym: {
    display: "🏋️ GYM",
    video: "/signs/nzVideo/gym.mp4"
  },
  fountain: {
    display: "⛲ FOUNTAIN",
    video: "/signs/nzVideo/fountain.mp4"
  },
  stone: {
    display: "🪨 STONE",
    video: "/signs/nzVideo/stone.mp4"
  },
  cards: {
    display: "🃏 CARDS",
    video: "/signs/nzVideo/cards.mp4"
  },
  wharenui: {
    display: "🏛️ WHARENUI",
    video: "/signs/nzVideo/wharenui.mp4"
  },
  parliment: {
    display: "🏛️ PARLIAMENT",
    video: "/signs/nzVideo/parliment.mp4"
  },
  
  // Actions and activities
  avoid: {
    display: "🚫 AVOID",
    video: "/signs/nzVideo/avoid.mp4"
  },
  crave: {
    display: "😋 CRAVE",
    video: "/signs/nzVideo/crave.mp4"
  },
  deteriorate: {
    display: "📉 DETERIORATE",
    video: "/signs/nzVideo/deteriorate.mp4"
  },
  humiliated: {
    display: "😳 HUMILIATED",
    video: "/signs/nzVideo/humiliated.mp4"
  },
  maintenance: {
    display: "🔧 MAINTENANCE",
    video: "/signs/nzVideo/maintenance.mp4"
  },
  skill: {
    display: "🎯 SKILL",
    video: "/signs/nzVideo/skill.mp4"
  },
  swear: {
    display: "🤬 SWEAR",
    video: "/signs/nzVideo/swear.mp4"
  },
  "try to get something done": {
    display: "💪 TRY-TO-GET-SOMETHING-DONE",
    video: "/signs/nzVideo/try to get something done.mp4"
  },
  "work hard": {
    display: "💼💪 WORK-HARD",
    video: "/signs/nzVideo/work hard.mp4"
  },
  
  // Emotions and feelings
  damn: {
    display: "😤 DAMN",
    video: "/signs/nzVideo/damn.mp4"
  },
  unfortunately: {
    display: "😔 UNFORTUNATELY",
    video: "/signs/nzVideo/unfortunately.mp4"
  },
  
  // Education-related
  education: {
    display: "🎓 EDUCATION",
    video: "/signs/nzVideo/education.mp4"
  },
  ancestor: {
    display: "👴👵 ANCESTOR",
    video: "/signs/nzVideo/ancestor.mp4"
  },
  
  // Additional NZ Sign Language words with videos
  accompany: {
    display: "🚶‍♂️🚶‍♀️ ACCOMPANY",
    video: "/signs/nzVideo/accompany.mp4"
  },
  addicted: {
    display: "🎯 ADDICTED", 
    video: "/signs/nzVideo/addicted.mp4"
  },
  after: {
    display: "⏭️ AFTER",
    video: "/signs/nzVideo/after.mp4"
  },
  alcohol: {
    display: "🍺 ALCOHOL",
    video: "/signs/nzVideo/alcohol.mp4"
  },
  and: {
    display: "➕ AND",
    video: "/signs/nzVideo/and.mp4"
  },
  arrive: {
    display: "📍 ARRIVE",
    video: "/signs/nzVideo/arrive.mp4"
  },
  "as well": {
    display: "➕ AS-WELL",
    video: "/signs/nzVideo/as well.mp4"
  },
  "catch up": {
    display: "🏃‍♂️ CATCH-UP",
    video: "/signs/nzVideo/catch up.mp4"
  },
  "come back": {
    display: "🔄 COME-BACK",
    video: "/signs/nzVideo/come back.mp4"
  },
  "come on": {
    display: "👋 COME-ON",
    video: "/signs/nzVideo/come on.mp4"
  },
  cry: {
    display: "😢 CRY",
    video: "/signs/nzVideo/cry.mp4"
  },
  cup: {
    display: "☕ CUP",
    video: "/signs/nzVideo/cup.mp4"
  },
  dash: {
    display: "💨 DASH",
    video: "/signs/nzVideo/dash.mp4"
  },
  deafblind: {
    display: "👁️‍🗨️ DEAFBLIND",
    video: "/signs/nzVideo/deafblind.mp4"
  },
  "don't tell": {
    display: "🤫 DON'T-TELL",
    video: "/signs/nzVideo/don't tell.mp4"
  },
  "dont care about": {
    display: "🤷 DON'T-CARE",
    video: "/signs/nzVideo/dont care about.mp4"
  },
  each: {
    display: "👥 EACH",
    video: "/signs/nzVideo/each.mp4"
  },
  "every day": {
    display: "📅 EVERY-DAY",
    video: "/signs/nzVideo/every day.mp4"
  },
  "excuse me": {
    display: "🙏 EXCUSE-ME",
    video: "/signs/nzVideo/excuse me.mp4"
  },
  exit: {
    display: "🚪 EXIT",
    video: "/signs/nzVideo/exit.mp4"
  },
  "fish and chips": {
    display: "🐟🍟 FISH-AND-CHIPS",
    video: "/signs/nzVideo/fish and chips.mp4"
  },
  flirt: {
    display: "😘 FLIRT",
    video: "/signs/nzVideo/flirt.mp4"
  },
  follow: {
    display: "👣 FOLLOW",
    video: "/signs/nzVideo/follow.mp4"
  },
  fortnightly: {
    display: "📅 FORTNIGHTLY",
    video: "/signs/nzVideo/fortnightly.mp4"
  },
  from: {
    display: "⬅️ FROM",
    video: "/signs/nzVideo/from.mp4"
  },
  "get intimate": {
    display: "💕 GET-INTIMATE",
    video: "/signs/nzVideo/get intimate.mp4"
  },
  "get the impression": {
    display: "💭 GET-IMPRESSION",
    video: "/signs/nzVideo/get the impression.mp4"
  },
  "go away": {
    display: "👋 GO-AWAY",
    video: "/signs/nzVideo/go away.mp4"
  },
  "go to bed": {
    display: "🛏️ GO-TO-BED",
    video: "/signs/nzVideo/go to bed.mp4"
  },
  "go wild": {
    display: "🎉 GO-WILD",
    video: "/signs/nzVideo/go wild.mp4"
  },
  gosh: {
    display: "😮 GOSH",
    video: "/signs/nzVideo/gosh.mp4"
  },
  happen: {
    display: "⚡ HAPPEN",
    video: "/signs/nzVideo/happen.mp4"
  },
  "i haven't": {
    display: "🙅 I-HAVEN'T",
    video: "/signs/nzVideo/i haven't.mp4"
  },
  "jump for joy": {
    display: "🎊 JUMP-FOR-JOY",
    video: "/signs/nzVideo/jump for joy.mp4"
  },
  "last name": {
    display: "👥 LAST-NAME",
    video: "/signs/nzVideo/last name.mp4"
  },
  later: {
    display: "⏰ LATER",
    video: "/signs/nzVideo/later.mp4"
  },
  "let me know": {
    display: "💬 LET-ME-KNOW",
    video: "/signs/nzVideo/let me know.mp4"
  },
  "let's": {
    display: "👥 LET'S",
    video: "/signs/nzVideo/let's.mp4"
  },
  "live together": {
    display: "🏠 LIVE-TOGETHER",
    video: "/signs/nzVideo/live together.mp4"
  },
  "me too": {
    display: "👆 ME-TOO",
    video: "/signs/nzVideo/me too.mp4"
  },
  miscommunicate: {
    display: "❌💬 MISCOMMUNICATE",
    video: "/signs/nzVideo/miscommunicate.mp4"
  },
  must: {
    display: "❗ MUST",
    video: "/signs/nzVideo/must.mp4"
  },
  "my turn": {
    display: "👆 MY-TURN",
    video: "/signs/nzVideo/my turn.mp4"
  },
  neutral: {
    display: "⚖️ NEUTRAL",
    video: "/signs/nzVideo/neutral.mp4"
  },
  "no good": {
    display: "👎 NO-GOOD",
    video: "/signs/nzVideo/no good.mp4"
  },
  "no more": {
    display: "🚫 NO-MORE",
    video: "/signs/nzVideo/no more.mp4"
  },
  no: {
    display: "❌ NO",
    video: "/signs/nzVideo/no.mp4"
  },
  "not enough": {
    display: "📉 NOT-ENOUGH",
    video: "/signs/nzVideo/not enough.mp4"
  },
  oops: {
    display: "😬 OOPS",
    video: "/signs/nzVideo/oops.mp4"
  },
  orgasm: {
    display: "💥 ORGASM",
    video: "/signs/nzVideo/orgasm.mp4"
  },
  parents: {
    display: "👨‍👩‍👧‍👦 PARENTS",
    video: "/signs/nzVideo/parents.mp4"
  },
  "put up with": {
    display: "😤 PUT-UP-WITH",
    video: "/signs/nzVideo/put up with.mp4"
  },
  really: {
    display: "❗ REALLY",
    video: "/signs/nzVideo/really.mp4"
  },
  return: {
    display: "🔄 RETURN",
    video: "/signs/nzVideo/return.mp4"
  },
  safe: {
    display: "🛡️ SAFE",
    video: "/signs/nzVideo/safe.mp4"
  },
  "shame on you": {
    display: "😤 SHAME-ON-YOU",
    video: "/signs/nzVideo/shame on you.mp4"
  },
  should: {
    display: "👉 SHOULD",
    video: "/signs/nzVideo/should.mp4"
  },
  sibling: {
    display: "👫 SIBLING",
    video: "/signs/nzVideo/sibling.mp4"
  },
  "sick of it": {
    display: "😠 SICK-OF-IT",
    video: "/signs/nzVideo/sick of it.mp4"
  },
  sleepless: {
    display: "😴❌ SLEEPLESS",
    video: "/signs/nzVideo/sleepless.mp4"
  },
  subtract: {
    display: "➖ SUBTRACT",
    video: "/signs/nzVideo/subtract.mp4"
  },
  sympathise: {
    display: "💝 SYMPATHISE",
    video: "/signs/nzVideo/sympathise.mp4"
  },
  "tell me": {
    display: "💬 TELL-ME",
    video: "/signs/nzVideo/tell me.mp4"
  },
  than: {
    display: "⚖️ THAN",
    video: "/signs/nzVideo/than.mp4"
  },
  "to have": {
    display: "🤲 TO-HAVE",
    video: "/signs/nzVideo/to have.mp4"
  },
  underground: {
    display: "⬇️ UNDERGROUND",
    video: "/signs/nzVideo/underground.mp4"
  },
  water: {
    display: "💧 WATER",
    video: "/signs/nzVideo/water.mp4"
  },
  whoops: {
    display: "😅 WHOOPS",
    video: "/signs/nzVideo/whoops.mp4"
  },
  wine: {
    display: "🍷 WINE",
    video: "/signs/nzVideo/wine.mp4"
  },
  with: {
    display: "🤝 WITH",
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
