import { useState } from "react";
import Faction from "./Faction"

const factionsObj = {
  "COSMIC": {
    "name": "Cosmic Engineers",
    "description": "The Cosmic Engineers are a group of highly advanced scientists and engineers who seek to terraform and colonize new worlds, pushing the boundaries of technology and exploration.",
    "headquarters": "X1-YU85-99640B",
    "traits": [
      {
        "symbol": "INNOVATIVE",
        "name": "Innovative",
        "description": "Willing to try new and untested ideas. Sometimes able to come up with creative and original solutions to problems, and may be able to think outside the box. Sometimes at the forefront of technological or social change, and may be willing to take risks in order to advance the boundaries of human knowledge and understanding."
      },
      {
        "symbol": "BOLD",
        "name": "Bold",
        "description": "Unafraid to take risks and challenge the status quo. Sometimes willing to do things that others would not dare, and may be able to overcome obstacles and challenges that would be insurmountable for others. Sometimes able to inspire and motivate others to take bold action as well."
      },
      {
        "symbol": "VISIONARY",
        "name": "Visionary",
        "description": "Possessing a clear and compelling vision for the future. Sometimes able to see beyond the present and anticipate the needs and challenges of tomorrow. Sometimes able to inspire and guide others towards a better and brighter future, and may be willing to take bold and decisive action to make their vision a reality."
      },
      {
        "symbol": "CURIOUS",
        "name": "Curious",
        "description": "Possessing a strong desire to learn and explore. Sometimes interested in a wide range of topics and may be willing to take risks in order to satisfy their curiosity. Sometimes able to think outside the box and come up with creative solutions to challenges."
      }
    ],
    "isRecruiting": true
  },
  "VOID": {
    "name": "Voidfarers",
    "description": "The Voidfarers are a group of nomadic traders and adventurers who travel the galaxy in search of riches and adventure, willing to take risks and explore the unknown.",
    "headquarters": "X1-FY6-28680D",
    "traits": [
      {
        "symbol": "DARING",
        "name": "Daring",
        "description": "Willing to take risks and challenges. Sometimes unafraid to explore new and unknown territories, and may be willing to take bold and decisive action in order to achieve their goals. Sometimes able to overcome challenges that would be insurmountable for others."
      },
      {
        "symbol": "EXPLORATORY",
        "name": "Exploratory",
        "description": "Dedicated to exploration and discovery. Sometimes interested in mapping new territories and uncovering the secrets of the universe. Sometimes able to overcome obstacles and challenges in order to advance the boundaries of human knowledge and understanding."
      },
      {
        "symbol": "RESOURCEFUL",
        "name": "Resourceful",
        "description": "Known for their ingenuity and ability to make the most out of limited resources. Able to improvise and adapt to changing circumstances, using whatever is available to them in order to overcome challenges and achieve their goals."
      },
      {
        "symbol": "FLEXIBLE",
        "name": "Flexible",
        "description": "Able to adapt to changing circumstances and environments. Sometimes able to quickly switch between different strategies and tactics in order to respond to new challenges or opportunities. Sometimes able to improvise and think on their feet, making them difficult to predict or outmaneuver."
      }
    ],
    "isRecruiting": true
  },
  "GALACTIC": {
    "name": "Galactic Alliance",
    "description": "The Galactic Alliance is a coalition of planets and factions that have banded together for mutual protection and support, working together to defend against external threats and promote cooperation.",
    "headquarters": "X1-VR14-43680Z",
    "traits": [
      {
        "symbol": "COOPERATIVE",
        "name": "Cooperative",
        "description": "Willing to work together with others in order to achieve common goals. Sometimes able to coordinate and cooperate effectively, using their collective strengths and resources to overcome challenges and achieve success. Often prioritize collaboration and teamwork over individual achievement."
      },
      {
        "symbol": "UNITED",
        "name": "United",
        "description": "Strongly united and cohesive, often with a strong sense of shared identity and purpose. Sometimes able to work together effectively and efficiently, and may be difficult to divide or conquer. Sometimes able to overcome challenges that would be insurmountable for a less united group."
      },
      {
        "symbol": "PEACEFUL",
        "name": "Peaceful",
        "description": "Dedicated to maintaining peace and harmony. Sometimes reluctant to engage in conflict, and may prefer to resolve disputes through negotiation and diplomacy. Sometimes able to create a sense of community and belonging, and may be able to build strong and lasting relationships with others."
      },
      {
        "symbol": "STRATEGIC",
        "name": "Strategic",
        "description": "Skilled in the art of strategy and planning. Sometimes able to think ahead and anticipate the actions of others, and may be able to develop effective plans to achieve their goals. Sometimes able to make calculated risks and sacrifices in order to gain a strategic advantage."
      }
    ],
    "isRecruiting": true
  },
  "QUANTUM": {
    "name": "Quantum Federation",
    "description": "The Quantum Federation is a group of planets and factions that have joined together to share knowledge and technology, using their collective expertise to advance the science and technology of the galaxy.",
    "headquarters": "X1-ZS57-64950Z",
    "traits": [
      {
        "symbol": "INTELLIGENT",
        "name": "Intelligent",
        "description": "Possessing a high level of intelligence and analytical ability. Sometimes skilled in a wide range of fields, including science, technology, and engineering. Often have a strong curiosity and a desire to understand the mysteries of the universe."
      },
      {
        "symbol": "RESEARCH_FOCUSED",
        "name": "Research-Focused",
        "description": "Dedicated to advancing knowledge and understanding through research and experimentation. Often have a strong focus on scientific and technological development, and may be willing to take risks and explore new ideas in order to make progress."
      },
      {
        "symbol": "COLLABORATIVE",
        "name": "Collaborative",
        "description": "Known for their ability to work well with others. Sometimes willing to share resources, knowledge, and expertise in order to achieve common goals. Often have a strong sense of community and cooperation, and may prioritize the needs of the group over those of the individual."
      },
      {
        "symbol": "PROGRESSIVE",
        "name": "Progressive",
        "description": "Open to new ideas and change. Sometimes willing to embrace new technologies and ways of thinking, and may prioritize the advancement of knowledge and understanding over tradition and established ways of doing things."
      }
    ],
    "isRecruiting": true
  },
  "DOMINION": {
    "name": "Stellar Dominion",
    "description": "The Stellar Dominion is a powerful, expansionist faction that seeks to conquer and control as many systems as possible, using their advanced technology and military might to dominate their rivals.",
    "headquarters": "X1-UR47-29080C",
    "traits": [
      {
        "symbol": "MILITARISTIC",
        "name": "Militaristic",
        "description": "Focused on building and maintaining a strong military force. Often prioritize military power and readiness over other concerns, and may be quick to engage in conflict or aggression in order to achieve their goals."
      },
      {
        "symbol": "AGGRESSIVE",
        "name": "Aggressive",
        "description": "Quick to engage in conflict or aggression, often without provocation. Sometimes unpredictable and difficult to negotiate with, and may prioritize their own interests over the needs of others."
      },
      {
        "symbol": "IMPERIALISTIC",
        "name": "Imperialistic",
        "description": "Dedicated to expanding their territory and influence. Often seek to conquer or subjugate other factions, and may have a hierarchical and authoritarian structure. Often prioritize the interests of their own faction over the needs of others."
      },
      {
        "symbol": "INDUSTRIOUS",
        "name": "Industrious",
        "description": "Known for their hard work and dedication. Highly productive and efficient, with a focus on maximizing their output. Sometimes able to produce large quantities of goods or resources, but may also be vulnerable to exploitation or overwork."
      }
    ],
    "isRecruiting": true
  },
  "ASTRO": {
    "name": "Astro-Salvage Alliance",
    "description": "The Astro-Salvage Alliance is a group of scavengers and salvagers who search the galaxy for ancient artifacts and valuable technology, often combing through old ship battlegrounds and derelict space stations.",
    "headquarters": "X1-PC86-64140E",
    "traits": [
      {
        "symbol": "SCAVENGERS",
        "name": "Scavengers",
        "description": "Skilled at finding and salvaging valuable resources and materials from abandoned or derelict ships, space stations, and other structures. Resourceful and able to make the most out of what others have left behind."
      },
      {
        "symbol": "TREASURE_HUNTERS",
        "name": "Treasure Hunters",
        "description": "Always on the lookout for valuable artifacts, ancient relics, and other rare and valuable items. Curious and willing to take risks in order to uncover hidden treasures and secrets of the universe."
      },
      {
        "symbol": "RESOURCEFUL",
        "name": "Resourceful",
        "description": "Known for their ingenuity and ability to make the most out of limited resources. Able to improvise and adapt to changing circumstances, using whatever is available to them in order to overcome challenges and achieve their goals."
      },
      {
        "symbol": "DEXTEROUS",
        "name": "Dexterous",
        "description": "Skilled in the use of their hands and able to perform complex tasks with precision and accuracy. Known for their manual dexterity and ability to manipulate objects with ease, making them valuable in a wide range of tasks and activities."
      }
    ],
    "isRecruiting": true
  },
  "CORSAIRS": {
    "name": "Seventh Space Corsairs",
    "description": "The Seventh Space Corsairs are a feared group of pirates and raiders who operate throughout the galaxy, preying on merchant ships and plundering valuable cargo.",
    "headquarters": "X1-RU52-61270D",
    "traits": [
      {
        "symbol": "UNPREDICTABLE",
        "name": "Unpredictable",
        "description": "Difficult to predict or anticipate, with a tendency to act in unexpected or chaotic ways."
      },
      {
        "symbol": "BRUTAL",
        "name": "Brutal",
        "description": "Fierce and ruthless, with a willingness to use violence or intimidation to achieve their goals. Often feared or respected by others, but may also be viewed as a threat or enemy by those who oppose their methods."
      },
      {
        "symbol": "FLEETING",
        "name": "Fleeting",
        "description": "Not permanently settled in one place, with a tendency to move frequently or unpredictably. Sometimes difficult to find or track, but may also be able to take advantage of opportunities or evade threats by moving quickly or unexpectedly."
      },
      {
        "symbol": "ADAPTABLE",
        "name": "Adaptable",
        "description": "Quick to adapt to changing circumstances, with the ability to adjust their plans or strategies in response to new information or challenges. Sometimes able to thrive in a wide range of environments or situations, but may also be vulnerable to sudden or unexpected changes."
      }
    ],
    "isRecruiting": true
  },
  "OBSIDIAN": {
    "name": "Obsidian Syndicate",
    "description": "The Obsidian Syndicate is a secretive and powerful organization, often involved in illicit activities. They have a vast network of informants and are known for their intelligence capabilities. Not much is known about their actual structure or aims, as they are a highly guarded faction.",
    "headquarters": "X1-FB23-83310D",
    "traits": [
      {
        "symbol": "SECRETIVE",
        "name": "Secretive",
        "description": "Guarded and secretive, with a tendency to keep their plans and activities hidden from others. Sometimes difficult to negotiate with or trust, but may have valuable information or resources that they are willing to share with the right partners."
      },
      {
        "symbol": "INTELLIGENT",
        "name": "Intelligent",
        "description": "Possessing a high level of intelligence and analytical ability. Sometimes skilled in a wide range of fields, including science, technology, and engineering. Often have a strong curiosity and a desire to understand the mysteries of the universe."
      },
      {
        "symbol": "SMUGGLERS",
        "name": "Smugglers",
        "description": "Skilled at moving goods or people across borders or through restricted areas. Sometimes able to avoid detection or interception, and may be able to find hidden or secret routes. Sometimes able to evade or bypass regulations or controls, and may be willing to engage in illegal or risky activities in order to achieve their goals."
      },
      {
        "symbol": "UNPREDICTABLE",
        "name": "Unpredictable",
        "description": "Difficult to predict or anticipate, with a tendency to act in unexpected or chaotic ways."
      }
    ],
    "isRecruiting": true
  },
  "AEGIS": {
    "name": "Aegis Collective",
    "description": "The Aegis Collective is a group of fortified settlements united under a common goal: survival. They focus on defensive strategies and are known to be exceptionally self-sufficient. Despite their somewhat closed-off nature, they are always willing to take in those who need protection.",
    "headquarters": "X1-MQ58-33390B",
    "traits": [
      {
        "symbol": "DEFENSIVE",
        "name": "Defensive",
        "description": "Prepared and able to defend themselves against potential threats. Often have strong military forces or defensive capabilities, but may also be vulnerable to surprise attacks or other forms of aggression."
      },
      {
        "symbol": "SELF_SUFFICIENT",
        "name": "Self-Sufficient",
        "description": "Able to sustain themselves without relying on others for support or resources. Sometimes independent and self-reliant, but may also be isolated or vulnerable to external threats."
      },
      {
        "symbol": "PROUD",
        "name": "Proud",
        "description": "Proud of their heritage, culture, or achievements, with a strong sense of identity and self-respect. Sometimes resistant to change or outside influence, and may be willing to defend their beliefs or values against challenges or threats."
      },
      {
        "symbol": "WELCOMING",
        "name": "Welcoming",
        "description": "Open and receptive to outsiders. Sometimes friendly and hospitable, and may be willing to extend a warm welcome to newcomers. Sometimes able to create a sense of community and belonging, and may be able to build strong and lasting relationships with others."
      }
    ],
    "isRecruiting": true
  },
  "UNITED": {
    "name": "United Independent Settlements",
    "description": "The United Independent Settlements is a loose coalition of small settlements and outposts that have joined together for mutual support and protection, working to defend their independence against larger factions and protect their way of life.",
    "headquarters": "X1-D13-13370B",
    "traits": [
      {
        "symbol": "SELF_SUFFICIENT",
        "name": "Self-Sufficient",
        "description": "Able to sustain themselves without relying on others for support or resources. Sometimes independent and self-reliant, but may also be isolated or vulnerable to external threats."
      },
      {
        "symbol": "DEFENSIVE",
        "name": "Defensive",
        "description": "Prepared and able to defend themselves against potential threats. Often have strong military forces or defensive capabilities, but may also be vulnerable to surprise attacks or other forms of aggression."
      },
      {
        "symbol": "PROUD",
        "name": "Proud",
        "description": "Proud of their heritage, culture, or achievements, with a strong sense of identity and self-respect. Sometimes resistant to change or outside influence, and may be willing to defend their beliefs or values against challenges or threats."
      },
      {
        "symbol": "DIVERSE",
        "name": "Diverse",
        "description": "Comprised of a diverse range of individuals, cultures, or beliefs. Sometimes able to offer a wide range of perspectives and expertise, but may also face challenges in achieving unity or consensus."
      }
    ],
    "isRecruiting": true
  },
  "SOLITARY": {
    "name": "Solitary Systems Alliance",
    "description": "The Solitary Systems Alliance is a loosely-connected group of independent settlements and outposts that have joined together to promote their own interests and protect their autonomy, even if they don't always see eye-to-eye.",
    "headquarters": "X1-AK92-10370Z",
    "traits": [
      {
        "symbol": "INDEPENDENT",
        "name": "Independent",
        "description": "Self-reliant and self-sufficient, with a strong desire for autonomy and independence. Sometimes resistant to external control or interference, but may also be isolated or vulnerable to external threats."
      },
      {
        "symbol": "SELF_INTERESTED",
        "name": "Self-Interested",
        "description": "Focused on their own interests, with a tendency to prioritize their own goals and needs over those of others. Sometimes willing to engage in selfish or unethical behavior in pursuit of their goals, but may also be vulnerable to manipulation or betrayal by others."
      },
      {
        "symbol": "ISOLATED",
        "name": "Isolated",
        "description": "Separated or cut off from others. Sometimes located in a remote or inaccessible location, and may have limited contact with the outside world. Sometimes self-sufficient and self-reliant, and may be able to survive and thrive in challenging or hostile environments. Sometimes able to leverage their isolation and independence to achieve their goals."
      },
      {
        "symbol": "FRAGMENTED",
        "name": "Fragmented",
        "description": "Divided into many smaller groups or factions, with little central organization or coordination. Sometimes difficult to negotiate with or deal with as a single entity, but may also provide opportunities for individual factions to forge their own alliances or partnerships."
      }
    ],
    "isRecruiting": true
  },
  "COBALT": {
    "name": "Cobalt Traders Alliance",
    "description": "The Cobalt Traders Alliance is a group of independent traders and merchants who have come together to promote free trade and open markets, working to protect their interests against larger factions and corporations.",
    "headquarters": "X1-UA5-73930E",
    "traits": [
      {
        "symbol": "COMMERCIAL",
        "name": "Commercial",
        "description": "Focused on trade and commerce, with a strong emphasis on economic growth and development. Sometimes willing to engage in a wide range of activities in order to promote trade and facilitate the exchange of goods and resources."
      },
      {
        "symbol": "FREE_MARKETS",
        "name": "Free Markets",
        "description": "Advocates of free market principles, with a strong emphasis on competition and the ability of individuals and businesses to succeed or fail based on their own efforts. Sometimes willing to engage in risky or unregulated activities in pursuit of profit."
      },
      {
        "symbol": "ENTREPRENEURIAL",
        "name": "Entrepreneurial",
        "description": "Innovative and forward-thinking, with a focus on identifying and pursuing new opportunities. Sometimes willing to take risks in order to create new businesses or ventures, but may also be vulnerable to failure or exploitation."
      },
      {
        "symbol": "FLEXIBLE",
        "name": "Flexible",
        "description": "Able to adapt to changing circumstances and environments. Sometimes able to quickly switch between different strategies and tactics in order to respond to new challenges or opportunities. Sometimes able to improvise and think on their feet, making them difficult to predict or outmaneuver."
      }
    ],
    "isRecruiting": true
  },
  "OMEGA": {
    "name": "Omega Star Network",
    "description": "The Omega Star Network is a group of exiles and rebels, united by their refusal to submit to the control of larger factions. Living on the fringes of society, they have built a network based on mutual trust and the shared belief that freedom is paramount.",
    "headquarters": "X1-ST72-07260B",
    "traits": [
      {
        "symbol": "REBELLIOUS",
        "name": "Rebellious",
        "description": "Resistant to authority or control. Sometimes willing to challenge or defy established rules or norms, and may be seen as rebels or outsiders by others. Sometimes able to leverage their independence and defiance to achieve their goals."
      },
      {
        "symbol": "EXILES",
        "name": "Exiles",
        "description": "Forced or compelled to leave their home or native land. Sometimes outcasts or refugees, and may have limited support or resources. Sometimes able to leverage their isolation and independence to achieve their goals."
      },
      {
        "symbol": "FRAGMENTED",
        "name": "Fragmented",
        "description": "Divided into many smaller groups or factions, with little central organization or coordination. Sometimes difficult to negotiate with or deal with as a single entity, but may also provide opportunities for individual factions to forge their own alliances or partnerships."
      },
      {
        "symbol": "RESOURCEFUL",
        "name": "Resourceful",
        "description": "Known for their ingenuity and ability to make the most out of limited resources. Able to improvise and adapt to changing circumstances, using whatever is available to them in order to overcome challenges and achieve their goals."
      }
    ],
    "isRecruiting": true
  },
  "ECHO": {
    "name": "Echo Technological Conclave",
    "description": "Echo Technological Conclave is an innovative and forward-thinking faction that thrives on technological advancement and scientific discovery. They have a deep commitment to progress and a drive to push the boundaries of what is possible, making them a force to be reckoned with.",
    "headquarters": "X1-TX94-77250C",
    "traits": [
      {
        "symbol": "INNOVATIVE",
        "name": "Innovative",
        "description": "Willing to try new and untested ideas. Sometimes able to come up with creative and original solutions to problems, and may be able to think outside the box. Sometimes at the forefront of technological or social change, and may be willing to take risks in order to advance the boundaries of human knowledge and understanding."
      },
      {
        "symbol": "VISIONARY",
        "name": "Visionary",
        "description": "Possessing a clear and compelling vision for the future. Sometimes able to see beyond the present and anticipate the needs and challenges of tomorrow. Sometimes able to inspire and guide others towards a better and brighter future, and may be willing to take bold and decisive action to make their vision a reality."
      },
      {
        "symbol": "RESEARCH_FOCUSED",
        "name": "Research-Focused",
        "description": "Dedicated to advancing knowledge and understanding through research and experimentation. Often have a strong focus on scientific and technological development, and may be willing to take risks and explore new ideas in order to make progress."
      },
      {
        "symbol": "TECHNOLOGICALLY_ADVANCED",
        "name": "Technologically Advanced",
        "description": "Possessing advanced technology and knowledge, often far beyond the level of other factions. Often have access to powerful weapons, ships, and other technology that gives them a significant advantage in battles and other conflicts."
      }
    ],
    "isRecruiting": true
  },
  "LORDS": {
    "name": "Lords of the Void",
    "description": "The Lords of the Void are a mysterious civilization who traverse the galaxy in search of knowledge and power, often using their advanced technology to their advantage.",
    "headquarters": "X1-DG77-38610B",
    "traits": [
      {
        "symbol": "SECRETIVE",
        "name": "Secretive",
        "description": "Guarded and secretive, with a tendency to keep their plans and activities hidden from others. Sometimes difficult to negotiate with or trust, but may have valuable information or resources that they are willing to share with the right partners."
      },
      {
        "symbol": "TECHNOLOGICALLY_ADVANCED",
        "name": "Technologically Advanced",
        "description": "Possessing advanced technology and knowledge, often far beyond the level of other factions. Often have access to powerful weapons, ships, and other technology that gives them a significant advantage in battles and other conflicts."
      },
      {
        "symbol": "RESOURCEFUL",
        "name": "Resourceful",
        "description": "Known for their ingenuity and ability to make the most out of limited resources. Able to improvise and adapt to changing circumstances, using whatever is available to them in order to overcome challenges and achieve their goals."
      },
      {
        "symbol": "SELF_INTERESTED",
        "name": "Self-Interested",
        "description": "Focused on their own interests, with a tendency to prioritize their own goals and needs over those of others. Sometimes willing to engage in selfish or unethical behavior in pursuit of their goals, but may also be vulnerable to manipulation or betrayal by others."
      }
    ],
    "isRecruiting": true
  },
  "CULT": {
    "name": "Cult of the Machine",
    "description": "The Cult of the Machine is a fanatical group of religious zealots who worship technology and seek to use it to further their own aims, often disregarding the lives of others in pursuit of their own power.",
    "headquarters": "X1-FJ18-54920E",
    "traits": [
      {
        "symbol": "TECHNOLOGICALLY_ADVANCED",
        "name": "Technologically Advanced",
        "description": "Possessing advanced technology and knowledge, often far beyond the level of other factions. Often have access to powerful weapons, ships, and other technology that gives them a significant advantage in battles and other conflicts."
      },
      {
        "symbol": "AGGRESSIVE",
        "name": "Aggressive",
        "description": "Quick to engage in conflict or aggression, often without provocation. Sometimes unpredictable and difficult to negotiate with, and may prioritize their own interests over the needs of others."
      },
      {
        "symbol": "PROUD",
        "name": "Proud",
        "description": "Proud of their heritage, culture, or achievements, with a strong sense of identity and self-respect. Sometimes resistant to change or outside influence, and may be willing to defend their beliefs or values against challenges or threats."
      },
      {
        "symbol": "FRINGE",
        "name": "Fringe",
        "description": "A group of people on the edges or outskirts of mainstream society. Sometimes isolated or marginalized, and may be seen as outsiders or outcasts by others. Sometimes able to leverage their independence and outsider status to achieve their goals."
      }
    ],
    "isRecruiting": true
  },
  "ANCIENTS": {
    "name": "Ancient Guardians",
    "description": "The Ancient Guardians are a mysterious group of protectors who guard ancient artifacts and sites of power, often using their advanced technology and knowledge to protect against external threats.",
    "headquarters": "X1-FK9-63960Z",
    "traits": [
      {
        "symbol": "DEFENSIVE",
        "name": "Defensive",
        "description": "Prepared and able to defend themselves against potential threats. Often have strong military forces or defensive capabilities, but may also be vulnerable to surprise attacks or other forms of aggression."
      },
      {
        "symbol": "SECRETIVE",
        "name": "Secretive",
        "description": "Guarded and secretive, with a tendency to keep their plans and activities hidden from others. Sometimes difficult to negotiate with or trust, but may have valuable information or resources that they are willing to share with the right partners."
      },
      {
        "symbol": "SCAVENGERS",
        "name": "Scavengers",
        "description": "Skilled at finding and salvaging valuable resources and materials from abandoned or derelict ships, space stations, and other structures. Resourceful and able to make the most out of what others have left behind."
      },
      {
        "symbol": "CLAN",
        "name": "Clan",
        "description": "A group of people united by a common ancestry or history. Sometimes able to trace their lineage back to a specific ancestor or founding member, and may be bound together by a set of traditions or customs. Sometimes able to rely on the support and loyalty of their fellow clan members, and may be able to leverage their connections and shared history to achieve their goals."
      }
    ],
    "isRecruiting": true
  },
  "SHADOW": {
    "name": "Shadow Stalkers",
    "description": "The Shadow Stalkers are a clandestine group, seemingly appearing and disappearing at will. Little is known about their actual motivations. Their ability to move without detection has sparked many rumors, some say they are interdimensional travelers.",
    "headquarters": "X1-RG48-59920X",
    "traits": [
      {
        "symbol": "SECRETIVE",
        "name": "Secretive",
        "description": "Guarded and secretive, with a tendency to keep their plans and activities hidden from others. Sometimes difficult to negotiate with or trust, but may have valuable information or resources that they are willing to share with the right partners."
      },
      {
        "symbol": "UNPREDICTABLE",
        "name": "Unpredictable",
        "description": "Difficult to predict or anticipate, with a tendency to act in unexpected or chaotic ways."
      },
      {
        "symbol": "DEXTEROUS",
        "name": "Dexterous",
        "description": "Skilled in the use of their hands and able to perform complex tasks with precision and accuracy. Known for their manual dexterity and ability to manipulate objects with ease, making them valuable in a wide range of tasks and activities."
      },
      {
        "symbol": "FLEETING",
        "name": "Fleeting",
        "description": "Not permanently settled in one place, with a tendency to move frequently or unpredictably. Sometimes difficult to find or track, but may also be able to take advantage of opportunities or evade threats by moving quickly or unexpectedly."
      }
    ],
    "isRecruiting": true
  },
  "ETHEREAL": {
    "name": "Ethereal Enclave",
    "description": "The Ethereal Enclave is a faction that is said to have transcended physical existence. They are believed to possess great wisdom and mysterious abilities. The actual nature of the Enclave is subject to much speculation, and sightings of their representatives are rare and often dismissed as legends.",
    "headquarters": "X1-DK42-60470D",
    "traits": [
      {
        "symbol": "SECRETIVE",
        "name": "Secretive",
        "description": "Guarded and secretive, with a tendency to keep their plans and activities hidden from others. Sometimes difficult to negotiate with or trust, but may have valuable information or resources that they are willing to share with the right partners."
      },
      {
        "symbol": "RESOURCEFUL",
        "name": "Resourceful",
        "description": "Known for their ingenuity and ability to make the most out of limited resources. Able to improvise and adapt to changing circumstances, using whatever is available to them in order to overcome challenges and achieve their goals."
      },
      {
        "symbol": "INNOVATIVE",
        "name": "Innovative",
        "description": "Willing to try new and untested ideas. Sometimes able to come up with creative and original solutions to problems, and may be able to think outside the box. Sometimes at the forefront of technological or social change, and may be willing to take risks in order to advance the boundaries of human knowledge and understanding."
      },
      {
        "symbol": "FRINGE",
        "name": "Fringe",
        "description": "A group of people on the edges or outskirts of mainstream society. Sometimes isolated or marginalized, and may be seen as outsiders or outcasts by others. Sometimes able to leverage their independence and outsider status to achieve their goals."
      }
    ],
    "isRecruiting": true
  }
}

