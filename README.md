# Pocket Guide de Acessibilidade

<div align="center">
  <img src="docs/assets/img/pocket-eye.svg" alt="Olho estilizado em roxo e amarelo, símbolo do Pocket Guide de Acessibilidade" width="280">
</div>

## Sobre o projeto

O Pocket Guide de Acessibilidade é um guia prático desenvolvido pelo Grupo 09 da disciplina de Interação Humano-Computador da Universidade de Brasília (UnB), no semestre 2026.2.

O projeto reúne perguntas de verificação e recursos para apoiar a criação e a avaliação de produtos digitais acessíveis. A documentação é organizada por áreas de atuação e publicada com MkDocs e Material for MkDocs.

## Conteúdo do guia

- [Desenvolvimento Web](docs/devWeb/non_text_content.md): teclado, navegação, interação, formulários, estrutura e tecnologias assistivas.
- [Design](docs/design/design.md): apresentação visual, contraste, adaptação de tela e legibilidade.
- [Geração de Conteúdo](docs/geracaoConteudo/conteudo.md): alternativas textuais, mídias, linguagem e clareza da comunicação.
- [Gestão de Projetos](docs/gestaoProjeto/gestaoProjeto.md): planejamento, participação de pessoas com deficiência e avaliação da acessibilidade.
- [Ferramentas de Acessibilidade](docs/tools/ferramentas.md): recursos de apoio à verificação e aos testes.

As perguntas estão consolidadas em [perguntas.md](perguntas.md), com referências ao Guia de Boas Práticas para Acessibilidade Digital do Ceweb.br, às WCAG 2.2 e à ABNT NBR 17225:2025.

## Como usar

Escolha uma área do guia e percorra o checklist conforme o conteúdo ou produto avaliado. Marque cada item atendido e registre os que ainda precisam de ajustes. Quando uma pergunta não se aplicar, indique “N/A” ao lado.

## Desenvolvimento local

Use Python 3.12 e instale as dependências em um ambiente virtual:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m mkdocs serve
```

Para validar a documentação antes de enviar alterações, execute `python -m mkdocs build --strict`.

## Publicação automática

O workflow [MkDocs CI e deploy](.github/workflows/deploy-mkdocs.yml) valida a documentação nos pull requests para `main`. A cada push em `main`, ele gera o site a partir dos arquivos-fonte e publica no GitHub Pages. Também é possível executá-lo manualmente pela aba **Actions**, selecionando a branch `main`.

Para habilitar a publicação, acesse **Settings → Pages → Build and deployment → Source** no repositório e selecione **GitHub Actions**. O workflow usa o token automático do GitHub, sem necessidade de cadastrar um token pessoal.

O site será publicado em https://unb-ihc.github.io/IHC_2026.2_Grupo09/. A pasta `site/` é uma saída gerada; o workflow faz uma nova geração em cada execução, sem depender dos arquivos dessa pasta versionados no repositório.

## Equipe

<table>
  <tr>
    <td align="center"><a href="https://github.com/felipemso"><img src="https://github.com/felipemso.png?size=160" width="96" height="96" alt="Foto de Felipe Melo"><br><strong>Felipe Melo</strong></a></td>
    <td align="center"><a href="https://github.com/Marctroman"><img src="https://github.com/Marctroman.png?size=160" width="96" height="96" alt="Foto de Marco Antônio"><br><strong>Marco Antônio</strong></a></td>
    <td align="center"><a href="https://github.com/CharlesRuan-MAP"><img src="https://github.com/CharlesRuan-MAP.png?size=160" width="96" height="96" alt="Foto de Charles Ruan"><br><strong>Charles Ruan</strong></a></td>
    <td align="center"><a href="https://github.com/Mateiki"><img src="https://github.com/Mateiki.png?size=160" width="96" height="96" alt="Foto de Matheus Eiki"><br><strong>Matheus Eiki</strong></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/G2SBiell"><img src="https://github.com/G2SBiell.png?size=160" width="96" height="96" alt="Foto de Gabriel Portácio"><br><strong>Gabriel Portácio</strong></a></td>
    <td align="center"><a href="https://github.com/giovannabrito19"><img src="https://github.com/giovannabrito19.png?size=160" width="96" height="96" alt="Foto de Giovanna Aguiar"><br><strong>Giovanna Aguiar</strong></a></td>
    <td align="center"><a href="https://github.com/kaikysousa"><img src="https://github.com/kaikysousa.png?size=160" width="96" height="96" alt="Foto de Kaiky Dourado"><br><strong>Kaiky Dourado</strong></a></td>
  </tr>
</table>

## Licença

Consulte os termos de uso e distribuição em [LICENSE.md](LICENSE.md).
