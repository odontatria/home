/* Odontatria - Conteúdo dinâmico */
const pageContent = {
  general: {
    pageTitle: 'Odontatria',
    favicon: 'images/favicon.png',
    whatsappNumber: '5545999910401',
    whatsappMessage: 'Olá, estou vindo da página "{PAGINA}" e gostaria de agendar uma avaliação.',
    /* Mensagem com identificação de unidade — usada nas páginas de unidade */
    whatsappMessageUnidade: 'Olá, sou de {CIDADE} e estou vindo da página "{PAGINA}". Gostaria de agendar uma avaliação.'
  },

  /* ===== Horários compartilhados pelas unidades ===== */
  openingHours: {
    schema: 'Mo-Fr 08:00-18:00, Sa 08:00-13:30',
    short: 'Seg a Sex: 08:00 às 18:00 | Sábado: 08:00 às 13:30',
    full: 'Segunda a Sexta das 08:00 às 18:00 e Sábado das 08:00 às 13:30',
    detail: 'Segunda a sexta das 08:00 às 18:00. Sábado das 08:00 às 13:30. Domingos e feriados a clínica não abre.'
  },

  /* ===== Unidades (fonte de verdade) ===== */
  units: [
    {
      slug: 'medianeira',
      isPrimary: true,
      name: 'Odontatria — Medianeira',
      street: 'R. Pará, 1878',
      complement: 'Conjunto A, Sala Térreo',
      streetAddress: 'R. Pará, 1878, Conjunto A, Sala Térreo',
      district: 'Centro',
      city: 'Medianeira',
      state: 'PR',
      postalCode: '85884-000',
      country: 'BR',
      latitude: '-25.291277',
      longitude: '-54.093508',
      phoneDisplay: '(45) 99991-0401',
      phoneHref: 'tel:+5545999910401',
      phoneSchema: '+5545999910401',
      whatsappNumber: '5545999910401',
      croPj: 'CRO-PR PJ [NUMERO_CRO_PJ]',
      responsavelTecnico: '[NOME_RESPONSAVEL]',
      croResponsavel: 'CRO-PR [NUMERO_CRO]',
      pageUrl: 'index.html'
    },
    {
      slug: 'sao-miguel-do-iguacu',
      isPrimary: false,
      name: 'Odontatria — São Miguel do Iguaçu',
      street: 'R. Duque de Caxias, 499',
      complement: '',
      streetAddress: 'R. Duque de Caxias, 499',
      district: 'Centro',
      city: 'São Miguel do Iguaçu',
      state: 'PR',
      postalCode: '85877-000',
      country: 'BR',
      latitude: '-25.344486',
      longitude: '-54.240977',
      phoneDisplay: '(45) 99991-0401',
      phoneHref: 'tel:+5545999910401',
      phoneSchema: '+5545999910401',
      whatsappNumber: '5545999910401',
      croPj: 'CRO-PR PJ [NUMERO_CRO_PJ_SMI]',
      responsavelTecnico: '[NOME_RESPONSAVEL_SMI]',
      croResponsavel: 'CRO-PR [NUMERO_CRO_SMI]',
      pageUrl: 'dentista-sao-miguel-do-iguacu.html'
    }
  ],

  /* Mantido para compatibilidade com as páginas já publicadas (Medianeira) */
  business: {
    street: 'R. Pará, 1878',
    complement: 'Conjunto A, Sala Térreo',
    streetAddress: 'R. Pará, 1878, Conjunto A, Sala Térreo',
    district: 'Centro',
    city: 'Medianeira',
    state: 'PR',
    postalCode: '85884-000',
    country: 'BR',
    latitude: '-25.291277',
    longitude: '-54.093508',
    phoneDisplay: '(45) 99991-0401',
    phoneHref: 'tel:+5545999910401',
    responsavelTecnico: '[NOME_RESPONSAVEL]',
    cro: 'CRO-PR [NUMERO_CRO]',
    razaoSocial: '[RAZAO_SOCIAL]',
    cnpj: '[CNPJ]',
    croPessoaJuridica: 'CRO-PR PJ [NUMERO_CRO_PJ]',
    emailPrivacidade: '[EMAIL_PRIVACIDADE]',
    encarregadoDados: '[NOME_ENCARREGADO]',
    dataAtualizacaoLegal: '[DATA_PUBLICACAO]'
  },

  schema: {
    type: 'Dentist',
    name: 'Odontatria',
    description: 'Clínica odontológica com unidades em Medianeira e São Miguel do Iguaçu (PR). Atendimento em odontologia geral, prevenção, ortodontia, próteses, implantes e odontopediatria.',
    phone: '+5545999910401',
    streetAddress: 'R. Pará, 1878, Conjunto A, Sala Térreo',
    latitude: '-25.291277',
    longitude: '-54.093508',
    openingHours: 'Mo-Fr 08:00-18:00, Sa 08:00-13:30'
  },

  convenios: {
    aceita: true,
    lista: 'SAFF',
    observacao: 'A cobertura e as carências variam conforme a operadora e o plano contratado. Consulte a recepção antes do agendamento.'
  },

  aboutUs: {
    title: 'A Odontatria em Medianeira e São Miguel do Iguaçu',
    description: 'A <strong>Odontatria</strong> é uma clínica odontológica com duas unidades próprias no Oeste do Paraná: em <strong>Medianeira</strong>, na R. Pará, 1878 — Conjunto A, sala térreo, e em <strong>São Miguel do Iguaçu</strong>, na R. Duque de Caxias, 499, Centro. O atendimento é organizado em etapas: avaliação clínica inicial, plano de tratamento apresentado ao paciente e execução com acompanhamento. <br><br>Pela posição das unidades no eixo da <strong>BR-277</strong>, a clínica recebe pacientes de municípios vizinhos como Serranópolis do Iguaçu, Matelândia, Itaipulândia e Santa Terezinha de Itaipu.',
    buttonText: 'Falar com a recepção',
    buttonHref: '#contato'
  },

  features: {
    title: 'Áreas de atendimento',
    items: [
      { title: 'Odontologia preventiva', description: 'Avaliação clínica, profilaxia, remoção de placa bacteriana e tártaro, além de orientação individual de higiene bucal e intervalos de retorno.' },
      { title: 'Dentística e endodontia', description: 'Tratamento de cárie, restaurações e tratamento de canal, com avaliação prévia por exame clínico e radiográfico para definir a conduta indicada.' },
      { title: 'Ortodontia', description: 'Aparelhos fixos convencionais e alinhadores transparentes, com planejamento a partir da documentação ortodôntica e acompanhamento periódico.' },
      { title: 'Próteses e implantes', description: 'Próteses parciais removíveis, próteses flexíveis, coroas e reabilitação sobre implantes, conforme avaliação de condição óssea e gengival.' },
      { title: 'Odontopediatria', description: 'Atendimento voltado a crianças, com foco em adaptação ao ambiente clínico, prevenção de cáries e acompanhamento da troca da dentição.' },
      { title: 'Odontologia estética', description: 'Clareamento dental supervisionado e facetas de porcelana, com análise prévia da condição de esmalte, gengiva e expectativa do paciente.' }
    ]
  },

  /* ===== Conteúdo por página, indexado por meta[name="pagina-nome"] ===== */
  pages: {
    'Página Inicial': {
      slug: 'index.html',
      unit: 'medianeira',
      metaTitle: 'Odontatria | Dentista e Clínica Odontológica em Medianeira - PR',
      metaDescription: 'Clínica odontológica no Centro de Medianeira (PR), com unidade também em São Miguel do Iguaçu. Odontologia geral, próteses, implantes, ortodontia e estética.',
      h1: 'Dentista em Medianeira — Clínica Odontológica Odontatria',
      intro: 'A Odontatria é uma clínica odontológica com unidade no Centro de Medianeira e unidade própria em São Miguel do Iguaçu, no Oeste do Paraná. O atendimento cobre desde a limpeza dentária e restaurações até próteses, implantes, ortodontia e odontologia estética, com plano de tratamento apresentado ao paciente antes do início dos procedimentos.',
      useGlobalFeatures: true,
      blocks: [
        {
          title: 'Clínica dentista com atendimento de segunda a sábado',
          text: 'As unidades funcionam de segunda a sexta das 08:00 às 18:00 e no sábado das 08:00 às 13:30. O agendamento é feito por WhatsApp ou telefone, com horário definido para reduzir tempo de espera na recepção.'
        },
        {
          title: 'Duas unidades no Oeste do Paraná',
          text: 'A unidade de Medianeira fica na R. Pará, 1878 — Conjunto A, sala térreo, Centro. A unidade de São Miguel do Iguaçu fica na R. Duque de Caxias, 499, Centro. Ambas são unidades próprias da clínica, com a mesma estrutura de atendimento e o mesmo canal de agendamento.'
        },
        {
          title: 'Atendimento para Medianeira, São Miguel do Iguaçu e região',
          text: 'Por estarem no eixo da BR-277, as unidades atendem pacientes de Serranópolis do Iguaçu, Matelândia, Itaipulândia e Santa Terezinha de Itaipu, além dos distritos rurais dos dois municípios.'
        }
      ],
      faq: [
        { q: 'Onde ficam as unidades da Odontatria?', a: 'Em Medianeira, na R. Pará, 1878, Conjunto A, sala térreo, Centro, CEP 85884-000. Em São Miguel do Iguaçu, na R. Duque de Caxias, 499, Centro, CEP 85877-000.' },
        { q: 'A Odontatria aceita convênio odontológico?', a: 'Sim. A clínica atende pelo convênio SAFF. A cobertura varia conforme o plano contratado.' },
        { q: 'Como agendar uma consulta com o dentista?', a: 'Pelo WhatsApp (45) 99991-0401 ou por telefone, dentro do horário de funcionamento. Informe em qual unidade deseja ser atendido.' }
      ]
    },

    'Dentista em Medianeira': {
      slug: 'dentista-medianeira.html',
      unit: 'medianeira',
      metaTitle: 'Dentista em Medianeira - PR | Clínica Odontológica Odontatria',
      metaDescription: 'Procurando dentista em Medianeira? Clínica odontológica no Centro, com cirurgião dentista para consultas, limpeza, restaurações e tratamentos completos.',
      h1: 'Dentista em Medianeira - PR',
      intro: 'A Odontatria atua como clínica de odontologia geral em Medianeira. A primeira consulta é uma avaliação clínica: exame da arcada, identificação de cáries, avaliação de gengiva e, quando necessário, exame radiográfico. A partir disso é montado o plano de tratamento.',
      blocks: [
        {
          title: 'O que faz um cirurgião dentista',
          text: 'O cirurgião dentista é o profissional habilitado pelo Conselho Regional de Odontologia para diagnosticar e tratar doenças da boca, dentes e estruturas associadas. Isso inclui prevenção, restaurações, cirurgias como extrações, tratamento de canal, próteses e reabilitações.'
        },
        {
          title: 'Como funciona a primeira consulta no consultório odontológico',
          text: 'A avaliação inicial identifica o que precisa ser tratado e em qual ordem. Casos de dor ou infecção ativa são priorizados. Depois entram os procedimentos restauradores e, por último, os estéticos e reabilitadores.'
        },
        {
          title: 'Com que frequência voltar ao dentista',
          text: 'A recomendação geral é uma avaliação a cada seis meses, mas o intervalo é individual. Pacientes com histórico de cárie, doença periodontal, aparelho ortodôntico ou próteses costumam precisar de retornos mais próximos.'
        },
        {
          title: 'Sinais de que a consulta não deve ser adiada',
          text: 'Dor espontânea ou noturna, sensibilidade prolongada ao frio, sangramento de gengiva na escovação, mau hálito persistente, dente escurecido, inchaço na gengiva ou face, e dificuldade para mastigar.'
        }
      ],
      faq: [
        { q: 'Qual o valor da consulta com o dentista?', a: 'O valor da avaliação e do tratamento é informado pela recepção, pois depende do procedimento indicado. Pacientes com convênio devem informar a operadora no agendamento.' },
        { q: 'A clínica atende urgência odontológica?', a: 'Casos de dor são avaliados conforme a disponibilidade da agenda. Entre em contato por WhatsApp ou telefone para verificar o horário mais próximo.' },
        { q: 'Preciso levar exames na primeira consulta?', a: 'Não é obrigatório. Se você já possui radiografias ou documentação recente, levá-las ajuda na avaliação.' }
      ]
    },

    'Dentista em São Miguel do Iguaçu': {
      slug: 'dentista-sao-miguel-do-iguacu.html',
      unit: 'sao-miguel-do-iguacu',
      metaTitle: 'Dentista em São Miguel do Iguaçu - PR | Clínica Odontológica Odontatria',
      metaDescription: 'Dentista em São Miguel do Iguaçu (PR). Unidade própria da Odontatria no Centro, na R. Duque de Caxias, 499. Odontologia geral, próteses, implantes e ortodontia.',
      h1: 'Dentista em São Miguel do Iguaçu - PR',
      intro: 'A Odontatria mantém unidade própria em São Miguel do Iguaçu, na R. Duque de Caxias, 499, Centro. O atendimento segue a mesma estrutura da unidade de Medianeira: avaliação clínica inicial, plano de tratamento apresentado ao paciente e execução com acompanhamento.',
      useGlobalFeatures: true,
      blocks: [
        {
          title: 'Unidade no Centro de São Miguel do Iguaçu',
          text: 'A clínica fica na R. Duque de Caxias, 499, Centro, CEP 85877-000. É uma unidade própria da Odontatria, com estrutura clínica instalada no município — não se trata de atendimento itinerante ou de encaminhamento para outra cidade.'
        },
        {
          title: 'Horário de funcionamento',
          text: 'Segunda a sexta das 08:00 às 18:00 e sábado das 08:00 às 13:30. Domingos e feriados a unidade não abre. O agendamento é feito por WhatsApp ou telefone no (45) 99991-0401.'
        },
        {
          title: 'Procedimentos realizados na unidade',
          text: 'Odontologia geral e preventiva, limpeza dentária, restaurações, tratamento de canal, extrações, próteses dentárias, implantes, ortodontia, odontopediatria, clareamento dental e facetas de porcelana.'
        },
        {
          title: 'Como funciona a primeira consulta',
          text: 'A avaliação inicial inclui exame da arcada, verificação de cáries e da condição gengival e, quando necessário, exame radiográfico. Casos de dor ou infecção ativa são priorizados no plano de tratamento.'
        },
        {
          title: 'Atendimento para a região',
          text: 'Pela posição de São Miguel do Iguaçu no eixo da BR-277, a unidade também recebe pacientes de Itaipulândia, Santa Terezinha de Itaipu, Serranópolis do Iguaçu e dos distritos rurais do município.'
        },
        {
          title: 'Convênio odontológico',
          text: 'A unidade atende pelo convênio SAFF e também de forma particular. Informe a operadora e o número da carteirinha no agendamento para conferência de elegibilidade.'
        }
      ],
      faq: [
        { q: 'Onde fica a Odontatria em São Miguel do Iguaçu?', a: 'Na R. Duque de Caxias, 499, Centro, São Miguel do Iguaçu - PR, CEP 85877-000.' },
        { q: 'Qual o horário de atendimento da unidade de São Miguel do Iguaçu?', a: 'Segunda a sexta das 08:00 às 18:00 e sábado das 08:00 às 13:30.' },
        { q: 'Como agendar na unidade de São Miguel do Iguaçu?', a: 'Pelo WhatsApp ou telefone (45) 99991-0401. Informe que deseja ser atendido na unidade de São Miguel do Iguaçu.' },
        { q: 'A unidade de São Miguel do Iguaçu atende convênio?', a: 'Sim, atende o convênio SAFF, além de atendimento particular.' }
      ]
    },

    'Próteses Dentárias em Medianeira': {
      slug: 'proteses-dentarias-medianeira.html',
      unit: 'medianeira',
      metaTitle: 'Próteses Dentárias em Medianeira - PR | Prótese Flexível e Removível',
      metaDescription: 'Próteses dentárias em Medianeira: prótese parcial removível, prótese flexível, prótese total e coroas. Avaliação clínica na Odontatria, Centro de Medianeira.',
      h1: 'Próteses Dentárias em Medianeira - PR',
      intro: 'Prótese dentária é o recurso usado para repor dentes perdidos e restabelecer mastigação, fala e estética. A escolha do tipo depende de quantos dentes faltam, da condição dos dentes remanescentes e da qualidade do osso e da gengiva.',
      blocks: [
        {
          title: 'Prótese parcial removível',
          text: 'Indicada quando ainda existem dentes naturais na arcada. É apoiada nesses dentes por grampos ou encaixes e removida pelo paciente para higienização. Costuma ser a opção de menor custo para reposição de múltiplos dentes.'
        },
        {
          title: 'Prótese flexível',
          text: 'Confeccionada em resina termoplástica, sem grampos metálicos aparentes. Tem melhor resultado estético que a removível convencional e se adapta a áreas de gengiva irregular. Exige critérios específicos de indicação, avaliados em consulta.'
        },
        {
          title: 'Prótese total e prótese fixa',
          text: 'A prótese total (dentadura) é indicada quando não há dentes na arcada. Já as próteses fixas — coroas e pontes — são cimentadas sobre dentes preparados ou sobre implantes, e não são removidas pelo paciente.'
        },
        {
          title: 'Etapas da confecção',
          text: 'Avaliação clínica e radiográfica, preparo dos dentes quando necessário, moldagem, provas intermediárias em laboratório, instalação e ajustes. Consultas de ajuste após a instalação são parte normal do processo.'
        },
        {
          title: 'Cuidados e vida útil',
          text: 'Próteses removíveis devem ser higienizadas fora da boca com escova e produto adequado, e não em água fervente. A vida útil varia com o tipo, a higiene e as alterações naturais do osso, que podem exigir reembasamento ou substituição.'
        }
      ],
      faq: [
        { q: 'Qual a diferença entre prótese flexível e prótese removível comum?', a: 'A flexível é feita em resina termoplástica sem grampos metálicos visíveis; a removível convencional usa estrutura rígida com grampos de apoio nos dentes.' },
        { q: 'Quanto tempo leva para ficar pronta?', a: 'Depende do tipo de prótese e das etapas laboratoriais. O prazo estimado é informado após a avaliação.' },
        { q: 'Prótese dentária é coberta por convênio?', a: 'Alguns planos cobrem determinados tipos de prótese. Verifique a cobertura do seu plano com a recepção.' }
      ]
    },

    'Implante Dentário em Medianeira': {
      slug: 'implante-dentario-medianeira.html',
      unit: 'medianeira',
      metaTitle: 'Implante Dentário em Medianeira - PR | Odontatria',
      metaDescription: 'Implante dentário em Medianeira (PR): avaliação óssea, cirurgia, osseointegração e coroa protética. Clínica odontológica no Centro de Medianeira.',
      h1: 'Implante Dentário em Medianeira - PR',
      intro: 'O implante dentário é um pino de titânio instalado cirurgicamente no osso maxilar ou mandibular para substituir a raiz de um dente perdido. Sobre ele é fixada uma coroa, prótese parcial ou prótese total.',
      blocks: [
        {
          title: 'Quem pode receber implante',
          text: 'É necessário volume e densidade óssea suficientes, gengiva saudável e ausência de infecção ativa. Doenças sistêmicas descompensadas, tabagismo intenso e doença periodontal não tratada interferem no resultado e precisam ser avaliados antes.'
        },
        {
          title: 'Etapas do tratamento',
          text: 'Avaliação clínica com exame de imagem, planejamento cirúrgico, instalação do implante, período de osseointegração — em que o osso se une ao titânio — e, por fim, instalação da coroa ou prótese definitiva.'
        },
        {
          title: 'Recuperação após a cirurgia',
          text: 'É esperado edema e desconforto nos primeiros dias, controlados com a medicação prescrita. Alimentação fria e macia, ausência de esforço físico e higiene cuidadosa na região são orientações padrão do pós-operatório.'
        },
        {
          title: 'Implante ou prótese removível',
          text: 'O implante preserva os dentes vizinhos, não é removido pelo paciente e reduz a reabsorção óssea da região. A prótese removível tem custo menor e não exige cirurgia. A indicação depende da condição clínica e do planejamento.'
        },
        {
          title: 'Manutenção a longo prazo',
          text: 'Implantes não têm cárie, mas o tecido ao redor pode inflamar — quadro chamado periimplantite. Higiene diária e consultas periódicas de controle são o que garante a durabilidade.'
        }
      ],
      faq: [
        { q: 'A cirurgia de implante dói?', a: 'O procedimento é feito com anestesia local. O desconforto ocorre no pós-operatório e é controlado com a medicação prescrita.' },
        { q: 'Quanto tempo até a coroa definitiva?', a: 'O período de osseointegração costuma variar de alguns meses, conforme a região e a resposta óssea individual. O prazo é definido no planejamento.' },
        { q: 'Quem não tem osso suficiente pode fazer implante?', a: 'Em parte dos casos é possível após enxerto ósseo. A viabilidade é definida pelo exame de imagem.' }
      ]
    },

    'Clareamento Dental em Medianeira': {
      slug: 'clareamento-dental-medianeira.html',
      unit: 'medianeira',
      metaTitle: 'Clareamento Dental em Medianeira - PR | Consultório e Caseiro',
      metaDescription: 'Clareamento dental em Medianeira (PR) com supervisão de cirurgião dentista. Técnica de consultório, caseira supervisionada e combinada. Odontatria, Centro.',
      h1: 'Clareamento Dental em Medianeira - PR',
      intro: 'O clareamento dental usa géis à base de peróxido para reduzir a pigmentação do esmalte e da dentina. Precisa de avaliação prévia: cáries, restaurações infiltradas, retração gengival e sensibilidade alteram a indicação e o resultado.',
      blocks: [
        {
          title: 'Clareamento de consultório',
          text: 'Aplicação de gel em concentração mais alta pelo dentista, com proteção da gengiva, em sessões definidas conforme a resposta dos dentes. É a opção com resultado mais rápido.'
        },
        {
          title: 'Clareamento caseiro supervisionado',
          text: 'O dentista confecciona uma moldeira individual e prescreve o gel em concentração menor, com tempo e duração de uso definidos. O paciente aplica em casa e retorna para acompanhamento.'
        },
        {
          title: 'Por que não usar produtos sem prescrição',
          text: 'Kits vendidos livremente e receitas caseiras com bicarbonato, limão ou carvão podem causar desgaste do esmalte, irritação gengival e sensibilidade sem clarear de forma estável. O clareamento é ato odontológico.'
        },
        {
          title: 'Sensibilidade durante o tratamento',
          text: 'Sensibilidade transitória é o efeito adverso mais comum e tende a desaparecer após o fim das aplicações. O protocolo pode ser ajustado com dessensibilizantes ou intervalos maiores entre as sessões.'
        },
        {
          title: 'Duração do resultado',
          text: 'A estabilidade depende de dieta, tabagismo e higiene. Café, chá preto, vinho tinto e refrigerantes escuros aceleram o reescurecimento. Retoques periódicos podem ser indicados.'
        }
      ],
      faq: [
        { q: 'Clareamento funciona em restaurações e próteses?', a: 'Não. O gel age apenas em estrutura dental. Restaurações e próteses podem precisar de substituição para igualar a cor.' },
        { q: 'Preciso fazer limpeza antes do clareamento?', a: 'Sim. A profilaxia remove placa e tártaro, o que permite ação uniforme do gel.' },
        { q: 'Grávidas podem clarear os dentes?', a: 'O clareamento não é indicado durante a gestação e a amamentação.' }
      ]
    },

    'Facetas de Porcelana em Medianeira': {
      slug: 'facetas-de-porcelana-medianeira.html',
      unit: 'medianeira',
      metaTitle: 'Facetas de Porcelana em Medianeira - PR | Lentes de Contato Dental',
      metaDescription: 'Facetas de porcelana e lentes de contato dental em Medianeira (PR). Planejamento estético, desgaste mínimo e cimentação. Odontatria, Centro de Medianeira.',
      h1: 'Facetas de Porcelana em Medianeira - PR',
      intro: 'Facetas de porcelana são lâminas cerâmicas cimentadas na face frontal dos dentes para corrigir cor, forma, pequenos desalinhamentos e desgastes. As de espessura muito fina são chamadas comercialmente de lentes de contato dental.',
      blocks: [
        {
          title: 'Indicações',
          text: 'Dentes com manchas que não respondem ao clareamento, escurecimento por tratamento de canal, fraturas de borda, desgaste por bruxismo, diastemas — os espaços entre dentes — e alterações de forma.'
        },
        {
          title: 'Facetas de porcelana e facetas de resina',
          text: 'A porcelana tem maior estabilidade de cor e resistência ao manchamento, e é confeccionada em laboratório. A resina composta é aplicada diretamente, tem custo menor e permite reparo, mas exige mais manutenção ao longo do tempo.'
        },
        {
          title: 'Etapas do tratamento',
          text: 'Avaliação e fotografias, planejamento estético digital ou ensaio restaurador, preparo dental quando indicado, moldagem, prova das peças, cimentação e ajuste da mordida.'
        },
        {
          title: 'É preciso desgastar o dente',
          text: 'Depende do caso. Situações favoráveis permitem desgaste mínimo ou nenhum. Dentes escurecidos, apinhados ou volumosos exigem preparo para que a faceta não fique sobrecontornada.'
        },
        {
          title: 'Cuidados e limites',
          text: 'Facetas não substituem tratamento de gengiva, cárie ou ortodontia — esses quadros devem ser resolvidos antes. Pacientes com bruxismo geralmente precisam de placa de proteção noturna para evitar fratura das peças.'
        }
      ],
      faq: [
        { q: 'Facetas de porcelana duram quanto tempo?', a: 'A durabilidade depende da higiene, da oclusão e de hábitos como bruxismo e roer objetos. Consultas de controle são necessárias.' },
        { q: 'Facetas mancham com café?', a: 'A porcelana é bem resistente ao manchamento; a região de união com o dente e restaurações de resina podem pigmentar.' },
        { q: 'Dá para fazer faceta só em um dente?', a: 'Sim, mas a reprodução de cor exige planejamento cuidadoso para harmonizar com os dentes vizinhos.' }
      ]
    },

    'Aparelho Ortodôntico em Medianeira': {
      slug: 'aparelho-ortodontico-medianeira.html',
      unit: 'medianeira',
      metaTitle: 'Aparelho Ortodôntico em Medianeira - PR | Fixo e Invisível',
      metaDescription: 'Aparelho ortodôntico em Medianeira (PR): aparelho fixo metálico, estético e aparelho dentário invisível com alinhadores. Documentação e acompanhamento na Odontatria.',
      h1: 'Aparelho Ortodôntico em Medianeira - PR',
      intro: 'O tratamento ortodôntico corrige a posição dos dentes e a relação entre as arcadas. Começa pela documentação ortodôntica — radiografias, fotografias e modelos — que define o diagnóstico e o tipo de aparelho indicado.',
      blocks: [
        {
          title: 'Aparelho fixo metálico',
          text: 'Braquetes de aço colados aos dentes, unidos por fio ortodôntico. É a opção mais versátil, resolve praticamente todos os tipos de má oclusão e tem o menor custo entre as alternativas fixas.'
        },
        {
          title: 'Aparelho fixo estético',
          text: 'Braquetes de porcelana ou safira, de cor próxima à do dente. Mesma mecânica do metálico, com menor visibilidade e custo maior.'
        },
        {
          title: 'Aparelho dentário invisível com alinhadores',
          text: 'Sequência de placas transparentes removíveis, trocadas em intervalos definidos. Precisam ser usadas cerca de 22 horas por dia — o resultado depende diretamente da disciplina do paciente. Não são indicadas para todos os casos.'
        },
        {
          title: 'Tratamento em crianças e adultos',
          text: 'Em crianças, há aparelhos removíveis e ortopédicos que aproveitam o crescimento ósseo. Em adultos, a correção é dentária e pode exigir integração com periodontia, prótese ou cirurgia ortognática em casos esqueléticos.'
        },
        {
          title: 'Contenção após o aparelho',
          text: 'Ao remover o aparelho, é obrigatório o uso de contenção fixa ou removível. Sem ela, os dentes tendem a retornar à posição anterior — a recidiva é a principal causa de perda de resultado.'
        },
        {
          title: 'Higiene durante o tratamento',
          text: 'Aparelho fixo retém placa bacteriana. Escova ortodôntica, escova interdental e fio dental com passa-fio são necessários para evitar cárie e inflamação gengival ao longo do tratamento.'
        }
      ],
      faq: [
        { q: 'Quanto tempo dura o tratamento ortodôntico?', a: 'Varia com a complexidade do caso e a colaboração do paciente. A estimativa é dada após a análise da documentação ortodôntica.' },
        { q: 'De quanto em quanto tempo é a manutenção?', a: 'Os retornos são periódicos, geralmente mensais no aparelho fixo, para troca de fio e ajustes.' },
        { q: 'Aparelho invisível serve para qualquer caso?', a: 'Não. Casos com necessidade de grandes movimentações ou correções esqueléticas costumam exigir aparelho fixo.' }
      ]
    },

    'Odontopediatria em Medianeira': {
      slug: 'odontopediatria-medianeira.html',
      unit: 'medianeira',
      metaTitle: 'Odontopediatria em Medianeira - PR | Dentista Infantil',
      metaDescription: 'Dentista infantil em Medianeira (PR). Odontopediatria com prevenção, aplicação de flúor, selante, restaurações e acompanhamento da troca dos dentes.',
      h1: 'Odontopediatria em Medianeira - PR',
      intro: 'A odontopediatria é a especialidade que atende bebês, crianças e adolescentes. Além do tratamento clínico, trabalha a adaptação da criança ao ambiente odontológico e a construção de hábitos de higiene.',
      blocks: [
        {
          title: 'Quando levar a criança ao dentista',
          text: 'A primeira consulta é recomendada por volta da erupção do primeiro dente ou do primeiro ano de vida. Nessa fase o foco é orientação aos responsáveis sobre higiene, amamentação, mamadeira e uso de açúcar.'
        },
        {
          title: 'Procedimentos preventivos',
          text: 'Profilaxia, aplicação tópica de flúor e selante de fóssulas e fissuras nos dentes posteriores, que reduzem o risco de cárie em superfícies de difícil escovação.'
        },
        {
          title: 'Cárie em dente de leite precisa ser tratada',
          text: 'Sim. O dente de leite tem função na mastigação, na fala e na manutenção do espaço para o dente permanente. Cárie não tratada pode causar dor, infecção e prejudicar o dente que está se formando abaixo.'
        },
        {
          title: 'Troca da dentição',
          text: 'O acompanhamento verifica se a esfoliação dos dentes de leite e a erupção dos permanentes ocorrem na sequência esperada, além de identificar necessidade de avaliação ortodôntica precoce.'
        },
        {
          title: 'Hábitos que exigem atenção',
          text: 'Uso prolongado de chupeta e mamadeira, sucção de dedo, respiração pela boca e bruxismo infantil podem alterar o crescimento das arcadas e devem ser avaliados.'
        },
        {
          title: 'Traumatismo em dente de criança',
          text: 'Quedas com fratura, deslocamento ou avulsão de dente exigem atendimento rápido. Guarde o dente ou fragmento em soro fisiológico ou leite e procure a clínica imediatamente.'
        }
      ],
      faq: [
        { q: 'A partir de que idade a criança pode ser atendida?', a: 'A partir do primeiro ano de vida ou da erupção do primeiro dente.' },
        { q: 'O responsável pode ficar na sala durante o atendimento?', a: 'A conduta é definida caso a caso, conforme a idade e a reação da criança.' },
        { q: 'Criança com muito medo tem como ser atendida?', a: 'Sim. São usadas técnicas de condicionamento e adaptação progressiva, em consultas curtas iniciais.' }
      ]
    },

    'Limpeza Dentária em Medianeira': {
      slug: 'limpeza-dentaria-medianeira.html',
      unit: 'medianeira',
      metaTitle: 'Limpeza Dentária em Medianeira - PR | Profilaxia e Tártaro',
      metaDescription: 'Limpeza dentária em Medianeira (PR): profilaxia, remoção de tártaro e raspagem. Prevenção de cárie e gengivite na Odontatria, Centro de Medianeira.',
      h1: 'Limpeza Dentária em Medianeira - PR',
      intro: 'A limpeza dentária profissional — profilaxia — remove placa bacteriana, tártaro e pigmentações que a escovação em casa não alcança. É o procedimento base da prevenção de cárie e de doença periodontal.',
      blocks: [
        {
          title: 'Como é feita',
          text: 'Avaliação da gengiva, remoção do tártaro com ultrassom e instrumentos manuais, polimento das superfícies com pasta profilática e, quando indicado, aplicação de flúor. Fio dental e orientação de higiene fecham o atendimento.'
        },
        {
          title: 'Placa bacteriana e tártaro',
          text: 'A placa é um biofilme mole que se forma diariamente e pode ser removida com escova e fio. Quando não removida, mineraliza e forma o tártaro, que é rígido, adere ao dente e só sai com instrumentação clínica.'
        },
        {
          title: 'Raspagem periodontal',
          text: 'Quando o tártaro está abaixo da gengiva e já houve perda de inserção, a limpeza superficial não é suficiente. A raspagem subgengival é feita por quadrantes, sob anestesia local, com reavaliação posterior.'
        },
        {
          title: 'Sinais de gengivite',
          text: 'Gengiva vermelha, inchada, com sangramento à escovação ou ao uso do fio dental. A gengivite é reversível com limpeza e higiene adequada; sem tratamento pode evoluir para periodontite, com perda óssea.'
        },
        {
          title: 'Com que frequência fazer',
          text: 'O intervalo médio é de seis meses. Fumantes, diabéticos, pacientes com aparelho ortodôntico, próteses ou histórico de doença periodontal costumam precisar de intervalos menores.'
        }
      ],
      faq: [
        { q: 'A limpeza dentária dói?', a: 'A profilaxia costuma ser bem tolerada. Pode haver sensibilidade quando há inflamação gengival ou muito tártaro acumulado.' },
        { q: 'A limpeza clareia os dentes?', a: 'Ela remove manchas extrínsecas e devolve a cor natural, mas não altera a cor do esmalte como o clareamento.' },
        { q: 'A gengiva sangrar na limpeza é normal?', a: 'Sangramento indica inflamação prévia. Tende a cessar após a remoção do tártaro e com higiene adequada.' }
      ]
    },

    'Extração de Dente em Medianeira': {
      slug: 'extracao-de-dente-medianeira.html',
      unit: 'medianeira',
      metaTitle: 'Extração de Dente em Medianeira - PR | Siso e Exodontia',
      metaDescription: 'Extração de dente em Medianeira (PR): exodontia simples, extração de siso e orientações de pós-operatório. Avaliação radiográfica na Odontatria.',
      h1: 'Extração de Dente em Medianeira - PR',
      intro: 'A extração dentária, ou exodontia, é indicada quando o dente não pode mais ser mantido em função ou quando sua permanência prejudica as estruturas vizinhas. A decisão é sempre tomada após exame clínico e radiográfico.',
      blocks: [
        {
          title: 'Quando a extração é indicada',
          text: 'Destruição extensa por cárie sem possibilidade de restauração, fratura de raiz, doença periodontal avançada com mobilidade, infecção sem resposta ao tratamento de canal, dentes inclusos com risco e indicações ortodônticas.'
        },
        {
          title: 'Extração de siso',
          text: 'Os terceiros molares são removidos quando estão inclusos, semi-inclusos, mal posicionados, causando pericoronarite, cárie no dente vizinho ou reabsorção radicular. Sisos erupcionados, funcionais e higienizáveis não precisam ser extraídos por rotina.'
        },
        {
          title: 'Como é o procedimento',
          text: 'Feito sob anestesia local. Casos simples envolvem luxação e remoção do dente. Casos cirúrgicos podem exigir incisão, remoção de tecido ósseo, secção do dente e sutura.'
        },
        {
          title: 'Pós-operatório',
          text: 'Compressa de gelo nas primeiras horas, alimentação fria e macia, repouso relativo, medicação conforme prescrição. Evitar fumar, bochechar com força, usar canudo e fazer esforço físico nos primeiros dias.'
        },
        {
          title: 'Sinais de alerta após a extração',
          text: 'Dor intensa que aumenta após o terceiro dia, sangramento que não cessa com compressão, febre, pus ou dificuldade de abrir a boca exigem retorno imediato à clínica.'
        },
        {
          title: 'Reposição do dente extraído',
          text: 'Exceto o siso, o espaço deixado tende a causar inclinação dos dentes vizinhos e reabsorção óssea. A reposição por implante ou prótese deve ser planejada.'
        }
      ],
      faq: [
        { q: 'Extração de dente dói?', a: 'O procedimento é feito com anestesia local. O desconforto ocorre no pós-operatório e é controlado com a medicação prescrita.' },
        { q: 'Dá para extrair mais de um dente na mesma sessão?', a: 'Em alguns casos sim, dependendo da região, da complexidade e da condição de saúde do paciente.' },
        { q: 'Quanto tempo leva para cicatrizar?', a: 'A gengiva fecha nas primeiras semanas; o preenchimento ósseo do alvéolo é mais lento e continua por alguns meses.' }
      ]
    },

    'Canal no Dente em Medianeira': {
      slug: 'canal-no-dente-medianeira.html',
      unit: 'medianeira',
      metaTitle: 'Canal no Dente em Medianeira - PR | Tratamento Endodôntico',
      metaDescription: 'Tratamento de canal no dente em Medianeira (PR). Endodontia para dor de dente, pulpite e abscesso, com avaliação radiográfica na Odontatria, Centro.',
      h1: 'Canal no Dente em Medianeira - PR',
      intro: 'O tratamento de canal, ou endodontia, remove a polpa dentária inflamada ou infectada, desinfeta o interior das raízes e as preenche com material selador. O objetivo é eliminar a infecção e manter o dente em função.',
      blocks: [
        {
          title: 'Quando o canal é indicado',
          text: 'Cárie profunda que atingiu a polpa, dor espontânea ou noturna, sensibilidade prolongada ao frio ou calor, trauma com exposição pulpar, abscesso, fístula na gengiva e escurecimento do dente.'
        },
        {
          title: 'Como o tratamento é feito',
          text: 'Anestesia local, isolamento absoluto do dente, abertura de acesso, remoção do tecido pulpar, medição do comprimento das raízes, limpeza e modelagem dos canais e obturação. Pode ser feito em uma ou mais sessões.'
        },
        {
          title: 'Restauração após o canal',
          text: 'O dente tratado fica mais frágil e precisa ser restaurado. Dentes posteriores geralmente exigem coroa ou restauração com recobrimento das cúspides para evitar fratura. Deixar o dente sem restauração definitiva é a principal causa de perda depois do canal.'
        },
        {
          title: 'Retratamento endodôntico',
          text: 'Quando persiste infecção, há falha na obturação anterior ou surge nova lesão, o canal pode ser reaberto, redesinfetado e obturado novamente. Em casos específicos indica-se cirurgia paraendodôntica.'
        },
        {
          title: 'Dor de dente não some sozinha',
          text: 'A dor pode cessar quando a polpa necrosa, mas a infecção continua e progride para o osso. Analgésico sem tratamento apenas mascara o quadro e aumenta o risco de perda do dente.'
        }
      ],
      faq: [
        { q: 'Tratamento de canal dói?', a: 'O procedimento é feito sob anestesia local. Pode haver sensibilidade nos dias seguintes, controlada com medicação.' },
        { q: 'Quantas sessões são necessárias?', a: 'Depende do número de raízes e da presença de infecção. Casos simples podem ser concluídos em sessão única.' },
        { q: 'Dente com canal dura a vida toda?', a: 'Pode durar muitos anos, desde que corretamente restaurado e acompanhado. Fratura é o risco principal quando não recebe proteção adequada.' }
      ]
    },

    'Convênios Odontológicos em Medianeira': {
      slug: 'convenios-odontologicos-medianeira.html',
      unit: 'medianeira',
      metaTitle: 'Convênio Odontológico em Medianeira - PR | SAFF',
      metaDescription: 'Convênio e plano odontológico em Medianeira (PR). A Odontatria atende SAFF. Veja procedimentos cobertos, documentos e como funciona a carência.',
      h1: 'Convênio Odontológico em Medianeira - PR',
      intro: 'A Odontatria atende pacientes por convênio odontológico e também de forma particular, nas unidades de Medianeira e São Miguel do Iguaçu. O convênio aceito é o SAFF. A cobertura de cada procedimento depende do contrato firmado com a operadora.',
      blocks: [
        {
          title: 'Plano odontológico aceito',
          text: 'A clínica é credenciada ao convênio SAFF. No agendamento, informe a operadora e o número da carteirinha para conferência de elegibilidade. Se você tem outro plano, informe o nome no contato: a recepção confirma a situação vigente.'
        },
        {
          title: 'O que costuma ser coberto',
          text: 'A maioria dos planos cobre consulta, radiografias, profilaxia, aplicação de flúor, restaurações, tratamento de canal, raspagem periodontal e extrações. Ortodontia, prótese, implante e procedimentos estéticos geralmente têm cobertura parcial ou não são cobertos.'
        },
        {
          title: 'Plano odontológico e carência',
          text: 'Carência é o período mínimo entre a contratação e o direito de uso de determinado procedimento. Alguns planos oferecem isenção de carência para consulta e urgência, mantendo prazos para procedimentos de maior complexidade. Quem define a carência é a operadora, não a clínica.'
        },
        {
          title: 'Documentos para o atendimento',
          text: 'Documento com foto e carteirinha do plano, física ou digital. Em parte dos planos é necessária autorização prévia da operadora para procedimentos específicos, o que pode levar alguns dias.'
        },
        {
          title: 'Atendimento particular',
          text: 'Pacientes sem plano são atendidos de forma particular. Após a avaliação, o orçamento é apresentado por procedimento, com as formas de pagamento disponíveis.'
        }
      ],
      faq: [
        { q: 'Quais convênios odontológicos a clínica aceita?', a: 'A clínica atende o convênio SAFF. Se você tem outro plano, informe o nome da operadora no contato para que a recepção confirme a situação vigente.' },
        { q: 'Existe plano odontológico sem carência?', a: 'Alguns planos isentam carência para consulta e urgência. O prazo é definido no contrato com a operadora.' },
        { q: 'O plano cobre implante e aparelho ortodôntico?', a: 'Em geral esses procedimentos têm cobertura parcial ou são excluídos. A verificação é feita junto à operadora.' }
      ]
    },

    'Contato': {
      slug: 'contato.html',
      unit: 'medianeira',
      metaTitle: 'Contato | Odontatria - Dentista em Medianeira e São Miguel do Iguaçu - PR',
      metaDescription: 'Endereço, telefone, WhatsApp e horários da Odontatria. Unidades em Medianeira (R. Pará, 1878) e São Miguel do Iguaçu (R. Duque de Caxias, 499).',
      h1: 'Contato — Odontatria',
      intro: 'A Odontatria tem duas unidades: Medianeira, na R. Pará, 1878, Conjunto A, sala térreo, Centro; e São Miguel do Iguaçu, na R. Duque de Caxias, 499, Centro. O agendamento é feito por WhatsApp ou telefone, dentro do horário de funcionamento.',
      blocks: [
        {
          title: 'Unidade Medianeira — endereço e como chegar',
          text: 'R. Pará, 1878 — Conjunto A, sala térreo, Centro, Medianeira - PR, CEP 85884-000. O prédio abriga mais de uma clínica: procure a identificação do Conjunto A, na sala térrea. A região central é de acesso direto pela BR-277, o que facilita a chegada de pacientes de Serranópolis do Iguaçu e Matelândia.'
        },
        {
          title: 'Unidade São Miguel do Iguaçu — endereço e como chegar',
          text: 'R. Duque de Caxias, 499, Centro, São Miguel do Iguaçu - PR, CEP 85877-000. Unidade própria da clínica, localizada na área central do município, com acesso pela BR-277 e atendimento também a pacientes de Itaipulândia e Santa Terezinha de Itaipu.'
        },
        {
          title: 'Telefone e WhatsApp',
          text: 'Telefone e WhatsApp para as duas unidades: (45) 99991-0401. Informe no contato em qual unidade deseja ser atendido. Mensagens recebidas fora do horário são respondidas no próximo dia útil. Não é possível fazer diagnóstico, indicar tratamento ou prescrever medicamento por mensagem ou telefone.'
        },
        {
          title: 'Horário de funcionamento',
          text: 'Ambas as unidades funcionam de segunda a sexta das 08:00 às 18:00 e no sábado das 08:00 às 13:30. Domingos e feriados as clínicas não abrem.'
        }
      ],
      faq: [
        { q: 'Preciso agendar ou posso ir direto na clínica?', a: 'O atendimento é por agendamento. Ir sem horário marcado pode resultar em espera ou impossibilidade de atendimento no dia.' },
        { q: 'Vocês atendem no sábado?', a: 'Sim, nas duas unidades, das 08:00 às 13:30.' },
        { q: 'O telefone é o mesmo para as duas unidades?', a: 'Sim. O (45) 99991-0401 atende Medianeira e São Miguel do Iguaçu. Informe a unidade desejada no contato.' }
      ]
    },

    'Mapa do Site': {
      slug: 'mapa-do-site.html',
      unit: 'medianeira',
      metaTitle: 'Mapa do Site | Odontatria - Medianeira e São Miguel do Iguaçu - PR',
      metaDescription: 'Índice de todas as páginas do site da Odontatria, clínica odontológica em Medianeira e São Miguel do Iguaçu - PR.',
      h1: 'Mapa do Site',
      intro: 'Índice das páginas do site da Odontatria, clínica odontológica com unidades em Medianeira e São Miguel do Iguaçu - PR.',
      blocks: [],
      faq: []
    },

    'Política de Privacidade': {
      slug: 'politica-de-privacidade.html',
      unit: 'medianeira',
      metaTitle: 'Política de Privacidade | Odontatria - Medianeira - PR',
      metaDescription: 'Política de Privacidade da Odontatria, clínica odontológica em Medianeira e São Miguel do Iguaçu - PR. Saiba como tratamos seus dados pessoais e de saúde conforme a LGPD.',
      h1: 'Política de Privacidade',
      intro: 'Esta Política descreve como a Odontatria coleta, utiliza, armazena, compartilha e protege dados pessoais de pacientes e visitantes deste site, em conformidade com a Lei nº 13.709/2018 (LGPD). Aplica-se a todas as unidades da clínica.',
      legal: true,
      blocks: [],
      faq: []
    },

    'Termos de Uso': {
      slug: 'termos-de-uso.html',
      unit: 'medianeira',
      metaTitle: 'Termos de Uso | Odontatria - Medianeira - PR',
      metaDescription: 'Termos de Uso do site da Odontatria, clínica odontológica em Medianeira e São Miguel do Iguaçu - PR. Condições de utilização, limitações e responsabilidades.',
      h1: 'Termos de Uso',
      intro: 'Estes Termos estabelecem as condições aplicáveis à navegação e à utilização do site da Odontatria. O conteúdo publicado tem caráter exclusivamente informativo e não substitui consulta com cirurgião dentista.',
      legal: true,
      blocks: [],
      faq: []
    },

    'Política de Cookies': {
      slug: 'politica-de-cookies.html',
      unit: 'medianeira',
      metaTitle: 'Política de Cookies | Odontatria - Medianeira - PR',
      metaDescription: 'Política de Cookies do site da Odontatria, clínica odontológica em Medianeira e São Miguel do Iguaçu - PR. Saiba quais cookies utilizamos e como gerenciar suas preferências.',
      h1: 'Política de Cookies',
      intro: 'Esta Política explica o que são cookies, quais tipos podem ser utilizados no site da Odontatria, com qual finalidade, e como você pode gerenciar ou desativar essas tecnologias no navegador.',
      legal: true,
      blocks: [],
      faq: []
    },

    'LGPD e Direitos do Titular': {
      slug: 'lgpd.html',
      unit: 'medianeira',
      metaTitle: 'LGPD e Direitos do Titular | Odontatria - Medianeira - PR',
      metaDescription: 'LGPD na Odontatria, clínica odontológica em Medianeira e São Miguel do Iguaçu - PR. Conheça seus direitos como titular de dados e como solicitar acesso, correção ou eliminação.',
      h1: 'LGPD e Direitos do Titular',
      intro: 'A Lei nº 13.709/2018 assegura a você um conjunto de direitos sobre os dados que a Odontatria trata a seu respeito. Esta página explica quais são esses direitos, como exercê-los, os limites legais aplicáveis ao setor de saúde e os prazos de resposta.',
      legal: true,
      blocks: [],
      faq: []
    }
  },

  footer: {
    description: 'Odontatria — clínica odontológica com unidades em Medianeira e São Miguel do Iguaçu, Paraná. Atendimento de segunda a sábado, com agendamento por WhatsApp ou telefone.',
    schedule: 'Seg a Sex: 08:00 às 18:00 | Sábado: 08:00 às 13:30',
    scheduleFull: 'Segunda a Sexta das 08:00 às 18:00 e Sábado das 08:00 às 13:30',
    phone: '(45) 99991-0401',
    address: 'R. Pará, 1878, Conjunto A, Sala Térreo - Centro, Medianeira - PR, 85884-000',
    addressSecondary: 'R. Duque de Caxias, 499 - Centro, São Miguel do Iguaçu - PR, 85877-000',
    copyright: 'Odontatria'
  },

  siteLinks: [
    { url: 'index.html', label: 'Página Inicial' },
    { url: 'dentista-medianeira.html', label: 'Dentista em Medianeira' },
    { url: 'dentista-sao-miguel-do-iguacu.html', label: 'Dentista em São Miguel do Iguaçu' },
    { url: 'limpeza-dentaria-medianeira.html', label: 'Limpeza Dentária' },
    { url: 'canal-no-dente-medianeira.html', label: 'Canal no Dente' },
    { url: 'extracao-de-dente-medianeira.html', label: 'Extração de Dente' },
    { url: 'aparelho-ortodontico-medianeira.html', label: 'Aparelho Ortodôntico' },
    { url: 'proteses-dentarias-medianeira.html', label: 'Próteses Dentárias' },
    { url: 'implante-dentario-medianeira.html', label: 'Implante Dentário' },
    { url: 'clareamento-dental-medianeira.html', label: 'Clareamento Dental' },
    { url: 'facetas-de-porcelana-medianeira.html', label: 'Facetas de Porcelana' },
    { url: 'odontopediatria-medianeira.html', label: 'Odontopediatria' },
    { url: 'convenios-odontologicos-medianeira.html', label: 'Convênios Odontológicos' },
    { url: 'contato.html', label: 'Contato' },
    { url: 'mapa-do-site.html', label: 'Mapa do Site' }
  ],

  legalLinks: [
    { url: 'politica-de-privacidade.html', label: 'Política de Privacidade' },
    { url: 'termos-de-uso.html', label: 'Termos de Uso' },
    { url: 'politica-de-cookies.html', label: 'Política de Cookies' },
    { url: 'lgpd.html', label: 'LGPD' },
    { url: 'mapa-do-site.html', label: 'Mapa do Site' }
  ]
};

/* ===== Helpers de unidade ===== */
pageContent.getUnit = function (slug) {
  return this.units.find(u => u.slug === slug) || this.units.find(u => u.isPrimary);
};

pageContent.getUnitByPage = function (pageName) {
  const page = this.pages[pageName];
  return this.getUnit(page && page.unit);
};

pageContent.waLink = function (pageName) {
  const page = this.pages[pageName] || {};
  const unit = this.getUnitByPage(pageName);
  const template = unit.isPrimary
    ? this.general.whatsappMessage
    : this.general.whatsappMessageUnidade;
  const msg = template
    .replace('{PAGINA}', pageName)
    .replace('{CIDADE}', unit.city);
  return 'https://wa.me/' + unit.whatsappNumber + '?text=' + encodeURIComponent(msg);
};