export default function Register({ handleFormSubmit, handleFormSwitch }) {
  const [callsignContent, setCallsignContent] = useState('');
  const [faction, setFaction] = useState('');

  const handleCallsignContentChange = event => {
    const newContent = event.target.value.toUpperCase();
    setCallsignContent(newContent);
  };

  const handleFactionChange = event => {
    const option = event.target.value;
    setFaction(option);
  }

  return (
    <div className="Register">
      <h2>Choose your callsign and select a faction to register:</h2>
      <form className="register-form" onSubmit={handleFormSubmit}>
        <section className="fields">
          <fieldset>
            <label htmlFor="">Callsign: </label>
            <input type="text" name="symbol" value={callsignContent} onChange={handleCallsignContentChange} />
          </fieldset>
          <fieldset>
            <label htmlFor="">Faction: </label>
            <select name="faction" id="" onChange={handleFactionChange}>
              <option value=""></option>
              {Object.keys(factionsObj).map((faction, idx) => (
                <option key={idx} value={faction}>{faction}</option>
              ))}
            </select>
          </fieldset>
          <button>Register Agent</button>
        </section>
        {faction ? <Faction faction={factionsObj[faction]} /> : null}
      </form>
      <h3 className="action" onClick={handleFormSwitch}>or, return to login.</h3>
    </div>
  )
}