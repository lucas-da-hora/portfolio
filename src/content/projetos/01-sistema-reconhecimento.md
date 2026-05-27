---
titulo: "Sistema de Reconhecimento Interno & Governança Salarial"
objetivo: "Centralização e automação do ciclo de mérito e promoções com arquitetura segura e RLS unificado."
resumoCard: "Desenvolvimento de uma solução corporativa ponta a ponta na Power Platform para descentralizar comitês salariais, mitigar GAPs de conformidade e automatizar a geração de atos formais de Gente & Cultura."
competencias: ["Power Apps", "Power Automate", "Power BI", "SharePoint", "People Analytics", "Data Governance"]
desafio: "A descentralização do processo de mérito e promoção gerava alta dependência de planilhas paralelas, riscos severos de inconsistência em cálculos financeiros, baixa rastreabilidade do status das propostas e vulnerabilidade na visibilidade de dados salariais sensíveis por escopo de liderança."
abordagem: "Construção de um ecossistema integrado unificando uma camada transacional leve (Power Apps), um repositório auditável (SharePoint), uma esteira de backend/automação (Power Automate) e um motor analítico (Power BI) alimentado por snapshots de dados via Python para blindagem de segurança (RLS)."
resultados: "Eliminação total de controles paralelos, garantia de consistência matemática inequívoca entre valores nominais e percentuais propostos, automação completa da emissão de cartas de reconhecimento via templates e governança absoluta de acessos unificada entre o app e o dashboard."
---

### 🔍 O Cenário e as Dores de Negócio
Gerenciar ciclos de calibração salarial e reconhecimento de talentos envolve mitigar riscos jurídicos e operacionais complexos. O antigo modelo sofria com a fragmentação de informações organizacionais, o que expunha a área de **Remuneração, Governança & Dados** a vulnerabilidades como:
* **Inconsistência Financeira:** Risco latente de divergências entre salários propostos, percentuais de aumento aplicados e os registros formalizados.
* **Apagão de Rastreabilidade:** Baixa visibilidade sobre o status real de aprovação de cada colaborador ao longo das etapas do fluxo.
* **Fragilidade de Acesso:** Necessidade crítica de isolar e controlar a visibilidade de salários estritamente pelo escopo geográfico/hierárquico de cada liderança e Business Partner (BP).

### 🛠️ Arquitetura Funcional e Stack Tecnológica
A solução foi arquitetada sob o princípio de **fonte única da verdade**, segregando as responsabilidades de interface, persistência, automação e análise para garantir performance e escalabilidade:

* **Camada Transacional (Front-end):** Um aplicativo **Power Apps** focado na experiência do usuário (lideranças e BPs), aplicando regras de negócio e validações matemáticas em tempo de execução.
* **Repositório Operacional (Dados):** Listas estruturadas no **SharePoint Online** atuando como banco relacional para persistência das propostas e tabelas auxiliares de cargos e parametrização.
* **Motor de Automação (Backend):** Fluxos otimizados no **Power Automate** encarregados pelo processamento em segundo plano, notificações contextuais e a esteira de geração documental.
* **Camada Analítica (Business Intelligence):** Um painel em **Power BI** integrado às bases históricas de People Analytics para controle orçamentário e análise de trajetórias de cargos e salários.

<img src="/portfolio/images/arquitetura-sistema.png" alt="Fluxograma de Funcionamento e Integração da Solução" />
<small>Figura 1: Fluxograma detalhado da arquitetura e integração ponta a ponta do ecossistema da solução.</small>

---

### 🔐 Engenharia de Dados: Segurança e RLS Unificado
O maior diferencial técnico do projeto reside no modelo de **Governança Unificada de Acessos**. Em vez de descentralizar as regras de segurança, o ecossistema opera em cascata a partir de uma lógica rigorosa:

