# react-with-typescript
Fundamentos de React: escrevendo com Typescript

### Aula 1 - 3

* Function components
* Componentes padrão do projeto
* scss
* CSS Module
* Typescript

### Ciclo de vida React

* componentWillMount (antes de ser montado)
* componentDidMount (acabou de ser montado)
* componentWillUpdate (componente acabou de atualizar)
* componentWillUnmount (componente vai ser desmontado)

#### ciclo de vida com Function Component

* - useLayoutEffect

```
 useLayoutEffect(() => {
    …
  },[])
```
Atua como o componentWillMount, é usado quando você precisa mudar algo visualmente antes do componente aparecer, para que não haja aquele problema da tela piscar assim que a tela carrega.


* - useEffect

```
 useEffect(() => {
    …
  }, [])
```
Atua como ocomponentDidMount, componentWillUpdate, componentWillUnmount.
Ele executa assim que o componente é renderizado, sempre executa quando uma variável mudar e para desmontar o component.
Para desmontar o component existe uma observação, que é retornar uma função dentro do useEffect.
Dessa forma essa função dentro do return só será executada quando o componente estiver desmontando, exemplo:

```
useEffect(() => {
  return () => {
    …
  }
},[])
```