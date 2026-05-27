---
titulo: "Analytics de Comunicação Interna e Engajamento Organizacional"
objetivo: "Centralização de dados fragmentados e modelagem de comportamento de consumo de informações corporativas."
resumoCard: "Construção de uma solução de inteligência de dados integrando APIs, automações via Power Automate e Power BI para mapear o engajamento, matrizes de calor de visualização e o comportamento de consumo de canais internos."
competencias: ["Power BI", "Power Automate", "API Integration", "Data Modeling", "Internal Communications"]
---

### 🔍 O Cenário e os Desafios de Negócio
Mapear a eficácia do fluxo de informações corporativas é um dos pilares mais complexos da governança de Gente & Cultura. Este projeto nasceu da necessidade estratégica de compreender, de forma profunda e comportamental, como os colaboradores interagem com os comunicados oficiais enviados através dos múltiplos canais digitais da companhia (como E-mail e Microsoft Teams).

Embora a organização fizesse uso de plataformas modernas de comunicação, as lideranças e o time de Endomarketing enfrentavam severas limitações analíticas nativas. Era quase impossível responder a perguntas cruciais de negócio de maneira centralizada:
* **Assimetria de Consumo:** Quais áreas ou níveis hierárquicos consumiam ativamente a informação e quais estavam isolados?
* **Eficácia de Canal:** Qual plataforma apresentava melhor aderência para determinados perfis de comunicados?
* **Padrões Temporais:** Quais os melhores horários e dias da semana para maximizar a taxa de leitura e o engajamento real?

O maior desafio técnico do projeto residia na **extrema fragmentação das fontes de dados**. A API da plataforma de comunicação fornecia apenas parte das métricas brutas de interação. Atributos altamente estratégicos — como a categorização temática dos comunicados, campanhas específicas e tags organizacionais — dependiam de processos manuais e planilhas operacionais em Excel. O desafio não era criar apenas visualizações, mas sim arquitetar um ecossistema capaz de unificar essas fontes e transformar logs operacionais in inteligência corporativa.

---

### 🛠️ Engenharia de Dados e Arquitetura de Ingestão
Para solucionar a quebra entre os dados automatizados da API e a flexibilidade das classificações em Excel, foi desenhada uma arquitetura híbrida de ingestão de dados. O objetivo foi criar um fluxo sustentável e mitigar ao máximo o esforço operacional de consolidação.

1. **Ingestão Híbrida e Orquestração:** Implementação de fluxos automatizados no **Power Automate** para monitorar e capturar os arquivos operacionais de classificação assim que salvos em repositórios em nuvem, centralizando-os em uma camada única de dados (*Single Source of Truth*).
2. **Modelagem Relacional e ETL:** Dentro do Power BI, o motor do Power Query foi utilizado para realizar o *merge* contextual entre as tabelas de interações brutas da API, a base histórica automatizada e a dimensão de estrutura organizacional da companhia.

O modelo foi projetado para calcular métricas avançadas de engajamento longitudinal, indo muito além dos relatórios superficiais de "enviado vs. recebido". Foram estruturadas lógicas para extrair o tempo de reação (janela entre o envio e a primeira abertura) e a recorrência de consumo.

---

### 📊 Inteligência Visual e Comportamento Organizacional
O design do painel foi projetado para fornecer visões tanto táticas (para o time de comunicação planejar campanhas) quanto executivas (para a diretoria avaliar o alinhamento cultural).

<img src="/portfolio/images/analytics-comunicacao.png" alt="Dashboard de Analytics de Comunicação Interna e Engajamento" />
<small>Figura 1: Cockpit central de análise de engajamento, exibindo matriz de calor por horário de visualização e segmentação por tipo de interação.</small>

#### Matriz de Calor e Distribuição Temporal
Como evidenciado no quadrante central do painel, foi desenvolvida uma **Matriz de Calor (Matrix Heatmap)** cruzando os dias da semana com as faixas de horários da primeira visualização. Essa visão permite rastrear instantaneamente o comportamento padrão de consumo da empresa, identificando os períodos de pico de atenção e zonas frias de engajamento.

#### Funil e Perfil de Interação
O modelo segrega o público de forma comportamental através de um gráfico de rosca focado no **Tipo de Interação**, dividindo a audiência elegível entre:
* **Sem Interação:** Colaboradores que receberam, mas não abriram a mensagem.
* **Só Visualizou:** Usuários que consumiram o conteúdo, mas não dispararam ações secundárias.
* **Visualizou e Clicou:** O grupo de maior engajamento, que interagiu ativamente com os links e hipertextos anexados.

A distribuição de frequência no histograma de *views* por pessoa garante que desvios padrão causados por usuários hiperativos sejam facilmente identificados, blindando as médias gerais contra distorções estatísticas.

---

### 📈 Resultados e Impacto Gerado
A implementação da estrutura mudou drasticamente a forma como a comunicação corporativa é gerida na organização, trazendo impactos profundos de eficiência e governança:

* **Estratégia de Disparo Otimizada:** O time de Endomarketing passou a programar lançamentos críticos baseando-se nas janelas de pico reais da matriz de calor, maximizando o alcance orgânico da informação.
* **Identificação de Silos Organizacionais:** Mapeamento claro de quais unidades ou níveis hierárquicos possuíam menor engajamento, direcionando as lideranças a criarem planos de escuta ativa específicos para essas estruturas.
* **Eficiência Operacional Extrema:** A automação construída no Power Automate eliminou as horas semanais de consolidação manual e cruzamentos complexos de VLOOKUPs em planilhas, gerando um ecossistema autoatualizável e livre de falhas humanas.