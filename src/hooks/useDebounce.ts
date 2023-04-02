import { useEffect, useState } from "react";

export function useDebounce<T> (value: T, delay = 500) {
  const [debounceValue, setDebounceValue] = useState(value) // Estado que almacena el valor debounciado

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value) // Actualiza el valor debounciado después del retraso especificado
    }, delay);
    
    return () => clearTimeout(timer) // Limpia el temporizador si el componente se desmonta o el valor cambia antes del tiempo de espera
  }, [value, delay])

  return debounceValue
}