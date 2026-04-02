/*
 * Holy Week Data — Sacred Cartography Design
 * Enriched with Passover calendar typology, Gospel harmony notes,
 * Nisan dates, lamb inspection framing, and scholarly commentary.
 */

export interface GospelRef {
  matthew?: string;
  mark?: string;
  luke?: string;
  john?: string;
}

export interface HolyWeekEvent {
  title: string;
  refs: GospelRef;
}

export interface Prophecy {
  ot: string;
  otText: string;
  nt: string;
  ntText: string;
}

export interface DayData {
  id: string;
  dayNumber: number;
  dayName: string;
  nisanDate?: string;
  title: string;
  subtitle: string;
  theme: string;
  color: string;
  colorLight: string;
  image?: string;
  events: HolyWeekEvent[];
  narrative: string[];
  keyVerse?: { text: string; ref: string };
  prophecies: Prophecy[];
  teachings?: { title: string; text: string; ref: string }[];
  gospelEmphasis?: { gospel: string; emphasis: string }[];
  tables?: { title: string; headers: string[]; rows: string[][] }[];
  gospelHarmonyNote?: string;
  lambTypologyNote?: string;
  timingNote?: string;
  scholarlyInsight?: string;
  studyInsight?: string;
}

export const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/90544947/mwbMJY7B7DNq9Q9aceSUBc/hero-jerusalem-jBmMbpnrAKZHj8adUp7Wq8.webp",
  palmSunday: "https://d2xsxph8kpxj0f.cloudfront.net/90544947/mwbMJY7B7DNq9Q9aceSUBc/palm-sunday-NcYAaDcgJXjLr4nWhpDtey.webp",
  lastSupper: "https://d2xsxph8kpxj0f.cloudfront.net/90544947/mwbMJY7B7DNq9Q9aceSUBc/last-supper-CqwDxVpZy6PouvxRFqW6qw.webp",
  golgotha: "https://d2xsxph8kpxj0f.cloudfront.net/90544947/mwbMJY7B7DNq9Q9aceSUBc/golgotha-HLJxH4UxxhiwuXZhp3pbuw.webp",
  emptyTomb: "https://d2xsxph8kpxj0f.cloudfront.net/90544947/mwbMJY7B7DNq9Q9aceSUBc/empty-tomb-LtUFcTwKN6yY3QYa5SrwPu.webp",
};