* **Snapshot de Ciclo:** Imediatamente antes da abertura do ciclo, é gerada uma extração de referência (*snapshot*) estática da base de colaboradores ativos. Isso impede flutuações e distorções de elegibilidade e orçamento durante as movimentações em andamento.
* **Segurança em Nível de Linha (Row-Level Security):** Uma estrutura complexa de árvore de liderança (mapeando teamcode, fatherteamcode e e-mails de gestão) é processada via script Python.
* **Sincronização Absoluta:** O mesmo arquivo de permissões que alimenta o motor de RLS no Power BI é replicado no SharePoint. Ao iniciar o aplicativo (`App.OnStart`), o Power Apps carrega coleções em memória que cruzam esses perímetros, blindando o acesso: desenvolvedores acessam o todo, BPs visualizam suas unidades de atendimento, e líderes operam estritamente dentro de suas respectivas árvores hierárquicas.

### 📊 Central de Propostas e Interface Transacional
Para garantir a usabilidade das lideranças, o ecossistema conta com uma interface operacional fluida, mapeando o perfil completo do colaborador, travas automáticas de elegibilidade com base no ciclo avaliativo, score de risco de saída e o painel transacional de inputs de méritos e promoções.

<img src="/portfolio/images/sistema-home-cadastro.png" alt="Interface de Cadastro de Propostas" />
<small>Figura 2: Tela operacional do sistema integrada para simulação e envio de inputs de mérito e promoção pelas lideranças.</small>

A solução suporta duas formas de entrada para o reconhecimento: valor nominal e percentual. Quando o usuário informa um valor nominal, o aplicativo calcula o percentual equivalente; quando informa um percentual, o aplicativo calcula o valor monetário correspondente, tratando explicitamente separadores decimais e arredondamentos controlados antes de persistir a diferença real frente ao orçamento.

---

### 📈 Inteligência Analítica e Cockpit da Liderança
Na camada de Business Intelligence, os dados operacionais são consolidados para oferecer visões gerenciais macro e micro, divididas estrategicamente em módulos de acompanhamento de performance, distribution salarial por faixas e análise de risco de turnover.

#### Visão de Equipe (Cockpit Estratégico)
Permite aos gestores e Business Partners avaliarem a estrutura de talentos de forma unificada, identificando o tempo médio de casa, o quadrante de risco de saída da área e o tempo decorrido desde a última alteração salarial ou de cargo do time.

<img src="/portfolio/images/sistema-analise-time.png" alt="Dashboard Cockpit da Liderança" />
<small>Figura 3: Visão consolidada do time (Cockpit da Liderança) exibindo métricas de distribuição em faixas salariais, tempo de função e score de retenção.</small>

#### Visão Individual (Linha do Tempo de Evolução)
Para suportar comitês de calibração salarial, o painel disponibiliza o detalhamento histórico por colaborador. Essa funcionalidade permite auditar a trajetória cronológica de cargos e salários, cruzando movimentações passadas com notas de avaliações de desempenho anteriores.

<img src="/portfolio/images/sistema-historico-individual.png" alt="Dashboard de Análise Individual do Colaborador" />
<small>Figura 4: Módulo de análise individual exibindo a linha do tempo da evolução salarial e histórico de parametrização técnica do profissional selecionado.</small>

---

### 📄 Esteira Automática de Geração Documental
Uma vez aprovada a proposta de reconhecimento técnico, o **Power Automate** entra em ação isolando as variáveis transacionais através de componentes Compose. O fluxo realiza a limpeza de tipos de dados e popula de forma 100% automatizada um template oficial do **Microsoft Word**.

O documento final gerado em formato `.docx` (Carta de Reconhecimento) é salvo automaticamente em uma biblioteca restrita do SharePoint e seu link de auditoria é injetado de volta na lista transacional. Esse processo confere **validade jurídica imediata** aos atos internos e agiliza a subida posterior de parâmetros de cargos e códigos de cargos para o sistema Senior de folha de pagamento.