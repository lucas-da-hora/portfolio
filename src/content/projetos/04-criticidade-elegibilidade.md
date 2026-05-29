---
titulo: "Framework Analítico de Criticidade e Elegibilidade"
objetivo: "Construção de score multicritério integrado a modelo preditivo para otimização de ciclos de reconhecimento e retenção estratégica."
resumoCard: "Desenvolvimento de um framework preditivo e prescritivo que combina análise estatística de dados e modelagem no Power BI para pontuar o risco de saída de colaboradores, eliminando a subjetividade em comitês de calibração salarial."
competencias: ["Data Science (Python)", "Power BI", "Score Multicritério", "People Analytics", "Predictive Analytics"]
desafio: "Eliminar a subjetividade em comitês de calibração salarial e prever com precisão o risco de saída de colaboradores."
abordagem: "Desenvolvimento de um score multicritério integrado a um modelo preditivo utilizando análise estatística e Python."
resultados: "Otimização de ciclos de reconhecimento e fornecimento de insights prescritivos para ações de retenção estratégica."
---

### 🔍 O Cenário e os Desafios de Negócio
O projeto surgiu da necessidade de tornar os ciclos de reconhecimento corporativo mais estratégicos, consistentes e orientados por dados. Embora já existissem critérios utilizados para análises de mérito e promoção dentro da organização, grande parte das decisões ainda dependia de interpretações subjetivas ou de avaliações isoladas, o que dificultava a priorização de colaboradores críticos para retenção.

O principal desafio era estruturar uma lógica matemática e consistente capaz de responder perguntas cruciais de negócio:
* **Mapeamento de Risco:** Quais colaboradores apresentavam maior risco organizacional de saída?
* **Drivers de Turnover:** Quais fatores mais influenciavam esse risco de forma real?
* **Priorização Estratégica:** Como priorizar o reconhecimento de forma mais inteligente, equilibrando desempenho, retenção e posicionamento salarial?
* **Escalabilidade:** Como transformar múltiplos critérios complexos em uma análise consistente e escalável para toda a companhia?

A dor central não era apenas classificar colaboradores em listas isoladas, mas sim criar uma abordagem analítica integrada que apoiasse decisões reais e financeiras relacionadas à retenção de talentos críticos para o negócio.

---

### 🛠️ Abordagem Analítica e Engenharia
A solução foi construída a partir da criação de um framework analítico multicritério voltado à priorização de criticidade e elegibilidade. Para afastar qualquer subjetividade ou "achismo" na definição dos pesos do score, incorporamos uma camada de inteligência estatística utilizando **Python**.

Através de bibliotecas como **Scikit-Learn** e **XGBoost**, foi modelado o comportamento histórico de movimentações e desligamentos voluntários da companhia. O objetivo foi mapear a probabilidade de *churn* (saída) e extrair a importância relativa de cada variável sobre o fenômeno do desligamento. Essa análise permitiu identificar, com rigor estatístico, quais vetores de carreira e remuneração possuem maior impacto na decisão de saída, garantindo que os pesos do score fossem validados por evidências extraídas dos dados, e não por suposições.

A partir dessa etapa de modelagem, o framework evoluiu para o Power BI, onde os sinais dispersos foram consolidados em uma estrutura de dados relacional que unifica:
* **Conceito de Performance:** O histórico de avaliações do colaborador.
* **Equidade Salarial:** O posicionamento do profissional em relação ao mercado.
* **Sufocamento Financeiro:** O tempo decorrido desde a última movimentação salarial.
* **Criticidade da Função:** O impacto da perda do profissional para a continuidade do negócio.

O framework unificou esses critérios através de medidas em DAX dinâmicas, atribuindo uma pontuação final de criticidade (score) para cada indivíduo da companhia e estruturando uma matriz prescritiva de tomada de decisão.

---

### 📈 Resultados e Impacto Organizacional
O framework transformou a governança de remuneração da companhia, elevando o nível de maturidade analítica em comitês executivos através de:

* **Priorização Científica:** Capacidade de identificar e priorizar colaboradores com maior criticidade de saída, alocando o orçamento de mérito de forma cirúrgica.
* **Conexão Estratégica:** Vinculação direta do reconhecimento financeiro a fatores reais de retenção, mitigando o turnover voluntário de talentos-chave.
* **Redução da Subjetividade:** Eliminação de vieses pessoais e análises isoladas, blindando as decisões com critérios técnicos e homogêneos.
* **Visão Integrada:** Conexão entre desempenho, retenção e reconhecimento em uma lógica analítica que serve como bússola para os Business Partners e lideranças, conectando dados históricos a uma visão prospectiva de retenção.