export const DAYS: DayData[] = [
  {
    id: "saturday",
    dayNumber: 0,
    dayName: "Saturday",
    nisanDate: "Nisan 9",
    title: "Arrival in Bethany",
    subtitle: "The Anointing at Bethany",
    theme: "Preparation & Devotion",
    color: "#8B7355",
    colorLight: "#D4C5A9",
    events: [
      { title: "Jesus arrives in Bethany", refs: { john: "12:1" } },
      { title: "Mary anoints Jesus with costly perfume", refs: { matthew: "26:6-13", mark: "14:3-9", john: "12:2-8" } },
      { title: "Crowd comes to see Jesus and Lazarus", refs: { john: "12:9-11" } },
    ],
    narrative: [
      "Six days before the Passover, Jesus arrived in Bethany, a small village approximately two miles east of Jerusalem on the eastern slope of the Mount of Olives. He came to the home of Lazarus, whom He had recently raised from the dead \u2014 an event that had electrified the entire region and prompted the chief priests to plot the death of both Jesus and Lazarus (John 12:10\u201311).",
      "At a dinner held in His honor at the house of Simon the Leper, Mary took a pound of expensive ointment made from pure nard \u2014 worth approximately 300 denarii, nearly a year\u2019s wages \u2014 and anointed Jesus\u2019 feet, wiping them with her hair. The house was filled with the fragrance. Judas Iscariot objected, citing concern for the poor, though John notes his true motive was theft from the common purse (John 12:4\u20136).",
      "Jesus defended Mary\u2019s act: \u201cLeave her alone, so that she may keep it for the day of my burial.\u201d He was the only person in the room who understood what was coming. Mary\u2019s extravagant devotion was, unknowingly, a consecration of the Lamb for sacrifice. Jesus declared that wherever the gospel is preached in the whole world, \u201cwhat she has done will also be told in memory of her\u201d (Mark 14:9).",
    ],
    keyVerse: { text: "Leave her alone, so that she may keep it for the day of my burial.", ref: "John 12:7" },
    prophecies: [],
    gospelEmphasis: [
      { gospel: "Matthew", emphasis: "Places the anointing in the home of Simon the leper; notes the disciples\u2019 indignation broadly" },
      { gospel: "Mark", emphasis: "Notes the perfume was worth more than 300 denarii; records Jesus\u2019 promise that her act would be told worldwide" },
      { gospel: "John", emphasis: "Identifies Mary as the woman, Judas as the objector, and reveals Judas\u2019 dishonest motive" },
    ],
    gospelHarmonyNote: "A chronological question arises: John 12:1 places the anointing \u201csix days before the Passover,\u201d while Matthew 26:2 and Mark 14:1 place their accounts \u201ctwo days before.\u201d Most scholars (Carson, France, Blomberg) conclude that Matthew and Mark narrate the anointing in a thematic flashback, while John preserves the strict chronological order.",
    studyInsight: "Mary’s anointing is an act of extravagant devotion that the world calls waste and Jesus calls beautiful. It teaches that true worship is costly, personal, and often misunderstood by those standing nearby. She alone seems to grasp what is coming — and she pours out everything in advance of the burial.",
    lambTypologyNote: "The anointing of Jesus with costly nard parallels the consecration of sacrificial animals in the Old Testament. As the Passover lamb was set apart before slaughter, Mary unknowingly consecrated the Lamb of God for His approaching sacrifice.",
  },
  {
    id: "palm-sunday",
    dayNumber: 1,
    dayName: "Palm Sunday",
    nisanDate: "Nisan 10",
    title: "The Triumphal Entry",
    subtitle: "The King Arrives \u2014 The Lamb Is Selected",
    theme: "Kingship & Prophecy Fulfilled",
    color: "#2D6A4F",
    colorLight: "#B7E4C7",
    image: IMAGES.palmSunday,
    events: [
      { title: "Triumphal Entry into Jerusalem", refs: { matthew: "21:1-11", mark: "11:1-10", luke: "19:28-44", john: "12:12-19" } },
      { title: "Jesus weeps over Jerusalem", refs: { luke: "19:41-44" } },
      { title: "Jesus enters and surveys the temple", refs: { matthew: "21:14-17", mark: "11:11" } },
      { title: "Returns to Bethany for the night", refs: { matthew: "21:17", mark: "11:11" } },
    ],
    narrative: [
      "Jesus sent two disciples to Bethphage to retrieve a donkey and her colt, giving precise instructions that fulfilled Zechariah\u2019s ancient prophecy. As He descended the Mount of Olives, multitudes spread their cloaks and palm branches on the road, shouting \u201cHosanna to the Son of David!\u201d \u2014 a direct quotation from Psalm 118:25\u201326, one of the Hallel psalms (Psalms 113\u2013118) chanted during the Passover lamb slaughter in the temple courts.",
      "The word \u201cHosanna\u201d derives from the Hebrew hoshi\u2019ah na, meaning \u201cSave us, we pray!\u201d The crowd was invoking messianic language, though their expectations remained fixated on political liberation from Rome rather than spiritual redemption. The Pharisees demanded Jesus silence the crowd; He replied, \u201cIf these were silent, the very stones would cry out\u201d (Luke 19:40).",
      "Luke alone records that as Jesus crested the Mount of Olives and the full panorama of Jerusalem came into view, He wept over the city. His tears were prophetic. He declared that because Jerusalem did not recognize \u201cthe time of your visitation,\u201d the city would be surrounded, leveled, and its children destroyed \u2014 a prophecy fulfilled with devastating precision in 70 A.D. when the Roman general Titus destroyed Jerusalem.",
      "The Triumphal Entry occurred on Nisan 10 \u2014 the very day when, according to Exodus 12:3, each Israelite household was to select its Passover lamb. As thousands of lambs were being led into Jerusalem for inspection, the true Lamb of God entered the city from the east, through the same gate. Ezekiel had prophesied that the glory of God, which departed the temple eastward (Ezekiel 10:18\u201319; 11:23), would return from the east (Ezekiel 43:1\u20135). Jesus\u2019 entry fulfilled this pattern.",
    ],
    keyVerse: { text: "Hosanna to the Son of David! Blessed is he who comes in the name of the Lord! Hosanna in the highest!", ref: "Matthew 21:9" },
    prophecies: [
      { ot: "Zechariah 9:9", otText: "Behold, your king is coming to you; righteous and having salvation is he, humble and mounted on a donkey.", nt: "Matthew 21:4-7", ntText: "This took place to fulfill what was spoken by the prophet..." },
      { ot: "Psalm 118:25-26", otText: "Save us, we pray, O Lord!... Blessed is he who comes in the name of the Lord!", nt: "Matthew 21:9", ntText: "The crowds cried \u2018Hosanna! Blessed is he who comes in the name of the Lord!\u2019" },
      { ot: "Psalm 8:2", otText: "Out of the mouth of babes and infants, you have established strength.", nt: "Matthew 21:16", ntText: "Jesus quotes this psalm when the children cry \u2018Hosanna\u2019 in the temple." },
      { ot: "Genesis 49:10-11", otText: "The scepter shall not depart from Judah... binding his foal to the vine.", nt: "Matthew 21:2-7", ntText: "Jesus rides a donkey\u2019s colt into Jerusalem as the royal heir of Judah." },
    ],
    gospelEmphasis: [
      { gospel: "Matthew", emphasis: "Emphasizes fulfillment of Zechariah 9:9; mentions both donkey and colt; records children crying Hosanna in the temple and Jesus quoting Psalm 8:2 as a deity claim" },
      { gospel: "Mark", emphasis: "Jesus surveys the temple and returns to Bethany \u2014 a deliberate, measured approach; the cleansing waits until Monday" },
      { gospel: "Luke", emphasis: "Unique: Jesus weeps over Jerusalem and prophesies its destruction; Pharisees demand He silence the crowd" },
      { gospel: "John", emphasis: "Connects the entry to the raising of Lazarus as the catalyst; the Pharisees lament \u2018the world has gone after him\u2019" },
    ],
    studyInsight: "Jesus deliberately presents Himself as the promised King, yet He comes lowly and peaceably, not as a conquering nationalist hero. The same moment that feels triumphant also carries sorrow, because Jerusalem does not recognize the time of her visitation.",
    lambTypologyNote: "Nisan 10: The day of lamb selection (Exodus 12:3). As Israel selected its Passover lambs, God presented His Lamb to the nation. The four-day inspection period (Nisan 10\u201314) begins \u2014 every question, trap, and challenge from the religious leaders over the next days constitutes the \u2018inspection\u2019 of the Lamb, who must be found \u2018without blemish\u2019 (Exodus 12:5; 1 Peter 1:19).",
    scholarlyInsight: "Sir Robert Anderson calculated in The Coming Prince (1894) that Daniel 9:24\u201326\u2019s prophecy of \u201csixty-nine weeks\u201d (483 prophetic years of 360 days = 173,880 days) from the decree to rebuild Jerusalem (Nehemiah 2:1\u20138, Nisan 1, 444 B.C.) culminates precisely on Nisan 10, A.D. 33 \u2014 the day of the Triumphal Entry. Whether one accepts Anderson\u2019s exact arithmetic, the convergence of Daniel\u2019s timeline with Palm Sunday remains one of the most remarkable prophetic correspondences in Scripture.",
  },
  {
    id: "monday",
    dayNumber: 2,
    dayName: "Monday",
    nisanDate: "Nisan 11",
    title: "The Temple Cleansed",
    subtitle: "Judgment on Fruitlessness",
    theme: "Authority & Judgment",
    color: "#B8860B",
    colorLight: "#F5E6B8",
    events: [
      { title: "Jesus curses the barren fig tree", refs: { matthew: "21:18-19", mark: "11:12-14" } },
      { title: "Jesus cleanses the temple (second cleansing)", refs: { matthew: "21:12-13", mark: "11:15-18", luke: "19:45-48" } },
      { title: "Returns to Bethany with the Twelve", refs: { mark: "11:19" } },
    ],
    narrative: [
      "Monday began with a powerful enacted parable. Traveling from Bethany to Jerusalem, Jesus approached a fig tree in full leaf. In Palestine, fig trees produce small early fruit (Hebrew: taqsh) before or alongside their leaves. A tree covered in leaves but bearing no fruit was a false advertisement \u2014 all appearance, no substance. Jesus cursed the tree: \u201cMay no one ever eat fruit from you again.\u201d",
      "This was not an act of petulance. It was a prophetic sign-act, a genre well established in the Old Testament prophets (cf. Jeremiah 19; Ezekiel 4\u20135). The fig tree symbolized the nation of Israel \u2014 outwardly religious, adorned with the leaves of ritual observance, yet spiritually barren and fruitless. Mark\u2019s Gospel uses a literary \u201csandwich\u201d (intercalation) structure: fig tree cursed (11:12\u201314), temple cleansed (11:15\u201319), fig tree withered (11:20\u201326) \u2014 making the temple the \u201cfilling\u201d and the fig tree the interpretive frame.",
      "Arriving at the temple, Jesus executed a forceful cleansing of the Court of the Gentiles. He overturned the tables of the money changers and the benches of those selling doves. His words combined two prophetic texts: \u201cMy house shall be called a house of prayer for all nations\u201d (Isaiah 56:7), but \u201cyou have made it a den of robbers\u201d (Jeremiah 7:11). This is the second temple cleansing \u2014 the first occurred at the beginning of Jesus\u2019 ministry (John 2:13\u201322).",
      "The temple market, controlled by the family of the high priest Annas, had transformed the only space where Gentiles could worship into a noisy, exploitative bazaar. Jesus\u2019 action was a direct challenge to the economic and spiritual corruption of the religious establishment. When children cried \u201cHosanna to the Son of David\u201d in the temple, Jesus defended them by quoting Psalm 8:2 \u2014 a psalm about the LORD, thereby making an implicit deity claim (Matthew 21:15\u201316).",
    ],
    keyVerse: { text: "My house shall be called a house of prayer for all nations, but you have made it a den of robbers.", ref: "Mark 11:17" },
    prophecies: [
      { ot: "Isaiah 56:7", otText: "My house shall be called a house of prayer for all peoples.", nt: "Mark 11:17", ntText: "Jesus quotes this text directly while cleansing the temple." },
      { ot: "Jeremiah 7:11", otText: "Has this house, which is called by my name, become a den of robbers in your eyes?", nt: "Mark 11:17", ntText: "Jesus combines Isaiah and Jeremiah in His rebuke." },
      { ot: "Malachi 3:1-3", otText: "The Lord whom you seek will suddenly come to his temple... He will purify the sons of Levi.", nt: "Mark 11:15-17", ntText: "Jesus arrives at the temple and purifies its worship. Malachi identifies the temple-purifier as \u2018the Lord\u2019 (Adonai) \u2014 another implicit deity claim." },
    ],
    studyInsight: "The fig tree and the temple belong together. The tree had leaves but no fruit; the temple had activity but lacked holiness, prayer, justice, and true recognition of God. Jesus\u2019 action is not mere irritation. It is prophetic judgment.",
    lambTypologyNote: "Nisan 11: The inspection of the Passover lamb continues. Jesus\u2019 authority over the temple \u2014 the very house of God \u2014 demonstrates that the Lamb is also the Lord of the temple. The fig tree and the temple cleansing together picture God\u2019s judgment on a religious system that has failed to bear fruit.",
    gospelHarmonyNote: "Matthew compresses the fig tree and temple cleansing into a single narrative on Monday. Mark separates them across two days (cursing on Monday, discovery of withering on Tuesday), creating the interpretive \u2018sandwich\u2019 structure. Luke omits the fig tree entirely but includes the cleansing.",
  },
  {
    id: "tuesday",
    dayNumber: 3,
    dayName: "Tuesday",
    nisanDate: "Nisan 12",
    title: "The Day of Controversy",
    subtitle: "Parables, Woes & the Olivet Discourse",
    theme: "Teaching & Confrontation",
    color: "#CC5500",
    colorLight: "#FFD4B2",
    events: [
      { title: "Disciples see the withered fig tree", refs: { matthew: "21:20-22", mark: "11:20-26" } },
      { title: "Question about Jesus\u2019 authority", refs: { matthew: "21:23-27", mark: "11:27-33", luke: "20:1-8" } },
      { title: "Parable of the Two Sons", refs: { matthew: "21:28-32" } },
      { title: "Parable of the Wicked Tenants", refs: { matthew: "21:33-46", mark: "12:1-12", luke: "20:9-19" } },
      { title: "Parable of the Wedding Feast", refs: { matthew: "22:1-14" } },
      { title: "Paying tribute to Caesar", refs: { matthew: "22:15-22", mark: "12:13-17", luke: "20:20-26" } },
      { title: "Debate on the resurrection", refs: { matthew: "22:23-33", mark: "12:18-27", luke: "20:27-40" } },
      { title: "The Greatest Commandment", refs: { matthew: "22:34-40", mark: "12:28-34" } },
      { title: "Greeks seek Jesus", refs: { john: "12:20-36" } },
      { title: "Seven Woes against the Pharisees", refs: { matthew: "23:1-36", mark: "12:37-40", luke: "20:45-47" } },
      { title: "The Widow\u2019s Mite", refs: { mark: "12:41-44", luke: "21:1-4" } },
      { title: "The Olivet Discourse", refs: { matthew: "24:1-25:46", mark: "13:1-37", luke: "21:5-36" } },
    ],
    narrative: [
      "Tuesday is the longest and most theologically dense day of Holy Week. Jesus engaged in a sustained public confrontation with every faction of the Jewish leadership, delivered His most devastating parables, and concluded with the sweeping eschatological vision of the Olivet Discourse.",
      "The morning began with the lesson of the withered fig tree \u2014 now dead to its roots overnight. Jesus used the moment to teach about the power of faith and prayer. Upon entering the temple courts, He faced a coordinated theological assault from the chief priests, Pharisees, Herodians, and Sadducees \u2014 each faction serving as an \u2018inspector\u2019 of the Lamb, testing Him from every angle.",
      "Each group tried to trap Him with a question. Each failed. His answers \u2014 on authority, taxes, resurrection, and the greatest commandment \u2014 silenced them all. Mark 12:28\u201334 uniquely records a positive exchange: a scribe who asked about the greatest commandment and whom Jesus told, \u201cYou are not far from the kingdom of God.\u201d After this, \u201cno one dared to ask him any more questions\u201d (Mark 12:34).",
      "John uniquely records that certain Greeks came seeking Jesus (John 12:20\u201336), prompting Him to speak of His coming death as a grain of wheat falling into the ground: \u201cUnless a grain of wheat falls into the earth and dies, it remains alone; but if it dies, it bears much fruit\u201d (John 12:24). This moment marks a turning point \u2014 \u201cThe hour has come for the Son of Man to be glorified\u201d \u2014 and a voice from heaven confirms the Father\u2019s purpose.",
      "Jesus concluded His public teaching with seven devastating \u201cwoes\u201d against the scribes and Pharisees \u2014 charging them with hypocrisy, spiritual blindness, and the murder of prophets. Departing the temple for the final time, He sat on the Mount of Olives and delivered the Olivet Discourse, His most extensive prophetic teaching about the destruction of Jerusalem and His Second Coming.",
    ],
    keyVerse: { text: "Render to Caesar the things that are Caesar\u2019s, and to God the things that are God\u2019s.", ref: "Mark 12:17" },
    prophecies: [
      { ot: "Psalm 118:22-23", otText: "The stone the builders rejected has become the cornerstone.", nt: "Matthew 21:42", ntText: "Jesus quotes this directly in the Parable of the Wicked Tenants." },
      { ot: "Psalm 110:1", otText: "The Lord said to my Lord, \u2018Sit at my right hand...\u2019", nt: "Matthew 22:44", ntText: "Jesus uses this to demonstrate the Messiah\u2019s divine nature." },
      { ot: "Daniel 9:26", otText: "After the sixty-two weeks, an anointed one shall be cut off.", nt: "Matthew 24:2", ntText: "Jesus predicts the temple\u2019s destruction, fulfilled in 70 A.D." },
      { ot: "Daniel 7:13-14", otText: "I saw in the night visions, and behold, with the clouds of heaven there came one like a son of man... to him was given dominion and glory and a kingdom.", nt: "Matthew 24:30; 26:64", ntText: "The Son of Man imagery stands behind Jesus\u2019 eschatological authority in the Olivet Discourse and His declaration before the Sanhedrin." },
    ],
    tables: [
      {
        title: "The Five Temple Controversies",
        headers: ["Confrontation", "Challengers", "Jesus\u2019 Response", "Reference"],
        rows: [
          ["The Authority Question", "Chief priests, scribes, elders", "Counter-question about John\u2019s baptism", "Matt 21:23-27"],
          ["Paying Taxes to Caesar", "Pharisees and Herodians", "\u201cRender to Caesar... and to God...\u201d", "Matt 22:15-22"],
          ["The Resurrection Debate", "Sadducees", "\u201cHe is not God of the dead, but of the living\u201d", "Matt 22:23-33"],
          ["The Greatest Commandment", "A scribe / lawyer", "Love God; love your neighbor", "Matt 22:34-40"],
          ["David\u2019s Son", "Jesus poses the question", "Quotes Psalm 110:1 \u2014 Messiah is greater than David", "Matt 22:41-46"],
        ],
      },
      {
        title: "The Seven Woes (Matthew 23)",
        headers: ["Woe", "Charge", "Reference"],
        rows: [
          ["1st", "They shut the kingdom of heaven in people\u2019s faces", "Matt 23:13"],
          ["2nd", "They make converts twice as much children of hell", "Matt 23:15"],
          ["3rd", "They are blind guides who swear deceptive oaths", "Matt 23:16-22"],
          ["4th", "They tithe herbs but neglect justice, mercy, faithfulness", "Matt 23:23-24"],
          ["5th", "They clean the outside but are full of greed inside", "Matt 23:25-26"],
          ["6th", "Whitewashed tombs \u2014 beautiful outside, dead inside", "Matt 23:27-28"],
          ["7th", "They build tombs for prophets while being sons of their murderers", "Matt 23:29-36"],
        ],
      },
      {
        title: "Olivet Discourse Parables",
        headers: ["Parable", "Theme", "Key Teaching", "Reference"],
        rows: [
          ["The Ten Virgins", "Preparedness", "Be ready; the bridegroom comes at an unexpected hour", "Matt 25:1-13"],
          ["The Talents", "Faithfulness", "Use what God has entrusted; do not bury your gifts", "Matt 25:14-30"],
          ["The Sheep and Goats", "Compassion & Judgment", "How you treat \u2018the least of these\u2019 reflects your relationship with Christ", "Matt 25:31-46"],
        ],
      },
    ],
    studyInsight: "Tuesday is the longest and most intense public teaching day of Holy Week. Jesus tears away masks. He exposes the gap between profession and obedience, religion and righteousness, admiration and discipleship. He also prepares His followers to live watchfully in the face of coming judgment and future hope.",
    lambTypologyNote: "Nisan 12: The inspection intensifies. Every faction of Israel\u2019s leadership \u2014 Pharisees (theology), Herodians (politics), Sadducees (philosophy), scribes (law) \u2014 examines the Lamb from every angle. Each finds no blemish. The Lamb passes every test, fulfilling Exodus 12:5: \u201cYour lamb shall be without blemish.\u201d After this day, \u201cno one dared to ask him any more questions\u201d (Mark 12:34) \u2014 the inspection is complete.",
    gospelHarmonyNote: "John places the Greeks\u2019 approach and the grain-of-wheat discourse on this day, while the Synoptics focus on the temple controversies. Together they reveal both the public confrontation and the private turning point: the hour of glorification through suffering has arrived.",
  },
  {
    id: "wednesday",
    dayNumber: 4,
    dayName: "Wednesday",
    nisanDate: "Nisan 13",
    title: "The Gathering Storm",
    subtitle: "Conspiracy & Betrayal",
    theme: "Silence & Conspiracy",
    color: "#5A6672",
    colorLight: "#C8CED6",
    events: [
      { title: "Jesus continues daily teaching", refs: { luke: "21:37-38" } },
      { title: "Sanhedrin plots to kill Jesus", refs: { matthew: "26:3-5", mark: "14:1-2", luke: "22:1-2" } },
      { title: "Judas agrees to betray Jesus for 30 pieces of silver", refs: { matthew: "26:14-16", mark: "14:10-11", luke: "22:3-6" } },
    ],
    narrative: [
      "The Gospels record no public activities for Jesus on Wednesday. He likely remained in Bethany, resting with His disciples in preparation for the Passover. Luke\u2019s summary statement confirms that Jesus had been \u201cteaching daily in the temple\u201d throughout the week, but Wednesday appears to have been a deliberate pause \u2014 the calm before the storm.",
      "Behind the scenes, the forces of darkness converged. The Sanhedrin, desperate to eliminate Jesus without provoking a riot during the festival, convened to finalize their conspiracy. They needed an insider. Judas Iscariot provided the solution. Luke records that \u201cSatan entered into Judas,\u201d and he went to the chief priests, offering to betray Jesus at a time and place away from the crowds.",
      "They agreed upon a price: thirty pieces of silver \u2014 the exact sum prophesied by Zechariah centuries earlier (Zechariah 11:12\u201313), and notably the price of a slave gored by an ox under Mosaic law (Exodus 21:32). The valuation was deliberately contemptuous: the leaders of Israel priced the Messiah at the value of a dead slave. Judas\u2019 betrayal also echoes the typological parallel of Ahithophel, David\u2019s trusted counselor who betrayed him and hanged himself (2 Samuel 15:12; 17:23) \u2014 precisely as Judas would do.",
    ],
    keyVerse: { text: "Then Satan entered into Judas called Iscariot, who was of the number of the twelve.", ref: "Luke 22:3" },
    prophecies: [
      { ot: "Zechariah 11:12-13", otText: "They weighed out as my wages thirty pieces of silver... Throw it to the potter.", nt: "Matthew 26:14-16; 27:3-10", ntText: "Judas receives thirty silver coins; later returns them; the money buys the potter\u2019s field." },
      { ot: "Psalm 41:9", otText: "Even my close friend in whom I trusted, who ate my bread, has lifted his heel against me.", nt: "John 13:18", ntText: "Jesus quotes this psalm directly at the Last Supper, identifying Judas." },
    ],
    studyInsight: "Wednesday is often called Silent Wednesday. It is quiet in public, but dark in the shadows. The plot advances. Judas bargains cheaply with what is infinitely precious. Yet even this hidden treachery unfolds within the sovereign purpose of God.",
    lambTypologyNote: "Nisan 13: The day before slaughter. The lamb has been inspected and found without blemish. Now the preparations for the kill begin. The price is set \u2014 thirty pieces of silver \u2014 and the betrayer is commissioned. The machinery of sacrifice is in motion.",
    scholarlyInsight: "Matthew 27:9 attributes the potter\u2019s field prophecy to \u201cJeremiah\u201d rather than Zechariah. This likely reflects the ancient Jewish practice of citing the first book in a prophetic scroll division (Jeremiah headed the \u201clatter prophets\u201d in some orderings), or a composite quotation drawing from both Zechariah 11:12\u201313 and Jeremiah 18\u201319; 32:6\u20139 (the potter and the field purchase).",
  },
  {
    id: "thursday",
    dayNumber: 5,
    dayName: "Thursday",
    nisanDate: "Nisan 14",
    title: "The Last Supper",
    subtitle: "The Upper Room & Gethsemane",
    theme: "Covenant, Love & Agony",
    color: "#4A1A6B",
    colorLight: "#D4B8E8",
    image: IMAGES.lastSupper,
    events: [
      { title: "Preparations for the Passover", refs: { matthew: "26:17-19", mark: "14:12-16", luke: "22:7-13" } },
      { title: "Jesus washes the disciples\u2019 feet", refs: { john: "13:1-20" } },
      { title: "The Passover meal / Last Supper", refs: { matthew: "26:20-29", mark: "14:17-25", luke: "22:14-30" } },
      { title: "Judas identified and departs", refs: { matthew: "26:21-25", mark: "14:18-21", luke: "22:21-23", john: "13:21-30" } },
      { title: "Institution of the Lord\u2019s Supper", refs: { matthew: "26:26-29", mark: "14:22-25", luke: "22:15-20" } },
      { title: "The Upper Room Discourse", refs: { john: "13:31-16:33" } },
      { title: "The High Priestly Prayer", refs: { john: "17:1-26" } },
      { title: "Prediction of Peter\u2019s denial", refs: { matthew: "26:31-35", mark: "14:27-31", luke: "22:31-34", john: "13:36-38" } },
      { title: "Agony in Gethsemane", refs: { matthew: "26:36-46", mark: "14:32-42", luke: "22:39-46", john: "18:1" } },
    ],
    narrative: [
      "Thursday afternoon, Jesus sent Peter and John into the city with specific instructions: they would encounter a man carrying a jar of water \u2014 an unusual sight, as women typically carried water \u2014 who would lead them to a house with a large upper room already furnished. The precision of these instructions demonstrates Jesus\u2019 sovereign orchestration of events.",
      "As the evening meal began, Jesus rose from the table, wrapped a towel around His waist, and began washing the disciples\u2019 feet \u2014 a task reserved for the lowest household servant. Peter protested; Jesus replied, \u201cIf I do not wash you, you have no share with me.\u201d This act established the paradigm of servant leadership that would define the church, embodying the self-emptying described in Philippians 2:5\u20138.",
      "During the Passover meal, Jesus reinterpreted the ancient feast. He took the unleavened bread, gave thanks, broke it, and said: \u201cThis is my body, which is given for you.\u201d He then took the cup: \u201cThis cup that is poured out for you is the new covenant in my blood.\u201d The old covenant had been ratified with blood (Exodus 24:8: \u201cBehold the blood of the covenant\u201d); now the new covenant prophesied by Jeremiah (31:31\u201334) was being inaugurated with the blood of the Lamb Himself.",
      "Found exclusively in John\u2019s Gospel, the Upper Room Discourse (chapters 13\u201317) is the most intimate and theologically rich teaching Jesus ever delivered \u2014 covering the new commandment of love, the promise of the Holy Spirit (the Paraclete), the True Vine, and the High Priestly Prayer in which Jesus prays for the unity and sanctification of all believers across all ages.",
      "After singing a hymn \u2014 almost certainly the second half of the Hallel (Psalms 115\u2013118), which includes the prophetic words \u201cThe stone the builders rejected has become the cornerstone\u201d (Psalm 118:22) \u2014 Jesus and the disciples crossed the Kidron Valley to Gethsemane. Three times He prayed: \u201cFather, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done.\u201d The \u201ccup\u201d is the cup of God\u2019s wrath against sin (Isaiah 51:17, 22; Jeremiah 25:15\u201316). Luke records that His sweat became like great drops of blood \u2014 a medical condition called hematidrosis, caused by extreme anguish.",
    ],
    keyVerse: { text: "This cup that is poured out for you is the new covenant in my blood.", ref: "Luke 22:20" },
    prophecies: [
      { ot: "Jeremiah 31:31-34", otText: "I will make a new covenant... I will put my law within them.", nt: "Luke 22:20", ntText: "\u201cThis cup is the new covenant in my blood.\u201d" },
      { ot: "Zechariah 13:7", otText: "Strike the shepherd, and the sheep will be scattered.", nt: "Matthew 26:31, 56", ntText: "Jesus quotes this directly; the disciples flee at His arrest." },
      { ot: "Exodus 24:8", otText: "Behold the blood of the covenant that the LORD has made with you.", nt: "Matthew 26:28", ntText: "Jesus echoes Moses\u2019 covenant-ratification language: \u201cThis is my blood of the covenant.\u201d" },
      { ot: "Isaiah 53:7", otText: "He was oppressed, and he was afflicted, yet he opened not his mouth; like a lamb that is led to the slaughter.", nt: "Matthew 26:63; John 18:1", ntText: "The suffering Servant approaches the appointed suffering. Jesus\u2019 silence before His accusers and His willing submission in Gethsemane fulfill this portrait." },
    ],
    teachings: [
      { title: "The New Commandment", text: "By this all people will know that you are my disciples, if you have love for one another.", ref: "John 13:34-35" },
      { title: "The Way, Truth, and Life", text: "I am the way, and the truth, and the life. No one comes to the Father except through me.", ref: "John 14:6" },
      { title: "The Promise of the Holy Spirit", text: "He will teach you all things and bring to your remembrance all that I have said to you.", ref: "John 14:26" },
      { title: "The True Vine", text: "I am the vine; you are the branches. Whoever abides in me bears much fruit.", ref: "John 15:5" },
      { title: "The High Priestly Prayer", text: "I do not ask that you take them out of the world, but that you keep them from the evil one.", ref: "John 17:15" },
    ],
    tables: [
      {
        title: "The Passover Lamb Typology",
        headers: ["Exodus 12 \u2014 The Passover Lamb", "The Lamb of God \u2014 Jesus Christ"],
        rows: [
          ["Selected on Nisan 10 (Exod 12:3)", "Jesus entered Jerusalem on Nisan 10 (Palm Sunday)"],
          ["Kept and examined for four days (Exod 12:6)", "Jesus examined and tested by leaders for four days"],
          ["Must be without blemish (Exod 12:5)", "Pilate declared \u201cI find no fault in him\u201d three times (Luke 23:4; John 18:38; 19:4, 6)"],
          ["Slain at twilight on Nisan 14 (Exod 12:6)", "Jesus crucified on Nisan 14 (Friday) at the hour of sacrifice"],
          ["No bone shall be broken (Exod 12:46)", "Not a bone of Jesus was broken (John 19:36)"],
          ["Blood applied to doorposts (Exod 12:7)", "His blood shed for forgiveness of sins (Matt 26:28)"],
          ["Eaten with unleavened bread and bitter herbs (Exod 12:8)", "Jesus broke unleavened bread: \u201cThis is my body\u201d (Luke 22:19)"],
        ],
      },
    ],
    studyInsight: "Thursday reveals the heart of Jesus. He loves His own to the end. He interprets His death as covenant sacrifice, kneels to wash feet, teaches His disciples to abide in Him, and submits in agony to the Father\u2019s will in Gethsemane.",
    lambTypologyNote: "Nisan 14: The day of slaughter. \u201cBetween the evenings\u201d (Hebrew: bein ha\u2019arbayim, Exodus 12:6), the Passover lambs were to be killed. Jesus transforms the Passover meal itself, identifying the bread as His body and the cup as His blood \u2014 the new covenant. The Lamb who has been selected, inspected, and found without blemish now prepares for sacrifice.",
    timingNote: "The Synoptic Gospels present the Last Supper as a Passover meal (Mark 14:12\u201316), while John\u2019s Gospel states that Jesus was crucified on \u201cthe day of Preparation of the Passover\u201d (John 19:14). The most widely accepted harmonization (Hoehner) proposes that Jesus followed an earlier calendar (possibly Essene or Galilean), eating the Passover on Thursday evening, while the official temple Passover was slaughtered on Friday \u2014 meaning Jesus died as the lambs were being killed.",
    gospelHarmonyNote: "John alone records the foot washing and the extended Upper Room Discourse (chapters 13\u201317). The Synoptics focus on the institution of the Lord\u2019s Supper, which John omits. Together they provide the complete picture of the evening.",
  },
  {
    id: "friday",
    dayNumber: 6,
    dayName: "Good Friday",
    nisanDate: "Nisan 14/15",
    title: "The Crucifixion",
    subtitle: "Arrest, Trials, Death & Burial",
    theme: "Sacrifice & Atonement",
    color: "#8B0000",
    colorLight: "#E8B4B4",
    image: IMAGES.golgotha,
    events: [
      { title: "Betrayal and arrest in Gethsemane", refs: { matthew: "26:47-56", mark: "14:43-52", luke: "22:47-53", john: "18:2-12" } },
      { title: "Trial before Annas", refs: { john: "18:13-24" } },
      { title: "Trial before Caiaphas & Sanhedrin", refs: { matthew: "26:57-68", mark: "14:53-65", luke: "22:54-65", john: "18:19-24" } },
      { title: "Peter\u2019s three denials", refs: { matthew: "26:69-75", mark: "14:66-72", luke: "22:54-62", john: "18:15-27" } },
      { title: "Judas\u2019 remorse and death", refs: { matthew: "27:3-10" } },
      { title: "Trial before full Sanhedrin (sunrise)", refs: { matthew: "27:1-2", mark: "15:1", luke: "22:66-71" } },
      { title: "First trial before Pilate", refs: { matthew: "27:11-14", mark: "15:2-5", luke: "23:1-5", john: "18:28-38" } },
      { title: "Trial before Herod Antipas", refs: { luke: "23:6-12" } },
      { title: "Second trial before Pilate; Barabbas released", refs: { matthew: "27:15-26", mark: "15:6-15", luke: "23:13-25", john: "18:38-19:16" } },
      { title: "Scourging, mocking, and Via Dolorosa", refs: { matthew: "27:27-33", mark: "15:16-22", luke: "23:26-32", john: "19:1-17" } },
      { title: "Crucifixion (approx. 9 AM \u2013 3 PM)", refs: { matthew: "27:35-54", mark: "15:24-39", luke: "23:33-49", john: "19:18-37" } },
      { title: "Burial by Joseph of Arimathea and Nicodemus", refs: { matthew: "27:57-61", mark: "15:42-47", luke: "23:50-56", john: "19:38-42" } },
    ],
    narrative: [
      "Judas arrived in Gethsemane leading a detachment of soldiers and temple guards. He identified Jesus with a kiss. Jesus responded with sovereign composure: \u201cJudas, would you betray the Son of Man with a kiss?\u201d When the soldiers declared they sought Jesus of Nazareth, He replied \u201cI am he\u201d (\u1f10\u03b3\u03ce \u03b5\u1f30\u03bc\u03b9 / ego eimi \u2014 the divine name). John records they drew back and fell to the ground (John 18:6).",
      "Jesus endured six trials \u2014 three religious (before Annas, Caiaphas, and the full Sanhedrin) and three civil (before Pilate, Herod Antipas, and Pilate again). Every trial was marked by procedural illegality. False witnesses were brought but their testimony did not agree (Mark 14:56). Caiaphas put Jesus under oath: \u201cAre you the Christ?\u201d Jesus responded with the divine \u201cI am\u201d and invoked Daniel 7:13. Caiaphas tore his robes. While Jesus stood trial inside, Peter denied Him three times in the courtyard. Luke alone records that \u201cthe Lord turned and looked at Peter\u201d (22:61).",
      "Judas, seized with remorse, returned the thirty pieces of silver, threw them into the temple, and hanged himself (Matthew 27:3\u201310; cf. Acts 1:18\u201319). The priests bought the potter\u2019s field \u2014 fulfilling Zechariah 11:12\u201313. Before Pilate, Jesus declared \u201cMy kingdom is not of this world\u201d (John 18:36). Pilate found no fault in Him three times (Luke 23:4; John 18:38; 19:4, 6). Pilate\u2019s wife warned of her dream (Matthew 27:19). Pilate washed his hands (Matthew 27:24). Barabbas \u2014 whose name means bar-abba, \u201cson of the father\u201d \u2014 was released: a guilty insurrectionist and murderer goes free while the innocent Lamb takes his place. The crowd releases the false \u201cson of the father\u201d and condemns the true Son of the Father. This is penal substitutionary atonement enacted before our eyes.",
      "After scourging and mocking \u2014 fulfilling Isaiah 50:6 (\u201cI gave my back to those who strike\u201d) \u2014 Jesus was led to Golgotha. Simon of Cyrene carried the cross. Jesus addressed the weeping women of Jerusalem (Luke 23:27\u201331). He was crucified between two criminals at the third hour (~9 AM), the hour of the morning tamid sacrifice. The inscription read: \u201cJESUS OF NAZARETH, THE KING OF THE JEWS\u201d in Hebrew, Latin, and Greek (John 19:19\u201320).",
      "During six hours on the cross, Jesus spoke seven statements revealing the full scope of His redemptive work. The fourth word \u2014 the cry of dereliction quoting Psalm 22:1 \u2014 is the apex of Christ\u2019s penal suffering: real, judicial abandonment by the Father as He bore the covenant curse. The sixth word, \u03c4\u03b5\u03c4\u03ad\u03bb\u03b5\u03c3\u03c4\u03b1\u03b9 (tetelestai), is the perfect passive tense: \u201cIt has been finished and remains finished.\u201d The seventh word quotes Psalm 31:5, committing His spirit to the Father.",
      "At His death, supernatural signs erupted: darkness from noon to 3 PM (fulfilling Amos 8:9 \u2014 this could not have been a solar eclipse, as Passover occurs at full moon); the temple veil torn from top to bottom (the massive curtain, 60 feet tall according to Josephus, torn by God\u2019s hand, not man\u2019s \u2014 Hebrews 10:19\u201320); an earthquake; and tombs opened (Matthew 27:51\u201353). The centurion declared: \u201cTruly this man was the Son of God!\u201d \u2014 a pagan Gentile confessing what Israel\u2019s leaders denied.",
      "John uniquely records that soldiers pierced Jesus\u2019 side; blood and water flowed. His legs were not broken \u2014 fulfilling Exodus 12:46 (\u201cnot a bone shall be broken\u201d) and Zechariah 12:10 (\u201cthey shall look on him whom they have pierced\u201d). Joseph of Arimathea, a wealthy Sanhedrin member who had not consented to Jesus\u2019 condemnation, boldly requested the body. Nicodemus brought approximately 75 pounds of myrrh and aloes (John 19:39\u201340). Jesus was laid in a new tomb hewn from rock \u2014 fulfilling Isaiah 53:9: \u201cHe made His grave with the rich in His death.\u201d",
    ],
    keyVerse: { text: "It is finished.", ref: "John 19:30" },
    prophecies: [
      { ot: "Isaiah 53:7", otText: "He was oppressed, and he was afflicted, yet he opened not his mouth.", nt: "Matthew 27:12-14", ntText: "He gave no answer, not even to a single charge." },
      { ot: "Psalm 22:1", otText: "My God, my God, why have you forsaken me?", nt: "Matthew 27:46", ntText: "Jesus cries out from the cross quoting this psalm." },
      { ot: "Psalm 22:7-8", otText: "All who see me mock me; they wag their heads: \u2018He trusts in God; let God deliver him.\u2019", nt: "Matthew 27:39-43", ntText: "The crowd and leaders mock Jesus with nearly identical words." },
      { ot: "Psalm 22:14-17", otText: "My bones are out of joint... my heart is like wax... they have pierced my hands and my feet.", nt: "John 19:18; 20:25", ntText: "The physical details of crucifixion match the psalm written centuries before crucifixion was invented." },
      { ot: "Psalm 22:18", otText: "They divide my garments among them, and for my clothing they cast lots.", nt: "John 19:23-24", ntText: "Soldiers cast lots for His seamless garment." },
      { ot: "Psalm 69:21", otText: "For my thirst they gave me sour wine to drink.", nt: "John 19:28-29", ntText: "They offered Him sour wine on a sponge." },
      { ot: "Isaiah 50:6", otText: "I gave my back to those who strike, and my cheeks to those who pull out the beard.", nt: "Matthew 27:26, 30", ntText: "Jesus was scourged and struck during the mocking." },
      { ot: "Isaiah 53:9", otText: "They made his grave with the wicked and with a rich man in his death.", nt: "Matthew 27:57-60", ntText: "Crucified with criminals; buried in the tomb of Joseph of Arimathea, a rich man." },
      { ot: "Isaiah 53:12", otText: "He was numbered with the transgressors.", nt: "Mark 15:27-28", ntText: "Crucified between two criminals." },
      { ot: "Psalm 34:20 / Exodus 12:46", otText: "He keeps all his bones; not one of them is broken.", nt: "John 19:33-36", ntText: "Soldiers did not break His legs." },
      { ot: "Zechariah 12:10", otText: "They shall look on me, on him whom they have pierced.", nt: "John 19:34, 37", ntText: "A soldier pierced His side with a spear." },
      { ot: "Amos 8:9", otText: "I will make the sun go down at noon and darken the earth in broad daylight.", nt: "Matthew 27:45", ntText: "Darkness from noon to 3 PM." },
      { ot: "Daniel 9:26", otText: "Messiah shall be cut off and shall have nothing.", nt: "Matthew 27:50", ntText: "The Anointed One is killed, cut off from the living." },
    ],
    tables: [
      {
        title: "The Seven Last Words from the Cross",
        headers: ["#", "Statement", "Significance", "Reference"],
        rows: [
          ["1", "\u201cFather, forgive them, for they know not what they do.\u201d", "Forgiveness \u2014 intercedes for His executioners", "Luke 23:34"],
          ["2", "\u201cToday you will be with me in paradise.\u201d", "Salvation \u2014 grace by faith, in the final hour", "Luke 23:43"],
          ["3", "\u201cWoman, behold your son!... Behold your mother!\u201d", "Relationship \u2014 provides for His mother", "John 19:26-27"],
          ["4", "\u201cMy God, my God, why have you forsaken me?\u201d", "Abandonment \u2014 bears the Father\u2019s wrath (Psalm 22:1)", "Matt 27:46"],
          ["5", "\u201cI thirst.\u201d", "Humanity \u2014 the Creator suffers (Psalm 69:21)", "John 19:28"],
          ["6", "\u201cIt is finished.\u201d (\u03c4\u03b5\u03c4\u03ad\u03bb\u03b5\u03c3\u03c4\u03b1\u03b9 / Tetelestai)", "Triumph \u2014 the debt is paid in full, perfect passive: \u2018finished and remains finished\u2019", "John 19:30"],
          ["7", "\u201cFather, into your hands I commit my spirit.\u201d", "Reunion \u2014 yields His life to the Father (Psalm 31:5)", "Luke 23:46"],
        ],
      },
      {
        title: "The Six Trials of Jesus",
        headers: ["Trial", "Before Whom", "Key Events", "Reference"],
        rows: [
          ["1. Religious", "Annas (former high priest)", "Informal interrogation; Jesus struck", "John 18:13-24"],
          ["2. Religious", "Caiaphas & partial Sanhedrin", "False witnesses; Jesus declares \u2018I am\u2019; Caiaphas tears robes", "Matt 26:57-68"],
          ["3. Religious", "Full Sanhedrin (after sunrise)", "Formal condemnation for blasphemy", "Matt 27:1-2"],
          ["4. Civil", "Pilate (first appearance)", "Pilate finds no fault; sends to Herod", "John 18:28-38"],
          ["5. Civil", "Herod Antipas", "Herod mocks Jesus; sends back to Pilate", "Luke 23:6-12"],
          ["6. Civil", "Pilate (second appearance)", "Barabbas released; scourging; crucifixion ordered", "Matt 27:15-26"],
        ],
      },
    ],
    studyInsight: "Good Friday is good because here the innocent dies for the guilty. The cross is not only an example of love. It is the saving act of love, where sin is judged, mercy is secured, and the work of redemption is accomplished.",
    lambTypologyNote: "Nisan 14/15: The Lamb is slain. Jesus was placed on the cross at the third hour (9 AM) \u2014 when the morning tamid sacrifice was offered in the temple. He died at the ninth hour (3 PM) \u2014 when, according to Josephus (Wars 6.9.3) and the Mishnah (Pesahim 5:1), the Passover lambs were being slaughtered in the temple courts. The bookends of the daily sacrificial system frame the crucifixion. As the priests slaughtered thousands of lambs in the temple, the true Lamb died on Golgotha \u2014 rendering the entire system obsolete.",
    timingNote: "The crucifixion\u2019s timing is theology in action: 9 AM (morning tamid) to 3 PM (Passover slaughter). The darkness from noon to 3 PM corresponds to the three hours when the Passover lambs were killed. \u201cChrist, our Passover lamb, has been sacrificed\u201d (1 Corinthians 5:7).",
    gospelHarmonyNote: "Good Friday is the most extensively documented day in ancient literature. All four Gospels narrate it in detail, yet each contributes unique material: Matthew alone records Judas\u2019 death, Pilate\u2019s wife\u2019s dream, Pilate washing his hands, the earthquake, and the guard at the tomb. Mark records the young man who fled naked (14:51\u201352). Luke alone records the trial before Herod, Jesus addressing the women of Jerusalem, and the repentant thief. John alone records the piercing of Jesus\u2019 side, the blood and water, and Nicodemus\u2019 role in the burial.",
  },
  {
    id: "holy-saturday",
    dayNumber: 7,
    dayName: "Holy Saturday",
    nisanDate: "Nisan 15/16",
    title: "The Silence of the Tomb",
    subtitle: "The Final Sabbath of the Old Creation",
    theme: "Silence, Grief & Waiting",
    color: "#333333",
    colorLight: "#A0A0A0",
    events: [
      { title: "Women rest on the Sabbath", refs: { luke: "23:56" } },
      { title: "Chief priests secure the tomb with a guard and seal", refs: { matthew: "27:62-66" } },
    ],
    narrative: [
      "Saturday was a day of devastating silence for the disciples. Their hopes for a conquering Messiah had been brutally extinguished. Luke records simply that the women \u201crested on the Sabbath in obedience to the commandment.\u201d The weekly Sabbath coincided with the first day of the Feast of Unleavened Bread \u2014 a \u201chigh day\u201d (John 19:31).",
      "The religious leaders, however, were restless. Remembering that Jesus had predicted His resurrection after three days, they approached Pilate and requested a guard \u2014 ironically violating their own Sabbath scruples to do so. Pilate granted their request. A Roman guard was posted, and the stone was sealed with the imperial seal. Every precaution taken to prevent a staged resurrection only authenticated the real one.",
      "The silence of Holy Saturday is theologically eloquent. Just as God rested on the seventh day after completing the work of creation (Genesis 2:2\u20133), Christ rests in the tomb on the Sabbath after completing the work of redemption (\u201cIt is finished\u201d). The old creation\u2019s final Sabbath gives way to the new creation\u2019s first morning. Hebrews 4:9\u201310: \u201cThere remains a Sabbath rest for the people of God, for whoever has entered God\u2019s rest has also rested from his works as God did from his.\u201d Holy Saturday is the hinge \u2014 the last day of the old order before everything changes.",
    ],
    keyVerse: { text: "So they went and made the tomb secure by sealing the stone and setting a guard.", ref: "Matthew 27:66" },
    prophecies: [
      { ot: "Psalm 16:10", otText: "You will not abandon my soul to Sheol, or let your Holy One see corruption.", nt: "Acts 2:27, 31", ntText: "Peter at Pentecost cites this psalm: David died and saw decay; the One David foresaw did not." },
      { ot: "Hosea 6:2", otText: "After two days he will revive us; on the third day he will raise us up.", nt: "1 Corinthians 15:4", ntText: "He was raised on the third day in accordance with the Scriptures." },
      { ot: "Jonah 1:17", otText: "Jonah was in the belly of the fish three days and three nights.", nt: "Matthew 12:40", ntText: "Jesus explicitly invoked Jonah as a type: \u201cSo will the Son of Man be three days and three nights in the heart of the earth.\u201d" },
    ],
    studyInsight: "Holy Saturday is the ache in the middle. The promise has been spoken, but the answer is not yet seen. It is the day of bewildered grief and hidden hope. God often works most deeply in moments that appear motionless to human eyes.",
    lambTypologyNote: "The Sabbath rest of the Lamb. As the Passover lamb was consumed on the night of Nisan 14/15 and the feast continued, the true Lamb rests in the tomb. The sacrifice has been made; the blood has been applied. Now comes the waiting \u2014 the silence between the cross and the empty tomb.",
    scholarlyInsight: "Jewish inclusive reckoning counts part of Friday as day one, all of Saturday as day two, and part of Sunday as day three \u2014 resolving the apparent tension between \u201cthree days and three nights\u201d (Matthew 12:40) and \u201con the third day\u201d (1 Corinthians 15:4). This counting method is well attested in ancient Jewish sources.",
  },
  {
    id: "resurrection-sunday",
    dayNumber: 8,
    dayName: "Resurrection Sunday",
    nisanDate: "Nisan 16/17",
    title: "He Is Risen",
    subtitle: "The Firstfruits of the New Creation",
    theme: "Victory, Hope & New Creation",
    color: "#B8860B",
    colorLight: "#FFF3CD",
    image: IMAGES.emptyTomb,
    events: [
      { title: "Women discover the empty tomb", refs: { matthew: "28:1-8", mark: "16:1-8", luke: "24:1-12", john: "20:1-13" } },
      { title: "Jesus appears to Mary Magdalene", refs: { matthew: "28:9-10", mark: "16:9-11", john: "20:14-18" } },
      { title: "Guards report to chief priests and are bribed", refs: { matthew: "28:11-15" } },
      { title: "Jesus appears on the Emmaus road", refs: { mark: "16:12-13", luke: "24:13-35" } },
      { title: "Jesus appears to Peter (Cephas)", refs: { luke: "24:34" } },
      { title: "Jesus appears to the disciples (Thomas absent)", refs: { luke: "24:36-49", john: "20:19-23" } },
      { title: "The Great Commission", refs: { matthew: "28:16-20", luke: "24:44-49", john: "20:21-23" } },
    ],
    narrative: [
      "Early on Sunday morning, while it was still dark, several women approached the tomb carrying spices. All four Gospels record the discovery: Matthew names Mary Magdalene and \u201cthe other Mary\u201d; Mark adds Salome; Luke adds Joanna and \u201cother women\u201d; John focuses on Mary Magdalene (but her use of \u201cwe\u201d in 20:2 implies companions). They arrived to find the stone rolled away, the guards incapacitated, and the tomb empty.",
      "The varying details harmonize as partial, complementary accounts. A plausible sequence: Mary Magdalene arrives first (John 20:1), departs to find Peter and John; the other women arrive and encounter the angels; Peter and John run to the tomb (Luke 24:12; John 20:3\u201310); Mary Magdalene returns and encounters the risen Christ (John 20:11\u201318). John saw the linen wrappings lying flat \u2014 not unwound, but collapsed in place, as if the body had simply passed through them. The face cloth was folded separately. John \u201csaw and believed.\u201d",
      "Jesus appeared first to Mary Magdalene, who initially mistook Him for the gardener: \u201cDo not cling to me, for I have not yet ascended to the Father\u201d (John 20:17). The guards reported to the chief priests and were bribed to say the disciples stole the body (Matthew 28:11\u201315). On the road to Emmaus, Jesus expounded \u201cin all the Scriptures the things concerning himself\u201d (Luke 24:27) and was recognized in the breaking of bread. He appeared to Peter privately (Luke 24:34; 1 Corinthians 15:5), then to the gathered disciples in a locked room, where He showed His wounds, ate fish, breathed the Holy Spirit, and commissioned them.",
      "The resurrection is not an epilogue to the story of the cross. It is the vindication of everything Jesus claimed, the validation of every prophecy He fulfilled, and the foundation upon which the entire Christian faith stands. Romans 4:25: \u201craised for our justification.\u201d The resurrection is the Father\u2019s receipt that the atoning work is complete and accepted. If Christ is not raised, we are still in our sins (1 Corinthians 15:17). But He has been raised \u2014 the firstfruits of those who have fallen asleep \u2014 and everything has changed.",
    ],
    keyVerse: { text: "He is not here, for he has risen, as he said.", ref: "Matthew 28:6" },
    prophecies: [
      { ot: "Psalm 16:10", otText: "You will not abandon my soul to Sheol, or let your holy one see corruption.", nt: "Acts 2:27-31; 13:35-37", ntText: "Peter and Paul both cite this psalm as the premier apostolic resurrection proof-text." },
      { ot: "Isaiah 53:10-11", otText: "He shall see his offspring; he shall prolong his days... out of the anguish of his soul he shall see and be satisfied.", nt: "Matthew 28:6", ntText: "The Servant sees the fruit of His atoning work \u2014 implying life after death." },
      { ot: "Hosea 6:2", otText: "After two days he will revive us; on the third day he will raise us up.", nt: "1 Corinthians 15:4", ntText: "He was raised on the third day in accordance with the Scriptures." },
      { ot: "Psalm 118:22-24", otText: "The stone the builders rejected has become the cornerstone. This is the day the LORD has made.", nt: "Acts 4:11; 1 Peter 2:7", ntText: "The rejected stone becomes the cornerstone through resurrection." },
      { ot: "Leviticus 23:9-14", otText: "The Feast of Firstfruits: the priest shall wave the sheaf before the LORD on the day after the Sabbath.", nt: "1 Corinthians 15:20", ntText: "\u201cChrist has been raised from the dead, the firstfruits of those who have fallen asleep.\u201d The wave sheaf was offered for acceptance; Christ was raised and accepted by the Father. The firstfruits guarantee the full harvest." },
    ],
    tables: [
      {
        title: "Resurrection Appearances on Sunday",
        headers: ["Appearance", "To Whom", "Key Details", "Reference"],
        rows: [
          ["1st", "Mary Magdalene", "Mistook Him for the gardener; \u2018Do not cling to me\u2019", "John 20:11-18"],
          ["2nd", "The other women", "They worshipped Him as they ran from the tomb", "Matt 28:9-10"],
          ["3rd", "Peter (Cephas)", "A private appearance; details not recorded", "Luke 24:34; 1 Cor 15:5"],
          ["4th", "Two on the Emmaus road", "Recognized in the breaking of bread; He expounded all the Scriptures concerning Himself", "Luke 24:13-35"],
          ["5th", "The Eleven (minus Thomas)", "Showed wounds; ate fish; breathed the Holy Spirit; commissioned them", "John 20:19-23"],
        ],
      },
    ],
    studyInsight: "The resurrection is the Father\u2019s public vindication of the Son and the declaration that the cross has truly accomplished redemption. It is not merely a happy ending. It is the dawn of new creation.",
    lambTypologyNote: "Nisan 16/17: The Feast of Firstfruits (Leviticus 23:9\u201314). On \u201cthe day after the Sabbath\u201d during Passover week, the priest waved the first sheaf of the barley harvest before the LORD as a pledge of the full harvest to come. Christ rose on this exact day. Paul makes the connection explicit: \u201cChrist has been raised from the dead, the firstfruits of those who have fallen asleep\u201d (1 Corinthians 15:20). The wave sheaf was offered for acceptance; Christ was raised and accepted by the Father. The firstfruits guarantee the full harvest \u2014 His resurrection guarantees ours.",
    gospelHarmonyNote: "A note on Mark\u2019s ending: the two oldest Greek manuscripts (Sinaiticus, Vaticanus) end at Mark 16:8. Eusebius and Jerome attest that \u201cthe accurate copies\u201d end there. The style and vocabulary of 16:9\u201320 differ from Mark\u2019s usual prose. However, Irenaeus (c. AD 180) appears to cite Mark 16:19, and the passage appears in the vast majority of manuscripts. No major doctrine depends on its inclusion.",
    scholarlyInsight: "The resurrection appearances follow a remarkable pattern: Jesus appears first to women (in a culture where women\u2019s testimony was not accepted in court), then to individuals, then to groups. If the resurrection were fabricated, the inventors would never have chosen women as the first witnesses. This \u201ccriterion of embarrassment\u201d is one of the strongest historical arguments for the authenticity of the accounts.",
  },
];

