/*
 * Holy Week Data — Sacred Cartography Design
 * All content sourced from the harmonized Gospel study.
 * Each day includes events, themes, teachings, prophecies, and Gospel references.
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
      "Six days before the Passover, Jesus arrived in Bethany, a small village approximately two miles east of Jerusalem on the eastern slope of the Mount of Olives. He came to the home of Lazarus, whom He had recently raised from the dead — an event that had electrified the entire region.",
      "At a dinner held in His honor, Mary took a pound of expensive ointment made from pure nard — worth approximately a year's wages — and anointed Jesus' feet, wiping them with her hair. The house was filled with the fragrance. Judas Iscariot objected, citing concern for the poor, though John notes his true motive was theft from the common purse.",
      "Jesus defended Mary's act: \"Leave her alone, so that she may keep it for the day of my burial.\" He was the only person in the room who understood what was coming. Mary's extravagant devotion was, unknowingly, a preparation for His death.",
    ],
    keyVerse: { text: "Leave her alone, so that she may keep it for the day of my burial.", ref: "John 12:7" },
    prophecies: [],
    gospelEmphasis: [
      { gospel: "Matthew", emphasis: "Places the anointing in the home of Simon the leper" },
      { gospel: "Mark", emphasis: "Notes the perfume was worth more than 300 denarii" },
      { gospel: "John", emphasis: "Identifies Mary as the woman and Judas as the objector" },
    ],
  },
  {
    id: "palm-sunday",
    dayNumber: 1,
    dayName: "Palm Sunday",
    title: "The Triumphal Entry",
    subtitle: "The King Arrives",
    theme: "Kingship & Prophecy Fulfilled",
    color: "#2D6A4F",
    colorLight: "#B7E4C7",
    image: IMAGES.palmSunday,
    events: [
      { title: "Triumphal Entry into Jerusalem", refs: { matthew: "21:1-11", mark: "11:1-10", luke: "19:28-44", john: "12:12-19" } },
      { title: "Some Greeks seek Jesus", refs: { john: "12:20-36" } },
      { title: "Jesus weeps over Jerusalem", refs: { luke: "19:41-44" } },
      { title: "Jesus enters and surveys the temple", refs: { matthew: "21:14-17", mark: "11:11" } },
      { title: "Returns to Bethany for the night", refs: { matthew: "21:17", mark: "11:11" } },
    ],
    narrative: [
      "Jesus sent two disciples to Bethphage to retrieve a donkey and her colt, giving precise instructions that fulfilled Zechariah's ancient prophecy. As He descended the Mount of Olives, multitudes spread their cloaks and palm branches on the road, shouting \"Hosanna to the Son of David!\" — a direct quotation from Psalm 118:25-26, one of the Hallel psalms sung during Passover.",
      "The word \"Hosanna\" derives from the Hebrew hoshi'ah na, meaning \"Save us, we pray!\" The crowd was invoking messianic language, though their expectations remained fixated on political liberation from Rome rather than spiritual redemption.",
      "Luke alone records that as Jesus crested the Mount of Olives and the full panorama of Jerusalem came into view, He wept over the city. His tears were prophetic. He declared that because Jerusalem did not recognize \"the time of your visitation,\" the city would be surrounded, leveled, and its children destroyed — a prophecy fulfilled with devastating precision in 70 A.D. when the Roman general Titus destroyed Jerusalem.",
      "John uniquely records that certain Greeks came seeking Jesus, prompting Him to speak of His coming death as a grain of wheat falling into the ground — and of the \"hour\" of His glorification through suffering.",
    ],
    keyVerse: { text: "Hosanna to the Son of David! Blessed is he who comes in the name of the Lord! Hosanna in the highest!", ref: "Matthew 21:9" },
    prophecies: [
      { ot: "Zechariah 9:9", otText: "Behold, your king is coming to you; righteous and having salvation is he, humble and mounted on a donkey.", nt: "Matthew 21:4-7", ntText: "This took place to fulfill what was spoken by the prophet..." },
      { ot: "Psalm 118:25-26", otText: "Save us, we pray, O Lord!... Blessed is he who comes in the name of the Lord!", nt: "Matthew 21:9", ntText: "The crowds cried 'Hosanna! Blessed is he who comes in the name of the Lord!'" },
      { ot: "Psalm 8:2", otText: "Out of the mouth of babes and infants, you have established strength.", nt: "Matthew 21:16", ntText: "Jesus quotes this psalm when the children cry 'Hosanna' in the temple." },
    ],
    gospelEmphasis: [
      { gospel: "Matthew", emphasis: "Fulfillment of Zechariah 9:9 — Jesus as the prophesied King of Israel" },
      { gospel: "Mark", emphasis: "Jesus surveys the temple and returns to Bethany — a deliberate, measured approach" },
      { gospel: "Luke", emphasis: "Jesus weeps over Jerusalem; prophesies the city's destruction" },
      { gospel: "John", emphasis: "Greeks seek Jesus; He speaks of His death as glorification" },
    ],
  },
  {
    id: "monday",
    dayNumber: 2,
    dayName: "Monday",
    title: "The Temple Cleansed",
    subtitle: "Judgment on Fruitlessness",
    theme: "Authority & Judgment",
    color: "#B8860B",
    colorLight: "#F5E6B8",
    events: [
      { title: "Jesus curses the barren fig tree", refs: { matthew: "21:18-19", mark: "11:12-14" } },
      { title: "Jesus cleanses the temple", refs: { matthew: "21:12-13", mark: "11:15-18", luke: "19:45-48" } },
      { title: "Returns to Bethany with the Twelve", refs: { mark: "11:19" } },
    ],
    narrative: [
      "Monday began with a powerful enacted parable. Traveling from Bethany to Jerusalem, Jesus approached a fig tree in full leaf. In Palestine, fig trees produce small early fruit before or alongside their leaves. A tree covered in leaves but bearing no fruit was a false advertisement — all appearance, no substance. Jesus cursed the tree: \"May no one ever eat fruit from you again.\"",
      "This was not an act of petulance. It was a prophetic sign-act, a genre well established in the Old Testament prophets. The fig tree symbolized the nation of Israel — outwardly religious, adorned with the leaves of ritual observance, yet spiritually barren and fruitless.",
      "Arriving at the temple, Jesus executed a forceful cleansing of the Court of the Gentiles. He overturned the tables of the money changers and the benches of those selling doves. His words combined two prophetic texts: \"My house shall be called a house of prayer for all nations\" (Isaiah 56:7), but \"you have made it a den of robbers\" (Jeremiah 7:11).",
      "The temple market, controlled by the family of the high priest Annas, had transformed the only space where Gentiles could worship into a noisy, exploitative bazaar. Jesus' action was a direct challenge to the economic and spiritual corruption of the religious establishment.",
    ],
    keyVerse: { text: "My house shall be called a house of prayer for all nations, but you have made it a den of robbers.", ref: "Mark 11:17" },
    prophecies: [
      { ot: "Isaiah 56:7", otText: "My house shall be called a house of prayer for all peoples.", nt: "Mark 11:17", ntText: "Jesus quotes this text directly while cleansing the temple." },
      { ot: "Jeremiah 7:11", otText: "Has this house, which is called by my name, become a den of robbers in your eyes?", nt: "Mark 11:17", ntText: "Jesus combines Isaiah and Jeremiah in His rebuke." },
      { ot: "Malachi 3:1-3", otText: "The Lord whom you seek will suddenly come to his temple... He will purify the sons of Levi.", nt: "Mark 11:15-17", ntText: "Jesus arrives at the temple and purifies its worship." },
    ],
  },
  {
    id: "tuesday",
    dayNumber: 3,
    dayName: "Tuesday",
    title: "The Day of Controversy",
    subtitle: "Parables, Woes & the Olivet Discourse",
    theme: "Teaching & Confrontation",
    color: "#CC5500",
    colorLight: "#FFD4B2",
    events: [
      { title: "Disciples see the withered fig tree", refs: { matthew: "21:20-22", mark: "11:20-26" } },
      { title: "Question about Jesus' authority", refs: { matthew: "21:23-27", mark: "11:27-33", luke: "20:1-8" } },
      { title: "Parable of the Two Sons", refs: { matthew: "21:28-32" } },
      { title: "Parable of the Wicked Tenants", refs: { matthew: "21:33-46", mark: "12:1-12", luke: "20:9-19" } },
      { title: "Parable of the Wedding Feast", refs: { matthew: "22:1-14" } },
      { title: "Paying tribute to Caesar", refs: { matthew: "22:15-22", mark: "12:13-17", luke: "20:20-26" } },
      { title: "Debate on the resurrection", refs: { matthew: "22:23-33", mark: "12:18-27", luke: "20:27-40" } },
      { title: "The Greatest Commandment", refs: { matthew: "22:34-40", mark: "12:28-34" } },
      { title: "Seven Woes against the Pharisees", refs: { matthew: "23:1-36", mark: "12:37-40", luke: "20:45-47" } },
      { title: "The Widow's Mite", refs: { mark: "12:41-44", luke: "21:1-4" } },
      { title: "The Olivet Discourse", refs: { matthew: "24:1-25:46", mark: "13:1-37", luke: "21:5-36" } },
    ],
    narrative: [
      "Tuesday is the longest and most theologically dense day of Holy Week. Jesus engaged in a sustained public confrontation with every faction of the Jewish leadership, delivered His most devastating parables, and concluded with the sweeping eschatological vision of the Olivet Discourse.",
      "The morning began with the lesson of the withered fig tree — now dead to its roots overnight. Jesus used the moment to teach about the power of faith and prayer. Upon entering the temple courts, He faced a coordinated theological assault from the chief priests, Pharisees, Herodians, and Sadducees.",
      "Each group tried to trap Him with a question. Each failed. His answers — on authority, taxes, resurrection, and the greatest commandment — silenced them all. He then turned the tables, asking how the Messiah could be David's son if David called him Lord (quoting Psalm 110:1).",
      "Jesus concluded His public teaching with seven devastating \"woes\" against the scribes and Pharisees — charging them with hypocrisy, spiritual blindness, and the murder of prophets. Departing the temple for the final time, He sat on the Mount of Olives and delivered the Olivet Discourse, His most extensive prophetic teaching about the destruction of Jerusalem and His Second Coming.",
    ],
    keyVerse: { text: "Render to Caesar the things that are Caesar's, and to God the things that are God's.", ref: "Mark 12:17" },
    prophecies: [
      { ot: "Psalm 118:22-23", otText: "The stone the builders rejected has become the cornerstone.", nt: "Matthew 21:42", ntText: "Jesus quotes this directly in the Parable of the Wicked Tenants." },
      { ot: "Psalm 110:1", otText: "The Lord said to my Lord, 'Sit at my right hand...'", nt: "Matthew 22:44", ntText: "Jesus uses this to demonstrate the Messiah's divine nature." },
      { ot: "Daniel 9:26", otText: "After the sixty-two weeks, an anointed one shall be cut off.", nt: "Matthew 24:2", ntText: "Jesus predicts the temple's destruction, fulfilled in 70 A.D." },
    ],
    tables: [
      {
        title: "The Five Temple Controversies",
        headers: ["Confrontation", "Challengers", "Jesus' Response", "Reference"],
        rows: [
          ["The Authority Question", "Chief priests, scribes, elders", "Counter-question about John's baptism", "Matt 21:23-27"],
          ["Paying Taxes to Caesar", "Pharisees and Herodians", "\"Render to Caesar... and to God...\"", "Matt 22:15-22"],
          ["The Resurrection Debate", "Sadducees", "\"He is not God of the dead, but of the living\"", "Matt 22:23-33"],
          ["The Greatest Commandment", "A scribe / lawyer", "Love God; love your neighbor", "Matt 22:34-40"],
          ["David's Son", "Jesus poses the question", "Quotes Psalm 110:1 — Messiah is greater than David", "Matt 22:41-46"],
        ],
      },
      {
        title: "The Seven Woes (Matthew 23)",
        headers: ["Woe", "Charge", "Reference"],
        rows: [
          ["1st", "They shut the kingdom of heaven in people's faces", "Matt 23:13"],
          ["2nd", "They make converts twice as much children of hell", "Matt 23:15"],
          ["3rd", "They are blind guides who swear deceptive oaths", "Matt 23:16-22"],
          ["4th", "They tithe herbs but neglect justice, mercy, faithfulness", "Matt 23:23-24"],
          ["5th", "They clean the outside but are full of greed inside", "Matt 23:25-26"],
          ["6th", "Whitewashed tombs — beautiful outside, dead inside", "Matt 23:27-28"],
          ["7th", "They build tombs for prophets while being sons of their murderers", "Matt 23:29-36"],
        ],
      },
      {
        title: "Olivet Discourse Parables",
        headers: ["Parable", "Theme", "Key Teaching", "Reference"],
        rows: [
          ["The Ten Virgins", "Preparedness", "Be ready; the bridegroom comes at an unexpected hour", "Matt 25:1-13"],
          ["The Talents", "Faithfulness", "Use what God has entrusted; do not bury your gifts", "Matt 25:14-30"],
          ["The Sheep and Goats", "Compassion & Judgment", "How you treat 'the least of these' reflects your relationship with Christ", "Matt 25:31-46"],
        ],
      },
    ],
  },
  {
    id: "wednesday",
    dayNumber: 4,
    dayName: "Wednesday",
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
      "The Gospels record no public activities for Jesus on Wednesday. He likely remained in Bethany, resting with His disciples in preparation for the Passover. Luke's summary statement confirms that Jesus had been \"teaching daily in the temple\" throughout the week, but Wednesday appears to have been a deliberate pause.",
      "Behind the scenes, the forces of darkness converged. The Sanhedrin, desperate to eliminate Jesus without provoking a riot during the festival, convened to finalize their conspiracy. They needed an insider.",
      "Judas Iscariot provided the solution. Luke records that \"Satan entered into Judas,\" and he went to the chief priests, offering to betray Jesus at a time and place away from the crowds. They agreed upon a price: thirty pieces of silver — the exact sum prophesied by Zechariah centuries earlier, and notably the price of a slave under Mosaic law (Exodus 21:32).",
    ],
    keyVerse: { text: "Then Satan entered into Judas called Iscariot, who was of the number of the twelve.", ref: "Luke 22:3" },
    prophecies: [
      { ot: "Zechariah 11:12-13", otText: "They weighed out as my wages thirty pieces of silver... Throw it to the potter.", nt: "Matthew 26:14-16; 27:3-10", ntText: "Judas receives thirty silver coins; later returns them; the money buys the potter's field." },
      { ot: "Psalm 41:9", otText: "Even my close friend in whom I trusted, who ate my bread, has lifted his heel against me.", nt: "John 13:18", ntText: "Jesus quotes this psalm directly at the Last Supper, identifying Judas." },
    ],
  },
  {
    id: "thursday",
    dayNumber: 5,
    dayName: "Thursday",
    title: "The Last Supper",
    subtitle: "The Upper Room & Gethsemane",
    theme: "Covenant, Love & Agony",
    color: "#4A1A6B",
    colorLight: "#D4B8E8",
    image: IMAGES.lastSupper,
    events: [
      { title: "Preparations for the Passover", refs: { matthew: "26:17-19", mark: "14:12-16", luke: "22:7-13" } },
      { title: "Jesus washes the disciples' feet", refs: { john: "13:1-20" } },
      { title: "The Passover meal / Last Supper", refs: { matthew: "26:20-29", mark: "14:17-25", luke: "22:14-30" } },
      { title: "Judas identified and departs", refs: { matthew: "26:21-25", mark: "14:18-21", luke: "22:21-23", john: "13:21-30" } },
      { title: "Institution of the Lord's Supper", refs: { matthew: "26:26-29", mark: "14:22-25", luke: "22:15-20" } },
      { title: "The Upper Room Discourse", refs: { john: "13:31-16:33" } },
      { title: "The High Priestly Prayer", refs: { john: "17:1-26" } },
      { title: "Prediction of Peter's denial", refs: { matthew: "26:31-35", mark: "14:27-31", luke: "22:31-34", john: "13:36-38" } },
      { title: "Agony in Gethsemane", refs: { matthew: "26:36-46", mark: "14:32-42", luke: "22:39-46", john: "18:1" } },
    ],
    narrative: [
      "Thursday afternoon, Jesus sent Peter and John into the city with specific instructions: they would encounter a man carrying a jar of water — an unusual sight, as women typically carried water — who would lead them to a house with a large upper room already furnished. The precision of these instructions demonstrates Jesus' sovereign orchestration of events.",
      "As the evening meal began, Jesus rose from the table, wrapped a towel around His waist, and began washing the disciples' feet — a task reserved for the lowest household servant. This act established the paradigm of servant leadership that would define the church.",
      "During the Passover meal, Jesus reinterpreted the ancient feast. He took the unleavened bread, gave thanks, broke it, and said: \"This is my body, which is given for you.\" He then took the cup: \"This cup that is poured out for you is the new covenant in my blood.\" The Passover lamb commemorated Israel's deliverance from Egypt. Jesus was declaring Himself the ultimate Passover Lamb.",
      "Found exclusively in John's Gospel, the Upper Room Discourse (chapters 13-17) is the most intimate and theologically rich teaching Jesus ever delivered — covering the new commandment of love, the promise of the Holy Spirit, the True Vine, and the High Priestly Prayer.",
      "After singing a hymn, Jesus and the disciples crossed the Kidron Valley to Gethsemane. Three times He prayed: \"Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done.\" Luke records that His sweat became like great drops of blood — a medical condition called hematidrosis, caused by extreme anguish.",
    ],
    keyVerse: { text: "This cup that is poured out for you is the new covenant in my blood.", ref: "Luke 22:20" },
    prophecies: [
      { ot: "Jeremiah 31:31-34", otText: "I will make a new covenant... I will put my law within them.", nt: "Luke 22:20", ntText: "\"This cup is the new covenant in my blood.\"" },
      { ot: "Zechariah 13:7", otText: "Strike the shepherd, and the sheep will be scattered.", nt: "Matthew 26:31, 56", ntText: "Jesus quotes this directly; the disciples flee at His arrest." },
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
        headers: ["Exodus 12 — The Passover Lamb", "The Lamb of God — Jesus Christ"],
        rows: [
          ["Selected on Nisan 10 (Exod 12:3)", "Jesus entered Jerusalem on Nisan 10 (Palm Sunday)"],
          ["Kept and examined for four days (Exod 12:6)", "Jesus examined and tested by leaders for four days"],
          ["Must be without blemish (Exod 12:5)", "Pilate declared \"I find no fault in him\" (John 19:4)"],
          ["Slain at twilight on Nisan 14 (Exod 12:6)", "Jesus crucified on Nisan 14 (Friday)"],
          ["No bone shall be broken (Exod 12:46)", "Not a bone of Jesus was broken (John 19:36)"],
          ["Blood applied to doorposts (Exod 12:7)", "His blood shed for forgiveness of sins (Matt 26:28)"],
        ],
      },
    ],
  },
  {
    id: "friday",
    dayNumber: 6,
    dayName: "Good Friday",
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
      { title: "Peter's three denials", refs: { matthew: "26:69-75", mark: "14:66-72", luke: "22:54-62", john: "18:15-27" } },
      { title: "Trial before full Sanhedrin (sunrise)", refs: { matthew: "27:1-2", mark: "15:1", luke: "22:66-71" } },
      { title: "First trial before Pilate", refs: { matthew: "27:11-14", mark: "15:2-5", luke: "23:1-5", john: "18:28-38" } },
      { title: "Trial before Herod Antipas", refs: { luke: "23:6-12" } },
      { title: "Second trial before Pilate", refs: { matthew: "27:15-26", mark: "15:6-15", luke: "23:13-25", john: "18:38-19:16" } },
      { title: "Crucifixion (approx. 9 AM - 3 PM)", refs: { matthew: "27:35-54", mark: "15:24-39", luke: "23:33-49", john: "19:18-37" } },
      { title: "Burial by Joseph of Arimathea", refs: { matthew: "27:57-61", mark: "15:42-47", luke: "23:50-56", john: "19:38-42" } },
    ],
    narrative: [
      "Judas arrived in Gethsemane leading soldiers and temple guards. He identified Jesus with a kiss. Jesus responded with sovereign composure: \"Judas, would you betray the Son of Man with a kiss?\" When the soldiers declared they sought Jesus of Nazareth, He replied \"I am he\" (ego eimi — the divine name). John records they drew back and fell to the ground.",
      "Jesus endured six trials — three religious (before Annas, Caiaphas, and the full Sanhedrin) and three civil (before Pilate, Herod Antipas, and Pilate again). Every trial was marked by procedural illegality. While Jesus stood trial inside, Peter denied Him three times in the courtyard. Then the rooster crowed, and Luke records: \"The Lord turned and looked at Peter.\"",
      "After being scourged and mocked, Jesus was led to Golgotha. Too weakened to carry His cross, Simon of Cyrene was conscripted. At Golgotha, He was crucified between two criminals. Pilate posted a sign: \"Jesus of Nazareth, the King of the Jews\" in Hebrew, Latin, and Greek — unwittingly proclaiming the truth to the entire known world.",
      "During six hours on the cross, Jesus spoke seven statements revealing the full scope of His redemptive work. At His death, the temple veil tore from top to bottom, darkness covered the land, the earth shook, and tombs opened. The centurion declared: \"Truly this man was the Son of God!\"",
      "Joseph of Arimathea and Nicodemus buried Jesus in Joseph's own new tomb, hewn from rock, rolling a great stone across the entrance.",
    ],
    keyVerse: { text: "It is finished.", ref: "John 19:30" },
    prophecies: [
      { ot: "Isaiah 53:7", otText: "He was oppressed, and he was afflicted, yet he opened not his mouth.", nt: "Matthew 27:12-14", ntText: "He gave no answer, not even to a single charge." },
      { ot: "Psalm 22:16-18", otText: "They have pierced my hands and my feet... they divide my garments among them.", nt: "John 19:23-24", ntText: "Soldiers cast lots for His clothing." },
      { ot: "Psalm 22:1", otText: "My God, my God, why have you forsaken me?", nt: "Matthew 27:46", ntText: "Jesus cries out from the cross quoting this psalm." },
      { ot: "Isaiah 53:9", otText: "They made his grave with the wicked and with a rich man in his death.", nt: "Matthew 27:57-60", ntText: "Laid in the tomb of Joseph of Arimathea, a rich man." },
      { ot: "Psalm 34:20", otText: "He keeps all his bones; not one of them is broken.", nt: "John 19:33-36", ntText: "Soldiers did not break His legs." },
      { ot: "Zechariah 12:10", otText: "They shall look on me, on him whom they have pierced.", nt: "John 19:34, 37", ntText: "A soldier pierced His side with a spear." },
      { ot: "Amos 8:9", otText: "I will make the sun go down at noon and darken the earth in broad daylight.", nt: "Matthew 27:45", ntText: "Darkness from noon to 3 PM." },
      { ot: "Isaiah 53:12", otText: "He was numbered with the transgressors.", nt: "Mark 15:27-28", ntText: "Crucified between two criminals." },
      { ot: "Psalm 69:21", otText: "For my thirst they gave me sour wine to drink.", nt: "John 19:29", ntText: "They offered Him sour wine on a sponge." },
    ],
    tables: [
      {
        title: "The Seven Last Words from the Cross",
        headers: ["#", "Statement", "Significance", "Reference"],
        rows: [
          ["1", "\"Father, forgive them, for they know not what they do.\"", "Forgiveness — intercedes for His executioners", "Luke 23:34"],
          ["2", "\"Today you will be with me in paradise.\"", "Salvation — grace by faith, in the final hour", "Luke 23:43"],
          ["3", "\"Woman, behold your son!... Behold your mother!\"", "Relationship — provides for His mother", "John 19:26-27"],
          ["4", "\"My God, my God, why have you forsaken me?\"", "Abandonment — bears the Father's wrath (Psalm 22:1)", "Matt 27:46"],
          ["5", "\"I thirst.\"", "Humanity — the Creator suffers (Psalm 69:21)", "John 19:28"],
          ["6", "\"It is finished.\" (Tetelestai)", "Triumph — the debt is paid in full", "John 19:30"],
          ["7", "\"Father, into your hands I commit my spirit.\"", "Reunion — yields His life to the Father (Psalm 31:5)", "Luke 23:46"],
        ],
      },
      {
        title: "The Six Trials of Jesus",
        headers: ["Trial", "Before Whom", "Key Events", "Reference"],
        rows: [
          ["1. Religious", "Annas (former high priest)", "Informal interrogation; Jesus struck", "John 18:13-24"],
          ["2. Religious", "Caiaphas & partial Sanhedrin", "False witnesses; Jesus declares 'I am'", "Matt 26:57-68"],
          ["3. Religious", "Full Sanhedrin (after sunrise)", "Formal condemnation for blasphemy", "Matt 27:1-2"],
          ["4. Civil", "Pilate (first appearance)", "Pilate finds no fault; sends to Herod", "John 18:28-38"],
          ["5. Civil", "Herod Antipas", "Herod mocks Jesus; sends back to Pilate", "Luke 23:6-12"],
          ["6. Civil", "Pilate (second appearance)", "Barabbas released; crucifixion ordered", "Matt 27:15-26"],
        ],
      },
    ],
  },
  {
    id: "holy-saturday",
    dayNumber: 7,
    dayName: "Holy Saturday",
    title: "The Silence of the Tomb",
    subtitle: "Sabbath Rest & the Sealed Tomb",
    theme: "Silence, Grief & Waiting",
    color: "#333333",
    colorLight: "#A0A0A0",
    events: [
      { title: "Women rest on the Sabbath", refs: { luke: "23:56" } },
      { title: "Chief priests secure the tomb with a guard and seal", refs: { matthew: "27:62-66" } },
    ],
    narrative: [
      "Saturday was a day of devastating silence for the disciples. Their hopes for a conquering Messiah had been brutally extinguished. Luke records simply that the women \"rested on the Sabbath in obedience to the commandment.\"",
      "The religious leaders, however, were restless. Remembering that Jesus had predicted His resurrection after three days, they approached Pilate and requested a guard. Pilate granted their request. A Roman guard was posted, and the stone was sealed with the imperial seal.",
      "This detail is historically significant: the very measures taken to prevent a false resurrection claim became the strongest evidence that the resurrection was genuine. A sealed tomb, guarded by Roman soldiers, could not have been compromised by a band of frightened, demoralized fishermen.",
    ],
    keyVerse: { text: "So they went and made the tomb secure by sealing the stone and setting a guard.", ref: "Matthew 27:66" },
    prophecies: [],
  },
  {
    id: "resurrection-sunday",
    dayNumber: 8,
    dayName: "Resurrection Sunday",
    title: "He Is Risen",
    subtitle: "The Empty Tomb & Appearances",
    theme: "Victory, Hope & New Creation",
    color: "#B8860B",
    colorLight: "#FFF3CD",
    image: IMAGES.emptyTomb,
    events: [
      { title: "Women discover the empty tomb", refs: { matthew: "28:1-8", mark: "16:1-8", luke: "24:1-12", john: "20:1-13" } },
      { title: "Jesus appears to Mary Magdalene", refs: { matthew: "28:9-10", mark: "16:9-11", john: "20:14-18" } },
      { title: "Jesus appears on the Emmaus road", refs: { mark: "16:12-13", luke: "24:13-35" } },
      { title: "Jesus appears to the disciples", refs: { matthew: "28:16-20", mark: "16:14-18", luke: "24:36-49", john: "20:19-23" } },
    ],
    narrative: [
      "Early on Sunday morning, while it was still dark, several women approached the tomb carrying spices. They arrived to find the stone rolled away, the guards incapacitated, and the tomb empty. An angel declared: \"He is not here, for he has risen, as he said. Come, see the place where he lay.\"",
      "Peter and John raced to the tomb. John saw the linen wrappings lying flat — not unwound, but collapsed in place, as if the body had simply passed through them. The face cloth was folded separately. John \"saw and believed.\"",
      "Jesus appeared first to Mary Magdalene, who initially mistook Him for the gardener. He then appeared to the other women, to Peter privately, to two disciples on the road to Emmaus (who recognized Him in the breaking of bread), and finally to the gathered disciples in a locked room, where He showed His wounds and said, \"Peace be with you... Receive the Holy Spirit.\"",
      "The resurrection is not an epilogue to the story of the cross. It is the vindication of everything Jesus claimed, the validation of every prophecy He fulfilled, and the foundation upon which the entire Christian faith stands. As Paul wrote: \"If Christ has not been raised, your faith is futile\" (1 Corinthians 15:17). But He has been raised — and everything has changed.",
    ],
    keyVerse: { text: "He is not here, for he has risen, as he said.", ref: "Matthew 28:6" },
    prophecies: [
      { ot: "Psalm 16:10", otText: "You will not abandon my soul to Sheol, or let your holy one see corruption.", nt: "Acts 2:27-31", ntText: "Peter cites this psalm as fulfilled in the resurrection." },
      { ot: "Isaiah 53:10-11", otText: "He shall see his offspring; he shall prolong his days.", nt: "Matthew 28:6", ntText: "He is risen; His days are prolonged eternally." },
      { ot: "Hosea 6:2", otText: "After two days he will revive us; on the third day he will raise us up.", nt: "1 Corinthians 15:4", ntText: "He was raised on the third day in accordance with the Scriptures." },
    ],
    tables: [
      {
        title: "Resurrection Appearances on Sunday",
        headers: ["Appearance", "To Whom", "Key Details", "Reference"],
        rows: [
          ["1st", "Mary Magdalene", "Mistook Him for the gardener; 'Do not cling to me'", "John 20:11-18"],
          ["2nd", "The other women", "They worshipped Him as they ran from the tomb", "Matt 28:9-10"],
          ["3rd", "Peter (Cephas)", "A private appearance; details not recorded", "Luke 24:34"],
          ["4th", "Two on the Emmaus road", "Recognized in the breaking of bread", "Luke 24:13-35"],
          ["5th", "The Eleven (minus Thomas)", "Showed wounds; 'Receive the Holy Spirit'", "John 20:19-23"],
        ],
      },
    ],
  },
];

export const GOSPEL_HARMONY = {
  title: "The Complete Gospel Harmony",
  description: "Every major event of Holy Week harmonized across all four Gospels. Where a Gospel omits an event, the cell is left blank, revealing each writer's distinct editorial emphasis.",
};

export const THEOLOGICAL_THEMES = [
  { theme: "Jesus as King", days: ["Triumphal Entry", "Authority over temple", "Authority over challengers", "", "", "\"King of the Jews\" on the cross", "", "Risen Lord"] },
  { theme: "Judgment", days: ["Weeping over Jerusalem", "Fig tree cursed; temple cleansed", "Seven Woes; Olivet Discourse", "", "", "Judgment on the sinless substitute", "", "Judgment conquered"] },
  { theme: "Rejection", days: ["Crowds acclaim, leaders plot", "Leaders enraged", "Leaders silenced", "Conspiracy finalized", "Judas departs", "\"Crucify Him!\"", "Tomb sealed", "Rejection overturned"] },
  { theme: "Sacrifice", days: ["", "", "", "", "Passover Lamb; body & blood", "The Lamb of God slain", "", ""] },
  { theme: "New Covenant", days: ["", "", "", "", "\"This cup is the new covenant\"", "Covenant ratified in blood", "", ""] },
  { theme: "Resurrection Hope", days: ["", "", "Olivet Discourse", "", "\"After three days I will rise\"", "", "", "\"He is risen!\""] },
];
