# Boas práticas nos testes
---

## Testes unitários devem serguir o modelo de F.I.R.S.T.

- **F** (Fast) - Devem ser rápidos, pois testam apenas uma unidade de código;
- **I** (Isolated) - São isolados, testando individualmente as unidades e não sua integração;
- **R** (Repeateble) - Devem ser repetíveis com resultados e comportamentos constantes e consistentes;
- **S** (Self-verifying) - Deve ser capaz de que a auto verificação determine se o teste foi bem sucedido ou não;
- **T** (Timely) - O teste deve ser oportuno, sendo um teste por unidade de código.

Testes unitários devem testar o comportamento da menor parte do código, referindo-se então a testar diretamente funções/métodos bem pequenos, sendo que seus comportamentos devem ser consistentes.

## Testes de integração

Os testes de integração sucedem os testes unitários, ele utiliza dos módulos testados nos **testes unitários** para agrupar os componentes e alcançar um sistema integrado, testando a integração de um sistema com os módulos já unificados.