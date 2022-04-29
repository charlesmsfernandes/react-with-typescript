import style from '../Lista.module.scss'

const Item = ({tarefa, tempo}: {tarefa: string, tempo: string}) => (
  <li className={style.item}>
  <h3>{tarefa}</h3>
  <span>{tempo}</span>
  </li> 
)

export default Item;