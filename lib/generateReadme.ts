import { ReadmeData } from '@/app/page';

export function generateReadmeMarkdown(data: ReadmeData): string {
  let markdown = '';

  // Header Section
  if (data.header.name) {
    markdown += `<h1 align="center">`;
    if (data.header.showWavingHand) {
      markdown += `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png" alt="Waving Hand" width="35" height="35" /> `;
    }
    markdown += `Hi, I'm ${data.header.name}</h1>\n\n`;
  }

  if (data.header.title) {
    markdown += `<h3 align="center">${data.header.title}</h3>\n\n`;
  }

  if (data.header.subtitle) {
    markdown += `<p align="center">${data.header.subtitle}</p>\n\n`;
  }

  // Typing Animation
  if (data.header.typingTexts.length > 0) {
    const typingTexts = data.header.typingTexts.join(';');
    markdown += `<div align="center">\n`;
    markdown += `<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&center=true&vCenter=true&random=false&width=600&height=50&lines=${encodeURIComponent(typingTexts)}" alt="Typing SVG" />\n`;
    markdown += `</div>\n\n`;
  }

  // Profile Image and Stats
  if (data.header.profileImage || data.stats.showGithubStats) {
    if (data.header.profileImage) {
      markdown += `<img align="right" src="${data.header.profileImage}" height="200em" />\n\n`;
    } else if (data.stats.showGithubStats && data.stats.githubUsername) {
      markdown += `<img align="right" src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=${data.stats.githubUsername}&theme=2077" height="200em" />\n\n`;
    }
  }

  // About Section
  const aboutItems = [
    { key: 'currentWork', prefix: '🔭 Currently working on', value: data.about.currentWork },
    { key: 'collaboration', prefix: '👯 Looking to collaborate on', value: data.about.collaboration },
    { key: 'learning', prefix: '🌱 Currently learning', value: data.about.learning },
    { key: 'askAbout', prefix: '💬 Ask me about', value: data.about.askAbout },
    { key: 'funFact', prefix: '⚡ Fun fact:', value: data.about.funFact },
    { key: 'location', prefix: '📍 Located in', value: data.about.location },
  ];

  const validAboutItems = aboutItems.filter(item => item.value.trim());
  if (validAboutItems.length > 0) {
    validAboutItems.forEach(item => {
      markdown += `- ${item.prefix} **${item.value}**\n`;
    });
    markdown += '\n';
  }

  // Resume and additional links in about section
  if (data.additional.resume) {
    markdown += `- 📄 View my **<a target="_blank" href="${data.additional.resume}">Resume</a>**\n`;
  }

  // Contact info in about
  if (data.contact.email) {
    markdown += `- 📫 Reach me at: **<a target="_blank" href="mailto:${data.contact.email}">Email</a>**\n`;
  }

  if (data.contact.portfolio) {
    markdown += `- 👨‍💻 Check out my: **<a target="_blank" href="${data.contact.portfolio}">Portfolio</a>**\n`;
  }

  // Profile views counter
  if (data.stats.showProfileViews && data.stats.githubUsername) {
    markdown += `- <img src="https://komarev.com/ghpvc/?username=${data.stats.githubUsername}&style=flat-square&color=000000" alt="Profile views" />\n`;
  }

  markdown += '\n<br>\n\n---\n\n';

  // Contact Section
  const contactLinks = [];
  if (data.contact.phone) {
    contactLinks.push(`<a href="tel:${data.contact.phone}" target="_blank"><img src="https://img.shields.io/badge/Phone-${encodeURIComponent(data.contact.phone)}-2C2C2C?style=for-the-badge&logo=phone&logoColor=white" alt="Phone"></a>`);
  }
  if (data.contact.email) {
    contactLinks.push(`<a href="mailto:${data.contact.email}" target="_blank"><img src="https://img.shields.io/badge/Gmail-${encodeURIComponent(data.contact.email)}-B22222?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"></a>`);
  }
  if (data.contact.whatsapp) {
    contactLinks.push(`<a href="${data.contact.whatsapp}" target="_blank"><img src="https://img.shields.io/badge/WhatsApp-Contact-1C8C4A?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp"></a>`);
  }
  if (data.contact.linkedin) {
    contactLinks.push(`<a href="${data.contact.linkedin}" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-Connect-005B8A?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>`);
  }
  if (data.contact.portfolio) {
    contactLinks.push(`<a href="${data.contact.portfolio}" target="_blank"><img src="https://img.shields.io/badge/Portfolio-Visit-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio"></a>`);
  }
  if (data.contact.telegram) {
    contactLinks.push(`<a href="${data.contact.telegram}" target="_blank"><img src="https://img.shields.io/badge/Telegram-Contact-006699?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram"></a>`);
  }

  if (contactLinks.length > 0) {
    markdown += `<h3 align="center">Connect with me 🤝</h3>\n`;
    markdown += `<p align="center">\n  ${contactLinks.join('&nbsp;\n  ')}\n</p>\n\n---\n\n`;
  }

  // Skills Section
  const allSkills = [
    ...data.skills.languages,
    ...data.skills.frameworks,
    ...data.skills.databases,
    ...data.skills.tools,
    ...data.skills.design,
  ];

  if (allSkills.length > 0) {
    markdown += `<h3 align="center">Technologies &amp; Skills 🛠️</h3>\n`;
    markdown += `<p align="center">\n`;
    allSkills.forEach(skill => {
      const skillBadge = generateSkillBadge(skill);
      markdown += `  <img src="${skillBadge}" alt="${skill}">\n`;
    });
    markdown += `</p>\n\n---\n\n`;
  }

  // Projects Section
  if (data.projects.length > 0) {
    markdown += `<h3 align="center">Featured Projects 🚀</h3>\n\n`;
    data.projects.forEach(project => {
      markdown += `### ${project.name}\n`;
      if (project.description) {
        markdown += `${project.description}\n\n`;
      }
      if (project.tech.length > 0) {
        markdown += `**Tech Stack:** ${project.tech.join(', ')}\n\n`;
      }
      const links = [];
      if (project.github) {
        links.push(`[GitHub](${project.github})`);
      }
      if (project.demo) {
        links.push(`[Live Demo](${project.demo})`);
      }
      if (links.length > 0) {
        markdown += `${links.join(' • ')}\n\n`;
      }
      markdown += '---\n\n';
    });
  }

  // GitHub Stats
  if (data.stats.githubUsername) {
    const statsImages = [];
    
    if (data.stats.showGithubStats) {
      statsImages.push(`<img src="https://github-readme-stats.vercel.app/api?username=${encodeURIComponent(data.stats.githubUsername)}&amp;show_icons=true&amp;theme=dark&amp;hide_border=true&amp;count_private=true" alt="GitHub Stats" />`);
    }
    
    if (data.stats.showTopLanguages) {
      statsImages.push(`<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${encodeURIComponent(data.stats.githubUsername)}&amp;layout=compact&amp;theme=dark&amp;hide_border=true" alt="Top Languages" />`);
    }
    
    if (data.stats.showStreakStats) {
      statsImages.push(`<img src="https://github-readme-streak-stats.herokuapp.com/?user=${encodeURIComponent(data.stats.githubUsername)}&amp;theme=dark&amp;hide_border=true" alt="GitHub Streak" />`);
    }

    if (statsImages.length > 0) {
      markdown += `<h3 align="center">GitHub Statistics 📊</h3>\n`;
      markdown += `<div align="center">\n`;
      statsImages.forEach(img => {
        markdown += `  ${img}\n`;
      });
      markdown += `</div>\n\n`;
    }
  }

  // Additional Links
  const additionalLinks = [];
  if (data.additional.blog) additionalLinks.push(`[Blog](${data.additional.blog})`);
  if (data.additional.youtube) additionalLinks.push(`[YouTube](${data.additional.youtube})`);
  if (data.additional.medium) additionalLinks.push(`[Medium](${data.additional.medium})`);
  if (data.additional.devto) additionalLinks.push(`[Dev.to](${data.additional.devto})`);

  if (additionalLinks.length > 0) {
    markdown += `---\n\n<h3 align="center">Find me elsewhere 🌐</h3>\n`;
    markdown += `<p align="center">${additionalLinks.join(' • ')}</p>\n\n`;
  }

  // Footer
  markdown += `<img src="https://raw.githubusercontent.com/Trilokia/Trilokia/379277808c61ef204768a61bbc5d25bc7798ccf1/bottom_header.svg" />\n`;

  return markdown;
}

