const Projects =[
  {
  src: "../programming/hmw.png",
  title: "hunterdigital.media",
  desc: {
    p:["A website made in Gatsby to utilize as a supplement to my job applications. Includes several custom react components as well as a few third-party components peppered in. Uses GraphQL queries as Gatsby's data layer for image and asset optimization. Several of my own illustrations decorate the landing page.",
    ],
    tech:[
      {name:"Gatsby", link:"https://www.gatsbyjs.org/"},
      {name:"Netlify", link:"https://www.netlify.com/"},
      {name:"GraphQL", link:"https://graphql.org/"}
    ]
  },
  links:{
    featured: {enabled: true, text:"VISIT HOMEPAGE", url:"https://www.hunterdigital.media"},
    github: "https://github.com/hunter-digital/gatsby-hmw",
  },
  date:"2018"
},

  {
  src: "../programming/411.jpg",
  title: "Labor411.org Prototype",
  desc: {
    p:["A web app that allowed users to search a database of products and businesses that are considered union friendly. Prototype version uses AWS Dynamo Database as data storage and retrieval, and AWS Cognito as login engine. Was designed to be a lightning-fast static website that could still make dynamic API calls for searches and content.",
    ],
    tech:[
      {name:"AWS", link:"https://aws.amazon.com/"},
      {name:"Gatsby", link:"https://www.gatsbyjs.org/"},
      {name:"Netlify CMS", link:"https://www.netlifycms.org/"},
      {name:"GraphQL", link:"https://graphql.org/"}
    ]
  },
  links:{
    featured: {enabled: false, text:"No demo available"},
    github: "https://github.com/hunter-digital/",
  },
  date: "2018",
  },
    {
    src: "../programming/goodjobshere.png",
    title: "GoodJobsHere.org",
    desc: {
      p:["A microsite built with Preact that allowed users to browse for relevant apprenticeships based on their location and trade. The user would submit info and be directed to the correct page based on Preact router's ability to pass props as the URL path."
      ],
      tech:[
        {name:"Preact", link:"https://preactjs.com/"},
      ]
    },
    links:{
      featured: {enabled: false, text:"Prototype only"},
      github: "https://github.com/hunter-digital/good-jobs",
    },
    date: "2018",
    },
    {
      src: "../programming/poker.gif",
      title: "Hunter's Poker",
      desc: {
        p:[
          "A React-based draw poker game with a polished and engaging interactive interface. Implements the Fisher-Yates shuffle algorithm to generate a new virtual deck for each hand. Each player is dealt five cards and then they are given a chance to hold up to all five. Players are dealt remaining cards and then the hands are scored, compared, and a winner is delcared. Your opponent's AI is basic, but employs a winning long-term strategy. He always go for the flush!",
        ],
        tech:[
          {name:"ReactJS", link:"https://reactjs.org/"},
          {name:"Tachyons", link:"http://tachyons.io/"},
          {name:"Howler", link:"https://howlerjs.com/"},
          {name:"Bluebird", link:"http://bluebirdjs.com/docs/getting-started.html"},
        ],
        plug:{
          text:"Click the POKER button at the top of your screen to play Hunter's Poker."
        }
      },
      links:{
        featured: {enabled: true, text:"PLAY HUNTER'S POKER!", url:"https://www.hunterdigital.media/poker"},
        github: "https://github.com/hunter-digital/gatsby-hmw/blob/master/src/pages/poker.js",
      },
      date: "2017",
    },
    {
      src: "../programming/cleanup.gif",
      title: "NewsCaster CLEANUP",
      desc: {
        p:["Built with the powerful Electron technology to allow for a node-based desktop application. NewsCaster CLEANUP was an in-house CRUD application designed to dynamically parse the NewsCaster Database, detect the folder architecture of the NewsCaster, and look for issues with the clip library such as orphaned clips. It generates a report, and gives the user the ability to delete the problem files from the system. "
        ],
        tech:[
          {name:"NodeJS", link:"https://nodejs.org/en/"},
          {name:"ReactJS", link:"https://reactjs.org/"},
          {name:"Electron", link:"https://electronjs.org/"},
        ]
      },
      links:{
        featured: {text:"Desktop application", url:"https://www.hunterdigital.media"},
        github: "https://github.com/hunter-digital/newscaster-cleanup",
      },
      date: "2017",
    },


    {
      src: "../programming/portfolio.gif",
      title: "Portfolio Image Browser",
      desc: {
        p:[
          "Fully functional image browser that displayed my large collection of creative artwork I had made over the years portfolio. In addition to the actual contents of this portfolio, I wanted to show off my React abilities by creating an interactive browser.",
        ],
        tech:[
          {name:"ReactJS", link:"https://reactjs.org/"},
          {name:"Tachyons", link:"http://tachyons.io/"},
        ],
      },
      links:{
        featured: {text:"No demo available", url:"https://www.hunterdigital.media"},
        github: "https://github.com/hunter-digital/hmw-site-react",
      },
      date: "2017",
      },
      {
        src: "../programming/nms.gif",
        title: "Newsmakersystems.com",
        desc: {
          p:[" NewsCaster CLEANUP was an in-house CRUD application designed to dynamically parse the NewsCaster Database, detect the folder architecture of the NewsCaster, and look for issues with the clip library such as orphaned clips. It generates a report, and gives the user the ability to delete the problem files from the system."
          ],
          tech:[
            {name:"Bootstrap", link:"http://getbootstrap.com/"},
            {name:"MySQL", link:"https://www.mysql.com/"},
            {name:"XAMPP", link:"https://www.apachefriends.org/index.html"},
          ]
        },
        links:{
          featured: {enabled: true, text:"VISIT NEWSMAKER SYSTEMS", url:"http://newsmakersystems.com"},
          github: "http://newsmakersystems.com",
        },
        date: "2017",
      },
      {
        src: "../programming/js.svg",
        title: "Layers to Sprite Sheet Script",
        desc: {
          p:[
            "A photoshop script that will dynamically detect layer size and count, and then fan them out into a sprite sheet for the use on the web. As seen in my game, Bardo",

          ],
          tech:[
            {name:"Photoshop", link:"https://www.photoshop.com/",},
            {name:"JavaScript", link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",},
          ],
        },
        links:{
          featured: {text:"Click HERE to visit site.", url:"https://www.hunterdigital.media"},
          github: "https://github.com/hunter-digital/layers-to-sprite-sheet",
        },
        date: "2016",
      },
    {
      src: "../programming/bardo.gif",
      title: "BARDO: The Savior",
      desc: {
        p:[
          " Bardo won 1st place in Games at the 2017 CSUN Multimedia Showcase.",
          " Bardo the Savior is a 10-20 minute original point-and-click adventure game. Modelled after classic Humongous Entertainment inc. games such as Pajama Sam and Freddi Fish, Bardo moves the format into a new era with a completely browser-based form factor.",
          " This was one of my first major JavaScript programming projects. With hindsight, it was incredibly ambitious and took me from beginner to intermediate quicker than any online course did. Bardo includes three seperate puzzles, a dynamic event scripting system, custom sprite-based animation, a dynamic dialogue system, and a custom inventory system. I also wrote my own photoshop script to take animations and spread them out into enormous sprite sheets.",
        ],
        tech:[
          {name:"Sprite.ly", link:"http://spritely.net/",},
          {name:"jQuery", link:"https://jquery.com/",},
          {name:"CreateJS", link:"https://createjs.com/",},
        ],
      },
      links:{
        featured: {enabled: true, text:"PLAY BARDO THE SAVIOR", url:"http://www.huntermaverickwells.com/"},
        github: "https://github.com/hunter-digital/bardo",
      },
      date: "2016",
    },


  ]

export default Projects;
