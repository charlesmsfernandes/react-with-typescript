import React from 'react';
import style from './Botao.module.scss';

interface Props {
  children?: React.ReactNode
}

const Botao = ({children}: Props) => {
  return (
    <button className={style.botao}>{children}</button>
  )
}

export default Botao