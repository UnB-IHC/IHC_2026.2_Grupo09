# Pocket Guide: Checklist de Acessibilidade Web

**Fontes:** Guia UK (Ceweb.br), WCAG 2.2 (W3C) e ABNT NBR 17225:2025

**Como usar:** marque cada item como atendido (`[x]`) ou não atendido (`[ ]`). Se o item não se aplica ao conteúdo avaliado, escreva "N/A" ao lado.

---

## 1. Perceptível: imagens, mídias e apresentação

- [ ] As imagens informativas têm alternativa textual que transmite a mesma informação?
- [ ] As imagens interativas (botões, links com imagem) têm texto que descreve a função ou a ação?
- [ ] As imagens decorativas são ignoradas por tecnologias assistivas?
- [ ] O conteúdo usa texto real em vez de imagens de texto?
- [ ] As imagens complexas (gráficos, mapas, infográficos) têm uma descrição detalhada separada?
- [ ] Os áudios pré-gravados têm alternativa textual (ex.: transcrição)?
- [ ] Os vídeos pré-gravados têm legendas?
- [ ] As transmissões audiovisuais ao vivo têm legendas?
- [ ] Os vídeos têm audiodescrição do conteúdo visual?
- [ ] Há audiodescrição estendida quando as pausas do vídeo são insuficientes?
- [ ] O conteúdo audiovisual tem janela de Libras?
- [ ] O áudio com reprodução automática pode ser pausado, parado ou ter o volume controlado?
- [ ] A informação é transmitida por outros meios além da cor?
- [ ] O contraste entre texto e fundo é suficiente?
- [ ] Os gráficos informativos têm contraste suficiente?
- [ ] O texto pode ser ampliado até 200% sem perda de conteúdo ou funcionalidade?
- [ ] O conteúdo se adapta a diferentes tamanhos de tela e à ampliação?
- [ ] O conteúdo pode ser usado em retrato e em paisagem?
- [ ] O conteúdo é preservado quando o usuário ajusta os espaçamentos do texto?
- [ ] As instruções são compreensíveis sem depender de forma, posição ou som?
- [ ] O conteúdo adicional exibido sob foco ou cursor permanece visível, pode ser dispensado e pode receber o ponteiro sem sumir?

## 2. Operável: teclado, navegação e interação

- [ ] Todas as funcionalidades podem ser operadas apenas pelo teclado?
- [ ] O foco do teclado nunca fica preso em um componente (ausência de armadilhas)?
- [ ] O indicador de foco é visível?
- [ ] A sequência de foco é lógica e segue a ordem de leitura?
- [ ] O componente focado não fica totalmente encoberto por outros elementos?
- [ ] O componente focado fica totalmente visível?
- [ ] A área do indicador de foco equivale a, no mínimo, um perímetro de 2 pixels CSS?
- [ ] Os atalhos de teclado de caractere único podem ser desativados ou remapeados?
- [ ] Há mecanismo para pular blocos de conteúdo repetidos (ex.: link "Ir para o conteúdo")?
- [ ] A finalidade de cada link é identificável pelo contexto?
- [ ] A finalidade de cada link é compreensível isoladamente?
- [ ] O usuário consegue identificar onde está dentro do conjunto de páginas (ex.: menu atual, trilha de navegação)?
- [ ] Os links para arquivos informam o formato e o tamanho?
- [ ] Os links para sites externos são identificados?
- [ ] As áreas de acionamento (botões, links) têm dimensões adequadas?
- [ ] Gestos multiponto ou baseados em caminho têm alternativa de ação simples?
- [ ] O acionamento por ponteiro pode ser cancelado ou revertido?
- [ ] Existe alternativa ao movimento de arrastar?
- [ ] Existe alternativa às ações ativadas por movimento do dispositivo ou do usuário?
- [ ] Os modais podem ser fechados com a tecla Escape?

## 3. Operável: tempo e movimento

- [ ] Os limites de tempo podem ser desativados, ajustados ou estendidos pelo usuário?
- [ ] O conteúdo com movimento automático (carrosséis, animações) pode ser pausado, parado ou ocultado?
- [ ] As atualizações automáticas de conteúdo podem ser controladas pelo usuário?
- [ ] O conteúdo evita flashes acima dos limites seguros (no máximo 3 por segundo)?
- [ ] Os dados preenchidos são preservados após a reautenticação?
- [ ] O usuário é avisado sobre inatividade que possa causar perda de dados?