export const GOSPEL_HARMONY = {
  title: "The Complete Gospel Harmony",
  description: "Every major event of Holy Week harmonized across all four Gospels. Where a Gospel omits an event, the cell is left blank, revealing each writer\u2019s distinct editorial emphasis.",
};

export const THEOLOGICAL_THEMES = [
  { theme: "Jesus as King", days: ["Triumphal Entry", "Authority over temple", "Authority over challengers", "", "", "\u201cKing of the Jews\u201d on the cross", "", "Risen Lord"] },
  { theme: "Judgment", days: ["Weeping over Jerusalem", "Fig tree cursed; temple cleansed", "Seven Woes; Olivet Discourse", "", "", "Judgment on the sinless substitute", "", "Judgment conquered"] },
  { theme: "Rejection", days: ["Crowds acclaim, leaders plot", "Leaders enraged", "Leaders silenced", "Conspiracy finalized", "Judas departs", "\u201cCrucify Him!\u201d", "Tomb sealed", "Rejection overturned"] },
  { theme: "Sacrifice", days: ["", "", "", "", "Passover Lamb; body & blood", "The Lamb of God slain", "", ""] },
  { theme: "New Covenant", days: ["", "", "", "", "\u201cThis cup is the new covenant\u201d", "Covenant ratified in blood", "", ""] },
  { theme: "Resurrection Hope", days: ["", "", "Olivet Discourse", "", "\u201cAfter three days I will rise\u201d", "", "", "\u201cHe is risen!\u201d"] },
  { theme: "Lamb Typology", days: ["Consecration", "Lamb selected (Nisan 10)", "Temple purified; inspection begins", "Inspection continues", "Inspection complete; price set", "Lamb prepared (Nisan 14)", "Lamb slain at hour of sacrifice", "Sabbath rest", "Firstfruits offering"] },
];

