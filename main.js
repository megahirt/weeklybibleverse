const app =Vue.createApp({
  data() {
    let today = new Date();
    let thisMonday = formatDate(getMonday(today));
    let week = bible[thisMonday];
    let verse = week.Verse;
    let reference = week.Reference;
    if (verse == "") {
      verse = "No Verse This Week!";
      reference - week.Holiday;
    }
    return {
      verse: verse,
      reference: reference,
      today: [today.getFullYear(), today.getMonth()+1, today.getDate()].join("-"),
      monday: thisMonday,
      todayObj: today
    }
  }
});

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

function getMonday(d) {
  d = new Date(d);
  d.setDate(d.getDate()+2);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

const bible = {
  "2020-08-10": {
    "Holiday": "",
    "Lesson": 1,
    "Reference": "Romans 15:4",
    "Verse": "For everything that was written in the past was written to teach us, so that through the endurance taught in the Scriptures and the encouragement they provide we might have hope."
  },
  "2020-08-17": {
    "Holiday": "",
    "Lesson": 2,
    "Reference": "Hebrews 11:17",
    "Verse": "By faith Abraham, when God tested him, offered Isaac as a sacrifice. He who had embraced the promises was about to sacrifice his one and only son"
  },
  "2020-08-24": {
    "Holiday": "",
    "Lesson": 3,
    "Reference": "Ephesians 4:24",
    "Verse": "and to put on the new self, created to be like God in true righteousness and holiness"
  },
  "2020-08-31": {
    "Holiday": "",
    "Lesson": 4,
    "Reference": "Ephesians 4:31-32",
    "Verse": "Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice. Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you."
  },
  "2020-09-07": {
    "Holiday": "",
    "Lesson": 5,
    "Reference": "Gen. 50:20",
    "Verse": "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives."
  },
  "2020-09-14": {
    "Holiday": "",
    "Lesson": 6,
    "Reference": "1 Cor. 14:12",
    "Verse": "So it is with you. Since you are eager for gifts of the Spirit, try to excel in those that build up the church."
  },
  "2020-09-21": {
    "Holiday": "",
    "Lesson": 7,
    "Reference": "Hosea 6:6",
    "Verse": "For I desire mercy, not sacrifice, and the acknowledgement of God not rather than burnt offerings"
  },
  "2020-09-28": {
    "Holiday": "",
    "Lesson": 8,
    "Reference": "Joshua 1:7",
    "Verse": "Be strong and very courageous. Be careful to obey all the law my servant Moses gave you; do not turn from it to the right or to the left,that you may be successful wherever you go."
  },
  "2020-10-05": {
    "Holiday": "short week",
    "Lesson": "",
    "Reference": "",
    "Verse": ""
  },
  "2020-10-12": {
    "Holiday": "October Break",
    "Lesson": "",
    "Reference": "",
    "Verse": ""
  },
  "2020-10-19": {
    "Holiday": "",
    "Lesson": 9,
    "Reference": "1 John 1:8",
    "Verse": "If we claim to be without sin, we deceive ourselves and the truth is not in us."
  },
  "2020-10-26": {
    "Holiday": "",
    "Lesson": 10,
    "Reference": "Eph. 2:8-9",
    "Verse": "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God— not by works, so that no one can boast."
  },
  "2020-11-02": {
    "Holiday": "",
    "Lesson": 11,
    "Reference": "Psalm 121:1-2",
    "Verse": "I lift up my eyes to the mountains— where does my help come from? My help comes from the Lord, the Maker of heaven and earth."
  },
  "2020-11-09": {
    "Holiday": "",
    "Lesson": 12,
    "Reference": "Isaiah 41:10",
    "Verse": "So do not fear, for I am with you; do not be diamayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."
  },
  "2020-11-16": {
    "Holiday": "",
    "Lesson": 15,
    "Reference": "Ruth 1:16",
    "Verse": "But Ruth replied, “Don’t urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God."
  },
  "2020-11-23": {
    "Holiday": "Thanksgiving",
    "Lesson": 13,
    "Reference": "Heb 13:15",
    "Verse": "Through Jesus, therefore, let us continually offer to God a sacrifice of praise—the fruit of lips that openly profess his name."
  },
  "2020-11-30": {
    "Holiday": "",
    "Lesson": 16,
    "Reference": "1 Sam. 12:20",
    "Verse": "“Do not be afraid,” Samuel replied. “You have done all this evil; yet do not turn away from the Lord, but serve the Lord with all your heart."
  },
  "2020-12-07": {
    "Holiday": "half week",
    "Lesson": "",
    "Reference": "",
    "Verse": ""
  },
  "2020-12-14": {
    "Holiday": "Christmas",
    "Lesson": 17,
    "Reference": "Luke 2:16-17",
    "Verse": "So they hurried off and found Mary and Joseph, and the baby, who was lying in the manger. When they had seen him, they spread the word concerning what had been told them about this child,"
  },
  "2020-01-05": {
    "Holiday": "half week",
    "Lesson": "",
    "Reference": "",
    "Verse": ""
  },
  "2020-01-11": {
    "Holiday": "",
    "Lesson": 19,
    "Reference": "1 Sam. 15:22-23",
    "Verse": "But Samuel replied:“Does the Lord delight in burnt offerings and sacrifices as much as in obeying the Lord? To obey is better than sacrifice, and to heed is better than the fat of rams. For rebellion is like the sin of divination, and arrogance like the evil of idolatry. Because you have rejected the word of the Lord, he has rejected you as king.”"
  },
  "2020-01-18": {
    "Holiday": "",
    "Lesson": 20,
    "Reference": "Psalm 18:2",
    "Verse": "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold."
  },
  "2020-01-25": {
    "Holiday": "",
    "Lesson": 21,
    "Reference": "Psalm 51:10",
    "Verse": "Create in me a pure heart, O God, and renew a steadfast spirit within me."
  },
  "2020-02-01": {
    "Holiday": "",
    "Lesson": 22,
    "Reference": "Heb. 3:12",
    "Verse": "See to it, brothers and sisters, that none of you has a sinful, unbelieving heart that turns away from the living God."
  },
  "2020-02-08": {
    "Holiday": "",
    "Lesson": 23,
    "Reference": "James 1:5",
    "Verse": "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you."
  },
  "2020-02-15": {
    "Holiday": "",
    "Lesson": 24,
    "Reference": "1 Peter 3:8",
    "Verse": "Finally, all of you, be like-minded, be sympathetic, love one another,be compassionate and humble."
  },
  "2020-02-22": {
    "Holiday": "",
    "Lesson": 25,
    "Reference": "Psalm 140:4",
    "Verse": "Keep me safe, Lord, from the hands of the wicked; protect me from the violent, who devise ways to trip my feet."
  },
  "2020-03-01": {
    "Holiday": "",
    "Lesson": 26,
    "Reference": "1 Thess 5:12",
    "Verse": "Now we ask you, brothers and sisters, to acknowledge those who work hard among you, who care for you in the Lord and who admonish you."
  },
  "2020-03-08": {
    "Holiday": "Spring Break",
    "Lesson": "",
    "Reference": "",
    "Verse": ""
  },
  "2020-03-15": {
    "Holiday": "",
    "Lesson": 27,
    "Reference": "Isaiah 7:14",
    "Verse": "Therefore the Lord himself will give you a sign: The virgin will conceive and give birth to a son, and will call him Immanuel."
  },
  "2020-03-22": {
    "Holiday": "",
    "Lesson": 28,
    "Reference": "Jer. 29:11",
    "Verse": "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future."
  },
  "2020-03-29": {
    "Holiday": "",
    "Lesson": 30,
    "Reference": "Daniel 2:20",
    "Verse": "Praise be to the name of God for ever and ever; wisdom and power are his."
  },
  "2020-04-05": {
    "Holiday": "Easter",
    "Lesson": 29,
    "Reference": "Isa 53:5",
    "Verse": "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed."
  },
  "2020-04-12": {
    "Holiday": "Songkran Break",
    "Lesson": "",
    "Reference": "",
    "Verse": ""
  },
  "2020-04-19": {
    "Holiday": "",
    "Lesson": 31,
    "Reference": "John 4:23",
    "Verse": "Yet a time is coming and has now come when the true worshipers will worship the Father in the Spirit and in truth, for they are the kind of worshipers the Father seeks."
  },
  "2020-04-26": {
    "Holiday": "",
    "Lesson": 32,
    "Reference": "Proverbs 19:21",
    "Verse": "Many are the plans in a person’s heart, but it is the Lord’s purpose that prevails."
  },
  "2020-05-03": {
    "Holiday": "* 1/2 week",
    "Lesson": "",
    "Reference": "",
    "Verse": ""
  },
  "2020-05-10": {
    "Holiday": "",
    "Lesson": 33,
    "Reference": "John 8:58",
    "Verse": "“Very truly I tell you,” Jesus answered, “before Abraham was born, I am!”"
  },
  "2020-05-17": {
    "Holiday": "",
    "Lesson": 34,
    "Reference": "Rev. 1:3",
    "Verse": "Blessed is the one who reads aloud the words of this prophecy, and blessed are those who hear it and take to heart what is written in it,because the time is near."
  },
  "2020-05-24": {
    "Holiday": "Last week",
    "Lesson": "",
    "Reference": "",
    "Verse": ""
  }
};