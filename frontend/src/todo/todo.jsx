import React from 'react'
import { connect } from 'react-redux'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro' ></PageHeader>
            <TodoForm/>
            <TodoList/>
    </div>
)
