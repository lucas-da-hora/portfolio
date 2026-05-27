---
titulo: "Framework Estratégico: Turnover de Alta Performance (HP)"
objetivo: "Modelagem analítica avançada e inteligência de dados aplicada à retenção de talentos-chave e populações críticas."
resumoCard: "Desenvolvimento de um framework analítico no Power BI para monitoramento de turnover in populações críticas, aplicando tratamento de exceções, modelagem temporal expandida e lógicas em DAX para isolar comportamentos estruturais de oscilações pontuais."
competencias: ["Power BI", "Data Modeling", "DAX Avançado", "People Analytics", "Strategic HR"]
---

### 🔍 O Cenário e os Desafios de Negócio
Acompanhar a movimentação geral de colaboradores é uma prática padrão em Gente & Cultura, mas indicadores tradicionais de turnover falham ao tratar o quadro funcional de maneira homogênea. A necessidade deste projeto surgiu do desafio de monitorar, de forma cirúrgica, o comportamento de desligamentos em populações críticas para o negócio, focando especificamente em colaboradores classificados como **Alta Performance (High Performance - HP)**.

Até então, a liderança executiva enfrentava um cenário de baixa visibilidade sobre a retenção de talentos-chave e sobre os impactos organizacionais gerados pela perda desse público. Além disso, a modelagem dos dados apresentava desafios analíticos e de governança complexos:
* **GAPs de Sazonalidade e Períodos Futuros:** Dificuldade em diferenciar o comportamento de meses fechados (históricos) de projeções e períodos futuros de forma fluida.
* **Flutuação de Elegibilidade por Ciclos:** Como as classificações de desempenho possuem atualizações semestrais, o headcount elegível de alta performance varia ao longo do ano, exigindo regras de negócio estritas para evitar distorções.
* **Falta de Critérios Metodológicos Claros:** Necessidade de isolar desligamentos genuínos de movimentações que não geram perda de capital intelectual para a companhia, como transferências internas entre equipes, além de expurgar contratos de vigência predeterminada (como estagiários e jovens aprendizes).

---

### 🛠️ Alinhamento Metodológico e Regras de Negócio
Para garantir a consistência matemática e a aceitação do indicador pelas lideranças, o primeiro passo foi estruturar a governança do cálculo. O **Turnover HP** foi normalizado dividindo o volume de desligamentos desse público pelo headcount médio da população elegível dentro do período correspondente.

<img src="/portfolio/images/turnover-metodologia-calculo.png" alt="Metodologia e Regras de Negócio do Turnover HP" />
<small>Figura 1: Definição conceitual da fórmula, tratamento de ciclos avaliativos semestrais e critérios de expurgo de dados.</small>

Para o cálculo acumulado anual, a engenharia de dados superou a fragilidade de apenas tirar a média entre o início e o fim do ano. Como o número de colaboradores elegíveis se altera a cada ciclo de avaliação, o motor de cálculo foi configurado para **somar e consolidar os resultados mensais**, garantindo que cada colaborador seja avaliado estritamente dentro do contexto vigente do seu respectivo ciclo.

---

### 📊 Inteligência Analítica e Modelagem Dinâmica em DAX
Na camada de inteligência do Power BI, o projeto foi estruturado sob o conceito de *fonte única da verdade*. Através de medidas em DAX avançado utilizando variáveis (`VAR`) e funções de contexto temporal (`CALCULATE`, `KEEPFILTERS`), o modelo realiza o cálculo dinâmico da evolução mensal e acumulada da taxa.

#### Visão de Linha do Tempo e Detalhamento de Contexto
A interface disponibiliza um cockpit completo contendo a quebra do turnover anual acumulado dividido entre movimentações **Voluntárias** (iniciativa do colaborador) e **Involuntárias** (iniciativa da empresa). Uma tabela matricial de auditoria no rodapé abre o passo a passo do cálculo mensal, permitindo total transparência dos dados agregados.

<img src="/portfolio/images/turnover-dashboard-geral.png" alt="Cockpit Geral de Evolução do Turnover HP" />
<small>Figura 2: Dashboard de acompanhamento longitudinal do turnover dividindo comportamento voluntário e involuntário com matriz de auditoria.</small>

#### Auditoria Nominal de Movimentações (Drill-Down Operacional)
Para suportar a atuação dos Business Partners (BPs) de Gente & Cultura, o framework conta com módulos operacionais de detalhamento nominais. Filtrando um mês específico de referência, o sistema quebra o banco de dados em duas visões complementares: a relação nominal de colaboradores HP que fecharam ativos no período e a listagem de profissionais desligados, explicitando o gestor imediato e o centro de custo.

<img src="/portfolio/images/turnover-colaboradores-ativos.png" alt="Relação de Colaboradores HP Ativos por Mês" />
<small>Figura 3: Interface operacional de auditoria de colaboradores de alta performance ativos em meses selecionados.</small>

<img src="/portfolio/images/turnover-colaboradores-desligados.png" alt="Relação de Colaboradores HP Desligados por Mês" />
<small>Figura 4: Módulo de detalhamento de desligamentos de talentos-chave para apoio a comitês de governança e reposição de vagas.</small>

---

### 🔮 Capacidade Preditiva: Projeção de Séries Temporais
O maior diferencial analítico do projeto reside na camada preditiva implementada na visão executiva. Utilizando algoritmos de previsão baseados em padrões históricos, o modelo estende a linha temporal para períodos futuros.

<img src="/portfolio/images/turnover-projecao.png" alt="Projeção de Turnover de Alta Performance" />
<small>Figura 5: Gráfico de tendência preditiva com projeção de série temporal e sombreamento de intervalo de confiança estatístico.</small>

Essa funcionalidade não foca em adivinhar valores absolutos exatos, mas sim em **fornecer uma leitura de tendência geral** (estável, ascendente ou descendente). Isso blinda a tomada de decisão, permitindo que a diretoria antecipe riscos de perda de talentos em períodos de alta sazonalidade antes que eles se consolidem no realizado.

---

### 📈 Resultados e Impacto Organizacional
O framework mudou o patamar das discussões de retenção de talentos na companhia, transformando um indicador que antes gerava discussões confusas em um **instrumento de governança estratégica**. Os principais impactos consolidados foram:

* **Sustentabilidade Comparativa:** Eliminação de interpretações distorcidas ou alarmistas causadas por ruídos estatísticos e meses isolados de baixa amostragem.
* **Alocação Eficiente de Ações:** Maior clareza para Business Partners e Diretores focarem planos de ação preventivos e orçamentos de retenção de forma direcionada nas estruturas de maior pressão.
* **Decisões Baseadas em Dados (Data-Driven):** Fornecimento de insumos analíticos reais para comitês executivos revisarem políticas de remuneração, benefícios e trilhas de carreira com foco em reter os melhores profissionais.