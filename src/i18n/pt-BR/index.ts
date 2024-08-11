export default {
  // Side Bar
  sideBar: {
    // Menu
    menu: {
      menuLink1: 'Home',
      menuLink2: 'Sobre Mim',
      menuLink3: 'Curriculum',
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
          title: {
            firstWord: 'Sobre',
            secondWord: 'Mim',
          },
          intro1:
            'Desenvolvedor de Web Full Stack e Designer de Web com mais de 5 anos de experiência. Eu desenvolvi soluções de alta complexidade, trabalho com rigorosas metodologias de desenvolvimento e práticas de Clean Code.',
          intro2:
            'Uma carreira repleta de diversidade de projetos me permitiu contribuir de maneiras flexíveis e inovadoras para garantir o sucesso de cada tarefa em mãos. A paixão por desenvolver uma solução eficaz me motiva a cruzar constantemente os limites estabelecidos e embarcar em desafios tecnológicos cada vez mais emocionantes e desafiadores.',
          age: {
            title: 'Idade',
            value: '26',
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
          title: {
            firstWord: 'O que',
            secondWord: 'Eu faço',
          },
        },
        marketingTitle: {
          firstWord: 'Publicidade &',
          secondWord: 'Marketing',
        },
        serviceCards: {
          systemsAndFeatures: {
            title: 'Sistemas & Funcionalidades',
            text: 'Nós entregamos aplicações web personalizadas poderosas que são projetadas com base nos requisitos e objetivos do seu negócio. Definimos o escopo do projeto, coletamos os requisitos e, em resposta a isso, desenvolvemos para você aplicações personalizadas que solucionam os seus problemas e atender os objetivos que você deseja alcançar.',
          },
          webDesign: {
            title: 'Web Design',
            text: 'No design do site, e identidade visual somos rigidamente estéticos e práticos para proporcionar a melhor experiência de navegação, interação, responsividade e aprimoramento.',
          },
          landingPages: {
            title: 'Landing Pages',
            text: 'Nós desenhamos landing pages para chamar a atenção do seu público-alvo em torno de produtos específicos. Orientamos cliques e visitas através de um funil de vendas bem calculado até a finalização da venda.',
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
      resume: {
        title: 'Currículo',
        experiences: 'Experiências',
        education: 'Educação',
        timeline: {
          work: [
            {
              period: 'Out de 2022 - Presente',
              period2: '2 anos',
              company: 'Grupo Report',
              title: 'Desenvolvedor Full Stack',
              description:
                'Estou envolvido em uma variedade de projetos e responsabilidades que abrangem tanto o desenvolvimento de funcionalidades de alta complexidade quanto a criação de soluções inovadoras. Minhas atividades diárias incluem:<br /><br /> <b>Transformação de Protótipos em Interfaces</b>:<br /> - Transformo layouts criados no Adobe XD e Figma em interfaces interativas e responsivas utilizando HTML, SCSS, Bootstrap, JavaScript e i18n.<br /><br /> <b>Desenvolvimento e Manutenção de Sistemas Internos</b>:<br /> - Desenvolvo e mantenho sistemas para departamentos internos com VueJS, Quasar Framework, TypeScript, Laravel, Docker e MySQL.<br /><br /> <b>Configuração de VPS e Manutenção de Sites Internos</b>:<br /> - Configuro e mantenho servidores VPS para hospedagem interna de sites, realizando migrações e otimizações de desempenho e segurança.',
            },
            {
              period: 'Junho de 2021 - Presente',
              period2: '3 anos e 2 meses',
              company: 'BE(e) Online Publicidade',
              title: 'Desenvolvedor Web - Freelancer cooperativo',
              description:
                'Participo em uma série de projetos e responsabilidades que incluem desenvolvimento web e criação de soluções personalizadas:<br /><br /> <b>Desenvolvimento Web com WordPress</b>:<br /> - Criação de websites institucionais, landing pages, E-Commerces e blogs utilizando WordPress.<br /><br /> <b>Criação de Aplicações Web Personalizadas</b>:<br /> - Desenvolvimento de aplicações web personalizadas utilizando diversas stacks tecnológicas, incluindo Laravel, Lumen, VueJS, React, TypeScript, Oracle e MySQL.<br /><br /> <b>Prospecção e Gestão de Projetos Autônomos</b>:<br /> - Participação em reuniões, prospecção de clientes e configuração de gestão autônomos.',
            },
            {
              period: 'Ago de 2022 - Out de 2022',
              period2: '3 meses',
              company: 'ConsCiência Soluções e Tecnologia',
              title: 'Desenvolvedor Front-End Pleno',
              description:
                'Durante meu tempo na ConsCiência Soluções e Tecnologia, trabalhei no desenvolvimento de uma plataformas de venda de ingressos de cinema:<br /><br /> <b>Desenvolvimento de Plataforma de Venda de Ingressos</b>:<br /> - Utilizei VueJS, TypeScript, GraphQL, SCSS, K6, Azure DevOps e Docker para desenvolver a plataforma em formatos SSR e SSG.',
            },
            {
              period: 'Out de 2020 - Ago de 2022',
              period2: '1 ano e 10 meses',
              company: 'S.P.A. Saúde - Sistema de Promoção Assistencial',
              title: 'Desenvolvedor FullStack Junior',
              description:
                'Como assistente de TI, estive envolvido em várias atividades técnicas e administrativas:<br /><br /> <b>Modelagem de Dados e Desenvolvimento de APIs</b>:<br /> - Modelagem de dados, desenvolvimento de APIs Rest e migração de sistemas legados.<br /><br /> <b>Manutenção e Suporte Técnico</b>:<br /> - Manutenção de servidores em nuvem AWS, gerenciamento de serviços via Cloudflare, soluções de backup, administração de webmail, configuração de antivírus e manutenção de máquinas.',
            },
            {
              period: 'Maio de 2018 - Fev de 2019',
              period2: '10 meses',
              company: 'AFIP - Associação Fundo de Incentivo à Pesquisa',
              title: 'Auxiliar ADM/T.I',
              description:
                'Durante meu tempo na AFIP, trabalhei principalmente no gerenciamento de acessos a sistemas e suporte técnico:<br /><br /> <b>Gerenciamento de Acessos e Suporte Técnico</b>:<br /> - Gerenciamento de acessos a sistemas, auxílio em análise de sistemas e suporte técnico nível 1.<br /><br /> <b>Lançamentos Contábeis</b>:<br /> - Realização de lançamentos contábeis no ERP Protheus.<br /><br /> <b>Criação de Manuais</b>:<br /> - Criação e edição de manuais de sistemas internos para uso de usuários.',
            },
          ],
          education: [
            {
              period: '2017 - o momento - 6 anos',
              company: 'Cursos',
              title: 'Diversos Cursos Pagos e Gratuitos',
              description:
                'Desde o ano de 2017 até o presente momento, tenho dedicado meu tempo e energia a uma busca constante por aprendizado e aprimoramento em áreas específicas de atuação. Minha trajetória inclui a participação em uma ampla gama de cursos, tanto pagos quanto gratuitos, disponíveis na internet. Essa iniciativa reflete meu compromisso contínuo em adquirir conhecimento, acompanhar as tendências emergentes e aprofundar minha expertise em áreas de interesse. Através dessas experiências educacionais, tenho adquirido as habilidades e os insights necessários para enfrentar desafios e contribuir de forma significativa em meu campo de atuação.',
            },
            {
              period: '2018',
              company: 'USJT - Universidade São Judas Tadeu',
              title: 'Sistemas de Informação',
              description:
                'Estudo de como as informações e os dados são recebidos, manipulados e devolvidos através dos computadores e dos softwares. Aprendendo a criar e gerenciar programas e softwares, bem como modificá-los usando linguagens de programação, bibliotecas, frameworks e bancos de dados.',
            },
            {
              period: '2017',
              company: 'B7Web',
              title: 'Curso Fullstack',
              description:
                'O curso fullstack da B7Web fornece aulas que ensinam todas as 3 principais áreas da programação. Essas áreas são Front-end, Back-end e mobile, desta forma você será capaz de criar todas as etapas de um sistema, aplicativo, sites, etc.',
            },
            {
              period: '2015',
              company: 'Microlins',
              title: 'Curso Profissional Web Designer',
              description:
                'O Curso Profissional Web Designer é o responsável por criar e desenvolver websites, interfaces para sistemas web e páginas na internet de todo tipo, desde redes sociais e páginas de empresas até lojas virtuais.',
            },
          ],
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
