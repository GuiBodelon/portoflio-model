export default {
  // Side Bar
  sideBar: {
    // Menu
    menu: {
      menuLink1: 'Home',
      menuLink2: 'Sobre Mim',
      menuLink3: 'Currículo',
      menuLink4: 'Portfólio',
      menuLink5: 'Contato',
    },
    // Panel
    panel: {
      title: 'Guilherme Bodelon',
      subtitle: 'Full Stack Developer & Web Designer',
      copyright:
        'Guilherme Bodelon Servicos de Informatica LTDA<br/>Copyright © 2023 - Todos direitos reservados.',
      btnLogin: 'Acesso ADM',
    },
  },
  // Components
  components: {
    // Componentes internos
    internal: {
      auth: {
        // Login Form
        login: {
          title: 'Login',
          user: {
            label: 'Usuário',
            hint: 'Insira seu usuário.',
            rule: 'Por favor informe o seu usuário',
          },
          password: {
            label: 'Senha',
            hint: 'Insira sua senha.',
            rule: 'Por favor informe a sua senha',
          },
          rememberMeLabel: 'Lembrar-me',
          registerLabel: 'Registrar-se',
          forgotPasswordLabel: 'Esqueceu a Senha ?',
          backToSite: 'Voltar para o Site',
          notificationMessage: 'Bem vindo! - ID: ',
        },
        // Logout
        logout: {
          buttonLabel: 'Sair',
          notificationMessage: 'Deslogado com sucesso! Volte sempre.',
        },
        // Register Form
        register: {
          title: 'Cadastro',
          fullName: {
            label: 'Nome Completo',
            hint: 'Insira seu nome completo.',
            rule: 'Por favor informe o seu nome completo',
          },
          email: {
            label: 'Email',
            hint: 'Insira seu e-mail.',
            rule: 'Por favor informe o seu e-mail',
          },
          user: {
            label: 'Usuário',
            hint: 'Insira seu usuário.',
            rule: 'Por favor informe o seu usuário',
          },
          password: {
            label: 'Senha',
            hint: 'Insira sua senha.',
            rule: 'Por favor informe a sua senha',
          },
          passwordConfirmation: {
            label: 'Confirmar senha',
            hint: 'Confirme sua senha.',
            rule: 'Por favor confirme a sua senha',
          },
          rememberMeLabel: 'Lembrar-me',
          registerLabel: 'Registrar-se',
          alreadyRegisteredLabel: 'Ja possuí cadastro?',
          notificationMessage: 'Cadastro realizado com sucesso!',
        },
        // Forgot Password
        forgotPassword: {
          title: 'Esqueci minha senha',
          instructions:
            'Preencha o e-mail que você cadastrou abaixo e enviaremos para ele um link de recuperação.',
          email: {
            label: 'Email',
            hint: 'Insira seu e-mail.',
            rule: 'Por favor informe o seu e-mail',
          },
          backLabel: 'Voltar',
          submitLabel: 'Enviar link de recuperação',
          onSuccess: {
            title: 'Verifique seu e-mail',
            instructions:
              'Acesse o seu e-mail <b>{ email }</b> e clique no link de redefinição de senha que enviamos para sua conta.<br/><br/>Pode levar alguns minutos para aparecer em sua caixa de entrada. Não se esqueça de verificar as pastas de spam e promoções, por garantia!',
            doneLabel: 'Concluído',
            restartLabel: 'Recomeçar',
          },
          onError: {
            title: 'Recuperação de Conta',
            errorMessage:
              'O e-mail ({ email }) não está cadastrado na nossa base de dados.',
            suggestion: 'Verifique a ortografia ou tente outro email.',
            registerLabel: 'Cadastrar nova conta',
            restartLabel: 'Recomeçar',
          },
        },
        // Login Carousel
        carousel: {
          firstSlide: {
            title: 'Explore a Inovação',
            topic1: {
              text: 'Acesso Simplificado, Resultados Extraordinários.',
            },
            topic2: {
              text: 'Cadastre-se ou faça login para explorar nosso sistema intuitivo e inovador. Seja parte da mudança que você deseja ver.',
            },
            topic3: {
              text: 'Explore um mundo de possibilidades. Junte-se a nós e descubra o que podemos oferecer a você.',
            },
          },
          secondSlide: {
            title: 'Transformando Ideias em Realidade',
            topic1: { text: 'Desenvolvemos soluções sob medida para você.' },
            topic2: {
              text: 'Criatividade e inovação estão no centro do nosso processo.',
            },
            topic3: {
              text: 'Transformamos suas visões em resultados tangíveis.',
            },
          },
          thirdSlide: {
            title: 'Impulsione seu Negócio',
            topic1: { text: 'Aumente sua lucratividade com nossas soluções.' },
            topic2: { text: 'Alcance novos patamares de sucesso.' },
            topic3: {
              text: 'Vença a competição com nossa abordagem inovadora.',
            },
          },
          fourthSlide: {
            title: 'Design Responsivo e Atraente',
            topic1: { text: 'Criamos designs que cativam e encantam.' },
            topic2: {
              text: 'Garanta uma experiência perfeita em todos os dispositivos.',
            },
            topic3: {
              text: 'Veja seus projetos ganharem vida com nossos designs.',
            },
          },
        },
      },
    },
    // Componentes externos
    external: {},
    // Componentes compartilhados
    shared: {
      // Seletor de idioma
      languageSelector: {
        label: 'Alterar Idioma',
        prefix: 'Idioma Atual:',
      },
    },
  },
  // Páginas
  pages: {
    // Páginas Externas
    external: {
      // Página Sobre Mim
      aboutMe: {
        aboutMeText: {
          title: 'Sobre <span style="color:#5050f5;">Mim</span>',
          intro1:
            'Desenvolvedor Web Fullstack e Web Designer, com mais de 5 anos de experiência, especializado em soluções de alta complexidade. Aplico rigorosas metodologias de desenvolvimento e práticas de Clean Code para otimizar processos.',
          intro2:
            'Minha jornada profissional evoluiu por meio de uma ampla gama de projetos, permitindo-me contribuir de forma adaptável e inovadora para o sucesso de cada empreendimento. Minha paixão por criar soluções eficazes continua a impulsionar meu aprimoramento constante e a busca por desafios tecnológicos cada vez mais complexos.',
          age: {
            title: 'Idade',
            value: '25',
          },
          residence: {
            title: 'Residência',
            value: 'São Paulo - SP',
          },
          email: {
            title: 'Email',
            value: 'guilherme_bodelon@hotmail.com',
          },
          phone: {
            title: 'Telefone',
            value: '+55 (11) 94555-1001',
          },
        },
        whatIDo: {
          title: 'O que <span style="color:#5050f5;">Eu faço</span>',
        },
        marketingTitle:
          'Publicidade & <span style="color:#5050f5;">Marketing</span>',
        serviceCards: {
          systemsAndFeatures: {
            title: 'Sistemas & Funcionalidades',
            text: 'Desenvolvemos aplicações web de alto desempenho, alinhadas com os objetivos e expectativas de seu negócio. Definimos o escopo do projeto, coletamos os requisitos necessários e criamos aplicativos personalizados para solucionar seus problemas e atender às suas metas. Sua visão é nossa criação.',
          },
          webDesign: {
            title: 'Web Design',
            text: 'Na criação da identidade visual do site, priorizamos a estética e a funcionalidade do website, garantindo uma experiência de navegação otimizada e interativa, além de responsiva para os usuários.',
          },
          landingPages: {
            title: 'Landing Pages',
            text: 'Criamos páginas de conversão para atrair a atenção de seu público-alvo em relação a produtos específicos. Transformamos cliques e visitas em um funil de vendas estratégico, direcionando-os para a conclusão da compra.',
          },
          virtualStores: {
            title: 'Lojas virtuais',
            text: 'Desenvolvemos uma plataforma web sob medida para automatizar as vendas, adaptando-a às necessidades específicas de sua marca. Possibilitamos a comercialização de diversos produtos e serviços de forma totalmente online.',
          },
        },
        serviceCardsMarketing: {
          artDirection: {
            title: 'Direção de Arte',
            text: 'Nosso time de direção de arte será responsável pela elaboração de todo o visual de um projeto, ou seja, a identidade visual. Isso se torna um conjunto de elementos que diferenciam uma empresa, um produto ou serviço através de um conceito implantado por trás da marca.',
          },
          socialMediaManagement: {
            title: 'Gestão de Mídias Sociais',
            text: 'Dentro do Social Media, diversos trabalhos serão feitos com o intuito de gerar tráfego orgânico, passar credibilidade para a marca e claro humanizar a empresa para que as pessoas se conectem.',
          },
          imageAndVideoCapture: {
            title: 'Captação de Imagens e Vídeos',
            text: 'Indiferente do nicho das empresas, é necessário sempre trabalhar com mídias em altíssima qualidade. No caso da publicidade, esse conteúdo faz com que o público realmente se identifique com o produto, expressando a realidade da melhor forma possível.',
          },
          creativeDirection: {
            title: 'Direção de Criação',
            text: 'O time de direção de criação será responsável pelo desenvolvimento de campanhas, nas quais tomaremos as melhores decisões para transformar suas ideias em conceitos rentáveis.',
          },
          trafficManagement: {
            title: 'Gestão de Tráfego',
            text: 'Após o desenvolvimento da campanha, faremos a análise dos resultados para otimizar e impulsionar o máximo possível, diminuindo o valor investido por compra e aumentando o retorno sobre o investimento',
          },
          platforms: {
            title: 'Plataformas',
            text: 'Com a nossa análise conjunta, definiremos qual a melhor plataforma para atender o seu negócio, em nosso leque podemos apresentar o Google meu Negócio e o Facebook Business!',
          },
        },
      },
    },
    // Páginas Internas
    internal: {
      dashboard: {
        title: 'Dashboard',
      },
    },
  },
  // Page Error Not Found
  notFound: {
    text: 'Desculpe. Página não encontrada',
    button: {
      label: 'Voltar',
    },
  },
};
