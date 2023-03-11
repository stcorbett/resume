export default class {
  static header = [
    {
      name: "engineer",
      content: [
        "Impact driven technology leader and product engineer with 10+ years' experience across the software development lifecycle.",
        "Specializes in innovative, intuitive, and reliable web applications - Focused on growth through product development and prompt feedback cycles.",
        "Drives team performance through experimentation, focused effort, and effective teamwork."
      ]
    },
    {
      name: "general-manager",
      content: [
        "Serial software product entrepreneur, team builder with 15+ years of engineering experience",
        "Systems thinker specializing in innovative, intuitive, and reliable web applications",
        "Drives team performance through experimentation, focused effort, and effective teamwork."
      ]
    }
  ]

  static experiences = [
    {
      name: "aba-session",
      title: "ABA Session",
      subTitle: "Principal Engineer",
      addlTitle: "June 2020 - present",
      description: "Telehealth platform for Applied Behavior Analysis - 5 employees (founder) - Fully remote",
      skills: "Node.js · Stimulusjs · User Experience (UX) · TypeScript · PostgreSQL · Ruby · Ruby on Rails · JavaScript · Applied Behavior Analysis",
      closer: "Unable to find product-market fit",
      image: "./assets/images/abasession-vbmapp.png",
      imageLink: "https://www.youtube.com/@abasession8768/videos",

      content: [
        "Managed a team of developers to rapidly release our MVP on time and on budget, while also managing a stable of content creators, propelling our site into the top ten ABA tools on Google within a year.",
        "Spearheaded innovative product design and user research, managed the beta program, and engaged in early direct sales ensuring true product-market fit.",
        "Successfully implemented privacy controls in accordance with HIPAA and NIH regulations to ensure data security.",
        "Co-designed with users, developed the product, hired and managed engineering and operational teams.",
      ],
      stories: [
        `
          L2IG-WM: A partner in one of my businesses was becoming disengaged, not showing up for our meetings on time, not producing results
          on the projects she picked to work on in the business. We had a phone call where I brought up my concern that she was not
          as engaged as she had been in the past. She opened up, shared some anxieties about her life, the kind of work we were doing
          and how that connected with her memories from childhood. An authentic space opened up between us in our conversation,
          she felt heard and understood, and was able to reflect on what was most important to our business at that time and
          my understanding of how we would reach our goals. She started to believe we had a shot at achieving our goals.
          From there she cam up with a way for her to work on our marketing presence that supported not only her current needs in life,
          but supported our business goals. She ended up runing our YouTube channel for several months, producing 40 videos
          that have resulted in 10's of thousands of people viewing our content and getting exposed to our brand as a helpful
          source of information that would help them solve the kinds of problems our products are designed to solve.
        `,
        `
          LeadTr&Auth: A junior engineer was not delivering on her promise to complete 6 points in our project tracker each sprint.
          I acknowledged that I had dropped the ball in an area that was adjacent to her work (not one I had promised to deliver on
          but an area that effected her). She was re-engaged as of that day went on an 8 week streak of producing
          at the highest level of her career.
        `,
        `
          Software4Needs: In researching the business opportunities in the ABA field, I spoke with many disgruntled people who worked in the field.
          The each had a different set of issues they were most concerned with, parents not participating as needed, co-workers dropping the ball,
          insurance companies not following through, supervisors expecting impossible levels of performance.

          When I broke those issues down into core problems, I was able to see a trend of the work environment not supporting the work
          that needed to be done and therefore people not being able to perform at the levels they wanted to perform.

          When I summarized people's issues in this framework, they were overjoyed to hear someone understood their needs and were eager to
          help us build the kinds of tools we've designed to support their work and the results they want to have with their clients.
        `
      ]
    },

    {
      name: "newline",
      title: "Newline Financial",
      subTitle: "Staff Engineer",
      addlTitle: "Jan 2020 - June 2020",
      description: "Residential real-estate investment - 15 employees - Chicago, IL offices",
      closer: "6-month software investment research contract completed",
      skills: "React.js · TypeScript · PostgreSQL · Amazon Web Services (AWS) · JavaScript",

      extra: "Lead development of a business process and financial analysis tool",
      content: [
        "Delivered a functional prototype of what had been a failing development project.",
        "Built relationships with remote team and scaled them down over a 6 month timeline.",
        "Supported management in drawing conclusions from the project and shutting it down."
      ]
    },

    {
      name: "provi",
      title: "Provi",
      subTitle: "Lead Engineer",
      addlTitle: "Nov 2018 - Jan 2020",
      description: "Alcohol ordering and distribution data broker - 37 employees - Chicago, IL and remote",
      closer: "Joined Newline Financial, promotion to Staff Engineer",
      skills: "AngularJS · Vue.js · PostgreSQL · Amazon Web Services (AWS) · Ruby",
      image: "./assets/images/provi-coasters.jpg",

      extra: "Researched, designed, and implemented technology systems to support continued growth. Created a culture of accountability and communication in the technology team",
      content: [
        "Designed and implemented a comprehensive analytics framework that enabled real-time tracking of user interactions, allowing the team to optimize website performance and increase user engagement.",
        "Designed and implimented a real-time product distribution visualization across all alcohol brands, leading to a 3x reduction in time spent manually searching mistakes in teritory maps. Empowered staff to quickly update non-performing products.",
        "Supported engineering and product teams in creating a product vision matched to the company's long-term strategy."
      ],
      stories: [
        `
          L2IG-WM & LeadTr&Auth: The customer success team was under pressure to improve their speed to import data sets for new markets
          but their day-to-day productivity was slowed by multiple workarounds they were currently performing manually to have
          the application work as customers expected. Each week the product team would get several requests to change how the admin
          system worked, directly from the success team, so that they could improve their process. We would tackle one or two requests
          but they were piling up faster than we were completing them and they were not high priority for us. Management was
          not happy with the CS team's performance, and was activitely looking to replace people as the company depended on
          the CS team improving their throughput for upcoming expansions into new markets.

          I noticed each of the feature requestes were tied to a certain type of transaction from our customers.
          Could there be an approach that would solve several problems at the same time?
          By building relationships with the CS team and listening to how each individual got the different tasks completed,
          we were able to co-create an additional notification in their Slack channel that gave them everything they needed to know
          about each new issue, and gave them links to directly access filtered result sets in the admin system so they could resolve the issues
          with just a few clicks.

          The team's performance improved, the people who helped design the new message were happy with their ability to impact
          their work, and they were able to commit to the expansion plans the company was undertaking.
        `,
        `
          Software4Needs: The data import team was slow on opening new markets.
          This hit at the core of our strategy and goals for the next 3 years.
          At the center of their work was building geo zones to allow list different products
          from different distributors per the geographical agreements those distributors had

          By getting to know some members of the team and understanding their confusion with the
          geo fencing math and the interfaces for it
          I was able to design a visualization tool to show how the math worked and
          make the admin interface link directly to what was happeneing behind the scenes

          The team loved the new interface and immediately improved their performance
          even before we implemented the feature.
        `
      ]
    },

    {
      name: "crafty",
      title: "Crafty Machine",
      subTitle: "Principal Consultant",
      addlTitle: "Since 2009",
      description: "Personal consultancy - 1 employee",
      closer: "Personal LLC for client projects",
      skills: "Twilio · stimulus · Python (Programming Language) · PostgreSQL · Amazon Web Services (AWS) · Ruby on Rails · Ruby",

      extra: "Crafty Machine designs and develops software for small, medium, and large companies, specializing in new market initiatives. I operate in all roles for this small services business, including software implementation and engineering team management.",
      content: [
        "Oversaw the successful development and launch of multiple apps by collaborating with stakeholders, design, development, and marketing teams to ensure a seamless user experience.",
        "Achieved 100% retention rate by focusing on alignment between client needs and software processes.",
        "Rapidly developed customer-centric, cost-effective, and innovative web applications for a variety of small and medium-sized businesses.",
        "Experienced the results of design paradigms across the spectrum of software engineering."
      ]
    },

    {
      name: "mohawk",
      title: "Mohawk St. AirBnB",
      subTitle: "Team Leader",
      addlTitle: "May 2017 - present",
      description: "Air BnB properties - 2 units, 3 employees",
      image: "./assets/images/bnb.png",
      skills: "Operations · Design · Marketing · Leadership",

      content: [
        "Achieved 100% y/y growth by focusing on customer needs and market dynamics.",
        "Created a fun, positive working culture by focusing on personal growth.",
        "Achieved superhost status with automated guest interaction and hand-picked operational team.",
      ]
    },

    {
      name: "hire-abby",
      title: "Hire Abby",
      subTitle: "Co-founder",
      addlTitle: "May 2016 - Nov 2018",
      description: "AI Chat based candidate sourcing and screening platform - 3 employees (founder) - Chicago, IL and remote",
      closer: "Project shuttered before finding product-market fit",
      skills: "React.js · Machine Learning · Artificial Neural Networks · Chatbot Development · Chatbot Design · PostgreSQL · Ruby on Rails · Ruby",

      content: [
        "Developed an interactive chat bot which allowed voters to interact with political candidates by asking questions where the bot would respond with appropriate quotes from each candidate.",
        "Built a series of production pilots, tested market applications for AI driven chat technology.",
        "Created a system that delivered job candidate engagement with an 80% cost reduction in half the time as the industry standard.",
        "Successfully closed six-figure software licensing agreements within the Fortune 500."
      ],
      stories: [
        `
          L2IG-WM: business partner was ready to pull out of our first fortune 500 sales opportunity because
          the actual users didn't understand the product.

          I worked with him to understand what was going on, what they were saying.
          Turns out, they didn't understand what the product was doing
          We designed a dashboard together that would allow them to see the internals enough
          to understand how it worked and use it for themselves

          At the pitch the next day, the holdout users were sold about the new dashboard and we closed the deal!
        `,
        `
          LeadTr&Auth: business partner was overwhelmed, not showing up to work, not productive.
          We had a lot to do, and customers who were taking advantage of our product.
          He had his head down in the day to day operations, didn't see that our progress
          was held back by being overwhelmed

          I was able to make space for his emotional state - which allowed him to
          have a fresh perspective on the business and work with me to build
          a process for the tasks that took up 80% of his work - so we could hire someone
          to operate those processes

          We hired a friend, who performed as well or better than my partner at the task
          and my partner was freed up to go after larger contracts.
          Resulting in our first sale to a fortune 500 business.
        `,
        `
          Software4Needs: Or product was initially email based, our customers were interested
          but had trouble seeing how it would fit into their day to day workflows
          so they were not buying

          We researched their processes and watched them perform their work.
          I designed and built a google sheets integration that had the output
          of our system rendering directly into connected spreadsheets

          We ended up closing our first sale, and then three more in the
          several weeks following
        `
      ]
    },

    {
      name: "tmlp",
      title: "Team, Management, and Leadership Program",
      subTitle: "Team Leader",
      addlTitle: "August 2018 - August 2019",
      description: "Leadership and personal development program - Landmark Worldwide - 32 people",
      skills: "Authentic leadership · Managing people from different backgrounds · Alignment in teams",
      closer: "Program completed",

      content: [
        "Generated $78,000 in revenue in one quarter by leading a team of 23 to deliver Communication Courses using coaching style management.",
        "Generated $1.2m in revenue in six months as an advisor and coach to 24 North American teams.",
        "Developed powerful leadership techniques from trust and authenticity."
      ],
      stories: [
        `
          L2IG-WM: I started my tenure as team leader in the midst of
          several team members being unhappy about their commitments with the project
          People were not showing up to our phone calls, and not taking the early steps
          to accomplish the goals they were commited to

          I worked with the 6 people who had stepped into leadership positions
          in the team, spending time with them focused on their lives, their goals,
          their needs.

          The leadership team, and the teams each of them were leading
          started showing up to our meetings and started taking the needed steps
          to accomplish their goals
        `,
        `
          LeadTr&Auth: The team was disengaged, not bringing themselves to our shared commitments

          I opened up, shared my emotions about conflicts in my life, what was working
          and what was hard. I kept the emotional lines open between myselves
          and the team members.

          People got engaged, started sharing their own wins and fails.
          The leadership team, and the teams each of them were leading
          started performing at higher levels than they had in the prior year of
          working together.
        `,
        `
          Software4Needs: The team was disorganized and taking much longer than needed
          to communicate basic information. People were working hard but not much
          was getting done.

          I listened to some of the people I didn't know as well, people from different backgrounds
          than my own. I started to understand the trouble the spreadsheets we had created
          to keep track of our goals and our progress were casuing, they didn't understand
          spreadsheets, especially not complex sheets. I suggested we move our important communication
          to a new Slack instance. We could handle all of our organizations communication
          needs there, skipping emial and text messages
          and keep track of goals and progress there in text format, rather than spreadsheets

          People were immediately more engaged, communication overhead went down drastically
          and we performed in sync together and accomplished our goals.
        `
      ]
    },

    {
      name: "fibroblast",
      title: "Fibroblast",
      subTitle: "Consultant, Lead Engineer",
      addlTitle: "October 2013 - March 2015",
      description: "Electronic health records, referrals, between health systems - 3 employees - Chicago, IL, offices",
      closer: "Supported project through fundraising and handoff to the financier's development agency",
      skills: "Hiring · High-Tech Sales · healthcare sales · React.js · PostgreSQL · Ruby on Rails · Ruby · JavaScript · DevOps",

      content: [
        "Designed and developed product offering that combined value for health care providers and payers.",
        "Prepared the company culture for growth and later acquisition by Cerner Corporation."
      ]
    },

    {
      name: "enova",
      title: "Enova International",
      subTitle: "Senior Engineer, New initiatives consultant",
      addlTitle: "June 2008 - September 2013",
      description: "Online lending and consumer credit reporting - 1000 employees - Chicago, IL and remote",
      closer: "Joined Fibroblast, promotion to Lead Engineer",
      skills: "Agile Methodologies · Python (Programming Language) · PostgreSQL · Ruby on Rails · Ruby · JavaScript · Jira · Git · DevOps",

      content: [
        "Contributed to project successes in back-end engineering projects, front-end, UI, and internal and external service integrations.",
        "Improved performance of internal services for post-processing customer credit applications reducing time to approval by 50%.",
        "Lead the team in rates of planned and completed work.",
        "Consistently delivered software that performed for over 100,000 daily active users."
      ]
    },

    {
      name: "hms",
      title: "Have My Shift",
      subTitle: "Founder and CTO",
      addlTitle: "June 2009 - July 2012",
      description: "Employee-driven scheduling platform for hourly workforces - 2 employees (founder) - Boston, MA and remote",
      closer: "Project shuttered before finding product-market fit",
      skills: "Fundraising · Product Incubation · AJAX · Virtual Private Server (VPS) · Ubuntu · DevOps · Ruby on Rails · Ruby · JavaScript · Product Development · MySQL",
      images: ["./assets/images/techstars.svg", "./assets/images/starbucks.png", "./assets/images/uber.png"],

      content: [
        "Designed and implemented functional prototype in 48 hours.",
        "Uncovered additional customer needs and scaled the system up to serve thousands of users daily.",
        "Influenced the development of UberX's sharing economy services through conversations with their future CEO.",
        "Closed and delivered on business agreements with local and national chains, including Starbucks and Argo tea",
      ]
    },

  ]

  static community = [
    {
      name: "lakes-of-fire",
      title: "Lakes of Fire - Regional Burn Event",
      content: [
        "Built an open-source community managed event calendar, promoting the ideals of communal effort and radical self-reliance.",
        "Provided medical assistance and leadership in a time of crisis, prevented loss of life.",
      ]
    },
    {
      name: "techstars-mentor",
      title: "Techstars (Excelerate Labs Chicago)",
      subTitle: "Mentor, 2010 class",
      content: [
        "Early advisor to a portfolio of companies now valued at over $1bn.",
        "gave perspective on how software skills can be used in the real world."
      ]
    },
    {
      name: "scale-well",
      title: "Scale Well - Entrepreneurial Grants",
      subTitle: "Founder and Executive Director",
      image: "./assets/images/tribune.png",
      content: [
        "Presented future visions of technology business in Chicago alongside Brad Keywell.",
        "Featured in the Chicago Tribune business section, cover page."
      ]
    },
    {
      name: "illinois-technology-association",
      title: "Illinois Technology Association",
      image: "./assets/images/wsj.png",
      content: [
        "Helped redefine the ITA's relationship with the growing Chicago technology and startup community.",
        "Cited by the Wall Street Journal."
      ]
    },
    {
      name: "starterleague",
      title: "Starter League (Code Academy)",
      subTitle: "Mentor, 2011 and 2012 classes",
      content: [
        "Provided perspective on using software skills in business and the real world."
      ]
    },
    {
      name: "esta",
      title: "Esports Trade Association",
      subTitle: "Founding board member, 2017-2018",
      content: [
        "Created the organizational foundations: community orientation and outreach",
        "Guided discovery of the organization's mission and first staff hires",
      ]
    },
    {
      name: "1871",
      title: "1871 Chicago - Independent Innovation hub",
      subTitle: "",
      content: [
        "Conceptualized the original project with Kevin Willer."
      ]
    },
    {
      name: "improv-everywhere",
      title: "Improv Everywhere - No Pants Subway Ride",
      content: [
        "Chicago Tribune - front-page Cover photo and interviewee.",
      ]
    },
  ]

  static versions = [
    {
      name: "all",
      title: "All",
      urlParam: "all",
      headerContent: 'all',
      communityContent: 'all',
      experiencesContent: 'all',
      show: ['base', 'performance-cultural'],
    },
    {
      name: "senior-engineer",
      title: "Senior engineer",
      urlParam: "senior-engineer",
      path: "engineering",
      headerContent: ['engineer'],
      communityContent: ['techstars-mentor', 'scale-well', 'starterleague', 'esta', '1871', 'illinois-technology-association'],
      experiencesContent: ["aba-session", "crafty", "newline", "provi", "hire-abby", "fibroblast", "enova", "hms"],
      show: ['base'],
    },
    {
      name: "engineering-manager",
      title: "Engineering manager",
      urlParam: "engineering-manager",
      path: "",
      headerContent: ['engineer'],
      communityContent: ['techstars-mentor', 'scale-well', 'starterleague', 'esta', '1871', 'illinois-technology-association', 'improv-everywhere'],
      experiencesContent: ["aba-session", "crafty", "newline", "provi", "hire-abby", "tmlp", "fibroblast", "enova", "hms"],
      show: ['base'],
    },
    {
      name: "general-manager",
      title: "General manager",
      urlParam: "general-manager",
      path: "general-manager",
      headerContent: ['general-manager'],
      communityContent: 'all',
      experiencesContent: ["aba-session", "crafty", "newline", "mohawk", "provi", "hire-abby", "tmlp", "fibroblast", "enova", "hms"],
      show: ['base', 'performance-cultural'],
      replace: {
        'experiences-aba-session-subTitle': 'Founder and CEO',
        'experiences-newline-subTitle': 'Director of Technology',
        'experiences-provi-subTitle': 'Engineering Leader',
        'experiences-hire-abby-subTitle': 'Founder and CTO',
        'experiences-fibroblast-subTitle': 'Interim CTO',
      }
    },
  ]

}