export const FOUR_CUPS_DATA = [
  {
    cup: 1,
    name: "Cup of Sanctification",
    hebrew: "Kos Kiddush",
    exodus: "I will bring you out from under the burdens of the Egyptians.",
    reference: "Exodus 6:6a",
    connection: "Jesus sanctified the meal and set it apart, beginning the Passover Seder with His disciples.",
    color: "#2D6A4F",
  },
  {
    cup: 2,
    name: "Cup of Deliverance",
    hebrew: "Kos Makkot",
    exodus: "I will deliver you from slavery to them.",
    reference: "Exodus 6:6b",
    connection: "Drunk after recounting the plagues and the Exodus story \u2014 God\u2019s mighty acts of deliverance.",
    color: "#4A1A6B",
  },
  {
    cup: 3,
    name: "Cup of Redemption",
    hebrew: "Kos Ge\u2019ulah",
    exodus: "I will redeem you with an outstretched arm and with great acts of judgment.",
    reference: "Exodus 6:6c",
    connection: "This is the cup Jesus identified with His blood: \u201cThis cup that is poured out for you is the new covenant in my blood\u201d (Luke 22:20). The cup of redemption becomes the cup of the new covenant.",
    color: "#8B0000",
  },
  {
    cup: 4,
    name: "Cup of Praise / Consummation",
    hebrew: "Kos Hallel",
    exodus: "I will take you to be my people, and I will be your God.",
    reference: "Exodus 6:7",
    connection: "Jesus declared: \u201cI will not drink again of this fruit of the vine until that day when I drink it new with you in my Father\u2019s kingdom\u201d (Matthew 26:29). The fourth cup remains undrunk \u2014 reserved for the eschatological wedding supper of the Lamb (Revelation 19:9).",
    color: "#B8860B",
  },
];

