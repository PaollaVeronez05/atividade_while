
---

# 📘 Painel Automático de Multiplicação com Laço `while` – JavaScript

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)


Projeto educacional desenvolvido para demonstrar, de forma prática e interativa, a utilização do **laço de repetição `while` em JavaScript**, aplicando lógica de repetição controlada e manipulação dinâmica do DOM.

O sistema gera automaticamente todas as tabuadas do **1 ao 10**, organizadas visualmente para consulta educacional.

---

## 🎯 Objetivo

Este projeto tem como finalidade:

* Compreender o funcionamento do laço `while`
* Aplicar estruturas de repetição aninhadas
* Automatizar cálculos matemáticos
* Criar conteúdo HTML dinamicamente
* Trabalhar lógica de controle de execução
* Evitar loops infinitos através de condições bem definidas

---

## 🧠 Conceito Principal: Laço `while`

O `while` executa um bloco de código **enquanto uma condição for verdadeira**.

Estrutura básica:

```javascript
while (condicao) {
    // código executado repetidamente
}
```

Diferente do `for`, o controle do contador é feito manualmente.

---

## 💻 Funcionamento do Sistema

O programa:

1. Inicia automaticamente o processamento
2. Gera as tabuadas do número **1 até 10**
3. Calcula cada multiplicação de **1 até 10**
4. Organiza cada tabuada em blocos visuais
5. Exibe tudo dinamicamente na página HTML

---

## 🔎 Estrutura da Lógica

### ✔ Laço Externo (Tabuadas)

Responsável por definir qual tabuada está sendo criada.

```javascript
while (numero <= 10)
```

Controla a geração das tabuadas de 1 a 10.

---

### ✔ Laço Interno (Multiplicações)

Responsável pelos cálculos individuais.

```javascript
while (contador <= 10)
```

Executa as multiplicações dentro de cada tabuada.

---

### ✔ Lógica de Aninhamento

O sistema utiliza:

* **Loop externo** → escolhe a tabuada
* **Loop interno** → realiza os cálculos

Isso é chamado de **laço aninhado**.

---

## 🧮 Exemplo de Saída

O sistema gera automaticamente:

```
Tabuada do 1
1 x 1 = 1
1 x 2 = 2
...
1 x 10 = 10

Tabuada do 2
2 x 1 = 2
...
```

Até a tabuada do 10.

---

## 🧩 Manipulação do DOM

Os resultados são armazenados em uma variável de texto:

```javascript
conteudo += "<h3>Tabuada do " + numero + "</h3>";
```

Após finalizar o processamento:

```javascript
document.getElementById("resultado").innerHTML = conteudo;
```

O conteúdo é inserido dinamicamente na página.

---

## ⚙️ Controle do Loop

Para evitar **loop infinito**, o código segue três etapas essenciais:

### ✅ Inicialização

Variáveis criadas antes do laço.

```javascript
let numero = 1;
```

### ✅ Condição

Define até quando o loop executa.

```javascript
numero <= 10
```

### ✅ Incremento

Atualiza o contador.

```javascript
numero++;
```

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* JavaScript (Vanilla JS)
* Laço `while`
* Estruturas aninhadas
* Manipulação do DOM
* Strings dinâmicas

---

## 📚 Conceitos Trabalhados

* Estruturas de repetição
* Laços `while`
* Loops aninhados
* Controle de execução
* Construção dinâmica de interface
* Lógica matemática automatizada
* Uso do `.innerHTML`

---

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/painel-tabuadas-while.git
```

2. Abra o arquivo `index.html` no navegador.

Não é necessário instalar dependências.

---

## 🎓 Contexto Educacional

Este projeto simula um módulo de apoio matemático para uma plataforma de ensino fundamental, permitindo consulta rápida das tabuadas de forma automática.

---

## 👩‍💻 Autora

Paolla Paula Veronez

Estudante de desenvolvimento de sistemas

---