function generateSkillBadge(skill: string): string {
  const skillBadges: { [key: string]: string } = {
    // Languages
    'javascript': 'https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=black',
    'typescript': 'https://img.shields.io/badge/TypeScript-%233178C6.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white',
    'python': 'https://img.shields.io/badge/Python-%233776AB.svg?style=for-the-badge&amp;logo=python&amp;logoColor=white',
    'java': 'https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&amp;logo=java&amp;logoColor=white',
    'c++': 'https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&amp;logo=c%2B%2B&amp;logoColor=white',
    'c': 'https://img.shields.io/badge/C-%23A8B9CC.svg?style=for-the-badge&amp;logo=c&amp;logoColor=black',
    'go': 'https://img.shields.io/badge/Go-%2300ADD8.svg?style=for-the-badge&amp;logo=go&amp;logoColor=white',
    'rust': 'https://img.shields.io/badge/Rust-%23000000.svg?style=for-the-badge&amp;logo=rust&amp;logoColor=white',
    'php': 'https://img.shields.io/badge/PHP-%23777BB4.svg?style=for-the-badge&amp;logo=php&amp;logoColor=white',
    'ruby': 'https://img.shields.io/badge/Ruby-%23CC342D.svg?style=for-the-badge&amp;logo=ruby&amp;logoColor=white',
    'swift': 'https://img.shields.io/badge/Swift-%23FA7343.svg?style=for-the-badge&amp;logo=swift&amp;logoColor=white',
    'kotlin': 'https://img.shields.io/badge/Kotlin-%230095D5.svg?style=for-the-badge&amp;logo=kotlin&amp;logoColor=white',
    // Frontend
    'react': 'https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&amp;logo=react&amp;logoColor=black',
    'vue.js': 'https://img.shields.io/badge/Vue.js-%234FC08D.svg?style=for-the-badge&amp;logo=vue.js&amp;logoColor=white',
    'angular': 'https://img.shields.io/badge/Angular-%23DD0031.svg?style=for-the-badge&amp;logo=angular&amp;logoColor=white',
    'next.js': 'https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&amp;logo=next.js&amp;logoColor=white',
    'nuxt.js': 'https://img.shields.io/badge/Nuxt.js-%2300C58E.svg?style=for-the-badge&amp;logo=nuxt.js&amp;logoColor=white',
    'svelte': 'https://img.shields.io/badge/Svelte-%23FF3E00.svg?style=for-the-badge&amp;logo=svelte&amp;logoColor=white',
    'html': 'https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white',
    'css': 'https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white',
    'tailwind css': 'https://img.shields.io/badge/Tailwind%20CSS-%2306B6D4.svg?style=for-the-badge&amp;logo=tailwind-css&amp;logoColor=white',
    'bootstrap': 'https://img.shields.io/badge/Bootstrap-%23563D7C.svg?style=for-the-badge&amp;logo=bootstrap&amp;logoColor=white',
    'material-ui': 'https://img.shields.io/badge/Material--UI-%230081CB.svg?style=for-the-badge&amp;logo=material-ui&amp;logoColor=white',
    // Backend
    'node.js': 'https://img.shields.io/badge/Node.js-%23339933.svg?style=for-the-badge&amp;logo=node.js&amp;logoColor=white',
    'express.js': 'https://img.shields.io/badge/Express.js-%23000000.svg?style=for-the-badge&amp;logo=express&amp;logoColor=white',
    'django': 'https://img.shields.io/badge/Django-%23092E20.svg?style=for-the-badge&amp;logo=django&amp;logoColor=white',
    'flask': 'https://img.shields.io/badge/Flask-%23000000.svg?style=for-the-badge&amp;logo=flask&amp;logoColor=white',
    'spring boot': 'https://img.shields.io/badge/Spring%20Boot-%236DB33F.svg?style=for-the-badge&amp;logo=spring&amp;logoColor=white',
    'laravel': 'https://img.shields.io/badge/Laravel-%23FF2D20.svg?style=for-the-badge&amp;logo=laravel&amp;logoColor=white',
    // Databases
    'mongodb': 'https://img.shields.io/badge/MongoDB-%2347A248.svg?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white',
    'mysql': 'https://img.shields.io/badge/MySQL-%234479A1.svg?style=for-the-badge&amp;logo=mysql&amp;logoColor=white',
    'postgresql': 'https://img.shields.io/badge/PostgreSQL-%23336791.svg?style=for-the-badge&amp;logo=postgresql&amp;logoColor=white',
    'redis': 'https://img.shields.io/badge/Redis-%23DC382D.svg?style=for-the-badge&amp;logo=redis&amp;logoColor=white',
    'sqlite': 'https://img.shields.io/badge/SQLite-%23003B57.svg?style=for-the-badge&amp;logo=sqlite&amp;logoColor=white',
    'firebase': 'https://img.shields.io/badge/Firebase-%23FFCA28.svg?style=for-the-badge&amp;logo=firebase&amp;logoColor=black',
    'supabase': 'https://img.shields.io/badge/Supabase-%233ECF8E.svg?style=for-the-badge&amp;logo=supabase&amp;logoColor=white',
    'oracle': 'https://img.shields.io/badge/Oracle-%23F80000.svg?style=for-the-badge&amp;logo=oracle&amp;logoColor=white',
    // Tools
    'git': 'https://img.shields.io/badge/Git-%23F05032.svg?style=for-the-badge&amp;logo=git&amp;logoColor=white',
    'docker': 'https://img.shields.io/badge/Docker-%232496ED.svg?style=for-the-badge&amp;logo=docker&amp;logoColor=white',
    'kubernetes': 'https://img.shields.io/badge/Kubernetes-%23326CE5.svg?style=for-the-badge&amp;logo=kubernetes&amp;logoColor=white',
    'aws': 'https://img.shields.io/badge/AWS-%23232F3E.svg?style=for-the-badge&amp;logo=amazon-aws&amp;logoColor=white',
    'azure': 'https://img.shields.io/badge/Azure-%230078D4.svg?style=for-the-badge&amp;logo=microsoft-azure&amp;logoColor=white',
    'google cloud': 'https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&amp;logo=google-cloud&amp;logoColor=white',
    'vercel': 'https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&amp;logo=vercel&amp;logoColor=white',
    'netlify': 'https://img.shields.io/badge/Netlify-%2300C7B7.svg?style=for-the-badge&amp;logo=netlify&amp;logoColor=white',
    'vs code': 'https://img.shields.io/badge/VS%20Code-%23007ACC.svg?style=for-the-badge&amp;logo=visual-studio-code&amp;logoColor=white',
    'postman': 'https://img.shields.io/badge/Postman-%23FF6C37.svg?style=for-the-badge&amp;logo=postman&amp;logoColor=white',
    // Design
    'figma': 'https://img.shields.io/badge/Figma-%23F24E1E.svg?style=for-the-badge&amp;logo=figma&amp;logoColor=white',
    'adobe xd': 'https://img.shields.io/badge/Adobe%20XD-%23FF26BE.svg?style=for-the-badge&amp;logo=adobe-xd&amp;logoColor=white',
    'sketch': 'https://img.shields.io/badge/Sketch-%23F7B500.svg?style=for-the-badge&amp;logo=sketch&amp;logoColor=black',
    'photoshop': 'https://img.shields.io/badge/Photoshop-%2331A8FF.svg?style=for-the-badge&amp;logo=adobe-photoshop&amp;logoColor=white',
    'illustrator': 'https://img.shields.io/badge/Illustrator-%23FF9A00.svg?style=for-the-badge&amp;logo=adobe-illustrator&amp;logoColor=white',
  };

  const skillKey = skill.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
  return skillBadges[skillKey] || `https://img.shields.io/badge/${encodeURIComponent(skill)}-%23000000.svg?style=for-the-badge`;
}