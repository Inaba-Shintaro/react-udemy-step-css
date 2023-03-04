import React from 'react'
//css scssファイルをインポート
import classes from './CssModules.module.scss'

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules-</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  )
}
// npm i node-sass
//オブジェクト.クラス名で使える
