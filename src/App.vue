<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view 
        @toggleTarefa="toggleTarefaFeita"
        @exclui="excluir"
        @cadastroTarefa="cadastrarTarefa"
        :tarefas="tarefas"
      />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  },
    data() {
      return {
        tarefas: []
      }
    },
    methods: {
      cadastrarTarefa(descricaoTarefa) {
        if (descricaoTarefa.trim() && !this.tarefaExiste(descricaoTarefa)) {
          this.tarefas = [{descricao: descricaoTarefa, feito: false}, ...this.tarefas]
          alert('tarefa cadastrada!')
          return
        }
        alert('tarefa já cadastrada')
      },
      tarefaExiste(descricaoTarefa)  {
        return !!this.tarefas.find(
          ({descricao}) => descricao === descricaoTarefa
        )
      },
      excluir(descricaoTarefa) {
        this.tarefas = [...this.tarefas.filter(tarefa => tarefa.descricao !== descricaoTarefa)]
      },
      toggleTarefaFeita(tarefaAlterada) {
        const tarefasAtualizada = this.tarefas.map(tarefa => {
          if (tarefa.descricao === tarefaAlterada.descricao) {
            tarefa.feito = !tarefa.feito
          }
          return tarefa
        })
        this.tarefas = [...tarefasAtualizada]
      },
    },
  }
</script>

<style>
  button {
    border: 0;
    border-radius: 0.25rem;
    background: #1E88E5;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1rem;
    line-height: 1.2;
    white-space: nowrap;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    margin: 0.25rem;
    cursor: pointer;
  }
  button:disabled {
    background-color: gray;
  }
  .container {
    margin-top: 10px;
    display: grid;
    place-items: center;
  }
  ul { width: 50% }
  @media only screen and (max-width: 600px) {
    ul { width: 100% }
  }
</style>