## 4. Compreensível: formulários, previsibilidade e autenticação

- [ ] Os campos têm rótulos e instruções de preenchimento claros?
- [ ] A finalidade dos campos (ex.: nome, e-mail, CPF) é identificável por software?
- [ ] Os erros são identificados em texto, indicando onde ocorreram?
- [ ] O sistema sugere como corrigir os dados informados incorretamente?
- [ ] Os envios importantes podem ser revisados, confirmados ou revertidos?
- [ ] O sistema evita pedir a mesma informação mais de uma vez?
- [ ] Receber foco em um componente não provoca mudança inesperada de contexto?
- [ ] O usuário é avisado antes de mudanças de contexto ao preencher campos?
- [ ] A navegação é consistente entre as páginas?
- [ ] Componentes com a mesma função são identificados de forma consistente?
- [ ] Os mecanismos de ajuda aparecem na mesma posição relativa nas páginas?
- [ ] Os captchas têm alternativas sensoriais (ex.: visual e sonora)?
- [ ] A autenticação oferece alternativas ou assistência a testes cognitivos (ex.: permitir colar senha, gerenciador de senhas)?
- [ ] Há alternativa ao reconhecimento facial e à biometria?

## 5. Robusto: estrutura, código e tecnologias assistivas

- [ ] A estrutura e a semântica (títulos, listas, tabelas, regiões) são identificáveis por software?
- [ ] Os títulos de seção são descritivos?
- [ ] A ordem de leitura no código preserva o significado do conteúdo?
- [ ] Todos os componentes interativos têm nome e função identificáveis?
- [ ] Os estados e valores dos componentes customizados (ex.: aberto/fechado, selecionado) são expostos às tecnologias assistivas?
- [ ] As mensagens de status são perceptíveis por tecnologias assistivas sem receber foco?
- [ ] O texto visível dos componentes está contido no nome acessível?
- [ ] Foram usados elementos HTML nativos sempre que possível?
- [ ] O conteúdo inserido por CSS foi verificado quanto à acessibilidade?
- [ ] Os arquivos vinculados (PDF, planilhas, etc.) foram verificados segundo seu formato?

## 6. Conteúdo e linguagem

- [ ] O idioma principal da página é identificável por software?
- [ ] Os trechos em outro idioma são identificados?
- [ ] A linguagem é simples e clara?
- [ ] As frases estão em ordem direta e têm cerca de 15 a 20 palavras?
- [ ] O texto usa o termo "pessoa com deficiência" conforme a orientação?
- [ ] As hashtags usam maiúscula inicial em cada palavra (ex.: #AcessibilidadeDigital)?
- [ ] O uso de emojis é moderado?
- [ ] O alinhamento do texto respeita o sentido de leitura?
- [ ] A largura dos blocos de texto é limitada em número de caracteres por linha?
- [ ] As siglas e abreviaturas são expandidas ou explicadas?
- [ ] A pronúncia de palavras ambíguas é esclarecida quando necessário?

## 7. Gestão e processo

- [ ] A acessibilidade foi considerada desde a concepção do projeto?
- [ ] Foram criadas personas diversas e feito um levantamento coletivo de necessidades?
- [ ] Pessoas com deficiência participaram dos testes?
- [ ] O projeto prevê equipe, capacitação, recursos e cronograma para acessibilidade?
- [ ] Os aprendizados foram registrados ao encerrar o projeto?
- [ ] Os testes combinam métodos manuais e automáticos?
- [ ] A equipe está ciente de que plugins ou ferramentas automáticas não resolvem toda a acessibilidade?

---

## Referências

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225:2025**: Acessibilidade em conteúdo e aplicações web: requisitos. Rio de Janeiro: ABNT, 2025.

CENTRO DE ESTUDOS SOBRE TECNOLOGIAS WEB. **Guia de boas práticas para acessibilidade digital**. [S. l.]: Ceweb.br, [s. d.]. Disponível em: https://ceweb.br/projetos/bruk/guia-html/. Acesso em: 26 out. 2026.

WORLD WIDE WEB CONSORTIUM. **Web Content Accessibility Guidelines (WCAG) 2.2**. W3C Recommendation, 12 dez. 2024. Disponível em: https://www.w3.org/TR/2024/REC-WCAG22-20241212/. Acesso em: 26 out. 2026.