export const COVENANT_DATA = [
  {
    name: "Abrahamic Covenant",
    reference: "Genesis 12, 15, 17",
    promise: "Blessing to all nations through Abraham\u2019s seed.",
    fulfillment: "Galatians 3:16 identifies Christ as that seed. The cross secures the blessing flowing to \u201call families of the earth\u201d (Genesis 12:3; Galatians 3:8, 13\u201314). Genesis 22 \u2014 the near-sacrifice of Isaac on Mount Moriah (the same ridge as Golgotha) \u2014 prefigures the Father giving His only Son. \u201cHe who did not spare his own Son\u201d (Romans 8:32) echoes \u201cyou have not withheld your son, your only son\u201d (Genesis 22:12).",
    icon: "scroll",
    color: "#2D6A4F",
  },
  {
    name: "Mosaic Covenant",
    reference: "Exodus 19\u201324; Leviticus",
    promise: "The sacrificial system \u2014 every tamid, every Passover lamb, every Day of Atonement goat.",
    fulfillment: "\u201cIt is finished\u201d marks the end of the shadows and the arrival of the substance. Hebrews 10:1: the Law was \u201ca shadow of the good things to come.\u201d Christ is both the perfect High Priest and the perfect sacrifice (Hebrews 9:11\u201314; 10:10\u201314).",
    icon: "flame",
    color: "#CC5500",
  },
  {
    name: "Davidic Covenant",
    reference: "2 Samuel 7:12\u201316",
    promise: "An eternal throne for David\u2019s descendant.",
    fulfillment: "Jesus enters Jerusalem as the Son of David (Matthew 21:9). He is declared \u201cthe Son of God in power... by his resurrection from the dead\u201d (Romans 1:4). The resurrection is His coronation; Psalm 110:1 is His enthronement decree.",
    icon: "crown",
    color: "#4A1A6B",
  },
  {
    name: "New Covenant",
    reference: "Jeremiah 31:31\u201334",
    promise: "Forgiveness of sins, the law written on hearts, the knowledge of God.",
    fulfillment: "Formally inaugurated at the Last Supper: \u201cThis cup is the new covenant in my blood\u201d (Luke 22:20). All accomplished through Christ\u2019s death and ratified by His resurrection. Hebrews 8\u201310 expounds the superiority of this covenant.",
    icon: "heart",
    color: "#8B0000",
  },
  {
    name: "Covenant of Redemption",
    reference: "Pactum Salutis",
    promise: "The pre-temporal, intra-Trinitarian agreement between Father, Son, and Spirit to accomplish salvation.",
    fulfillment: "Gethsemane reveals its outworking in history: the Father\u2019s will and the Son\u2019s obedience \u2014 \u201cNot my will, but yours, be done\u201d (Luke 22:42). Isaiah 42:6 and 49:8 call the Messiah Himself \u201ca covenant for the people\u201d \u2014 the personal embodiment and guarantor of all God\u2019s promises.",
    icon: "triangle",
    color: "#B8860B",
  },
];

