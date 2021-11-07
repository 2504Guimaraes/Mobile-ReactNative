import { openDatabase } from 'react-native-sqlite-storage'

const criarTabelasDB = (bancoClasse) => {
  bancoClasse.transaction(transacaoDB => {
    transacaoDB.executeSql(
      `CREATE TABLE IF NOT EXISTS tb_Tarefa (
        id_tarefa INTEGER PRIMARY KEY AUTOINCREMENT,
        nm_tarefa VARCHAR(25)
      )`,
      [],
      (transacaoDB, response) => {
        console.log('Tabela Tarefas Criada com sucesso!')
      },
      error => {
        console.log(`Erro ao criar tabela: ${error.message}`)
      }
    )
  })
}

export default criarTabelasDB

export const getTarefas = (bancoClasse, objClasse) => {
  const obterListaTarefas = (res, comprimento) => {
    let listTarefasBD = []
    for (let i = 0; i < comprimento; i++) {
      let tarefaBD = res.rows.item(i)
      listTarefasBD.push({ 
        id: tarefaBD.id_tarefa, 
        nome: tarefaBD.nm_tarefa 
      })
    }
    return listTarefasBD
  }

  bancoClasse.transaction(transacaoDB => {
    transacaoDB.executeSql(
      'SELECT * FROM tb_Tarefa ORDER BY id_tarefa',
      [],
      (transacaoDB, response) => {
        console.log('Tarefas do Banco lidas ANTES DE CARREGAR com sucesso!')
        let comprimento = response.rows.length

        if (comprimento > 0) {
          const listaTarefas = obterListaTarefas(response, comprimento)
          console.log(listaTarefas)
          objClasse.setState({ tarefasComp: listaTarefas })
        }
      },
      error => {
        console.log(`Erro ao obter tarefas do Banco: "${error.message}"`)
      }
    )
  })
}

export const addNewTarefa = (
  bancoClasse, 
  objClasse, 
  newTarefa
) => {
  if (!newTarefa) {
    alert("Informe alguma tarefa p/ adicionar uma nova no BD!")
    return false 
  }
  bancoClasse.executeSql(
    'INSERT INTO tb_Tarefa (nm_tarefa) VALUES (?)',
    [newTarefa],
    (transacaoDB, response) => {
      console.log(`Tarefa: "${newTarefa}" adicionada com sucesso!`)
      getTarefas(bancoClasse, objClasse)
    },
    error => {
      console.log(`Erro ao criar tarefa: "${error.message}"`)
    }
  )
}