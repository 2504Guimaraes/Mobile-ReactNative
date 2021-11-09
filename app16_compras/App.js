import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage'

const myDB = openDatabase({ name: 'bancoApp16' })

export default App = () => {
  const [nmProduto, setNmProduto] = useState('')
  const [qtProduto, setQtProduto] = useState(0)
  const [produtosComp, setProdutosComp] = useState([])

  const msgConsole = (txt) => {
    console.log('--------------------------------------------------')
    console.log(`- ${txt} -`)
    console.log('--------------------------------------------------')
  }

  const criarTabelas = () => {
    myDB.transaction(txn => { 
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tb_compras (
          id INTEGER PRIMARY KEY AUTOINCREMENT, 
          nm_produto VARCHAR(20) NOT NULL,
          qt_produto INTEGER DEFAULT 1
        )`,
        [],
        (sqlTxn, response) => {
          msgConsole('Tabela do Banco criada com sucesso')
        },
        error => {
          msgConsole(`Erro ao criar tabela: ${error.message}`)
        }
      )
    })
  }

  const deleteCompra = (id) => {
    myDB.transaction(txn => {
      txn.executeSql(
        `DELETE FROM tb_compras WHERE id = ?`, [id],
        (sqlTxn, response) => {
          msgConsole(`Compra com ID = ${id} deletada com Sucesso!`)
          setProdutosComp('')
          getCompras()
        },
        error => {
          msgConsole(`Erro ao deletar compra com ID = ${id}: ${error.message}`)
        }
      )
    })
  }

  const addCompra = () => {
    if(!nmProduto) {
      alert('Informe o nome da Compra!')
      return false
    }

    else if(!qtProduto) {
      alert('Informe a quantida de da Compra!')
      return false
    }

    myDB.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tb_compras (nm_produto, qt_produto) VALUES (?,?)`,
        [nmProduto, qtProduto],
        (sqlTxn, response) => {
          msgConsole(`"${qtProduto}(s) ${nmProduto}(s)" adicionado(s) com sucesso!`)
          getTarefas()
          setNmProduto('')
          setQtProduto(0)
        },
        error => {
          msgConsole(`Erro ao inserir produto. Erro: ${error.message}`)
        }
      )
    })
  }

  return(
    <View>
      <Text>Oie!</Text>
    </View>
  )
}