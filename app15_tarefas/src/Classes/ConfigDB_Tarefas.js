import { openDatabase } from 'react-native-sqlite-storage'

export default class ConfigDB_Tarefas {
  constructor() {
    this.db = openDatabase({ name: 'banco_App_15' })
  }

  criarTabelas() {
    this.db.transaction(transacaoDB => {
      transacaoDB.executeSql(
        `CREATE IF NOT EXISTS tb_Tarefa (
          id_tarefa INTERGER PRIMARY KEY AUTOINCREMENT,
          nm_tarefa VARCHAR(25)
        )`,
        [],
        (transacaoDB, response) => {
          console.log('Tabela Tarefas Criada com sucesso!')
        },
        error => {
          console.log(`Erro ao criar tabela: ${error}`)
        }
      )
    })
  }

  addNewTarefa(newTarefa) {
    if (!newTarefa) {
      alert("Informe alguma tarefa p/ adicionar uma nova no BD!")
      return false 
    }
    this.db.executeSql(
      'INSERT INTO tb_Tarefa (nm_tarefa) VALUES (?)',
      [newTarefa],
      (transacaoDB, response) => {
        console.log(`Tarefa: "${newTarefa}" adicionada com sucesso!`)
        this.getTarefas()
      },
      error => {
        console.log(`Erro ao criar tarefa: "${error.message}"`)
      }
    )
  }

  getTarefas() {
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

    this.db.transaction(transacaoDB => {
      transacaoDB.executeSql(
        'SELECT * FROM tb_Tarefa ORDER BY id_tarefa DESC',
        [],
        (transacaoDB, response) => {
          console.log('Tarefas lidas com sucesso!')
          let comprimento = response.rows.length

          if (comprimento > 0) {
            const listaTarefas = obterListaTarefas(response, comprimento)
            return listaTarefas
          }
        },
        error => {
          console.log(`Erro ao obter tarefas do Banco: "${error.message}"`)
        }
      )
    })
  }
}