export const NARRATIVE_ARC = {
  title: "The Narrative Arc \u2014 From Selection to Vindication",
  text: "On Sunday, the Lamb is selected and presented to Israel. On Monday, the temple is purified and the inspection begins. On Tuesday, every faction of Israel\u2019s leadership examines the Lamb and finds no blemish \u2014 the inspection is complete. On Wednesday, the Lamb is anointed for burial, and the betrayal price is set at the value of a slave. On Thursday, the Passover meal is fulfilled and transformed, the new covenant is sealed in blood, and the Lamb submits to the Father\u2019s will. On Friday, the Lamb is slain at the ninth hour as the temple lambs are slaughtered, the veil is torn, and the work is finished. On Saturday, the Lamb rests \u2014 the old creation\u2019s final Sabbath. On Sunday, the Firstfruits offering is made: Christ rises, death is conquered, and the new creation dawns.",
  closing: "Every thread of the Old Testament \u2014 the Passover lamb, the suffering Servant, the rejected cornerstone, the smitten Shepherd, the thirty pieces of silver, the pierced One, the brazen serpent, Isaac on Moriah, the Day of Atonement sacrifice and scapegoat, Daniel\u2019s seventy weeks \u2014 converges in this single week. The prophets spoke in fragments; Holy Week is the mosaic assembled. What emerges is not merely a man dying and rising, but the covenant God of Israel fulfilling every promise He ever made \u2014 through His own blood, in His own body, on His own timetable, at the place and hour He appointed before the foundation of the world.",
};
