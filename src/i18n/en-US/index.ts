export default {
  // Side Bar
  sideBar: {
    // Menu
    menu: {
      menuLink1: 'Home',
      menuLink2: 'About Me',
      menuLink3: 'Resume',
      menuLink4: 'Portfolio',
      menuLink5: 'Contact',
    },
    // Panel
    panel: {
      title: 'Guilherme Bodelon',
      subtitle: 'Full Stack Developer & Web Designer',
      copyright:
        'Guilherme Bodelon Information Technology Services Ltd.<br/>Copyright © 2023 - All rights reserved.',
      btnLogin: 'Admin Access',
    },
  },
  // Components
  components: {
    // Internal Components
    internal: {
      auth: {
        // Login Form
        login: {
          title: 'Login',
          user: {
            label: 'Username',
            hint: 'Enter your username.',
            rule: 'Please provide your username.',
          },
          password: {
            label: 'Password',
            hint: 'Enter your password.',
            rule: 'Please provide your password.',
          },
          rememberMeLabel: 'Remember Me',
          registerLabel: 'Register',
          forgotPasswordLabel: 'Forgot Password?',
          backToSite: 'Back to Site',
          notificationMessage: 'Welcome! - ID: ',
        },
        // Logout
        logout: {
          buttonLabel: 'Logout',
          notificationMessage: 'Logged out successfully! Come back anytime.',
        },
        // Register Form
        register: {
          title: 'Register',
          fullName: {
            label: 'Full Name',
            hint: 'Enter your full name.',
            rule: 'Please provide your full name.',
          },
          email: {
            label: 'Email',
            hint: 'Enter your email.',
            rule: 'Please provide your email.',
          },
          user: {
            label: 'Username',
            hint: 'Enter your username.',
            rule: 'Please provide your username.',
          },
          password: {
            label: 'Password',
            hint: 'Enter your password.',
            rule: 'Please provide your password.',
          },
          passwordConfirmation: {
            label: 'Confirm Password',
            hint: 'Confirm your password.',
            rule: 'Please confirm your password.',
          },
          rememberMeLabel: 'Remember Me',
          registerLabel: 'Register',
          alreadyRegisteredLabel: 'Already have an account?',
          notificationMessage: 'Registration completed successfully.',
        },
        // Forgot Password
        forgotPassword: {
          title: 'Forgot Password',
          instructions:
            'Fill in the email you registered below, and we will send a recovery link to it.',
          email: {
            label: 'Email',
            hint: 'Enter your email.',
            rule: 'Please provide your email.',
          },
          backLabel: 'Back',
          submitLabel: 'Send recovery link',
          onSuccess: {
            title: 'Check your email',
            instructions:
              'Access your email <b>{ email }</b> and click on the password reset link we sent to your account.<br/><br/>It may take a few minutes to appear in your inbox. Be sure to check your spam and promotions folders, just in case!',
            doneLabel: 'Done',
            restartLabel: 'Restart',
          },
          onError: {
            title: 'Account Recovery',
            errorMessage:
              'The email ({ email }) is not registered in our database.',
            suggestion: 'Check the spelling or try another email.',
            registerLabel: 'Register a new account',
            restartLabel: 'Restart',
          },
        },
        // Login Carousel
        carousel: {
          firstSlide: {
            title: 'Explore Innovation',
            topic1: {
              text: 'Simplified Access, Extraordinary Results.',
            },
            topic2: {
              text: 'Register or log in to explore our intuitive and innovative system. Be part of the change you want to see.',
            },
            topic3: {
              text: 'Explore a world of possibilities. Join us and discover what we can offer you.',
            },
          },
          secondSlide: {
            title: 'Turning Ideas into Reality',
            topic1: { text: 'We develop tailor-made solutions for you.' },
            topic2: {
              text: 'Creativity and innovation are at the heart of our process.',
            },
            topic3: {
              text: 'We turn your visions into tangible results.',
            },
          },
          thirdSlide: {
            title: 'Boost Your Business',
            topic1: { text: 'Increase profitability with our solutions.' },
            topic2: { text: 'Reach new levels of success.' },
            topic3: {
              text: 'Outshine the competition with our innovative approach.',
            },
          },
          fourthSlide: {
            title: 'Responsive and Engaging Design',
            topic1: { text: 'We create designs that captivate and delight.' },
            topic2: {
              text: 'Ensure a seamless experience on all devices.',
            },
            topic3: {
              text: 'See your projects come to life with our designs.',
            },
          },
        },
      },
    },
    // External Components
    external: {},
    // Shared Components
    shared: {
      // Language Selector
      languageSelector: {
        label: 'Change Language',
        prefix: 'Current Language:',
      },
    },
  },
  // Pages
  pages: {
    // External Pages
    external: {
      // About Me Page
      aboutMe: {
        aboutMeText: {
          title: 'About <span style="color:#5050f5;">Me</span>',
          intro1:
            'Full Stack Web Developer and Web Designer with over 5 years of experience, specializing in high-complexity solutions. I apply rigorous development methodologies and Clean Code practices to optimize processes.',
          intro2:
            'My professional journey has evolved through a wide range of projects, allowing me to contribute adaptively and innovatively to the success of each endeavor. My passion for creating effective solutions continues to drive my constant improvement and pursuit of increasingly complex technological challenges.',
          age: {
            title: 'Age',
            value: '25',
          },
          residence: {
            title: 'Residence',
            value: 'São Paulo - SP',
          },
          email: {
            title: 'Email',
            value: 'guilherme_bodelon@hotmail.com',
          },
          phone: {
            title: 'Phone',
            value: '+55 (11) 94555-1001',
          },
        },
        whatIDo: {
          title: 'What <span style="color:#5050f5;">I Do</span>',
        },
        marketingTitle:
          'Advertising & <span style="color:#5050f5;">Marketing</span>',
        serviceCards: {
          systemsAndFeatures: {
            title: 'Systems & Features',
            text: 'We develop high-performance web applications aligned with your business goals and expectations. We define the project scope, gather the necessary requirements, and create custom applications to solve your problems and meet your goals. Your vision is our creation.',
          },
          webDesign: {
            title: 'Web Design',
            text: 'In creating the visual identity of the site, we prioritize aesthetics and website functionality, ensuring an optimized and interactive browsing experience, as well as responsiveness for users.',
          },
          landingPages: {
            title: 'Landing Pages',
            text: 'We create conversion pages to attract the attention of your target audience to specific products. We turn clicks and visits into a strategic sales funnel, directing them to complete the purchase.',
          },
          virtualStores: {
            title: 'Virtual Stores',
            text: 'We develop a tailored web platform to automate sales, adapting it to the specific needs of your brand. We enable the online sale of various products and services.',
          },
        },
        serviceCardsMarketing: {
          artDirection: {
            title: 'Art Direction',
            text: 'Our art direction team is responsible for creating the entire visual aspect of a project, i.e., the visual identity. This becomes a set of elements that differentiate a company, product, or service through a concept implanted behind the brand.',
          },
          socialMediaManagement: {
            title: 'Social Media Management',
            text: 'Within Social Media, various tasks will be done with the intention of generating organic traffic, giving credibility to the brand, and of course, humanizing the company so that people connect.',
          },
          imageAndVideoCapture: {
            title: 'Image and Video Capture',
            text: 'Regardless of the business niche, it is always necessary to work with high-quality media. In the case of advertising, this content makes the audience really identify with the product, expressing reality in the best possible way.',
          },
          creativeDirection: {
            title: 'Creative Direction',
            text: 'The creative direction team is responsible for developing campaigns, in which we will make the best decisions to turn your ideas into profitable concepts.',
          },
          trafficManagement: {
            title: 'Traffic Management',
            text: 'After developing the campaign, we will analyze the results to optimize and maximize as much as possible, reducing the cost per purchase and increasing return on investment.',
          },
          platforms: {
            title: 'Platforms',
            text: 'With our joint analysis, we will determine the best platform to meet your business needs. In our range, we can present Google My Business and Facebook Business!',
          },
        },
      },
    },
    // Internal Pages
    internal: {
      dashboard: {
        title: 'Dashboard EN',
      },
    },
  },
  // Page Error Not Found
  notFound: {
    text: 'Sorry. Page not found',
    button: {
      label: 'Back',
    },
  },
};
