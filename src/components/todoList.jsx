import React from 'react';
import TodoCard from './todoCard';

export default function TodoList(props) {
    const { todos } = props;

    return (
        <>
            <ul>
                {todos.length === 0 ? (
                    <p>No todos</p>
                ) : (
                    todos.map((todo, todoIndex) => (
                        <TodoCard {...props} key={todoIndex} index={todoIndex}>
                            {todo}
                        </TodoCard>
                    ))
                )}
            </ul>
        </>
    );
}
