import { render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('pruebas en TodoItem', () => { 
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false,
    };

    const OnDeleteTodoMook = jest.fn();
    const onToggleTodoMook = jest.fn();
    
    beforeEach( () => jest.clearAllMocks() );

    test('debe mostrar el todo pendiente a completar', () => { 

        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMook} onDeleteTodo={OnDeleteTodoMook} />)
        
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
        
        // const spanElement = screen.getByRole('span')
        // expect(spanElement.className).toContain('aling-self-center')
        // screen.debug()
     });
 })