import { render, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"
import { act } from "react-dom/test-utils";

describe('pruebas en el contador', () => { 

    test('debe retornar los valores por defecto', () => { 
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
     });

     test('debe generar el counter con el valor de 100', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;
        
        expect(counter).toBe(100)
      });

      test('debe incrementar el contador', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act( () => {
            increment();
        });
        expect( result.current.counter ).toBe(101);
       });

       test('debe decrementar el contador', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {
            decrement();
        });
        expect( result.current.counter ).toBe(99);
       });

       test('debe resetear el contador', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { increment, reset } = result.current;

        act( () => {
            increment();
            reset();
        });
        expect( result.current.counter ).toBe(100);
       });
 })